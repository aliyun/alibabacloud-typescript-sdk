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
exports.RunRCCommandShrinkRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class RunRCCommandShrinkRequest extends $dara.Model {
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
            instanceIdsShrink: 'InstanceIds',
            keepCommand: 'KeepCommand',
            launcher: 'Launcher',
            name: 'Name',
            parametersShrink: 'Parameters',
            regionId: 'RegionId',
            repeatMode: 'RepeatMode',
            resourceGroupId: 'ResourceGroupId',
            resourceTagsShrink: 'ResourceTags',
            tagsShrink: 'Tags',
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
            instanceIdsShrink: 'string',
            keepCommand: 'boolean',
            launcher: 'string',
            name: 'string',
            parametersShrink: 'string',
            regionId: 'string',
            repeatMode: 'string',
            resourceGroupId: 'string',
            resourceTagsShrink: 'string',
            tagsShrink: 'string',
            terminationMode: 'string',
            timeout: 'number',
            type: 'string',
            username: 'string',
            windowsPasswordName: 'string',
            workingDir: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.RunRCCommandShrinkRequest = RunRCCommandShrinkRequest;
//# sourceMappingURL=RunRccommandShrinkRequest.js.map