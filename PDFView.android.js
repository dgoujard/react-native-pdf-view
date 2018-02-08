'use strict';
import React,{ Component } from 'react';
import { requireNativeComponent, View, ViewPropTypes} from 'react-native';
const vPropTypes = ViewPropTypes || View.propTypes;
class PDFView extends Component {
  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  _onChange(event:Event) {
    this.props.onLoadComplete && this.props.onLoadComplete(Number(event.nativeEvent.message));
  }

  render() {
    return <PDFCustomView ref={component => this._root = component} {...this.props} onChange={this._onChange}/>;
  }
}

PDFView.propTypes = {
  ...vPropTypes,
    asset: vPropTypes.string,
    src: vPropTypes.string,
    pageNumber: vPropTypes.number,
    path: vPropTypes.string,
    zoom: vPropTypes.number,
    onLoadComplete: vPropTypes.func
};

var PDFCustomView = requireNativeComponent('RCTPDFViewAndroid', PDFView, {
  nativeOnly: {onChange: true}
});

export default PDFView;
