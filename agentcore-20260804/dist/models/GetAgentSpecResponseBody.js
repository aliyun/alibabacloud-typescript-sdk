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
exports.GetAgentSpecResponseBody = exports.GetAgentSpecResponseBodyData = exports.GetAgentSpecResponseBodyDataVersions = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetAgentSpecResponseBodyDataVersions extends $dara.Model {
    static names() {
        return {
            author: 'author',
            createTime: 'createTime',
            description: 'description',
            downloadCount: 'downloadCount',
            publishPipelineInfo: 'publishPipelineInfo',
            status: 'status',
            updateTime: 'updateTime',
            version: 'version',
        };
    }
    static types() {
        return {
            author: 'string',
            createTime: 'number',
            description: 'string',
            downloadCount: 'number',
            publishPipelineInfo: 'string',
            status: 'string',
            updateTime: 'number',
            version: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAgentSpecResponseBodyDataVersions = GetAgentSpecResponseBodyDataVersions;
class GetAgentSpecResponseBodyData extends $dara.Model {
    static names() {
        return {
            bizTags: 'bizTags',
            description: 'description',
            downloadCount: 'downloadCount',
            editingVersion: 'editingVersion',
            enable: 'enable',
            from: 'from',
            labels: 'labels',
            name: 'name',
            onlineCnt: 'onlineCnt',
            reviewingVersion: 'reviewingVersion',
            scope: 'scope',
            updateTime: 'updateTime',
            versions: 'versions',
        };
    }
    static types() {
        return {
            bizTags: 'string',
            description: 'string',
            downloadCount: 'number',
            editingVersion: 'string',
            enable: 'boolean',
            from: 'string',
            labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            name: 'string',
            onlineCnt: 'number',
            reviewingVersion: 'string',
            scope: 'string',
            updateTime: 'number',
            versions: { 'type': 'array', 'itemType': GetAgentSpecResponseBodyDataVersions },
        };
    }
    validate() {
        if (this.labels) {
            $dara.Model.validateMap(this.labels);
        }
        if (Array.isArray(this.versions)) {
            $dara.Model.validateArray(this.versions);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAgentSpecResponseBodyData = GetAgentSpecResponseBodyData;
class GetAgentSpecResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'data',
            requestId: 'requestId',
        };
    }
    static types() {
        return {
            data: GetAgentSpecResponseBodyData,
            requestId: 'string',
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
exports.GetAgentSpecResponseBody = GetAgentSpecResponseBody;
//# sourceMappingURL=GetAgentSpecResponseBody.js.map