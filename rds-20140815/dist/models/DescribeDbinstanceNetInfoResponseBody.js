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
exports.DescribeDBInstanceNetInfoResponseBody = exports.DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos = exports.DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo = exports.DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups = exports.DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup = exports.DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights = exports.DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight extends $dara.Model {
    static names() {
        return {
            availability: 'Availability',
            DBInstanceId: 'DBInstanceId',
            DBInstanceType: 'DBInstanceType',
            role: 'Role',
            weight: 'Weight',
        };
    }
    static types() {
        return {
            availability: 'string',
            DBInstanceId: 'string',
            DBInstanceType: 'string',
            role: 'string',
            weight: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight = DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight;
class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights extends $dara.Model {
    static names() {
        return {
            DBInstanceWeight: 'DBInstanceWeight',
        };
    }
    static types() {
        return {
            DBInstanceWeight: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight },
        };
    }
    validate() {
        if (Array.isArray(this.DBInstanceWeight)) {
            $dara.Model.validateArray(this.DBInstanceWeight);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights = DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights;
class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup extends $dara.Model {
    static names() {
        return {
            securityIPGroupName: 'SecurityIPGroupName',
            securityIPs: 'SecurityIPs',
        };
    }
    static types() {
        return {
            securityIPGroupName: 'string',
            securityIPs: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup = DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup;
class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups extends $dara.Model {
    static names() {
        return {
            securityIPGroup: 'securityIPGroup',
        };
    }
    static types() {
        return {
            securityIPGroup: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup },
        };
    }
    validate() {
        if (Array.isArray(this.securityIPGroup)) {
            $dara.Model.validateArray(this.securityIPGroup);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups = DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups;
class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo extends $dara.Model {
    static names() {
        return {
            babelfishPort: 'BabelfishPort',
            connectionString: 'ConnectionString',
            connectionStringType: 'ConnectionStringType',
            DBInstanceWeights: 'DBInstanceWeights',
            distributionType: 'DistributionType',
            expiredTime: 'ExpiredTime',
            IPAddress: 'IPAddress',
            IPType: 'IPType',
            maxDelayTime: 'MaxDelayTime',
            PGBouncerPort: 'PGBouncerPort',
            port: 'Port',
            securityIPGroups: 'SecurityIPGroups',
            upgradeable: 'Upgradeable',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
        };
    }
    static types() {
        return {
            babelfishPort: 'string',
            connectionString: 'string',
            connectionStringType: 'string',
            DBInstanceWeights: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights,
            distributionType: 'string',
            expiredTime: 'string',
            IPAddress: 'string',
            IPType: 'string',
            maxDelayTime: 'string',
            PGBouncerPort: 'string',
            port: 'string',
            securityIPGroups: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups,
            upgradeable: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
        };
    }
    validate() {
        if (this.DBInstanceWeights && typeof this.DBInstanceWeights.validate === 'function') {
            this.DBInstanceWeights.validate();
        }
        if (this.securityIPGroups && typeof this.securityIPGroups.validate === 'function') {
            this.securityIPGroups.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo = DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo;
class DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos extends $dara.Model {
    static names() {
        return {
            DBInstanceNetInfo: 'DBInstanceNetInfo',
        };
    }
    static types() {
        return {
            DBInstanceNetInfo: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfosDBInstanceNetInfo },
        };
    }
    validate() {
        if (Array.isArray(this.DBInstanceNetInfo)) {
            $dara.Model.validateArray(this.DBInstanceNetInfo);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos = DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos;
class DescribeDBInstanceNetInfoResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceNetInfos: 'DBInstanceNetInfos',
            instanceNetworkType: 'InstanceNetworkType',
            requestId: 'RequestId',
            securityIPMode: 'SecurityIPMode',
        };
    }
    static types() {
        return {
            DBInstanceNetInfos: DescribeDBInstanceNetInfoResponseBodyDBInstanceNetInfos,
            instanceNetworkType: 'string',
            requestId: 'string',
            securityIPMode: 'string',
        };
    }
    validate() {
        if (this.DBInstanceNetInfos && typeof this.DBInstanceNetInfos.validate === 'function') {
            this.DBInstanceNetInfos.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstanceNetInfoResponseBody = DescribeDBInstanceNetInfoResponseBody;
//# sourceMappingURL=DescribeDbinstanceNetInfoResponseBody.js.map