# pokore
Collection for postcss nyan~

##Install

`npm install pokore --save-dev`

##Plugins
* [autoprefixer](https://github.com/postcss/autoprefixer)
* [sugarss](https://github.com/postcss/sugarss)
* [cssortie](https://github.com/dalphyx/cssortie)
* [postcss-sorting](https://github.com/hudochenkov/postcss-sorting)
* [postcss-size](https://github.com/postcss/postcss-size)
* [postcss-extend](https://github.com/travco/postcss-extend)
* [postcss-easy-import](https://github.com/TrySound/postcss-easy-import)
* [postcss-css-reset](https://github.com/baiyaaaaa/postcss-css-reset)
* [postcss-color-alpha](https://github.com/avanes/postcss-color-alpha)


## Usage
Gulp:

```
import gulp from 'gulp'
import postcss from 'postcss'
import pokore from 'pokore'
import rename from 'gulp-rename'

gulp.task('postcss', () => {
  return gulp.src('./a.sss')
    .pipe(postcss([
      pokore.import({ extensions: ['sss'] }),
      pokore.colorAlpha,
      pokore.extend,
      pokore.size,
      pokore.reset
    ], {
      parser: pokore.sugarss
    }))
    .pipe(postcss([
      pokore.autoprefixer({ browsers: ['last 1 version'] }),
      pokore.sorting({ 'sort-order': pokore.cssortie })
    ]))
    .pipe(rename({ extname: '.css' }))
    .pipe(gulp.dest('./dest'))
})

```

Sugarss file: a.sss:

```
@import './b.sss'

@reset-global pc

.a
  @extend .c
  tab-size: 1px
  width: 40px
  box-shadow: 0 0 1px #222.1

.b
  size: 30px
  @reset-nested list
```

Sugarss file: b.sss:

```
.c
  color: #fff
```

Compiled to:

```
html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

/**
 * Other styles from normalize.css
 */

.c, .a {
  color: #fff
}

.a {
  width: 40px;
  -moz-tab-size: 1px;
       tab-size: 1px;
  box-shadow: 0 0 1px rgba(34, 34, 34, 0.1)
}

.b {
  width: 30px;
  height: 30px;
  padding: 0;
  margin: 0;
  list-style: none
}
```
## License

MIT