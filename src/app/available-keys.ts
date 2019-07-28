import { KeyInput } from "./key-input.interface";

export const availableKeys: { [value: string]: KeyInput } = {
    '1': {
        display: true,
        keyCode: '49',
        value: '1',
        function: 'append',
        requires_meta: false,
        position: 1
    },
    '2': {
        display: true,
        keyCode: '50',
        value: '2',
        function: 'append',
        requires_meta: false,
        position: 2
    },
    '3': {
        display: true,
        keyCode: '51',
        value: '3',
        function: 'append',
        requires_meta: false,
        position: 3
    },
    '4': {
        display: true,
        keyCode: '52',
        value: '4',
        function: 'append',
        requires_meta: false,
        position: 6
    },
    '5': {
        display: true,
        keyCode: '53',
        value: '5',
        function: 'append',
        requires_meta: false,
        position: 6
    },
    '6': {
        display: true,
        keyCode: '54',
        value: '6',
        function: 'append',
        requires_meta: false,
        position: 7
    },
    '7': {
        display: true,
        keyCode: '55',
        value: '7',
        function: 'append',
        requires_meta: false,
        position: 9
    },
    '8': {
        display: true,
        keyCode: '56',
        value: '8',
        function: 'append',
        requires_meta: false,
        position: 10
    },
    '9': {
        display: true,
        keyCode: '57',
        value: '9',
        function: 'append',
        requires_meta: false,
        position: 11
    },
    '+': {
        display: true,
        keyCode: '57',
        value: '+',
        function: 'append',
        requires_meta: false,
        position: 4
    },
    '-': {
        display: true,
        keyCode: '57',
        value: '-',
        function: 'append',
        requires_meta: false,
        position: 8
    },
    '*': {
        display: true,
        keyCode: '57',
        value: '*',
        function: 'append',
        requires_meta: false,
        position: 13
    },
    '/': {
        display: true,
        keyCode: '57',
        value: '/',
        function: 'append',
        requires_meta: false,
        position: 16
    },
    '0': {
        display: true,
        keyCode: '48',
        value: '0',
        function: 'append',
        requires_meta: false,
        position: 14
    },
    'Enter': {
        display: false,
        keyCode: '57',
        value: 'Enter',
        function: 'calculate',
        requires_meta: false
    },
    '.': {
        display: true,
        keyCode: '190',
        value: '.',
        function: 'append',
        requires_meta: false,
        position: 12
    },
    '=': {
        display: true,
        keyCode: '57',
        value: '=',
        function: 'calculate',
        requires_meta: false,
        position: 16
    }
}

export const metaKeys:{ [value: string]: KeyInput } = {
    'Clear': {
        display: true,
        keyCode: '8',
        icon: 'C',
        value: 'Backspace',
        function: 'clear',
        requires_meta: false
    },
    'Backspace': {
        display: true,
        keyCode: '8',
        icon: '<-',
        value: 'Backspace',
        function: 'delete',
        requires_meta: true
    },
    '%': {
        display: true,
        keyCode: '8',
        icon: '%',
        value: '%',
        function: 'append',
        requires_meta: true
    },
    '(': {
        display: true,
        keyCode: '57',
        icon: '( )',
        value: '( )',
        function: 'append',
        requires_meta: true
    },
    't': {
        display: false,
        keyCode: '84',
        value: 'TP',
        function: 'tip',
        requires_meta: true
    },
    'c': {
        display: false,
        keyCode: '84',
        value: 'COPY',
        function: 'copy',
        requires_meta: true
    },
    'p': {
        display: false,
        keyCode: '80',
        value: 'PASTE',
        function: 'paste',
        requires_meta: true
    }
}

export const  allKeys = Object.assign({}, availableKeys, metaKeys);