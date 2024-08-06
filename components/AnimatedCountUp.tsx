"use client"
import React from 'react'
import CountUp from 'react-countup'

interface AnimatedCountUpProps {
	amount: number
}

const AnimatedCountUp = ({ amount = 0 }: AnimatedCountUpProps) => {
	return (
		<div className="w-full">
			<CountUp
				end={amount}
				decimal=', '
				prefix='$'
				duration={2.50}
				decimals={2}
			/>
		</div>
	);
}

export default AnimatedCountUp
