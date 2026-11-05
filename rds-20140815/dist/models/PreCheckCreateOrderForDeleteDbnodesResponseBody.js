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
exports.PreCheckCreateOrderForDeleteDBNodesResponseBody = exports.PreCheckCreateOrderForDeleteDBNodesResponseBodyFailures = exports.PreCheckCreateOrderForDeleteDBNodesResponseBodyFailuresFailures = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class PreCheckCreateOrderForDeleteDBNodesResponseBodyFailuresFailures extends $dara.Model {
    static names() {
        return {
            code: 'Code',
            message: 'Message',
        };
    }
    static types() {
        return {
            code: 'string',
            message: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.PreCheckCreateOrderForDeleteDBNodesResponseBodyFailuresFailures = PreCheckCreateOrderForDeleteDBNodesResponseBodyFailuresFailures;
class PreCheckCreateOrderForDeleteDBNodesResponseBodyFailures extends $dara.Model {
    static names() {
        return {
            failures: 'Failures',
        };
    }
    static types() {
        return {
            failures: { 'type': 'array', 'itemType': PreCheckCreateOrderForDeleteDBNodesResponseBodyFailuresFailures },
        };
    }
    validate() {
        if (Array.isArray(this.failures)) {
            $dara.Model.validateArray(this.failures);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.PreCheckCreateOrderForDeleteDBNodesResponseBodyFailures = PreCheckCreateOrderForDeleteDBNodesResponseBodyFailures;
class PreCheckCreateOrderForDeleteDBNodesResponseBody extends $dara.Model {
    static names() {
        return {
            failures: 'Failures',
            preCheckResult: 'PreCheckResult',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            failures: PreCheckCreateOrderForDeleteDBNodesResponseBodyFailures,
            preCheckResult: 'boolean',
            requestId: 'string',
        };
    }
    validate() {
        if (this.failures && typeof this.failures.validate === 'function') {
            this.failures.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.PreCheckCreateOrderForDeleteDBNodesResponseBody = PreCheckCreateOrderForDeleteDBNodesResponseBody;
//# sourceMappingURL=PreCheckCreateOrderForDeleteDbnodesResponseBody.js.map