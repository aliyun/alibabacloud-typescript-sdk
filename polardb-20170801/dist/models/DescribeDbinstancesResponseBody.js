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
exports.DescribeDBInstancesResponseBody = exports.DescribeDBInstancesResponseBodyItems = exports.DescribeDBInstancesResponseBodyItemsDBInstance = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstancesResponseBodyItemsDBInstance extends $dara.Model {
    static names() {
        return {
            createTime: 'CreateTime',
            DBClusterId: 'DBClusterId',
            DBInstanceClass: 'DBInstanceClass',
            DBInstanceDescription: 'DBInstanceDescription',
            DBInstanceId: 'DBInstanceId',
            DBInstanceStatus: 'DBInstanceStatus',
            DBInstanceType: 'DBInstanceType',
            DBType: 'DBType',
            DBVersion: 'DBVersion',
            engine: 'Engine',
            expireTime: 'ExpireTime',
            instanceNetworkType: 'InstanceNetworkType',
            lockMode: 'LockMode',
            lockReason: 'LockReason',
            payType: 'PayType',
            regionId: 'RegionId',
            vSwitchId: 'VSwitchId',
            vpcId: 'VpcId',
            zoneId: 'ZoneId',
        };
    }
    static types() {
        return {
            createTime: 'string',
            DBClusterId: 'string',
            DBInstanceClass: 'string',
            DBInstanceDescription: 'string',
            DBInstanceId: 'string',
            DBInstanceStatus: 'string',
            DBInstanceType: 'string',
            DBType: 'string',
            DBVersion: 'string',
            engine: 'string',
            expireTime: 'string',
            instanceNetworkType: 'string',
            lockMode: 'string',
            lockReason: 'string',
            payType: 'string',
            regionId: 'string',
            vSwitchId: 'string',
            vpcId: 'string',
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
exports.DescribeDBInstancesResponseBodyItemsDBInstance = DescribeDBInstancesResponseBodyItemsDBInstance;
class DescribeDBInstancesResponseBodyItems extends $dara.Model {
    static names() {
        return {
            DBInstance: 'DBInstance',
        };
    }
    static types() {
        return {
            DBInstance: { 'type': 'array', 'itemType': DescribeDBInstancesResponseBodyItemsDBInstance },
        };
    }
    validate() {
        if (Array.isArray(this.DBInstance)) {
            $dara.Model.validateArray(this.DBInstance);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstancesResponseBodyItems = DescribeDBInstancesResponseBodyItems;
class DescribeDBInstancesResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: DescribeDBInstancesResponseBodyItems,
            pageNumber: 'number',
            pageRecordCount: 'number',
            requestId: 'string',
            totalRecordCount: 'number',
        };
    }
    validate() {
        if (this.items && typeof this.items.validate === 'function') {
            this.items.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstancesResponseBody = DescribeDBInstancesResponseBody;
//# sourceMappingURL=DescribeDbinstancesResponseBody.js.map