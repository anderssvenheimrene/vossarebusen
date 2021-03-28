const express = require('express');
const app = new express();
const path = require('path');
const PORT = process.env.PORT || 5000

app
.use(express.static(path.join(__dirname, 'public')))
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'ejs')
.get('/', (req, res) => res.render('pages/index'))
.get('/start', function(request, response){
	response.sendFile(__dirname + '/start.html') }) 
.get('/enkelt', function(request, response){
	response.sendFile(__dirname + '/baby.html') })
.get('/tokyo', function(request, response){
	response.sendFile(__dirname + '/etikett.html') })
.get('/strandvik', function(request, response){
	response.sendFile(__dirname + '/speil.html') })
.get('/fjelltopp', function(request, response){
	response.sendFile(__dirname + '/fjelltopp.html') })
.get('/91', function(request, response){
	response.sendFile(__dirname + '/krukker.html') })
.get('/sukker', function(request, response){
	response.sendFile(__dirname + '/stein.html') })
.get('/blader', function(request, response){
	response.sendFile(__dirname + '/blader.html') })
.get('/melk', function(request, response){
	response.sendFile(__dirname + '/dor.html') })
.get('/filmkveld', function(request, response){
	response.sendFile(__dirname + '/filmkveld.html') })
.get('/regn', function(request, response){
	response.sendFile(__dirname + '/hyttebok.html') })
.get('/drommevertinne', function(request, response){
	response.sendFile(__dirname + '/drommevertinne.html') })
.listen(PORT, () => console.log(`Listening on ${ PORT }`))
