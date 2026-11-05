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
exports.DescribeGlobalSecurityIPGroupRelationResponseBody = exports.DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel extends $dara.Model {
    static names() {
        return {
            GIpList: 'GIpList',
            globalIgName: 'GlobalIgName',
            globalSecurityGroupId: 'GlobalSecurityGroupId',
            regionId: 'RegionId',
        };
    }
    static types() {
        return {
            GIpList: 'string',
            globalIgName: 'string',
            globalSecurityGroupId: 'string',
            regionId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel = DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel;
class DescribeGlobalSecurityIPGroupRelationResponseBody extends $dara.Model {
    static names() {
        return {
            DBClusterId: 'DBClusterId',
            globalSecurityIPGroupRel: 'GlobalSecurityIPGroupRel',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            DBClusterId: 'string',
            globalSecurityIPGroupRel: { 'type': 'array', 'itemType': DescribeGlobalSecurityIPGroupRelationResponseBodyGlobalSecurityIPGroupRel },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.globalSecurityIPGroupRel)) {
            $dara.Model.validateArray(this.globalSecurityIPGroupRel);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGlobalSecurityIPGroupRelationResponseBody = DescribeGlobalSecurityIPGroupRelationResponseBody;
//# sourceMappingURL=DescribeGlobalSecurityIpgroupRelationResponseBody.js.map