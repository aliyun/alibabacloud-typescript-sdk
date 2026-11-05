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
exports.AppServiceAggregate = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
const AppServiceGroup_1 = require("./AppServiceGroup");
const TreeNode_1 = require("./TreeNode");
const AppOperationAddress_1 = require("./AppOperationAddress");
const AppServiceProfile_1 = require("./AppServiceProfile");
class AppServiceAggregate extends $dara.Model {
    static names() {
        return {
            bizId: 'BizId',
            deleted: 'Deleted',
            endTime: 'EndTime',
            espBizId: 'EspBizId',
            gmtCreate: 'GmtCreate',
            gmtModified: 'GmtModified',
            group: 'Group',
            instanceBizId: 'InstanceBizId',
            name: 'Name',
            nodeList: 'NodeList',
            operationAddress: 'OperationAddress',
            profile: 'Profile',
            serviceType: 'ServiceType',
            serviceTypeText: 'ServiceTypeText',
            slug: 'Slug',
            startTime: 'StartTime',
            status: 'Status',
            userId: 'UserId',
        };
    }
    static types() {
        return {
            bizId: 'string',
            deleted: 'number',
            endTime: 'string',
            espBizId: 'string',
            gmtCreate: 'string',
            gmtModified: 'string',
            group: AppServiceGroup_1.AppServiceGroup,
            instanceBizId: 'string',
            name: 'string',
            nodeList: { 'type': 'array', 'itemType': TreeNode_1.TreeNode },
            operationAddress: AppOperationAddress_1.AppOperationAddress,
            profile: AppServiceProfile_1.AppServiceProfile,
            serviceType: 'string',
            serviceTypeText: 'string',
            slug: 'string',
            startTime: 'string',
            status: 'string',
            userId: 'string',
        };
    }
    validate() {
        if (this.group && typeof this.group.validate === 'function') {
            this.group.validate();
        }
        if (Array.isArray(this.nodeList)) {
            $dara.Model.validateArray(this.nodeList);
        }
        if (this.operationAddress && typeof this.operationAddress.validate === 'function') {
            this.operationAddress.validate();
        }
        if (this.profile && typeof this.profile.validate === 'function') {
            this.profile.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.AppServiceAggregate = AppServiceAggregate;
//# sourceMappingURL=AppServiceAggregate.js.map