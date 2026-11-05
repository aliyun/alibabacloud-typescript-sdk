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
exports.DescribeDBProxyResponseBody = exports.DescribeDBProxyResponseBodyDbProxyEndpointItems = exports.DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems = exports.DescribeDBProxyResponseBodyDBProxyNodes = exports.DescribeDBProxyResponseBodyDBProxyNodesDBProxyNodes = exports.DescribeDBProxyResponseBodyDBProxyInstanceMinorVersions = exports.DescribeDBProxyResponseBodyDBProxyConnectStringItems = exports.DescribeDBProxyResponseBodyDBProxyConnectStringItemsDBProxyConnectStringItems = exports.DescribeDBProxyResponseBodyDBProxyAVZones = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBProxyResponseBodyDBProxyAVZones extends $dara.Model {
    static names() {
        return {
            DBProxyAVZones: 'DBProxyAVZones',
        };
    }
    static types() {
        return {
            DBProxyAVZones: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.DBProxyAVZones)) {
            $dara.Model.validateArray(this.DBProxyAVZones);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBProxyResponseBodyDBProxyAVZones = DescribeDBProxyResponseBodyDBProxyAVZones;
class DescribeDBProxyResponseBodyDBProxyConnectStringItemsDBProxyConnectStringItems extends $dara.Model {
    static names() {
        return {
            DBProxyConnectString: 'DBProxyConnectString',
            DBProxyConnectStringNetType: 'DBProxyConnectStringNetType',
            DBProxyConnectStringNetWorkType: 'DBProxyConnectStringNetWorkType',
            DBProxyConnectStringPort: 'DBProxyConnectStringPort',
            DBProxyEndpointId: 'DBProxyEndpointId',
            DBProxyEndpointName: 'DBProxyEndpointName',
            DBProxyVpcId: 'DBProxyVpcId',
            DBProxyVpcInstanceId: 'DBProxyVpcInstanceId',
            DBProxyVswitchId: 'DBProxyVswitchId',
        };
    }
    static types() {
        return {
            DBProxyConnectString: 'string',
            DBProxyConnectStringNetType: 'string',
            DBProxyConnectStringNetWorkType: 'string',
            DBProxyConnectStringPort: 'string',
            DBProxyEndpointId: 'string',
            DBProxyEndpointName: 'string',
            DBProxyVpcId: 'string',
            DBProxyVpcInstanceId: 'string',
            DBProxyVswitchId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBProxyResponseBodyDBProxyConnectStringItemsDBProxyConnectStringItems = DescribeDBProxyResponseBodyDBProxyConnectStringItemsDBProxyConnectStringItems;
class DescribeDBProxyResponseBodyDBProxyConnectStringItems extends $dara.Model {
    static names() {
        return {
            DBProxyConnectStringItems: 'DBProxyConnectStringItems',
        };
    }
    static types() {
        return {
            DBProxyConnectStringItems: { 'type': 'array', 'itemType': DescribeDBProxyResponseBodyDBProxyConnectStringItemsDBProxyConnectStringItems },
        };
    }
    validate() {
        if (Array.isArray(this.DBProxyConnectStringItems)) {
            $dara.Model.validateArray(this.DBProxyConnectStringItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBProxyResponseBodyDBProxyConnectStringItems = DescribeDBProxyResponseBodyDBProxyConnectStringItems;
class DescribeDBProxyResponseBodyDBProxyInstanceMinorVersions extends $dara.Model {
    static names() {
        return {
            DBProxyInstanceMinorVersions: 'DBProxyInstanceMinorVersions',
        };
    }
    static types() {
        return {
            DBProxyInstanceMinorVersions: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.DBProxyInstanceMinorVersions)) {
            $dara.Model.validateArray(this.DBProxyInstanceMinorVersions);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBProxyResponseBodyDBProxyInstanceMinorVersions = DescribeDBProxyResponseBodyDBProxyInstanceMinorVersions;
class DescribeDBProxyResponseBodyDBProxyNodesDBProxyNodes extends $dara.Model {
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
exports.DescribeDBProxyResponseBodyDBProxyNodesDBProxyNodes = DescribeDBProxyResponseBodyDBProxyNodesDBProxyNodes;
class DescribeDBProxyResponseBodyDBProxyNodes extends $dara.Model {
    static names() {
        return {
            DBProxyNodes: 'DBProxyNodes',
        };
    }
    static types() {
        return {
            DBProxyNodes: { 'type': 'array', 'itemType': DescribeDBProxyResponseBodyDBProxyNodesDBProxyNodes },
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
exports.DescribeDBProxyResponseBodyDBProxyNodes = DescribeDBProxyResponseBodyDBProxyNodes;
class DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems extends $dara.Model {
    static names() {
        return {
            dbProxyEndpointAliases: 'DbProxyEndpointAliases',
            dbProxyEndpointName: 'DbProxyEndpointName',
            dbProxyEndpointType: 'DbProxyEndpointType',
            dbProxyReadWriteMode: 'DbProxyReadWriteMode',
        };
    }
    static types() {
        return {
            dbProxyEndpointAliases: 'string',
            dbProxyEndpointName: 'string',
            dbProxyEndpointType: 'string',
            dbProxyReadWriteMode: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems = DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems;
class DescribeDBProxyResponseBodyDbProxyEndpointItems extends $dara.Model {
    static names() {
        return {
            dbProxyEndpointItems: 'DbProxyEndpointItems',
        };
    }
    static types() {
        return {
            dbProxyEndpointItems: { 'type': 'array', 'itemType': DescribeDBProxyResponseBodyDbProxyEndpointItemsDbProxyEndpointItems },
        };
    }
    validate() {
        if (Array.isArray(this.dbProxyEndpointItems)) {
            $dara.Model.validateArray(this.dbProxyEndpointItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBProxyResponseBodyDbProxyEndpointItems = DescribeDBProxyResponseBodyDbProxyEndpointItems;
class DescribeDBProxyResponseBody extends $dara.Model {
    static names() {
        return {
            DBProxyAVZones: 'DBProxyAVZones',
            DBProxyConnectStringItems: 'DBProxyConnectStringItems',
            DBProxyEngineType: 'DBProxyEngineType',
            DBProxyInstanceCurrentMinorVersion: 'DBProxyInstanceCurrentMinorVersion',
            DBProxyInstanceLatestMinorVersion: 'DBProxyInstanceLatestMinorVersion',
            DBProxyInstanceMinorVersions: 'DBProxyInstanceMinorVersions',
            DBProxyInstanceName: 'DBProxyInstanceName',
            DBProxyInstanceNum: 'DBProxyInstanceNum',
            DBProxyInstanceSize: 'DBProxyInstanceSize',
            DBProxyInstanceStatus: 'DBProxyInstanceStatus',
            DBProxyInstanceType: 'DBProxyInstanceType',
            DBProxyKindCode: 'DBProxyKindCode',
            DBProxyNodes: 'DBProxyNodes',
            DBProxyPersistentConnectionStatus: 'DBProxyPersistentConnectionStatus',
            DBProxyServiceStatus: 'DBProxyServiceStatus',
            dbProxyEndpointItems: 'DbProxyEndpointItems',
            requestId: 'RequestId',
            resourceGroupId: 'ResourceGroupId',
        };
    }
    static types() {
        return {
            DBProxyAVZones: DescribeDBProxyResponseBodyDBProxyAVZones,
            DBProxyConnectStringItems: DescribeDBProxyResponseBodyDBProxyConnectStringItems,
            DBProxyEngineType: 'string',
            DBProxyInstanceCurrentMinorVersion: 'string',
            DBProxyInstanceLatestMinorVersion: 'string',
            DBProxyInstanceMinorVersions: DescribeDBProxyResponseBodyDBProxyInstanceMinorVersions,
            DBProxyInstanceName: 'string',
            DBProxyInstanceNum: 'number',
            DBProxyInstanceSize: 'string',
            DBProxyInstanceStatus: 'string',
            DBProxyInstanceType: 'string',
            DBProxyKindCode: 'string',
            DBProxyNodes: DescribeDBProxyResponseBodyDBProxyNodes,
            DBProxyPersistentConnectionStatus: 'string',
            DBProxyServiceStatus: 'string',
            dbProxyEndpointItems: DescribeDBProxyResponseBodyDbProxyEndpointItems,
            requestId: 'string',
            resourceGroupId: 'string',
        };
    }
    validate() {
        if (this.DBProxyAVZones && typeof this.DBProxyAVZones.validate === 'function') {
            this.DBProxyAVZones.validate();
        }
        if (this.DBProxyConnectStringItems && typeof this.DBProxyConnectStringItems.validate === 'function') {
            this.DBProxyConnectStringItems.validate();
        }
        if (this.DBProxyInstanceMinorVersions && typeof this.DBProxyInstanceMinorVersions.validate === 'function') {
            this.DBProxyInstanceMinorVersions.validate();
        }
        if (this.DBProxyNodes && typeof this.DBProxyNodes.validate === 'function') {
            this.DBProxyNodes.validate();
        }
        if (this.dbProxyEndpointItems && typeof this.dbProxyEndpointItems.validate === 'function') {
            this.dbProxyEndpointItems.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBProxyResponseBody = DescribeDBProxyResponseBody;
//# sourceMappingURL=DescribeDbproxyResponseBody.js.map