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
exports.DescribeRCAvailableResourceResponseBody = exports.DescribeRCAvailableResourceResponseBodyAvailableZones = exports.DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResources = exports.DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResourcesSupportedResources = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResourcesSupportedResources extends $dara.Model {
    static names() {
        return {
            max: 'Max',
            min: 'Min',
            quotaStatus: 'QuotaStatus',
            status: 'Status',
            statusCategory: 'StatusCategory',
            unit: 'Unit',
            value: 'Value',
        };
    }
    static types() {
        return {
            max: 'number',
            min: 'number',
            quotaStatus: 'string',
            status: 'string',
            statusCategory: 'string',
            unit: 'string',
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
exports.DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResourcesSupportedResources = DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResourcesSupportedResources;
class DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResources extends $dara.Model {
    static names() {
        return {
            supportedResources: 'SupportedResources',
            type: 'Type',
        };
    }
    static types() {
        return {
            supportedResources: { 'type': 'array', 'itemType': DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResourcesSupportedResources },
            type: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.supportedResources)) {
            $dara.Model.validateArray(this.supportedResources);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResources = DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResources;
class DescribeRCAvailableResourceResponseBodyAvailableZones extends $dara.Model {
    static names() {
        return {
            availableResources: 'AvailableResources',
            regionId: 'RegionId',
            status: 'Status',
            statusCategory: 'StatusCategory',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            availableResources: { 'type': 'array', 'itemType': DescribeRCAvailableResourceResponseBodyAvailableZonesAvailableResources },
            regionId: 'string',
            status: 'string',
            statusCategory: 'string',
            zoneId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.availableResources)) {
            $dara.Model.validateArray(this.availableResources);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCAvailableResourceResponseBodyAvailableZones = DescribeRCAvailableResourceResponseBodyAvailableZones;
class DescribeRCAvailableResourceResponseBody extends $dara.Model {
    static names() {
        return {
            availableZones: 'AvailableZones',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            availableZones: { 'type': 'array', 'itemType': DescribeRCAvailableResourceResponseBodyAvailableZones },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.availableZones)) {
            $dara.Model.validateArray(this.availableZones);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRCAvailableResourceResponseBody = DescribeRCAvailableResourceResponseBody;
//# sourceMappingURL=DescribeRcavailableResourceResponseBody.js.map