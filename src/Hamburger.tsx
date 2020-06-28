import React, {Component, useEffect, useState} from 'react';
import {
    Animated,
    TouchableWithoutFeedback
} from 'react-native';

type HamburgerProps = {
    active: boolean,
    onPress: () => void,
    type?: 'spinCross' | 'arrow' | 'spinArrow' | 'cross',
    color?: string
}


export default function Hamburger(props: HamburgerProps): React.ReactElement | null {
    const { type, active, color } = props;

    const [initialized, setInitialized] = useState(false);
    const [containerAnim, setContainerAnim] = useState();
    const [topBar, setTopBar] = useState();
    const [bottomBar, setBottomBar] = useState();
    const [middleBarOpacity, setMiddleBarOpacity] = useState();
    const [bottomBarMargin, setBottomBarMargin] = useState();
    const [topBarMargin, setTopBarMargin] = useState();
    const [marginLeft, setMarginLeft] = useState();
    const [width, setWidth] = useState();

    useEffect(() => {
        if (initialized === false) {

            if (active) {
                if (type === "spinArrow") {
                    setContainerAnim((current) => current || new Animated.Value(1));
                    setTopBar((current) => current || new Animated.Value(1));
                    setBottomBar((current) => current || new Animated.Value(1));
                    setWidth((current) => current || new Animated.Value(14));
                    setMarginLeft((current) => current || new Animated.Value(-13));
                    setBottomBarMargin((current) => current || new Animated.Value(2));
                    setTopBarMargin((current) => current || new Animated.Value(-2));
                }
                else if (type === "arrow") {
                    setTopBar((current) => current || new Animated.Value(1));
                    setBottomBar((current) => current || new Animated.Value(1));
                    setWidth((current) => current || new Animated.Value(14));
                    setMarginLeft((current) => current || new Animated.Value(-13));
                    setBottomBarMargin((current) => current || new Animated.Value(2));
                    setTopBarMargin((current) => current || new Animated.Value(-2));
                }
                else if (type === "spinCross") {
                    setContainerAnim((current) => current || new Animated.Value(1));
                    setTopBar((current) => current || new Animated.Value(0.9));
                    setBottomBar((current) => current || new Animated.Value(0.9));
                    setBottomBarMargin((current) => current || new Animated.Value(-10));
                    setMiddleBarOpacity((current) => current || new Animated.Value(0));
                }
                else {
                    setTopBar((current) => current || new Animated.Value(0.9));
                    setBottomBar((current) => current || new Animated.Value(0.9));
                    setBottomBarMargin((current) => current || new Animated.Value(-10));
                    setMiddleBarOpacity((current) => current || new Animated.Value(0));
                }
            } else {
                setContainerAnim((current) => current || new Animated.Value(0));
                setTopBar((current) => current || new Animated.Value(0));
                setBottomBar((current) => current || new Animated.Value(0));
                setBottomBarMargin((current) => current || new Animated.Value(4));
                setMiddleBarOpacity((current) => current || new Animated.Value(1));
                setTopBarMargin((current) => current || new Animated.Value(0));
                setMarginLeft((current) => current || new Animated.Value(0));
                setWidth((current) => current || new Animated.Value(25));
            }
        }
    }, [initialized])

    function spinCross(): void {
        if (!props.active) {
            Animated.spring(containerAnim, {
                useNativeDriver: false,
                toValue: 1
            }).start();
            Animated.spring(topBar, {
                useNativeDriver: false,
                toValue: .9
            }).start();
            Animated.spring(bottomBar, {
                useNativeDriver: false,
                toValue: .9
            }).start();
            Animated.spring(bottomBarMargin, {
                useNativeDriver: false,
                toValue: -10
            }).start();
            Animated.spring(middleBarOpacity, {
                useNativeDriver: false,
                toValue: 0,
                duration: 30
            }).start();
        } else {
            Animated.spring(containerAnim, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(topBar, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(bottomBar, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(bottomBarMargin, {
                useNativeDriver: false,
                toValue: 4
            }).start();
            Animated.timing(middleBarOpacity, {
                useNativeDriver: false,
                toValue: 1,
                duration: 600
            }).start();
        }
    }

    function cross(): void {
        if (!active) {
            Animated.spring(topBar, {
                useNativeDriver: false,
                toValue: .9
            }).start();
            Animated.spring(bottomBar, {
                useNativeDriver: false,
                toValue: .9
            }).start();
            Animated.spring(bottomBarMargin, {
                useNativeDriver: false,
                toValue: -10
            }).start();
            Animated.timing(middleBarOpacity, {
                useNativeDriver: false,
                toValue: 0,
                duration: 30
            }).start();
        } else {
            Animated.spring(topBar, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(bottomBar, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(bottomBarMargin, {
                useNativeDriver: false,
                toValue: 4
            }).start();
            Animated.spring(middleBarOpacity, {
                useNativeDriver: false,
                toValue: 1,
                duration: 1200
            }).start();
        }
    }


    function spinArrow(): void {
        if (!active) {
            Animated.spring(containerAnim, {
                useNativeDriver: false,
                toValue: 1
            }).start();
            Animated.spring(topBar, {
                useNativeDriver: false,
                toValue: 1
            }).start();
            Animated.spring(bottomBar, {
                useNativeDriver: false,
                toValue: 1
            }).start();
            Animated.spring(width, {
                useNativeDriver: false,
                toValue: 14
            }).start();
            Animated.spring(marginLeft, {
                useNativeDriver: false,
                toValue: -13
            }).start();
            Animated.spring(bottomBarMargin, {
                useNativeDriver: false,
                toValue: 2
            }).start();
            Animated.spring(topBarMargin, {
                useNativeDriver: false,
                toValue: -2
            }).start();
        } else {
            Animated.spring(containerAnim, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(topBar, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(bottomBar, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(width, {
                useNativeDriver: false,
                toValue: 25
            }).start();
            Animated.spring(marginLeft, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(bottomBarMargin, {
                useNativeDriver: false,
                toValue: 4
            }).start();
            Animated.spring(topBarMargin, {
                useNativeDriver: false,
                toValue: 0
            }).start();
        }
    }

    function arrow(): void {
        if (!active) {
            Animated.spring(topBar, {
                useNativeDriver: false,
                toValue: 1
            }).start();
            Animated.spring(bottomBar, {
                useNativeDriver: false,
                toValue: 1
            }).start();
            Animated.spring(width, {
                useNativeDriver: false,
                toValue: 14
            }).start();
            Animated.spring(marginLeft, {
                useNativeDriver: false,
                toValue: -13
            }).start();
            Animated.spring(bottomBarMargin, {
                useNativeDriver: false,
                toValue: 2
            }).start();
            Animated.spring(topBarMargin, {
                useNativeDriver: false,
                toValue: -2
            }).start();
        } else {
            Animated.spring(topBar, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(bottomBar, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(width, {
                useNativeDriver: false,
                toValue: 25
            }).start();
            Animated.spring(marginLeft, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(bottomBarMargin, {
                useNativeDriver: false,
                toValue: 4
            }).start();
            Animated.spring(topBarMargin, {
                useNativeDriver: false,
                toValue: 0
            }).start();
        }
    }


    function animate(): void {
        type=="spinArrow" ? spinArrow() :
          type=="arrow" ? arrow() :
            type=="spinCross" ? spinCross() :
              cross();
    }

    useEffect(() => {
        if (initialized) {
            animate();
        }
    }, [active, initialized])

    if (!initialized) {
        return null;
    }

    return (
      <TouchableWithoutFeedback
        onPress={()=> {props.onPress ? props.onPress() : undefined}}>
          <Animated.View style={{
              width: 35,
              justifyContent: 'center',
              alignItems: 'center',
              height: 35,
              transform: [
                  // @ts-ignore
                  {rotate: containerAnim.interpolate({
                          useNativeDriver: false,
                          inputRange: [0, 1],
                          outputRange: [
                              '0deg', '360deg'
                          ],
                      })}
              ]
          }}>
              <Animated.View style={{
                  height: 3,
                  marginLeft: marginLeft,
                  width: width,
                  marginBottom: topBarMargin,
                  backgroundColor: color ? color : 'black',
                  transform: [
                      // @ts-ignore
                      {rotate: topBar.interpolate({
                              useNativeDriver: false,
                              inputRange: [0, 1],
                              outputRange: [
                                  '0deg', '-50deg'
                              ],
                          })}
                  ]
              }} />
              <Animated.View style={{
                  height: 3,
                  width: 25,
                  opacity: middleBarOpacity,
                  backgroundColor: color ? color : 'black',
                  marginTop: 4}} />
              <Animated.View style={{
                  height: 3,
                  marginLeft: marginLeft,
                  width: width,
                  backgroundColor: color ? color : 'black',
                  marginTop: bottomBarMargin,
                  transform: [
                      // @ts-ignore
                      {rotate: bottomBar.interpolate({
                              useNativeDriver: false,
                              inputRange: [0, 1],
                              outputRange: [
                                  '0deg', '50deg'
                              ],
                          })}
                  ]
              }} />
          </Animated.View>
      </TouchableWithoutFeedback>
    );

}

Hamburger.defaultProps = {
    type: 'cross',
    color: 'white'
}
