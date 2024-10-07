import React from 'react'
import './Upgrades.css'
import UpgradeItem from './UpgradeItem'
import UpgradeButton from './UpgradeButton'

const Upgrades = () => {
  return (
    <section className='upgrades-container'>
        <div className='cards-container'>
            <div className='card card-1'>
                <h1 className='card-heading'>Basic</h1>
                <h3 className='card-price'>£5</h3>
                <p className='card-price-text'>per user/month billed annually</p>
                <ul>
                    <UpgradeItem included={true} upgradeText='Scoring Games'/>
                    <UpgradeItem included={true} upgradeText='Add Friends'/>
                    <UpgradeItem upgradeText='Online Play'/>
                    <UpgradeItem upgradeText='Unlimited Games'/>
                </ul>
                <p className='card-copy'>Perfect for basic use and improving at home.</p>
                <UpgradeButton />
            </div>
            <div className='card card-2'>
                <h1 className='card-heading'>Premium</h1>
                <h3 className='card-price'>£10</h3>
                <p className='card-price-text'>per user/month billed annually</p>
                <ul>
                    <UpgradeItem included={true} upgradeText='Scoring Games'/>
                    <UpgradeItem included={true} upgradeText='Add Friends'/>
                    <UpgradeItem included={true} upgradeText='Online Play'/>
                    <UpgradeItem included={true} upgradeText='Unlimited Games'/>
                </ul>
                <p className='card-copy'>Perfect for professionals ready to go to the next level.</p>
                <UpgradeButton />
            </div>
        </div>
        
    </section>
  )
}

export default Upgrades