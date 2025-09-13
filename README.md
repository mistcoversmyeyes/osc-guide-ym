# 华南理工大学 OSC 学生指南

osc-guide 是华工开源社区新生指南网页，旨在帮助新成员快速获取校内外学习资源，提升自己，参与社区活动当中。本仓库存放的是网页的内容和涉及到的各种静态资源，本项目使用 VuePress v2搭建。


## Usage

```python
import foobar

# returns 'words'
foobar.pluralize('word')

# returns 'geese'
foobar.pluralize('goose')

# returns 'phenomenon'
foobar.singularize('phenomena')
```

## Contributiong

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please check you installation before your contributing by following the following guide:
### Check the installation of `node` 
Run the following command to check if node version is greater than `v18.xx``
```bash
node -v
```
If your node version is lower than `v18` ,run the following command to install nvm and manage node version.
```bash 
sudo apt update                 # update the package source of apt package manager
sudo apt-get install nvm        
```
then use nvm to install the newest stable version of `node`
```bash
nvm install node 
```

### Install `pnpm` 
VuePress use `pnpm` as node package manager ,you can use the following code to install `pnpm`,if you have already install `node.js`
```bash
npm install pnpm --global
```

### Install the related package with `pnpm`

```bash
pnpm install 
``` 



### Start the local Development Server
After installing the dependencies, you can start the local development server with the following command:

```bash
pnpm run docs:dev
```

Once started, the terminal will display the local access address (usually `http://localhost:8080`). Open this address in your browser to preview and develop your documentation website.

For more information about local uses of developping server, please read the official docs of vuepress-vite  



## License

[MIT](https://choosealicense.com/licenses/mit/)
