// Copyright (c) Mohamad All rights reserved
//
// Created by: Mohamad
// Created on: May 2023
// This file contains the JS functions for index.html

    /**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-03-Mohamad-Tanbari/sw.js", {
    scope: "/ICS2O-Unit-6-03-Mohamad-Tanbari/sw.js",
  })
}

/**
 * Get Clash of Clans player information.
 */
const getPlayerInfo = async (playerTag) => {
  try {
    const url = `http://localhost:3000/api/clashofclans/${encodeURIComponent(
      playerTag
    )}`
    const response = await fetch(url)
    const player = await response.json()
    console.log(player)

    // Extract player information
    const playerInfo = {
      level: player.expLevel,
      townHallLevel: player.townHallLevel,
      guild: player.clan ? player.clan.name : "No guild",
    }

    // Display player information
    document.getElementById(
      "townhall-level"
    ).innerHTML = `Townhall Level: ${playerInfo.townHallLevel}`
    document.getElementById(
      "player-level"
    ).innerHTML = `Player Level: ${playerInfo.level}`
    document.getElementById(
      "player-clan"
    ).innerHTML = `Clan: ${playerInfo.guild}`
  } catch (err) {
    console.log(err)
  }
}

// Get player tag
function clicked() {
  const playerName = document.getElementById("player-name").value
  const playerNumbers = document.getElementById("player-number").value

  const playerTag = playerName + "#" + playerNumbers
  getPlayerInfo(playerTag)
}