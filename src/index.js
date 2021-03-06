import React, {Component, PropTypes} from 'react';

export default class Textarea extends Component {
  static propTypes = {
    wrapperClassName: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  };

  static defaultProps = {
    wrapperClassName: 'textarea-autoheight'
  };

  state = {
    focus: false
  };

  componentDidMount() {
    const {area} = this.refs;

    area.style.height = `${area.scrollHeight}px`;

    if (window.attachEvent) {
      window.attachEvent('onresize', this.resize.bind(this));
    } else {
      window.addEventListener('resize', this.resize.bind(this));
    }
  }

  componentWillUnmount() {
    if (window.detachEvent) {
      window.detachEvent('onresize', this.resize.bind(this));
    } else {
      window.removeEventListener('resize', this.resize.bind(this));
    }
  }

  resizeTimeout = 0;

  resizeIntervalDelay = 50;

  decreasePixels = 1;

  reHeight() {
    const {area} = this.refs;

    area.style.height = `${area.scrollHeight}px`;

    while (area.clientHeight >= area.scrollHeight) {
      area.style.height = `${area.clientHeight - this.decreasePixels}px`;
    }
  }

  resize() {
    window.clearTimeout(this.resizeTimeout);

    this.resizeTimeout = window.setTimeout(() => {
      this.reHeight();
    }, this.resizeIntervalDelay);
  }

  change(...params) {
    const {onChange} = this.props;

    this.reHeight();

    if (onChange) {
      onChange(...params);
    }
  }

  focus(...params) {
    const {area} = this.refs;
    const {onFocus} = this.props;

    area.focus();

    if (onFocus) {
      onFocus(...params);
    }

    this.setState({
      focus: true
    });
  }

  blur(...params) {
    const {area} = this.refs;
    const {onBlur} = this.props;

    area.blur();

    if (onBlur) {
      onBlur(...params);
    }

    this.setState({
      focus: false
    });
  }

  clickAround() {
    this.refs.area.focus();
  }

  render() {
    const {focus} = this.state;
    const {wrapperClassName, onChange, onFocus, onBlur, ...props} = this.props;

    const style = {
      background: 'transparent !important',
      border: 'none !important',
      boxShadow: 'none !important',
      display: 'block !important',
      overflow: 'hidden !important',
      outline: 'none !important',
      padding: '0 !important',
      resize: 'none !important',
      width: '100% !important'
    };

    const className = `${wrapperClassName} ${focus ? 'focus' : ''}`;

    return (
      <div className={className} onClick={this.clickAround.bind(this)}>
        <textarea {...props} ref="area"
                             rows="1"
                             onChange={this.change.bind(this)}
                             onFocus={this.focus.bind(this)}
                             onBlur={this.blur.bind(this)}
                             style={style}/>
      </div>);
  }
}
