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
exports.DescribeDBClusterNetInfoResponseBody = exports.DescribeDBClusterNetInfoResponseBodyDBNodeNetInfos = exports.DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfo = exports.DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfos = exports.DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfosNetInfo = exports.DescribeDBClusterNetInfoResponseBodyDBClusterNetInfos = exports.DescribeDBClusterNetInfoResponseBodyDBClusterNetInfosDBClusterNetInfo = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBClusterNetInfoResponseBodyDBClusterNetInfosDBClusterNetInfo extends $dara.Model {
    static names() {
        return {
            connectionString: 'ConnectionString',
            connectionStringType: 'ConnectionStringType',
            IPAddress: 'IPAddress',
            IPType: 'IPType',
            port: 'Port',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
        };
    }
    static types() {
        return {
            connectionString: 'string',
            connectionStringType: 'string',
            IPAddress: 'string',
            IPType: 'string',
            port: 'string',
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
exports.DescribeDBClusterNetInfoResponseBodyDBClusterNetInfosDBClusterNetInfo = DescribeDBClusterNetInfoResponseBodyDBClusterNetInfosDBClusterNetInfo;
class DescribeDBClusterNetInfoResponseBodyDBClusterNetInfos extends $dara.Model {
    static names() {
        return {
            DBClusterNetInfo: 'DBClusterNetInfo',
        };
    }
    static types() {
        return {
            DBClusterNetInfo: { 'type': 'array', 'itemType': DescribeDBClusterNetInfoResponseBodyDBClusterNetInfosDBClusterNetInfo },
        };
    }
    validate() {
        if (Array.isArray(this.DBClusterNetInfo)) {
            $dara.Model.validateArray(this.DBClusterNetInfo);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterNetInfoResponseBodyDBClusterNetInfos = DescribeDBClusterNetInfoResponseBodyDBClusterNetInfos;
class DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfosNetInfo extends $dara.Model {
    static names() {
        return {
            connectionString: 'ConnectionString',
            IPAddress: 'IPAddress',
            IPType: 'IPType',
            port: 'Port',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
        };
    }
    static types() {
        return {
            connectionString: 'string',
            IPAddress: 'string',
            IPType: 'string',
            port: 'string',
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
exports.DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfosNetInfo = DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfosNetInfo;
class DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfos extends $dara.Model {
    static names() {
        return {
            netInfo: 'NetInfo',
        };
    }
    static types() {
        return {
            netInfo: { 'type': 'array', 'itemType': DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfosNetInfo },
        };
    }
    validate() {
        if (Array.isArray(this.netInfo)) {
            $dara.Model.validateArray(this.netInfo);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfos = DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfos;
class DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfo extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            DBNodeRole: 'DBNodeRole',
            netInfos: 'NetInfos',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            DBNodeRole: 'string',
            netInfos: DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfoNetInfos,
        };
    }
    validate() {
        if (this.netInfos && typeof this.netInfos.validate === 'function') {
            this.netInfos.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfo = DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfo;
class DescribeDBClusterNetInfoResponseBodyDBNodeNetInfos extends $dara.Model {
    static names() {
        return {
            DBNodeNetInfo: 'DBNodeNetInfo',
        };
    }
    static types() {
        return {
            DBNodeNetInfo: { 'type': 'array', 'itemType': DescribeDBClusterNetInfoResponseBodyDBNodeNetInfosDBNodeNetInfo },
        };
    }
    validate() {
        if (Array.isArray(this.DBNodeNetInfo)) {
            $dara.Model.validateArray(this.DBNodeNetInfo);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterNetInfoResponseBodyDBNodeNetInfos = DescribeDBClusterNetInfoResponseBodyDBNodeNetInfos;
class DescribeDBClusterNetInfoResponseBody extends $dara.Model {
    static names() {
        return {
            clusterNetworkType: 'ClusterNetworkType',
            DBClusterNetInfos: 'DBClusterNetInfos',
            DBNodeNetInfos: 'DBNodeNetInfos',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            clusterNetworkType: 'string',
            DBClusterNetInfos: DescribeDBClusterNetInfoResponseBodyDBClusterNetInfos,
            DBNodeNetInfos: DescribeDBClusterNetInfoResponseBodyDBNodeNetInfos,
            requestId: 'string',
        };
    }
    validate() {
        if (this.DBClusterNetInfos && typeof this.DBClusterNetInfos.validate === 'function') {
            this.DBClusterNetInfos.validate();
        }
        if (this.DBNodeNetInfos && typeof this.DBNodeNetInfos.validate === 'function') {
            this.DBNodeNetInfos.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBClusterNetInfoResponseBody = DescribeDBClusterNetInfoResponseBody;
//# sourceMappingURL=DescribeDbclusterNetInfoResponseBody.js.map