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
exports.DescribeRegionsResponseBody = exports.DescribeRegionsResponseBodyRegions = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRegionsResponseBodyRegions extends $dara.Model {
    static names() {
        return {
            regionEndpoint: 'RegionEndpoint',
            regionId: 'RegionId',
        };
    }
    static types() {
        return {
            regionEndpoint: 'string',
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
            regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.regions)) {
            $dara.Model.validateArray(this.regions);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRegionsResponseBody = DescribeRegionsResponseBody;
//# sourceMappingURL=DescribeRegionsResponseBody.js.map