import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import api from '../../services/api';
import {
    Container,
    Avatar,
    Header,
    Name,
    Bio,
    Stars,
    Starred,
    OwnerAvatar,
    Info,
    Title,
    Author,
} from './styles';

// import { Container } from './styles';

export default class User extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('user').name,
    });

    state = {
        stars: [],
        loading: false,
    };

    async componentDidMount() {
        const { navigation } = this.props;
        const { loading } = this.state;
        this.setState({ loading: true });
        const user = navigation.getParam('user');
        const response = await api.get(`/users/${user.login}/starred`);

        this.setState({ starts: response.data, loading: false });
    }

    render() {
        const { starts, loading } = this.state;
        const { navigation } = this.props;

        const user = navigation.getParam('user');

        return (
            <Container>
                <Header>
                    <Avatar source={{ uri: user.avatar }} />
                    <Name>{user.name}</Name>
                    <Bio>{user.bio}</Bio>
                </Header>
                {loading ? (
                    <ActivityIndicator color="#111" />
                ) : (
                    <Stars
                        data={starts}
                        keyExtractor={star => String(star.id)}
                        renderItem={({ item }) => (
                            <Starred>
                                <OwnerAvatar
                                    source={{ uri: item.owner.avatar_url }}
                                />
                                <Info>
                                    <Title>{item.name}</Title>
                                    <Author>{item.owner.login}</Author>
                                </Info>
                            </Starred>
                        )}
                    />
                )}
            </Container>
        );
    }
}
