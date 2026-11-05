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
exports.ListCustomAgentsResponseBody = exports.ListCustomAgentsResponseBodyItems = exports.ListCustomAgentsResponseBodyItemsProtocol = exports.ListCustomAgentsResponseBodyItemsProtocolPaths = exports.ListCustomAgentsResponseBodyItemsCodePackageInfo = exports.ListCustomAgentsResponseBodyItemsArtifact = exports.ListCustomAgentsResponseBodyItemsArtifactContainer = exports.ListCustomAgentsResponseBodyItemsArtifactCode = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListCustomAgentsResponseBodyItemsArtifactCode extends $dara.Model {
    static names() {
        return {
            entrypoint: 'entrypoint',
            languageRuntime: 'languageRuntime',
            sourceUri: 'sourceUri',
        };
    }
    static types() {
        return {
            entrypoint: 'string',
            languageRuntime: 'string',
            sourceUri: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListCustomAgentsResponseBodyItemsArtifactCode = ListCustomAgentsResponseBodyItemsArtifactCode;
class ListCustomAgentsResponseBodyItemsArtifactContainer extends $dara.Model {
    static names() {
        return {
            entrypoint: 'entrypoint',
            instanceId: 'instanceId',
            namespace: 'namespace',
            repo: 'repo',
            tag: 'tag',
            type: 'type',
        };
    }
    static types() {
        return {
            entrypoint: 'string',
            instanceId: 'string',
            namespace: 'string',
            repo: 'string',
            tag: 'string',
            type: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListCustomAgentsResponseBodyItemsArtifactContainer = ListCustomAgentsResponseBodyItemsArtifactContainer;
class ListCustomAgentsResponseBodyItemsArtifact extends $dara.Model {
    static names() {
        return {
            code: 'code',
            container: 'container',
            port: 'port',
        };
    }
    static types() {
        return {
            code: ListCustomAgentsResponseBodyItemsArtifactCode,
            container: ListCustomAgentsResponseBodyItemsArtifactContainer,
            port: 'number',
        };
    }
    validate() {
        if (this.code && typeof this.code.validate === 'function') {
            this.code.validate();
        }
        if (this.container && typeof this.container.validate === 'function') {
            this.container.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListCustomAgentsResponseBodyItemsArtifact = ListCustomAgentsResponseBodyItemsArtifact;
class ListCustomAgentsResponseBodyItemsCodePackageInfo extends $dara.Model {
    static names() {
        return {
            crc64: 'crc64',
            etag: 'etag',
            fileName: 'fileName',
            fileSize: 'fileSize',
            format: 'format',
        };
    }
    static types() {
        return {
            crc64: 'string',
            etag: 'string',
            fileName: 'string',
            fileSize: 'number',
            format: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListCustomAgentsResponseBodyItemsCodePackageInfo = ListCustomAgentsResponseBodyItemsCodePackageInfo;
class ListCustomAgentsResponseBodyItemsProtocolPaths extends $dara.Model {
    static names() {
        return {
            description: 'description',
            name: 'name',
        };
    }
    static types() {
        return {
            description: 'string',
            name: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListCustomAgentsResponseBodyItemsProtocolPaths = ListCustomAgentsResponseBodyItemsProtocolPaths;
class ListCustomAgentsResponseBodyItemsProtocol extends $dara.Model {
    static names() {
        return {
            headers: 'headers',
            paths: 'paths',
            type: 'type',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            paths: { 'type': 'array', 'itemType': ListCustomAgentsResponseBodyItemsProtocolPaths },
            type: 'string',
        };
    }
    validate() {
        if (this.headers) {
            $dara.Model.validateMap(this.headers);
        }
        if (Array.isArray(this.paths)) {
            $dara.Model.validateArray(this.paths);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListCustomAgentsResponseBodyItemsProtocol = ListCustomAgentsResponseBodyItemsProtocol;
class ListCustomAgentsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            accessMode: 'accessMode',
            accessScope: 'accessScope',
            agentId: 'agentId',
            artifact: 'artifact',
            codePackageInfo: 'codePackageInfo',
            createMode: 'createMode',
            createdAt: 'createdAt',
            deployType: 'deployType',
            description: 'description',
            latestSpecVersion: 'latestSpecVersion',
            name: 'name',
            protocol: 'protocol',
            runtime: 'runtime',
            status: 'status',
            updatedAt: 'updatedAt',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            accessMode: 'string',
            accessScope: 'string',
            agentId: 'string',
            artifact: ListCustomAgentsResponseBodyItemsArtifact,
            codePackageInfo: ListCustomAgentsResponseBodyItemsCodePackageInfo,
            createMode: 'string',
            createdAt: 'string',
            deployType: 'string',
            description: 'string',
            latestSpecVersion: 'number',
            name: 'string',
            protocol: { 'type': 'array', 'itemType': ListCustomAgentsResponseBodyItemsProtocol },
            runtime: 'string',
            status: 'string',
            updatedAt: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        if (this.artifact && typeof this.artifact.validate === 'function') {
            this.artifact.validate();
        }
        if (this.codePackageInfo && typeof this.codePackageInfo.validate === 'function') {
            this.codePackageInfo.validate();
        }
        if (Array.isArray(this.protocol)) {
            $dara.Model.validateArray(this.protocol);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListCustomAgentsResponseBodyItems = ListCustomAgentsResponseBodyItems;
class ListCustomAgentsResponseBody extends $dara.Model {
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
            items: { 'type': 'array', 'itemType': ListCustomAgentsResponseBodyItems },
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
exports.ListCustomAgentsResponseBody = ListCustomAgentsResponseBody;
//# sourceMappingURL=ListCustomAgentsResponseBody.js.map