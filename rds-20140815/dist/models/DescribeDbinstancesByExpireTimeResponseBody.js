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
exports.DescribeDBInstancesByExpireTimeResponseBody = exports.DescribeDBInstancesByExpireTimeResponseBodyItems = exports.DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime extends $dara.Model {
    static names() {
        return {
            DBInstanceDescription: 'DBInstanceDescription',
            DBInstanceId: 'DBInstanceId',
            DBInstanceStatus: 'DBInstanceStatus',
            expireTime: 'ExpireTime',
            lockMode: 'LockMode',
            payType: 'PayType',
        };
    }
    static types() {
        return {
            DBInstanceDescription: 'string',
            DBInstanceId: 'string',
            DBInstanceStatus: 'string',
            expireTime: 'string',
            lockMode: 'string',
            payType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime = DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime;
class DescribeDBInstancesByExpireTimeResponseBodyItems extends $dara.Model {
    static names() {
        return {
            DBInstanceExpireTime: 'DBInstanceExpireTime',
        };
    }
    static types() {
        return {
            DBInstanceExpireTime: { 'type': 'array', 'itemType': DescribeDBInstancesByExpireTimeResponseBodyItemsDBInstanceExpireTime },
        };
    }
    validate() {
        if (Array.isArray(this.DBInstanceExpireTime)) {
            $dara.Model.validateArray(this.DBInstanceExpireTime);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeDBInstancesByExpireTimeResponseBodyItems = DescribeDBInstancesByExpireTimeResponseBodyItems;
class DescribeDBInstancesByExpireTimeResponseBody extends $dara.Model {
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
            items: DescribeDBInstancesByExpireTimeResponseBodyItems,
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
exports.DescribeDBInstancesByExpireTimeResponseBody = DescribeDBInstancesByExpireTimeResponseBody;
//# sourceMappingURL=DescribeDbinstancesByExpireTimeResponseBody.js.map