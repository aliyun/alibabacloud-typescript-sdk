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
exports.AddMemoriesRequest = exports.AddMemoriesRequestBody = exports.AddMemoriesRequestBodyScope = exports.AddMemoriesRequestBodyMessages = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
/**
 */
class AddMemoriesRequestBodyMessages extends $dara.Model {
    static names() {
        return {
            content: 'content',
            role: 'role',
        };
    }
    static types() {
        return {
            content: 'string',
            role: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.AddMemoriesRequestBodyMessages = AddMemoriesRequestBodyMessages;
class AddMemoriesRequestBodyScope extends $dara.Model {
    static names() {
        return {
            agentId: 'agentId',
            sessionId: 'sessionId',
            userId: 'userId',
        };
    }
    static types() {
        return {
            agentId: 'string',
            sessionId: 'string',
            userId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.AddMemoriesRequestBodyScope = AddMemoriesRequestBodyScope;
class AddMemoriesRequestBody extends $dara.Model {
    static names() {
        return {
            messages: 'messages',
            metadata: 'metadata',
            referenceTime: 'referenceTime',
            scope: 'scope',
            sync: 'sync',
            text: 'text',
        };
    }
    static types() {
        return {
            messages: { 'type': 'array', 'itemType': AddMemoriesRequestBodyMessages },
            metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            referenceTime: 'string',
            scope: AddMemoriesRequestBodyScope,
            sync: 'boolean',
            text: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.messages)) {
            $dara.Model.validateArray(this.messages);
        }
        if (this.metadata) {
            $dara.Model.validateMap(this.metadata);
        }
        if (this.scope && typeof this.scope.validate === 'function') {
            this.scope.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.AddMemoriesRequestBody = AddMemoriesRequestBody;
class AddMemoriesRequest extends $dara.Model {
    static names() {
        return {
            body: 'body',
        };
    }
    static types() {
        return {
            body: AddMemoriesRequestBody,
        };
    }
    validate() {
        if (this.body && typeof this.body.validate === 'function') {
            this.body.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.AddMemoriesRequest = AddMemoriesRequest;
//# sourceMappingURL=AddMemoriesRequest.js.map