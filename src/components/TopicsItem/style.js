/**
 * Created by bear on 2018/2/5.
 */
import {StyleSheet, Dimensions} from 'react-native'

const {width} = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    auth: {
        paddingLeft: 5,
        fontSize:12,
        color:'#6a6a6a'
    },
    time: {
        paddingLeft: 5,
        fontSize:12,
        color:'#6a6a6a'
    },
    more: {
        position: 'absolute',
        right: 15,
        color:'#6a6a6a'
    },
    avatar: {
        width: 16,
        height: 16,
        borderRadius: 8
    },
    imageInfo: {
        height: 80,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    relevant: {
        height: 60,
        width: 80,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    text: {
        flex: 1,
        paddingLeft: 10,
    },
    title:{
        fontSize:16,
        marginBottom:5,
        color:'#3c3c3c',
    },
    abstract:{
        fontSize:14,
        color:'#6a6a6a'
    },
    footer:{
        height:30,
        flexDirection:'row',
        justifyContent: 'flex-start',
        alignItems:'center',

        paddingRight:10
    },
    reviewInfo:{
        flexDirection:'row',
        minWidth:100
    },
    readInfo:{
        flex:1,
    },
    box:{
        flexDirection:'row',
        alignItems:'center',
    },
    count:{
        fontSize:12,
        color:'#6a6a6a',
        paddingLeft:3
    },
    icon:{
        paddingLeft:10,
        color:'#6a6a6a',
    },
    read:{
        textAlign:'left',
        fontSize:12,
        color:'#6a6a6a',
        paddingLeft:10
    },
})
export default styles