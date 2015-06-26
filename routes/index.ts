/*
 * GET home page.
 */
import express = require('express');
import http = require('http');
import path = require('path');

export function index(req: express.Request, res: express.Response) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

export function about(req: express.Request, res: express.Response) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page.' });
};

export function contact(req: express.Request, res: express.Response) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page.' });
};

export function helloworld(req, res) {
    var testModule = require('../public/javascripts/my/myj.js');
    testModule.test(req, res);
    
    //console.log(req.query.name);
    //console.log(req.query.email);
};