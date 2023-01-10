import React, { useEffect } from 'react';
import { useStateContext } from '../contexts/ContextProvider.js'

const Hero = () => {
	const { isWelcomeOpen, arrayId, setArrayId, cnt, setCnt,
      urlArray, setUrlArray } = useStateContext();

	var url = '';

	const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_';

	const getUrlData = () => {
		fetch(url)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				for (let item of data['items']) {
					setUrlArray(oldArray => [...oldArray, (item['id']['videoId'])])
				}
			})
		setArrayId(urlArray[cnt]);
		setCnt((prev) => prev + 1);
	}

	useEffect(() => {
		let res = '';
		var count = 50;
		for (let i = 0; i < 3; ++i) {
			res += chars[Math.floor(Math.random() * 63)];
		}
		
		url = "https://www.googleapis.com/youtube/v3/search?key=" + process.env.GOOGLE_API_KEY + "&maxResults=" + count + "&part=snippet&type=video&q=" + res;
		getUrlData();
	}, [])

	//http://www.youtube.com/embed/xDMP3i36naA?autoplay=1
  return (
    <div className={`flex flex-col overflow-hidden h-screen text-slate-900 pt-12 gap-8 ${isWelcomeOpen ? 'blur-xl' : 'blur-none'}`}>
			<div className='flex justify-center'>
				<div className='bg-white/40 border-2 border-black rounded-xl p-4 shadow-xl mx-2'>
					<p className='font-normal text-center text-2xl'>
						Press <span className='cursor-pointer font-semibold'>randomize</span> in order to receive a
						random <span className='text-red-500 cursor-pointer font-semibold'>YouTube</span> video nobody could ever
						uncover.
					</p>
				</div>
			</div>
			<div className='flex justify-center mx-2'>
				<div className='w-[1100px] h-[550px] shadow-2xl border-2 border-black p-1 bg-black rounded-xl'>
					<iframe
						src={`http://www.youtube.com/embed/${arrayId}?autoplay=1`}	
						type='text/html'
						width='100%'
						height='100%'
						id='ytplayer'
						name='hero-video'
						loading='slow'
					></iframe>
					<p className='text-white'></p>
				</div>
			</div>
			<div className='flex justify-center'>
				<button type='button' className='py-4 px-8 bg-white/40 rounded-xl text-slate-900 border-2 border-black font-bold shadow-xl'
					onClick={() => {
						setArrayId(urlArray[cnt]);
						setCnt((prev) => prev + 1);
					}}
				>RANDOMIZE</button>
			</div>
    </div>
  )
}

export default Hero