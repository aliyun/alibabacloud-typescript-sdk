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
exports.ModifyInstanceRAGConfigRequest = exports.ModifyInstanceRAGConfigRequestConfigList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyInstanceRAGConfigRequestConfigList extends $dara.Model {
    static names() {
        return {
            name: 'Name',
            value: 'Value',
        };
    }
    static types() {
        return {
            name: 'string',
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
exports.ModifyInstanceRAGConfigRequestConfigList = ModifyInstanceRAGConfigRequestConfigList;
class ModifyInstanceRAGConfigRequest extends $dara.Model {
    static names() {
        return {
            branchName: 'BranchName',
            clientToken: 'ClientToken',
            configList: 'ConfigList',
            instanceName: 'InstanceName',
            regionId: 'RegionId',
            status: 'Status',
        };
    }
    static types() {
        return {
            branchName: 'string',
            clientToken: 'string',
            configList: { 'type': 'array', 'itemType': ModifyInstanceRAGConfigRequestConfigList },
            instanceName: 'string',
            regionId: 'string',
            status: 'boolean',
        };
    }
    validate() {
        if (Array.isArray(this.configList)) {
            $dara.Model.validateArray(this.configList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyInstanceRAGConfigRequest = ModifyInstanceRAGConfigRequest;
//# sourceMappingURL=ModifyInstanceRagconfigRequest.js.map