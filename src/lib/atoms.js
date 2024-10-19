import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'


const authUserAtom = atomWithStorage('user', null)
const searchBookAtom = atom('')

export { authUserAtom, searchBookAtom }