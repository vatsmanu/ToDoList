import React from 'react'
import { Text, StyleSheet } from 'react-native';

function Header(props) {
    const {heading} = props;

    return (
        <>
            <Text style={styles.paragraph}>{heading}</Text>
        </>
    )
}

const styles = StyleSheet.create({
    paragraph: {
        backgroundColor: 'powderblue',
        margin: 10,
        padding: 20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    }
  });

export default Header