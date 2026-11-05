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
exports.DescribeDBClusterAvailableResourcesResponseBody = exports.DescribeDBClusterAvailableResourcesResponseBodyAvailableZones = exports.DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines = exports.DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources extends $dara.Model {
    static names() {
        return {
            category: 'Category',
            DBNodeClass: 'DBNodeClass',
        };
    }
    static types() {
        return {
            category: 'string',
            DBNodeClass: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources = DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources;
class DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines extends $dara.Model {
    static names() {
        return {
            availableResources: 'AvailableResources',
            engine: 'Engine',
        };
    }
    static types() {
        return {
            availableResources: { 'type': 'array', 'itemType': DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEnginesAvailableResources },
            engine: 'string',
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
exports.DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines = DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines;
class DescribeDBClusterAvailableResourcesResponseBodyAvailableZones extends $dara.Model {
    static names() {
        return {
            regionId: 'RegionId',
            supportedEngines: 'SupportedEngines',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            regionId: 'string',
            supportedEngines: { 'type': 'array', 'itemType': DescribeDBClusterAvailableResourcesResponseBodyAvailableZonesSupportedEngines },
            zoneId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.supportedEngines)) {
            $dara.Model.validateArray(this.supportedEngines);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterAvailableResourcesResponseBodyAvailableZones = DescribeDBClusterAvailableResourcesResponseBodyAvailableZones;
class DescribeDBClusterAvailableResourcesResponseBody extends $dara.Model {
    static names() {
        return {
            availableZones: 'AvailableZones',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            availableZones: { 'type': 'array', 'itemType': DescribeDBClusterAvailableResourcesResponseBodyAvailableZones },
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
exports.DescribeDBClusterAvailableResourcesResponseBody = DescribeDBClusterAvailableResourcesResponseBody;
//# sourceMappingURL=DescribeDbclusterAvailableResourcesResponseBody.js.map