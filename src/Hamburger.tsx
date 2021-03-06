import * as React from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
import usePrevious from './usePrevious';

const useState = React.useState;
const useEffect = React.useEffect;

type HamburgerProps = {
    active: boolean;
    onPress: () => void;
    type?: 'spinCross' | 'arrow' | 'spinArrow' | 'cross';
    color?: string;
    borderRadius?: boolean
};

export default function Hamburger(props: HamburgerProps): React.ReactElement | null {
    const { type, active, color } = props;

    const [initialized, setInitialized] = useState(false);
    const [containerAnim, setContainerAnim] = useState<Animated.Value>();
    const [topBar, setTopBar] = useState<Animated.Value>();
    const [bottomBar, setBottomBar] = useState<Animated.Value>();
    const [middleBarOpacity, setMiddleBarOpacity] = useState<Animated.Value>();
    const [bottomBarMargin, setBottomBarMargin] = useState<Animated.Value>();
    const [topBarMargin, setTopBarMargin] = useState<Animated.Value>();
    const [marginLeft, setMarginLeft] = useState<Animated.Value>();
    const [width, setWidth] = useState<Animated.Value>();

    useEffect(() => {
        if (initialized === false) {
            if (active) {
                if (type === 'spinArrow') {
                    setContainerAnim((current) => current || new Animated.Value(1));
                    setTopBar((current) => current || new Animated.Value(1));
                    setBottomBar((current) => current || new Animated.Value(1));
                    setWidth((current) => current || new Animated.Value(14));
                    setMarginLeft((current) => current || new Animated.Value(-13));
                    setBottomBarMargin((current) => current || new Animated.Value(2));
                    setTopBarMargin((current) => current || new Animated.Value(-2));
                } else if (type === 'arrow') {
                    setTopBar((current) => current || new Animated.Value(1));
                    setBottomBar((current) => current || new Animated.Value(1));
                    setWidth((current) => current || new Animated.Value(14));
                    setMarginLeft((current) => current || new Animated.Value(-13));
                    setBottomBarMargin((current) => current || new Animated.Value(2));
                    setTopBarMargin((current) => current || new Animated.Value(-2));
                } else if (type === 'spinCross') {
                    setContainerAnim((current) => current || new Animated.Value(1));
                    setTopBar((current) => current || new Animated.Value(0.9));
                    setBottomBar((current) => current || new Animated.Value(0.9));
                    setBottomBarMargin((current) => current || new Animated.Value(-10));
                    setMiddleBarOpacity((current) => current || new Animated.Value(0));
                } else {
                    setTopBar((current) => current || new Animated.Value(0.9));
                    setBottomBar((current) => current || new Animated.Value(0.9));
                    setBottomBarMargin((current) => current || new Animated.Value(-10));
                    setMiddleBarOpacity((current) => current || new Animated.Value(0));
                }
            }
            setContainerAnim((current) => current || new Animated.Value(0));
            setTopBar((current) => current || new Animated.Value(0));
            setBottomBar((current) => current || new Animated.Value(0));
            setBottomBarMargin((current) => current || new Animated.Value(4));
            setMiddleBarOpacity((current) => current || new Animated.Value(1));
            setTopBarMargin((current) => current || new Animated.Value(0));
            setMarginLeft((current) => current || new Animated.Value(0));
            setWidth((current) => current || new Animated.Value(25));

            setInitialized(true);
        }
    }, [initialized]);

    function spinCross(): void {
        if (active) {
            Animated.spring(containerAnim as Animated.Value, {
                useNativeDriver: false,
                toValue: 1
            }).start();
            Animated.spring(topBar as Animated.Value, {
                useNativeDriver: false,
                toValue: 0.9
            }).start();
            Animated.spring(bottomBar as Animated.Value, {
                useNativeDriver: false,
                toValue: 0.9
            }).start();
            Animated.spring(bottomBarMargin as Animated.Value, {
                useNativeDriver: false,
                toValue: -10
            }).start();
            Animated.spring(middleBarOpacity as Animated.Value, {
                useNativeDriver: false,
                toValue: 0,
                speed: 30
            }).start();
        } else {
            Animated.spring(containerAnim as Animated.Value, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(topBar as Animated.Value, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(bottomBar as Animated.Value, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(bottomBarMargin as Animated.Value, {
                useNativeDriver: false,
                toValue: 4
            }).start();
            Animated.timing(middleBarOpacity as Animated.Value, {
                useNativeDriver: false,
                toValue: 1,
                duration: 600
            }).start();
        }
    }

    function cross(): void {
        if (active) {
            Animated.spring(topBar as Animated.Value, {
                useNativeDriver: false,
                toValue: 0.9
            }).start();
            Animated.spring(bottomBar as Animated.Value, {
                useNativeDriver: false,
                toValue: 0.9
            }).start();
            Animated.spring(bottomBarMargin as Animated.Value, {
                useNativeDriver: false,
                toValue: -10
            }).start();
            Animated.timing(middleBarOpacity as Animated.Value, {
                useNativeDriver: false,
                toValue: 0,
                duration: 30
            }).start();
        } else {
            Animated.spring(topBar as Animated.Value, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(bottomBar as Animated.Value, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(bottomBarMargin as Animated.Value, {
                useNativeDriver: false,
                toValue: 4
            }).start();
            Animated.spring(middleBarOpacity as Animated.Value, {
                useNativeDriver: false,
                toValue: 1,
                speed: 1200
            }).start();
        }
    }

    function spinArrow(): void {
        if (active) {
            Animated.spring(containerAnim as Animated.Value, {
                useNativeDriver: false,
                toValue: 1
            }).start();
            Animated.spring(topBar as Animated.Value, {
                useNativeDriver: false,
                toValue: 1
            }).start();
            Animated.spring(bottomBar as Animated.Value, {
                useNativeDriver: false,
                toValue: 1
            }).start();
            Animated.spring(width as Animated.Value, {
                useNativeDriver: false,
                toValue: 14
            }).start();
            Animated.spring(marginLeft as Animated.Value, {
                useNativeDriver: false,
                toValue: -13
            }).start();
            Animated.spring(bottomBarMargin as Animated.Value, {
                useNativeDriver: false,
                toValue: 2
            }).start();
            Animated.spring(topBarMargin as Animated.Value, {
                useNativeDriver: false,
                toValue: -2
            }).start();
        } else {
            Animated.spring(containerAnim as Animated.Value, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(topBar as Animated.Value, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(bottomBar as Animated.Value, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(width as Animated.Value, {
                useNativeDriver: false,
                toValue: 25
            }).start();
            Animated.spring(marginLeft as Animated.Value, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(bottomBarMargin as Animated.Value, {
                useNativeDriver: false,
                toValue: 4
            }).start();
            Animated.spring(topBarMargin as Animated.Value, {
                useNativeDriver: false,
                toValue: 0
            }).start();
        }
    }

    function arrow(): void {
        if (active) {
            Animated.spring(topBar as Animated.Value, {
                useNativeDriver: false,
                toValue: 1
            }).start();
            Animated.spring(bottomBar as Animated.Value, {
                useNativeDriver: false,
                toValue: 1
            }).start();
            Animated.spring(width as Animated.Value, {
                useNativeDriver: false,
                toValue: 14
            }).start();
            Animated.spring(marginLeft as Animated.Value, {
                useNativeDriver: false,
                toValue: -13
            }).start();
            Animated.spring(bottomBarMargin as Animated.Value, {
                useNativeDriver: false,
                toValue: 2
            }).start();
            Animated.spring(topBarMargin as Animated.Value, {
                useNativeDriver: false,
                toValue: -2
            }).start();
        } else {
            Animated.spring(topBar as Animated.Value, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(bottomBar as Animated.Value, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(width as Animated.Value, {
                useNativeDriver: false,
                toValue: 25
            }).start();
            Animated.spring(marginLeft as Animated.Value, {
                useNativeDriver: false,
                toValue: 0
            }).start();
            Animated.spring(bottomBarMargin as Animated.Value, {
                useNativeDriver: false,
                toValue: 4
            }).start();
            Animated.spring(topBarMargin as Animated.Value, {
                useNativeDriver: false,
                toValue: 0
            }).start();
        }
    }

    function animate(): void {
        type == 'spinArrow' ? spinArrow() : type == 'arrow' ? arrow() : type == 'spinCross' ? spinCross() : cross();
    }

    const previousActive = usePrevious(props.active);

    useEffect(() => {
        if (initialized && previousActive != null) {
            if (props.active !== previousActive) {
                animate();
            }
        }
    }, [active, initialized]);

    if (!initialized) {
        return null;
    }

    return (
      <TouchableWithoutFeedback
        onPress={() => {
            props.onPress ? props.onPress() : undefined;
        }}
      >
          <Animated.View
            style={{
                width: 35,
                justifyContent: 'center',
                alignItems: 'center',
                height: 35,
                transform: [
                    {
                        rotate: (containerAnim  as Animated.Value).interpolate({
                            inputRange: [0, 1],
                            outputRange: ['0deg', '360deg']
                        })
                    }
                ]
            }}
          >
              <Animated.View
                style={{
                    height: 3,
                    marginLeft: marginLeft,
                    width: width,
                    marginBottom: topBarMargin,
                    backgroundColor: color ? color : 'black',
                    borderRadius: props.borderRadius ? 6 : undefined,
                    transform: [
                        {
                            rotate: (topBar as Animated.Value).interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '-50deg']
                            })
                        }
                    ]
                }}
              />
              <Animated.View
                style={{
                    height: 3,
                    width: 25,
                    opacity: middleBarOpacity,
                    backgroundColor: color ? color : 'black',
                    borderRadius: props.borderRadius ? 6 : undefined,
                    marginTop: 4
                }}
              />
              <Animated.View
                style={{
                    height: 3,
                    marginLeft: marginLeft,
                    width: width,
                    backgroundColor: color ? color : 'black',
                    borderRadius: props.borderRadius ? 6 : undefined,
                    marginTop: bottomBarMargin,
                    transform: [
                        {
                            rotate: (bottomBar as Animated.Value).interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '50deg']
                            })
                        }
                    ]
                }}
              />
          </Animated.View>
      </TouchableWithoutFeedback>
    );
}

Hamburger.defaultProps = {
    type: 'cross',
    color: 'white',
    borderRadius: false
};
