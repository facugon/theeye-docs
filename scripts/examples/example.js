// error and output handlers must go first.

/**
 * @param {Object}
 * @prop {Mixed} data
 * @prop {Array} components
 * @prop {Object} next
 */
const successOutput = (output = {}) => {
  
  const { data = undefined, components = undefined, next = undefined} = output
  // https://documentation.theeye.io/core-concepts/scripts/#passing-arguments-in-workflow
  const output = {
    state: "success",
    data,
    components, // https://documentation.theeye.io/core-concepts/tasks/script_type/#components
    next
  }
  console.log( JSON.stringify(output) )
  process.exit(0)
}

/**
 * @param {Error} err
 */
const failureOutput = (err) => {
  console.error(err)
  const output = {
    state: "failure",
    data: {
      message: err.message,
      code: err.code,
      data: err.data 
    }
  }
  console.error( JSON.stringify(output) )
  process.exit(1)
}

process.on('unhandledRejection', (reason, p) => {
  console.error(reason, 'Unhandled Rejection at Promise', p)
  failureOutput(reason)
})

process.on('uncaughtException', err => {
  console.error(err, 'Uncaught Exception thrown')
  failureOutput(err)
})

// NodeJs boilerplate
const main = async (args) => {
  const result = {
    data: ["arg1","arg2","arg3"],
    components: { "popup": "Hi World!" },
    next: {}
  }

  // add your code here.

  return result
}

// invoke main and capture result output
main(process.argv.slice(2)).then(successOutput).catch(failureOutput)
