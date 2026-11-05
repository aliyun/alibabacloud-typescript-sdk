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
exports.CreateRCDeploymentSetRequest = exports.CreateRCDeploymentSetRequestTag = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateRCDeploymentSetRequestTag extends $dara.Model {
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
exports.CreateRCDeploymentSetRequestTag = CreateRCDeploymentSetRequestTag;
class CreateRCDeploymentSetRequest extends $dara.Model {
    static names() {
        return {
            clientToken: 'ClientToken',
            deploymentSetName: 'DeploymentSetName',
            description: 'Description',
            groupCount: 'GroupCount',
            onUnableToRedeployFailedInstance: 'OnUnableToRedeployFailedInstance',
            regionId: 'RegionId',
            strategy: 'Strategy',
            tag: 'Tag',
        };
    }
    static types() {
        return {
            clientToken: 'string',
            deploymentSetName: 'string',
            description: 'string',
            groupCount: 'number',
            onUnableToRedeployFailedInstance: 'string',
            regionId: 'string',
            strategy: 'string',
            tag: { 'type': 'array', 'itemType': CreateRCDeploymentSetRequestTag },
        };
    }
    validate() {
        if (Array.isArray(this.tag)) {
            $dara.Model.validateArray(this.tag);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateRCDeploymentSetRequest = CreateRCDeploymentSetRequest;
//# sourceMappingURL=CreateRcdeploymentSetRequest.js.map