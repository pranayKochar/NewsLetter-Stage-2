import { React } from 'react';
 
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
 
//import Button from './Button';
import { Button } from 'react-native';

function getPretext(news) {
    if(news.pretext){
        return (
            <Text style={styles.pretext}>{news.pretext}</Text>
        );
    }
}

const NewsItem = ({ news, index }) => {
    let number = (index + 1).toString();
 
    return (
        <Button>
            <View style={styles.news_item}>
                <View style={styles.news_text}>
                    <View style={styles.number}>
                        <Text style={styles.title}>{number}.</Text>
                    </View>
                    <View style={styles.text_container}>
                        { getPretext(news) }
                        <Text style={styles.title}>{news.title}</Text>
                        <Text>{news.summary}</Text>
                    </View>
                </View>
                <View style={styles.news_photo}>
                    <Image source={news.image} style={styles.photo} />
                </View>
            </View>
        </Button>
    );
}

const styles = StyleSheet.create({
    news_item: {
        flex: 1,
        flexDirection: 'row',
        paddingRight: 20,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#E4E4E4'
    },
    news_text: {
        flex: 2,
        flexDirection: 'row',
        padding: 10
    },
     
});