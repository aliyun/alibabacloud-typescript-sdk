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
exports.DescribeRegionInfosResponseBody = exports.DescribeRegionInfosResponseBodyRegions = exports.DescribeRegionInfosResponseBodyRegionsRDSRegion = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRegionInfosResponseBodyRegionsRDSRegion extends $dara.Model {
    static names() {
        return {
            regionId: 'RegionId',
        };
    }
    static types() {
        return {
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
exports.DescribeRegionInfosResponseBodyRegionsRDSRegion = DescribeRegionInfosResponseBodyRegionsRDSRegion;
class DescribeRegionInfosResponseBodyRegions extends $dara.Model {
    static names() {
        return {
            RDSRegion: 'RDSRegion',
        };
    }
    static types() {
        return {
            RDSRegion: { 'type': 'array', 'itemType': DescribeRegionInfosResponseBodyRegionsRDSRegion },
        };
    }
    validate() {
        if (Array.isArray(this.RDSRegion)) {
            $dara.Model.validateArray(this.RDSRegion);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRegionInfosResponseBodyRegions = DescribeRegionInfosResponseBodyRegions;
class DescribeRegionInfosResponseBody extends $dara.Model {
    static names() {
        return {
            regions: 'Regions',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            regions: DescribeRegionInfosResponseBodyRegions,
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
exports.DescribeRegionInfosResponseBody = DescribeRegionInfosResponseBody;
//# sourceMappingURL=DescribeRegionInfosResponseBody.js.map