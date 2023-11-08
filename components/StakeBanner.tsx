import React from 'react';
import Link from 'next/link';
import {Button} from '@yearn-finance/web-lib/components/Button';
import {formatAmount} from '@yearn-finance/web-lib/utils/format.number';

import type {ReactElement} from 'react';

function StakeBanner(props: {APR: number}): ReactElement {
	return (
		<div
			className={'rounded-xl p-1'}
			style={{
				backgroundImage:
					'-webkit-linear-gradient(0deg, rgba(200,25,40,1) 0%, rgba(219,110,55,1) 20%, rgba(236,184,64,1) 40%, rgba(104,183,120,1) 60%, rgba(71,119,211,1) 80%, rgba(72,44,216,1) 100%)'
			}}>
			<div className={'flex h-full flex-col rounded-xl bg-neutral-100 px-10 py-6'}>
				<div className={'flex w-full flex-row items-center justify-between gap-6'}>
					<div>
						<p className={'w-full whitespace-break-spaces text-xl font-bold text-neutral-900 md:text-3xl'}>
							{'Every rainbow needs\na pot of gold.'}
						</p>
					</div>

					<div className={'flex flex-col items-center justify-center'}>
						<b
							suppressHydrationWarning
							className={'font-number w-full text-center text-3xl text-neutral-900'}>
							{`${formatAmount(props.APR, 2, 2)}% APR`}
						</b>
						<Link
							href={'/?tab=stake'}
							scroll={false}
							replace
							shallow>
							<Button className={'mt-2 h-10 min-w-[200px]'}>{'Stake now'}</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export {StakeBanner};
