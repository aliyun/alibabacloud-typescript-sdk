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
exports.AppService = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
const TreeNode_1 = require("./TreeNode");
const AppServiceProfile_1 = require("./AppServiceProfile");
class AppService extends $dara.Model {
    static names() {
        return {
            bizId: 'BizId',
            createTime: 'CreateTime',
            deleted: 'Deleted',
            endTime: 'EndTime',
            espBizId: 'EspBizId',
            gmtModified: 'GmtModified',
            instanceBizId: 'InstanceBizId',
            name: 'Name',
            nodeList: 'NodeList',
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
            createTime: 'string',
            deleted: 'number',
            endTime: 'string',
            espBizId: 'string',
            gmtModified: 'string',
            instanceBizId: 'string',
            name: 'string',
            nodeList: { 'type': 'array', 'itemType': TreeNode_1.TreeNode },
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
        if (Array.isArray(this.nodeList)) {
            $dara.Model.validateArray(this.nodeList);
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
exports.AppService = AppService;
//# sourceMappingURL=AppService.js.map