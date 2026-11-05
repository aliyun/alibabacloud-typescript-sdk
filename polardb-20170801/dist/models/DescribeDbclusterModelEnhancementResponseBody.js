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
exports.DescribeDBClusterModelEnhancementResponseBody = exports.DescribeDBClusterModelEnhancementResponseBodyModelEnhancementKeys = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBClusterModelEnhancementResponseBodyModelEnhancementKeys extends $dara.Model {
    static names() {
        return {
            apiKey: 'ApiKey',
            apiKeyId: 'ApiKeyId',
            createTime: 'CreateTime',
            description: 'Description',
            expireTime: 'ExpireTime',
        };
    }
    static types() {
        return {
            apiKey: 'string',
            apiKeyId: 'string',
            createTime: 'string',
            description: 'string',
            expireTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterModelEnhancementResponseBodyModelEnhancementKeys = DescribeDBClusterModelEnhancementResponseBodyModelEnhancementKeys;
class DescribeDBClusterModelEnhancementResponseBody extends $dara.Model {
    static names() {
        return {
            createTime: 'CreateTime',
            modelEnhancementKeyNumber: 'ModelEnhancementKeyNumber',
            modelEnhancementKeys: 'ModelEnhancementKeys',
            modelEnhancementStatus: 'ModelEnhancementStatus',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            createTime: 'string',
            modelEnhancementKeyNumber: 'number',
            modelEnhancementKeys: { 'type': 'array', 'itemType': DescribeDBClusterModelEnhancementResponseBodyModelEnhancementKeys },
            modelEnhancementStatus: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.modelEnhancementKeys)) {
            $dara.Model.validateArray(this.modelEnhancementKeys);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterModelEnhancementResponseBody = DescribeDBClusterModelEnhancementResponseBody;
//# sourceMappingURL=DescribeDbclusterModelEnhancementResponseBody.js.map