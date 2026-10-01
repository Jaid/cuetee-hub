import {expect, test} from 'bun:test'

const {default: cueteeHub} = await import('#src/main.ts')
test('should run', () => {
  const result = cueteeHub()
  expect(result).toBe('cuetee-hub') // TODO Test actual functionality
})
