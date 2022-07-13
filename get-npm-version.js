import jetpack from 'fs-jetpack';

if (jetpack.exists('./package.json')) {
  console.log(jetpack.read('./package.json').version);
}
