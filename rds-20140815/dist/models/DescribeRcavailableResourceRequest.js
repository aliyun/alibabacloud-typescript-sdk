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
exports.DescribeRCAvailableResourceRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCAvailableResourceRequest extends $dara.Model {
    static names() {
        return {
            cores: 'Cores',
            dataDiskCategory: 'DataDiskCategory',
            dedicatedHostId: 'DedicatedHostId',
            destinationResource: 'DestinationResource',
            instanceChargeType: 'InstanceChargeType',
            instanceType: 'InstanceType',
            ioOptimized: 'IoOptimized',
            memory: 'Memory',
            networkCategory: 'NetworkCategory',
            regionId: 'RegionId',
            resourceType: 'ResourceType',
            scope: 'Scope',
            spotDuration: 'SpotDuration',
            spotStrategy: 'SpotStrategy',
            supportCase: 'SupportCase',
            systemDiskCategory: 'SystemDiskCategory',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            cores: 'number',
            dataDiskCategory: 'string',
            dedicatedHostId: 'string',
            destinationResource: 'string',
            instanceChargeType: 'string',
            instanceType: 'string',
            ioOptimized: 'string',
            memory: 'number',
            networkCategory: 'string',
            regionId: 'string',
            resourceType: 'string',
            scope: 'string',
            spotDuration: 'number',
            spotStrategy: 'string',
            supportCase: 'string',
            systemDiskCategory: 'string',
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
exports.DescribeRCAvailableResourceRequest = DescribeRCAvailableResourceRequest;
//# sourceMappingURL=DescribeRcavailableResourceRequest.js.map