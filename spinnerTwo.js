process.stdout.write('hello from spinnerTwo.js... \rheyyy\n');

const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let delay = 0;

for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinner[i]);
    if (i === spinner.length - 1) {
      process.stdout.write('\n');
    }
  }, delay);
  delay += 200;
};
