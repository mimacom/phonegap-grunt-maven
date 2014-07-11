module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-phonegap-build');

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        compress: {
            main: {
                options: {
                    archive: 'target/<%= pkg.name %>-<%= pkg.version %>.zip'
                },
                files: [
                    {src: ["www/**/*", "config.xml"], dest: '.'}
                ]
            }
        },

        "phonegap-build": {
            debug: {
                options: {
                    archive: "target/<%= pkg.name %>-<%= pkg.version %>.zip",
                    "appId": "",
                    "user": {
                        "email": "",
                        "password": ""
                    },
                    "keys": {
                        ios: {
                            password: ""
                        }
                    },
                    "download": {
                        ios: "target/<%= pkg.name %>-<%= pkg.version %>.ipa"
                    }
                }
            }
        }
    });

    grunt.registerTask('default', 'compress')

};