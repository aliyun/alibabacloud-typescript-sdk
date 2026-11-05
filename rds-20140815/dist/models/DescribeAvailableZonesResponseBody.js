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
exports.DescribeAvailableZonesResponseBody = exports.DescribeAvailableZonesResponseBodyAvailableZones = exports.DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines = exports.DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions = exports.DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys = exports.DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes extends $dara.Model {
    static names() {
        return {
            storageType: 'StorageType',
        };
    }
    static types() {
        return {
            storageType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes = DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes;
class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys extends $dara.Model {
    static names() {
        return {
            category: 'Category',
            supportedStorageTypes: 'SupportedStorageTypes',
        };
    }
    static types() {
        return {
            category: 'string',
            supportedStorageTypes: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorysSupportedStorageTypes },
        };
    }
    validate() {
        if (Array.isArray(this.supportedStorageTypes)) {
            $dara.Model.validateArray(this.supportedStorageTypes);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys = DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys;
class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions extends $dara.Model {
    static names() {
        return {
            supportedCategorys: 'SupportedCategorys',
            version: 'Version',
        };
    }
    static types() {
        return {
            supportedCategorys: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersionsSupportedCategorys },
            version: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.supportedCategorys)) {
            $dara.Model.validateArray(this.supportedCategorys);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions = DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions;
class DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines extends $dara.Model {
    static names() {
        return {
            engine: 'Engine',
            supportedEngineVersions: 'SupportedEngineVersions',
        };
    }
    static types() {
        return {
            engine: 'string',
            supportedEngineVersions: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZonesSupportedEnginesSupportedEngineVersions },
        };
    }
    validate() {
        if (Array.isArray(this.supportedEngineVersions)) {
            $dara.Model.validateArray(this.supportedEngineVersions);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines = DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines;
class DescribeAvailableZonesResponseBodyAvailableZones extends $dara.Model {
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
            supportedEngines: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZonesSupportedEngines },
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
exports.DescribeAvailableZonesResponseBodyAvailableZones = DescribeAvailableZonesResponseBodyAvailableZones;
class DescribeAvailableZonesResponseBody extends $dara.Model {
    static names() {
        return {
            availableZones: 'AvailableZones',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            availableZones: { 'type': 'array', 'itemType': DescribeAvailableZonesResponseBodyAvailableZones },
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
exports.DescribeAvailableZonesResponseBody = DescribeAvailableZonesResponseBody;
//# sourceMappingURL=DescribeAvailableZonesResponseBody.js.map