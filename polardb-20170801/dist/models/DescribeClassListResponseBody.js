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
exports.DescribeClassListResponseBody = exports.DescribeClassListResponseBodyItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeClassListResponseBodyItems extends $dara.Model {
    static names() {
        return {
            classCode: 'ClassCode',
            classGroup: 'ClassGroup',
            classTypeLevel: 'ClassTypeLevel',
            cpu: 'Cpu',
            essdMaxStorageCapacity: 'EssdMaxStorageCapacity',
            maxConnections: 'MaxConnections',
            maxIOPS: 'MaxIOPS',
            maxStorageCapacity: 'MaxStorageCapacity',
            memoryClass: 'MemoryClass',
            pl1MaxIOPS: 'Pl1MaxIOPS',
            pl2MaxIOPS: 'Pl2MaxIOPS',
            pl3MaxIOPS: 'Pl3MaxIOPS',
            polarStoreMaxStorageCapacity: 'PolarStoreMaxStorageCapacity',
            psl4MaxIOPS: 'Psl4MaxIOPS',
            psl5MaxIOPS: 'Psl5MaxIOPS',
            referenceExtPrice: 'ReferenceExtPrice',
            referencePrice: 'ReferencePrice',
        };
    }
    static types() {
        return {
            classCode: 'string',
            classGroup: 'string',
            classTypeLevel: 'string',
            cpu: 'string',
            essdMaxStorageCapacity: 'string',
            maxConnections: 'string',
            maxIOPS: 'string',
            maxStorageCapacity: 'string',
            memoryClass: 'string',
            pl1MaxIOPS: 'string',
            pl2MaxIOPS: 'string',
            pl3MaxIOPS: 'string',
            polarStoreMaxStorageCapacity: 'string',
            psl4MaxIOPS: 'string',
            psl5MaxIOPS: 'string',
            referenceExtPrice: 'string',
            referencePrice: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeClassListResponseBodyItems = DescribeClassListResponseBodyItems;
class DescribeClassListResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            regionId: 'RegionId',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': DescribeClassListResponseBodyItems },
            regionId: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeClassListResponseBody = DescribeClassListResponseBody;
//# sourceMappingURL=DescribeClassListResponseBody.js.map