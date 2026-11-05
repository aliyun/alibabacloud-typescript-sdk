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
exports.CreateInspectionTaskRequest = exports.CreateInspectionTaskRequestDBClusterList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateInspectionTaskRequestDBClusterList extends $dara.Model {
    static names() {
        return {
            DBClusterId: 'DBClusterId',
            regionId: 'RegionId',
        };
    }
    static types() {
        return {
            DBClusterId: 'string',
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
exports.CreateInspectionTaskRequestDBClusterList = CreateInspectionTaskRequestDBClusterList;
class CreateInspectionTaskRequest extends $dara.Model {
    static names() {
        return {
            cronExpression: 'CronExpression',
            DBClusterList: 'DBClusterList',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            spaceId: 'SpaceId',
            taskDescription: 'TaskDescription',
        };
    }
    static types() {
        return {
            cronExpression: 'string',
            DBClusterList: { 'type': 'array', 'itemType': CreateInspectionTaskRequestDBClusterList },
            regionId: 'string',
            resourceGroupId: 'string',
            spaceId: 'string',
            taskDescription: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.DBClusterList)) {
            $dara.Model.validateArray(this.DBClusterList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateInspectionTaskRequest = CreateInspectionTaskRequest;
//# sourceMappingURL=CreateInspectionTaskRequest.js.map