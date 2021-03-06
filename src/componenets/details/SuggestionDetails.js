import {Image, SafeAreaView, View, Text, ScrollView} from "react-native";
import React from "react";
import styles from "./styles"
import Icons from "../../helpers/Icons";
import StarRating from "react-native-star-rating";
import strings from '../../localization/en';
import Header from "../generic/Header";
import Ripple from "../../helpers/Ripple";
import { FluidNavigator, Transition } from 'react-navigation-fluid-transitions';

export default class SuggestionDetails extends React.Component {

    constructor(props) {
        super(props);
    }

    /**
     * Redirect to back screen.
     */
    redirectToBack = () => {
        this.props.navigation.pop()
    };

    render() {
        const {item} = this.props.navigation.state.params.item
        const {from} = this.props.navigation.state.params

        return (
            <SafeAreaView
                style={styles.container}>

                <Header
                    isBack
                    onBackPress={() => {
                        this.redirectToBack()
                    }}
                    title={strings.Guy_Kawasaki}/>

                <ScrollView
                    style={styles.scrollContainer}>
                    <View>
                        <View
                            style={styles.scroll}>
                            <View  style={styles.image}>
                                <Transition animated="scale" shared={ from === 'Trending'? `imageTrending${this.props.navigation.state.params.item.index}` : `imageSuggestion${this.props.navigation.state.params.item.index}`}>
                                    <Image
                                        style={styles.image}
                                        source={item.photo}
                                    />
                                </Transition>
                            </View>
                            <View>
                                <Text
                                    style={styles.suggestionName}>
                                    {strings.Guy_Kawasaki.toUpperCase()}
                                </Text>
                                <Text
                                    style={styles.authorName}>
                                    by {strings.Singer_ame}
                                </Text>
                                <View
                                    style={styles.ratingContainer}>
                                    <StarRating
                                        disabled={true}
                                        fullStar={Icons.rating_selected}
                                        emptyStar={Icons.rating_unselected}
                                        maxStars={5}
                                        rating={4}
                                        containerStyle={{alignSelf: 'center',}}
                                        starStyle={styles.stars}
                                    />
                                    <Text
                                        style={styles.starsLabel}>
                                        4 {strings.Stars}
                                    </Text>
                                </View>
                                <Ripple>
                                    <Text
                                        style={styles.download}>
                                        {strings.Download}
                                    </Text>
                                </Ripple>
                            </View>
                        </View>
                        <View
                            style={styles.divider}/>
                        <Text
                            style={styles.aboutTitle}>
                            {strings.About_The_Author}
                        </Text>
                        <Text
                            style={styles.author}>
                            {strings.Singer_ame}
                        </Text>
                        <Text
                            style={styles.aboutText}>
                            {strings.Music_Description}
                        </Text>
                        <Text
                            style={styles.aboutTitle}>
                            {strings.About_The_Book}
                        </Text>
                        <Text
                            style={styles.aboutText}>
                            {strings.Music_Description}
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
