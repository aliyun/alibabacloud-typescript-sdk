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
exports.DescribeDBClusterMigrationResponseBody = exports.DescribeDBClusterMigrationResponseBodyRdsEndpointList = exports.DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems = exports.DescribeDBClusterMigrationResponseBodyDBClusterEndpointList = exports.DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems extends $dara.Model {
    static names() {
        return {
            connectionString: 'ConnectionString',
            IPAddress: 'IPAddress',
            netType: 'NetType',
            port: 'Port',
            SSLEnabled: 'SSLEnabled',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
        };
    }
    static types() {
        return {
            connectionString: 'string',
            IPAddress: 'string',
            netType: 'string',
            port: 'string',
            SSLEnabled: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems = DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems;
class DescribeDBClusterMigrationResponseBodyDBClusterEndpointList extends $dara.Model {
    static names() {
        return {
            addressItems: 'AddressItems',
            DBEndpointId: 'DBEndpointId',
            endpointType: 'EndpointType',
            readWriteMode: 'ReadWriteMode',
        };
    }
    static types() {
        return {
            addressItems: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems },
            DBEndpointId: 'string',
            endpointType: 'string',
            readWriteMode: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.addressItems)) {
            $dara.Model.validateArray(this.addressItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterMigrationResponseBodyDBClusterEndpointList = DescribeDBClusterMigrationResponseBodyDBClusterEndpointList;
class DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems extends $dara.Model {
    static names() {
        return {
            connectionString: 'ConnectionString',
            IPAddress: 'IPAddress',
            netType: 'NetType',
            port: 'Port',
            SSLEnabled: 'SSLEnabled',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
        };
    }
    static types() {
        return {
            connectionString: 'string',
            IPAddress: 'string',
            netType: 'string',
            port: 'string',
            SSLEnabled: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems = DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems;
class DescribeDBClusterMigrationResponseBodyRdsEndpointList extends $dara.Model {
    static names() {
        return {
            addressItems: 'AddressItems',
            custinsType: 'CustinsType',
            DBEndpointId: 'DBEndpointId',
            endpointType: 'EndpointType',
        };
    }
    static types() {
        return {
            addressItems: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems },
            custinsType: 'string',
            DBEndpointId: 'string',
            endpointType: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.addressItems)) {
            $dara.Model.validateArray(this.addressItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterMigrationResponseBodyRdsEndpointList = DescribeDBClusterMigrationResponseBodyRdsEndpointList;
class DescribeDBClusterMigrationResponseBody extends $dara.Model {
    static names() {
        return {
            comment: 'Comment',
            DBClusterEndpointList: 'DBClusterEndpointList',
            DBClusterId: 'DBClusterId',
            DBClusterReadWriteMode: 'DBClusterReadWriteMode',
            delayedSeconds: 'DelayedSeconds',
            dtsInstanceId: 'DtsInstanceId',
            expiredTime: 'ExpiredTime',
            migrationStatus: 'MigrationStatus',
            rdsEndpointList: 'RdsEndpointList',
            rdsReadWriteMode: 'RdsReadWriteMode',
            requestId: 'RequestId',
            sourceRDSDBInstanceId: 'SourceRDSDBInstanceId',
            srcDbType: 'SrcDbType',
            topologies: 'Topologies',
        };
    }
    static types() {
        return {
            comment: 'string',
            DBClusterEndpointList: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyDBClusterEndpointList },
            DBClusterId: 'string',
            DBClusterReadWriteMode: 'string',
            delayedSeconds: 'number',
            dtsInstanceId: 'string',
            expiredTime: 'string',
            migrationStatus: 'string',
            rdsEndpointList: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyRdsEndpointList },
            rdsReadWriteMode: 'string',
            requestId: 'string',
            sourceRDSDBInstanceId: 'string',
            srcDbType: 'string',
            topologies: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.DBClusterEndpointList)) {
            $dara.Model.validateArray(this.DBClusterEndpointList);
        }
        if (Array.isArray(this.rdsEndpointList)) {
            $dara.Model.validateArray(this.rdsEndpointList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterMigrationResponseBody = DescribeDBClusterMigrationResponseBody;
//# sourceMappingURL=DescribeDbclusterMigrationResponseBody.js.map