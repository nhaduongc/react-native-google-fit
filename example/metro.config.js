// Absolute path to your package
const packagePath =
    '../../react-native-google-fit';

module.exports = {
    resolver: {
        nodeModulesPaths: [packagePath],
        // rest of metro resolver options...
    },
    watchFolders: [packagePath],
    // rest of metro options...
};