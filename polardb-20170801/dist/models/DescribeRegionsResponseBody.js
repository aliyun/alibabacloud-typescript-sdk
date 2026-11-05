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
exports.DescribeRegionsResponseBody = exports.DescribeRegionsResponseBodyRegions = exports.DescribeRegionsResponseBodyRegionsRegion = exports.DescribeRegionsResponseBodyRegionsRegionZones = exports.DescribeRegionsResponseBodyRegionsRegionZonesZone = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRegionsResponseBodyRegionsRegionZonesZone extends $dara.Model {
    static names() {
        return {
            vpcEnabled: 'VpcEnabled',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            vpcEnabled: 'boolean',
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
exports.DescribeRegionsResponseBodyRegionsRegionZonesZone = DescribeRegionsResponseBodyRegionsRegionZonesZone;
class DescribeRegionsResponseBodyRegionsRegionZones extends $dara.Model {
    static names() {
        return {
            zone: 'Zone',
        };
    }
    static types() {
        return {
            zone: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegionZonesZone },
        };
    }
    validate() {
        if (Array.isArray(this.zone)) {
            $dara.Model.validateArray(this.zone);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRegionsResponseBodyRegionsRegionZones = DescribeRegionsResponseBodyRegionsRegionZones;
class DescribeRegionsResponseBodyRegionsRegion extends $dara.Model {
    static names() {
        return {
            regionId: 'RegionId',
            zones: 'Zones',
        };
    }
    static types() {
        return {
            regionId: 'string',
            zones: DescribeRegionsResponseBodyRegionsRegionZones,
        };
    }
    validate() {
        if (this.zones && typeof this.zones.validate === 'function') {
            this.zones.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRegionsResponseBodyRegionsRegion = DescribeRegionsResponseBodyRegionsRegion;
class DescribeRegionsResponseBodyRegions extends $dara.Model {
    static names() {
        return {
            region: 'Region',
        };
    }
    static types() {
        return {
            region: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegionsRegion },
        };
    }
    validate() {
        if (Array.isArray(this.region)) {
            $dara.Model.validateArray(this.region);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRegionsResponseBodyRegions = DescribeRegionsResponseBodyRegions;
class DescribeRegionsResponseBody extends $dara.Model {
    static names() {
        return {
            regions: 'Regions',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            regions: DescribeRegionsResponseBodyRegions,
            requestId: 'string',
        };
    }
    validate() {
        if (this.regions && typeof this.regions.validate === 'function') {
            this.regions.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRegionsResponseBody = DescribeRegionsResponseBody;
//# sourceMappingURL=DescribeRegionsResponseBody.js.map