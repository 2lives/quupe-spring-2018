import { StyleSheet } from 'react-native';
import { assetTypography } from '../../assets/styles';

const styles = StyleSheet.create({
    dimension: {
        margin: '2.5%'
    },
    contentLayout: {
        display: 'flex',
        flexWrap: 'wrap',
        height: 722
    },
    button: {
        backgroundColor: 'rgba(0,0,0,0)',
        opacity: 50
    },
    categoryImage: {
        height: 168,
        width: 170,
        margin: '1.75%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    categoryText: {
        color: '#FFFFFF',
        fontSize: 24,
        display: 'flex',
        fontFamily: assetTypography.subHeader
    }
});

export default styles;
