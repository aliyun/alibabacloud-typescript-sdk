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
exports.DescribeDBLogFilesRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBLogFilesRequest extends $dara.Model {
    static names() {
        return {
            DBClusterId: 'DBClusterId',
            DBNodeId: 'DBNodeId',
            describeSimulateSwitchMode: 'DescribeSimulateSwitchMode',
            endTime: 'EndTime',
            logType: 'LogType',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            simulateListId: 'SimulateListId',
            simulateModeList: 'SimulateModeList',
            simulateStatusList: 'SimulateStatusList',
            startTime: 'StartTime',
        };
    }
    static types() {
        return {
            DBClusterId: 'string',
            DBNodeId: 'string',
            describeSimulateSwitchMode: 'string',
            endTime: 'string',
            logType: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            pageNumber: 'number',
            pageSize: 'number',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            simulateListId: 'string',
            simulateModeList: 'string',
            simulateStatusList: 'string',
            startTime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBLogFilesRequest = DescribeDBLogFilesRequest;
//# sourceMappingURL=DescribeDblogFilesRequest.js.map