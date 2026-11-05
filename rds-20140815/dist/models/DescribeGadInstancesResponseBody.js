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
exports.DescribeGadInstancesResponseBody = exports.DescribeGadInstancesResponseBodyGadInstances = exports.DescribeGadInstancesResponseBodyGadInstancesGadInstanceMembers = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeGadInstancesResponseBodyGadInstancesGadInstanceMembers extends $dara.Model {
    static names() {
        return {
            DBInstanceID: 'DBInstanceID',
            dtsInstance: 'DtsInstance',
            engine: 'Engine',
            engineVersion: 'EngineVersion',
            regionId: 'RegionId',
            resourceGroupId: 'ResourceGroupId',
            role: 'Role',
            status: 'Status',
        };
    }
    static types() {
        return {
            DBInstanceID: 'string',
            dtsInstance: 'string',
            engine: 'string',
            engineVersion: 'string',
            regionId: 'string',
            resourceGroupId: 'string',
            role: 'string',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGadInstancesResponseBodyGadInstancesGadInstanceMembers = DescribeGadInstancesResponseBodyGadInstancesGadInstanceMembers;
class DescribeGadInstancesResponseBodyGadInstances extends $dara.Model {
    static names() {
        return {
            creationTime: 'CreationTime',
            description: 'Description',
            gadInstanceMembers: 'GadInstanceMembers',
            gadInstanceName: 'GadInstanceName',
            modificationTime: 'ModificationTime',
            service: 'Service',
            status: 'Status',
        };
    }
    static types() {
        return {
            creationTime: 'string',
            description: 'string',
            gadInstanceMembers: { 'type': 'array', 'itemType': DescribeGadInstancesResponseBodyGadInstancesGadInstanceMembers },
            gadInstanceName: 'string',
            modificationTime: 'string',
            service: 'string',
            status: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.gadInstanceMembers)) {
            $dara.Model.validateArray(this.gadInstanceMembers);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGadInstancesResponseBodyGadInstances = DescribeGadInstancesResponseBodyGadInstances;
class DescribeGadInstancesResponseBody extends $dara.Model {
    static names() {
        return {
            gadInstances: 'GadInstances',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            gadInstances: { 'type': 'array', 'itemType': DescribeGadInstancesResponseBodyGadInstances },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.gadInstances)) {
            $dara.Model.validateArray(this.gadInstances);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeGadInstancesResponseBody = DescribeGadInstancesResponseBody;
//# sourceMappingURL=DescribeGadInstancesResponseBody.js.map