const HS = require('horriblesubs')
const express = require('express')
const app = express()
 
app.get('/getShowMagnets/:id', function (req, res) {
  // Debugging to help you see what's happening
    HS.set({ debug: true })
    
    // How many milliseconds to wait between page loads
    HS.set({ interval: 1000 })
    
    // 1273 - Show ID for Dr. Stone (Currently 24 episodes)
    HS.getMagnets(req.params.id).then(links => {
    
        res.json(links)
    
    });
})
 
app.listen(3000)
/***
 * Fetch ALL available magnet links for a show. Any quality.
 * The great thing about this is it will allow you to copy-paste the magnet links into your download
 * client instead of clicking each link one by one.
 */
 
