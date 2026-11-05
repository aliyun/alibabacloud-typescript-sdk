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
exports.RunRCCommandRequest = exports.RunRCCommandRequestTags = exports.RunRCCommandRequestResourceTags = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class RunRCCommandRequestResourceTags extends $dara.Model {
    static names() {
        return {
            key: 'Key',
            value: 'Value',
        };
    }
    static types() {
        return {
            key: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.RunRCCommandRequestResourceTags = RunRCCommandRequestResourceTags;
class RunRCCommandRequestTags extends $dara.Model {
    static names() {
        return {
            key: 'Key',
            value: 'Value',
        };
    }
    static types() {
        return {
            key: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.RunRCCommandRequestTags = RunRCCommandRequestTags;
class RunRCCommandRequest extends $dara.Model {
    static names() {
        return {
            clientToken: 'ClientToken',
            commandContent: 'CommandContent',
            containerId: 'ContainerId',
            containerName: 'ContainerName',
            contentEncoding: 'ContentEncoding',
            description: 'Description',
            enableParameter: 'EnableParameter',
            frequency: 'Frequency',
            instanceIds: 'InstanceIds',
            keepCommand: 'KeepCommand',
            launcher: 'Launcher',
            name: 'Name',
            parameters: 'Parameters',
            regionId: 'RegionId',
            repeatMode: 'RepeatMode',
            resourceGroupId: 'ResourceGroupId',
            resourceTags: 'ResourceTags',
            tags: 'Tags',
            terminationMode: 'TerminationMode',
            timeout: 'Timeout',
            type: 'Type',
            username: 'Username',
            windowsPasswordName: 'WindowsPasswordName',
            workingDir: 'WorkingDir',
        };
    }
    static types() {
        return {
            clientToken: 'string',
            commandContent: 'string',
            containerId: 'string',
            containerName: 'string',
            contentEncoding: 'string',
            description: 'string',
            enableParameter: 'boolean',
            frequency: 'string',
            instanceIds: { 'type': 'array', 'itemType': 'string' },
            keepCommand: 'boolean',
            launcher: 'string',
            name: 'string',
            parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            regionId: 'string',
            repeatMode: 'string',
            resourceGroupId: 'string',
            resourceTags: { 'type': 'array', 'itemType': RunRCCommandRequestResourceTags },
            tags: { 'type': 'array', 'itemType': RunRCCommandRequestTags },
            terminationMode: 'string',
            timeout: 'number',
            type: 'string',
            username: 'string',
            windowsPasswordName: 'string',
            workingDir: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.instanceIds)) {
            $dara.Model.validateArray(this.instanceIds);
        }
        if (this.parameters) {
            $dara.Model.validateMap(this.parameters);
        }
        if (Array.isArray(this.resourceTags)) {
            $dara.Model.validateArray(this.resourceTags);
        }
        if (Array.isArray(this.tags)) {
            $dara.Model.validateArray(this.tags);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.RunRCCommandRequest = RunRCCommandRequest;
//# sourceMappingURL=RunRccommandRequest.js.map