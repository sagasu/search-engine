import React from 'react';

import { NavLink } from 'react-router-dom';

const links = [
    {url: '/search', text: 'All 🎃'},
    {url: '/news', text: 'News 📰'},
    {url: '/images', text: 'Images 🎨'},
    {url: '/videos', text: 'Videos 🎞️'},
]

export const Links = () => {
    return (
        <div className="flex sm:justify-around justify-between item-center mt-4">
            {links.map(({url, text}) => (
                <NavLink key={text} to={url} className="m-2 mb-0" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700">
                    {text}

                </NavLink>
                    
                    ))}
        </div>
    )
}
