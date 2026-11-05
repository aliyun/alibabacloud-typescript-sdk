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
exports.DescribeDBProxyEndpointResponseBody = exports.DescribeDBProxyEndpointResponseBodyEndpointConnectItems = exports.DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems = exports.DescribeDBProxyEndpointResponseBodyDBProxyNodes = exports.DescribeDBProxyEndpointResponseBodyDBProxyNodesDBProxyNodes = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBProxyEndpointResponseBodyDBProxyNodesDBProxyNodes extends $dara.Model {
    static names() {
        return {
            cpuCores: 'cpuCores',
            nodeId: 'nodeId',
            zoneId: 'zoneId',
        };
    }
    static types() {
        return {
            cpuCores: 'string',
            nodeId: 'string',
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
exports.DescribeDBProxyEndpointResponseBodyDBProxyNodesDBProxyNodes = DescribeDBProxyEndpointResponseBodyDBProxyNodesDBProxyNodes;
class DescribeDBProxyEndpointResponseBodyDBProxyNodes extends $dara.Model {
    static names() {
        return {
            DBProxyNodes: 'DBProxyNodes',
        };
    }
    static types() {
        return {
            DBProxyNodes: { 'type': 'array', 'itemType': DescribeDBProxyEndpointResponseBodyDBProxyNodesDBProxyNodes },
        };
    }
    validate() {
        if (Array.isArray(this.DBProxyNodes)) {
            $dara.Model.validateArray(this.DBProxyNodes);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBProxyEndpointResponseBodyDBProxyNodes = DescribeDBProxyEndpointResponseBodyDBProxyNodes;
class DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems extends $dara.Model {
    static names() {
        return {
            dbProxyEndpointConnectString: 'DbProxyEndpointConnectString',
            dbProxyEndpointNetType: 'DbProxyEndpointNetType',
            dbProxyEndpointPort: 'DbProxyEndpointPort',
        };
    }
    static types() {
        return {
            dbProxyEndpointConnectString: 'string',
            dbProxyEndpointNetType: 'string',
            dbProxyEndpointPort: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems = DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems;
class DescribeDBProxyEndpointResponseBodyEndpointConnectItems extends $dara.Model {
    static names() {
        return {
            endpointConnectItems: 'EndpointConnectItems',
        };
    }
    static types() {
        return {
            endpointConnectItems: { 'type': 'array', 'itemType': DescribeDBProxyEndpointResponseBodyEndpointConnectItemsEndpointConnectItems },
        };
    }
    validate() {
        if (Array.isArray(this.endpointConnectItems)) {
            $dara.Model.validateArray(this.endpointConnectItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBProxyEndpointResponseBodyEndpointConnectItems = DescribeDBProxyEndpointResponseBodyEndpointConnectItems;
class DescribeDBProxyEndpointResponseBody extends $dara.Model {
    static names() {
        return {
            causalConsistReadTimeout: 'CausalConsistReadTimeout',
            DBProxyConnectString: 'DBProxyConnectString',
            DBProxyConnectStringNetType: 'DBProxyConnectStringNetType',
            DBProxyConnectStringPort: 'DBProxyConnectStringPort',
            DBProxyEndpointCostThresholdForDuckdb: 'DBProxyEndpointCostThresholdForDuckdb',
            DBProxyEndpointId: 'DBProxyEndpointId',
            DBProxyEndpointMinSlaveCount: 'DBProxyEndpointMinSlaveCount',
            DBProxyEngineType: 'DBProxyEngineType',
            DBProxyFeatures: 'DBProxyFeatures',
            DBProxyNodes: 'DBProxyNodes',
            dbProxyEndpointAliases: 'DbProxyEndpointAliases',
            dbProxyEndpointReadWriteMode: 'DbProxyEndpointReadWriteMode',
            dbProxyEndpointVpcId: 'DbProxyEndpointVpcId',
            dbProxyEndpointVswitchId: 'DbProxyEndpointVswitchId',
            dbProxyEndpointZoneId: 'DbProxyEndpointZoneId',
            endpointConnectItems: 'EndpointConnectItems',
            readOnlyInstanceDistributionType: 'ReadOnlyInstanceDistributionType',
            readOnlyInstanceMaxDelayTime: 'ReadOnlyInstanceMaxDelayTime',
            readOnlyInstanceWeight: 'ReadOnlyInstanceWeight',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            causalConsistReadTimeout: 'string',
            DBProxyConnectString: 'string',
            DBProxyConnectStringNetType: 'string',
            DBProxyConnectStringPort: 'string',
            DBProxyEndpointCostThresholdForDuckdb: 'string',
            DBProxyEndpointId: 'string',
            DBProxyEndpointMinSlaveCount: 'string',
            DBProxyEngineType: 'string',
            DBProxyFeatures: 'string',
            DBProxyNodes: DescribeDBProxyEndpointResponseBodyDBProxyNodes,
            dbProxyEndpointAliases: 'string',
            dbProxyEndpointReadWriteMode: 'string',
            dbProxyEndpointVpcId: 'string',
            dbProxyEndpointVswitchId: 'string',
            dbProxyEndpointZoneId: 'string',
            endpointConnectItems: DescribeDBProxyEndpointResponseBodyEndpointConnectItems,
            readOnlyInstanceDistributionType: 'string',
            readOnlyInstanceMaxDelayTime: 'string',
            readOnlyInstanceWeight: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (this.DBProxyNodes && typeof this.DBProxyNodes.validate === 'function') {
            this.DBProxyNodes.validate();
        }
        if (this.endpointConnectItems && typeof this.endpointConnectItems.validate === 'function') {
            this.endpointConnectItems.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBProxyEndpointResponseBody = DescribeDBProxyEndpointResponseBody;
//# sourceMappingURL=DescribeDbproxyEndpointResponseBody.js.map