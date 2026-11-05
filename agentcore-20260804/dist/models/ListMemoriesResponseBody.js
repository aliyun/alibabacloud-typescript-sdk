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
exports.ListMemoriesResponseBody = exports.ListMemoriesResponseBodyItems = exports.ListMemoriesResponseBodyItemsScope = exports.ListMemoriesResponseBodyItemsContent = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListMemoriesResponseBodyItemsContent extends $dara.Model {
    static names() {
        return {
            text: 'text',
        };
    }
    static types() {
        return {
            text: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListMemoriesResponseBodyItemsContent = ListMemoriesResponseBodyItemsContent;
class ListMemoriesResponseBodyItemsScope extends $dara.Model {
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
exports.ListMemoriesResponseBodyItemsScope = ListMemoriesResponseBodyItemsScope;
class ListMemoriesResponseBodyItems extends $dara.Model {
    static names() {
        return {
            content: 'content',
            createdAt: 'createdAt',
            memoryId: 'memoryId',
            metadata: 'metadata',
            scope: 'scope',
            updatedAt: 'updatedAt',
        };
    }
    static types() {
        return {
            content: ListMemoriesResponseBodyItemsContent,
            createdAt: 'string',
            memoryId: 'string',
            metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            scope: ListMemoriesResponseBodyItemsScope,
            updatedAt: 'string',
        };
    }
    validate() {
        if (this.content && typeof this.content.validate === 'function') {
            this.content.validate();
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
exports.ListMemoriesResponseBodyItems = ListMemoriesResponseBodyItems;
class ListMemoriesResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'code',
            httpStatusCode: 'httpStatusCode',
            items: 'items',
            maxResults: 'maxResults',
            message: 'message',
            nextToken: 'nextToken',
            requestId: 'requestId',
            success: 'success',
        };
    }
    static types() {
        return {
            code: 'string',
            httpStatusCode: 'number',
            items: { 'type': 'array', 'itemType': ListMemoriesResponseBodyItems },
            maxResults: 'number',
            message: 'string',
            nextToken: 'string',
            requestId: 'string',
            success: 'boolean',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListMemoriesResponseBody = ListMemoriesResponseBody;
//# sourceMappingURL=ListMemoriesResponseBody.js.map