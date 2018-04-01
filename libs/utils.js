function isWebview() {
    return (navigator.userAgent.indexOf(/(MicroMessenger)|(QBWebViewType)/) === -1);
}

export {isWebview}