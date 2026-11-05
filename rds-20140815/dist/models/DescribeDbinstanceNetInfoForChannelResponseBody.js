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
exports.DescribeDBInstanceNetInfoForChannelResponseBody = exports.DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfos = exports.DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfo = exports.DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups = exports.DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup = exports.DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights = exports.DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight extends $dara.Model {
    static names() {
        return {
            availability: 'Availability',
            DBInstanceId: 'DBInstanceId',
            DBInstanceType: 'DBInstanceType',
            weight: 'Weight',
        };
    }
    static types() {
        return {
            availability: 'string',
            DBInstanceId: 'string',
            DBInstanceType: 'string',
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
exports.DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight = DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight;
class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights extends $dara.Model {
    static names() {
        return {
            DBInstanceWeight: 'DBInstanceWeight',
        };
    }
    static types() {
        return {
            DBInstanceWeight: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeightsDBInstanceWeight },
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
exports.DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights = DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights;
class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup extends $dara.Model {
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
exports.DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup = DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup;
class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups extends $dara.Model {
    static names() {
        return {
            securityIPGroup: 'securityIPGroup',
        };
    }
    static types() {
        return {
            securityIPGroup: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroupsSecurityIPGroup },
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
exports.DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups = DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups;
class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfo extends $dara.Model {
    static names() {
        return {
            availability: 'Availability',
            connectionString: 'ConnectionString',
            connectionStringType: 'ConnectionStringType',
            DBInstanceWeights: 'DBInstanceWeights',
            distributionType: 'DistributionType',
            IPAddress: 'IPAddress',
            IPType: 'IPType',
            maxDelayTime: 'MaxDelayTime',
            port: 'Port',
            securityIPGroups: 'SecurityIPGroups',
            upgradeable: 'Upgradeable',
            VPCId: 'VPCId',
            vSwitchId: 'VSwitchId',
            expiredTime: 'expiredTime',
        };
    }
    static types() {
        return {
            availability: 'string',
            connectionString: 'string',
            connectionStringType: 'string',
            DBInstanceWeights: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoDBInstanceWeights,
            distributionType: 'string',
            IPAddress: 'string',
            IPType: 'string',
            maxDelayTime: 'string',
            port: 'string',
            securityIPGroups: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfoSecurityIPGroups,
            upgradeable: 'string',
            VPCId: 'string',
            vSwitchId: 'string',
            expiredTime: 'string',
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
exports.DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfo = DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfo;
class DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfos extends $dara.Model {
    static names() {
        return {
            DBInstanceNetInfo: 'DBInstanceNetInfo',
        };
    }
    static types() {
        return {
            DBInstanceNetInfo: { 'type': 'array', 'itemType': DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfosDBInstanceNetInfo },
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
exports.DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfos = DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfos;
class DescribeDBInstanceNetInfoForChannelResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceNetInfos: 'DBInstanceNetInfos',
            instanceNetworkType: 'InstanceNetworkType',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            DBInstanceNetInfos: DescribeDBInstanceNetInfoForChannelResponseBodyDBInstanceNetInfos,
            instanceNetworkType: 'string',
            requestId: 'string',
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
exports.DescribeDBInstanceNetInfoForChannelResponseBody = DescribeDBInstanceNetInfoForChannelResponseBody;
//# sourceMappingURL=DescribeDbinstanceNetInfoForChannelResponseBody.js.map