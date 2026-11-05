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
exports.SearchMemoriesResponseBody = exports.SearchMemoriesResponseBodyData = exports.SearchMemoriesResponseBodyDataMemories = exports.SearchMemoriesResponseBodyDataMemoriesMemory = exports.SearchMemoriesResponseBodyDataMemoriesMemoryScope = exports.SearchMemoriesResponseBodyDataMemoriesMemoryContent = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class SearchMemoriesResponseBodyDataMemoriesMemoryContent extends $dara.Model {
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
exports.SearchMemoriesResponseBodyDataMemoriesMemoryContent = SearchMemoriesResponseBodyDataMemoriesMemoryContent;
class SearchMemoriesResponseBodyDataMemoriesMemoryScope extends $dara.Model {
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
exports.SearchMemoriesResponseBodyDataMemoriesMemoryScope = SearchMemoriesResponseBodyDataMemoriesMemoryScope;
class SearchMemoriesResponseBodyDataMemoriesMemory extends $dara.Model {
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
            content: SearchMemoriesResponseBodyDataMemoriesMemoryContent,
            createdAt: 'string',
            memoryId: 'string',
            metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            scope: SearchMemoriesResponseBodyDataMemoriesMemoryScope,
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
exports.SearchMemoriesResponseBodyDataMemoriesMemory = SearchMemoriesResponseBodyDataMemoriesMemory;
class SearchMemoriesResponseBodyDataMemories extends $dara.Model {
    static names() {
        return {
            memory: 'memory',
            score: 'score',
            similarity: 'similarity',
        };
    }
    static types() {
        return {
            memory: SearchMemoriesResponseBodyDataMemoriesMemory,
            score: 'number',
            similarity: 'number',
        };
    }
    validate() {
        if (this.memory && typeof this.memory.validate === 'function') {
            this.memory.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.SearchMemoriesResponseBodyDataMemories = SearchMemoriesResponseBodyDataMemories;
class SearchMemoriesResponseBodyData extends $dara.Model {
    static names() {
        return {
            memories: 'memories',
        };
    }
    static types() {
        return {
            memories: { 'type': 'array', 'itemType': SearchMemoriesResponseBodyDataMemories },
        };
    }
    validate() {
        if (Array.isArray(this.memories)) {
            $dara.Model.validateArray(this.memories);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.SearchMemoriesResponseBodyData = SearchMemoriesResponseBodyData;
class SearchMemoriesResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'code',
            data: 'data',
            httpStatusCode: 'httpStatusCode',
            message: 'message',
            requestId: 'requestId',
            success: 'success',
        };
    }
    static types() {
        return {
            code: 'string',
            data: SearchMemoriesResponseBodyData,
            httpStatusCode: 'number',
            message: 'string',
            requestId: 'string',
            success: 'boolean',
        };
    }
    validate() {
        if (this.data && typeof this.data.validate === 'function') {
            this.data.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.SearchMemoriesResponseBody = SearchMemoriesResponseBody;
//# sourceMappingURL=SearchMemoriesResponseBody.js.map