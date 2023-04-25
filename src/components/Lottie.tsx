import { useEffect } from 'preact/hooks';

const Lottie = ({ src, loop, autoplay = true, style = { height: '100%', width: '100%' }}) => {
  useEffect(() => {
    import('@dotlottie/player-component')
  }, [])

  return (<div className="App">
  <dotlottie-player
    src={src}
    autoplay={autoplay}
    loop={loop}
    style={style}
    resizeMode='center'
  />
</div>
  )
};
  
export default Lottie;
