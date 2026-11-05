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
exports.CreateDBNodesRequest = exports.CreateDBNodesRequestDBNode = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateDBNodesRequestDBNode extends $dara.Model {
    static names() {
        return {
            targetClass: 'TargetClass',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            targetClass: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateDBNodesRequestDBNode = CreateDBNodesRequestDBNode;
class CreateDBNodesRequest extends $dara.Model {
    static names() {
        return {
            autoUseCoupon: 'AutoUseCoupon',
            clientToken: 'ClientToken',
            cloudProvider: 'CloudProvider',
            DBClusterId: 'DBClusterId',
            DBNode: 'DBNode',
            DBNodeType: 'DBNodeType',
            endpointBindList: 'EndpointBindList',
            imciSwitch: 'ImciSwitch',
            ownerAccount: 'OwnerAccount',
            ownerId: 'OwnerId',
            plannedEndTime: 'PlannedEndTime',
            plannedStartTime: 'PlannedStartTime',
            promotionCode: 'PromotionCode',
            resourceGroupId: 'ResourceGroupId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
        };
    }
    static types() {
        return {
            autoUseCoupon: 'boolean',
            clientToken: 'string',
            cloudProvider: 'string',
            DBClusterId: 'string',
            DBNode: { 'type': 'array', 'itemType': CreateDBNodesRequestDBNode },
            DBNodeType: 'string',
            endpointBindList: 'string',
            imciSwitch: 'string',
            ownerAccount: 'string',
            ownerId: 'number',
            plannedEndTime: 'string',
            plannedStartTime: 'string',
            promotionCode: 'string',
            resourceGroupId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.DBNode)) {
            $dara.Model.validateArray(this.DBNode);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateDBNodesRequest = CreateDBNodesRequest;
//# sourceMappingURL=CreateDbnodesRequest.js.map