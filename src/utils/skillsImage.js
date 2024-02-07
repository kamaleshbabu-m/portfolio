 
import html from '../assets/svg/skills/html.svg'
 
import css from '../assets/svg/skills/css.svg'
import angular from '../assets/svg/skills/angular.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import nextJS from '../assets/svg/skills/nextJS.svg'
 
import react from '../assets/svg/skills/react.svg'
 
 
import vue from '../assets/svg/skills/vue.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
 
import mongoDB from '../assets/svg/skills/mongoDB.svg'
import mysql from '../assets/svg/skills/mysql.svg'
 
import c from '../assets/svg/skills/c.svg'
 
import java from '../assets/svg/skills/java.svg'
import aws from '../assets/svg/skills/aws.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import gimp from '../assets/svg/skills/gimp.svg'
import git from '../assets/svg/skills/git.svg'
import graphql from '../assets/svg/skills/graphql.svg'
import lightroom from '../assets/svg/skills/lightroom.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import nginx from '../assets/svg/skills/nginx.svg'
import node from '../assets/svg/skills/nodejs-icon.svg';
import jquery from '../assets/svg/skills/jquery-vertical.svg';
import spring from '../assets/svg/skills/springio-icon.svg';
import express from '../assets/svg/skills/expressjs-icon.svg';
import postman from '../assets/svg/skills/postman-icon-svgrepo-com.svg';
import tomcat from '../assets/svg/skills/apache_tomcat-icon.svg';

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
       
        case 'html':
            return html;
        case 'postman':
            return postman;
        case 'tomcat':
            return tomcat;
       
        case 'css':
            return css;
       
        case 'javascript':
            return javascript;
        case 'next js':
            return nextJS;
       
        case 'react':
            return react;
    
      
        case 'vue':
            return vue;
        case 'bootstrap':
            return bootstrap;
        
      
        case 'java':
            return java;
        
        case 'aws':
            return aws;
     
        case 'firebase':
            return firebase;
        case 'mysql':
            return mysql;
        case 'git':
            return git;
        case 'bootstrap':
            return bootstrap; 
        case 'materialui':
            return materialui;
        case 'nginx':
            return nginx;
        case 'spring':
            return spring;
        case 'jquery':
            return jquery;
        case 'node js':
            return node;
        case 'express js':
            return express;
        default:
            break;
    }
}
