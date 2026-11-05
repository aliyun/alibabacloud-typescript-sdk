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
exports.SearchMemoriesResponseBody = exports.SearchMemoriesResponseBodyResults = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class SearchMemoriesResponseBodyResults extends $dara.Model {
    static names() {
        return {
            createTime: 'CreateTime',
            id: 'Id',
            memory: 'Memory',
            memoryAgentId: 'MemoryAgentId',
            memoryUserId: 'MemoryUserId',
            metadata: 'Metadata',
            score: 'Score',
            updateTime: 'UpdateTime',
        };
    }
    static types() {
        return {
            createTime: 'string',
            id: 'string',
            memory: 'string',
            memoryAgentId: 'string',
            memoryUserId: 'string',
            metadata: 'string',
            score: 'string',
            updateTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.SearchMemoriesResponseBodyResults = SearchMemoriesResponseBodyResults;
class SearchMemoriesResponseBody extends $dara.Model {
    static names() {
        return {
            page: 'Page',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            results: 'Results',
            total: 'Total',
            totalPages: 'TotalPages',
        };
    }
    static types() {
        return {
            page: 'string',
            pageSize: 'string',
            requestId: 'string',
            results: { 'type': 'array', 'itemType': SearchMemoriesResponseBodyResults },
            total: 'string',
            totalPages: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.results)) {
            $dara.Model.validateArray(this.results);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.SearchMemoriesResponseBody = SearchMemoriesResponseBody;
//# sourceMappingURL=SearchMemoriesResponseBody.js.map