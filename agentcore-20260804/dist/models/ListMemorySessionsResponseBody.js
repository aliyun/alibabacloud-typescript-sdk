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
exports.ListMemorySessionsResponseBody = exports.ListMemorySessionsResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListMemorySessionsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            agentId: 'agentId',
            createdAt: 'createdAt',
            metadata: 'metadata',
            sessionId: 'sessionId',
            teamId: 'teamId',
            title: 'title',
            userId: 'userId',
        };
    }
    static types() {
        return {
            agentId: 'string',
            createdAt: 'string',
            metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            sessionId: 'string',
            teamId: 'string',
            title: 'string',
            userId: 'string',
        };
    }
    validate() {
        if (this.metadata) {
            $dara.Model.validateMap(this.metadata);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListMemorySessionsResponseBodyItems = ListMemorySessionsResponseBodyItems;
class ListMemorySessionsResponseBody extends $dara.Model {
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
            totalCount: 'totalCount',
        };
    }
    static types() {
        return {
            code: 'string',
            httpStatusCode: 'number',
            items: { 'type': 'array', 'itemType': ListMemorySessionsResponseBodyItems },
            maxResults: 'number',
            message: 'string',
            nextToken: 'string',
            requestId: 'string',
            success: 'boolean',
            totalCount: 'number',
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
exports.ListMemorySessionsResponseBody = ListMemorySessionsResponseBody;
//# sourceMappingURL=ListMemorySessionsResponseBody.js.map