"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeDBInitializeVariableResponseBody = exports.DescribeDBInitializeVariableResponseBodyVariables = exports.DescribeDBInitializeVariableResponseBodyVariablesVariable = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInitializeVariableResponseBodyVariablesVariable extends $dara.Model {
    static names() {
        return {
            charset: 'Charset',
            collate: 'Collate',
            ctype: 'Ctype',
        };
    }
    static types() {
        return {
            charset: 'string',
            collate: 'string',
            ctype: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInitializeVariableResponseBodyVariablesVariable = DescribeDBInitializeVariableResponseBodyVariablesVariable;
class DescribeDBInitializeVariableResponseBodyVariables extends $dara.Model {
    static names() {
        return {
            variable: 'Variable',
        };
    }
    static types() {
        return {
            variable: { 'type': 'array', 'itemType': DescribeDBInitializeVariableResponseBodyVariablesVariable },
        };
    }
    validate() {
        if (Array.isArray(this.variable)) {
            $dara.Model.validateArray(this.variable);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInitializeVariableResponseBodyVariables = DescribeDBInitializeVariableResponseBodyVariables;
class DescribeDBInitializeVariableResponseBody extends $dara.Model {
    static names() {
        return {
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            requestId: 'RequestId',
            variables: 'Variables',
        };
    }
    static types() {
        return {
            DBType: 'string',
            DBVersion: 'string',
            requestId: 'string',
            variables: DescribeDBInitializeVariableResponseBodyVariables,
        };
    }
    validate() {
        if (this.variables && typeof this.variables.validate === 'function') {
            this.variables.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInitializeVariableResponseBody = DescribeDBInitializeVariableResponseBody;
//# sourceMappingURL=DescribeDbinitializeVariableResponseBody.js.map