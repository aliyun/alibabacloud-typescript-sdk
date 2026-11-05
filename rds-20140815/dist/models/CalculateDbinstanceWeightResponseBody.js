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
exports.CalculateDBInstanceWeightResponseBody = exports.CalculateDBInstanceWeightResponseBodyItems = exports.CalculateDBInstanceWeightResponseBodyItemsDBInstanceWeight = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CalculateDBInstanceWeightResponseBodyItemsDBInstanceWeight extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            DBInstanceType: 'DBInstanceType',
            readonlyInstanceSQLDelayedTime: 'ReadonlyInstanceSQLDelayedTime',
            weight: 'Weight',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            DBInstanceType: 'string',
            readonlyInstanceSQLDelayedTime: 'string',
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
exports.CalculateDBInstanceWeightResponseBodyItemsDBInstanceWeight = CalculateDBInstanceWeightResponseBodyItemsDBInstanceWeight;
class CalculateDBInstanceWeightResponseBodyItems extends $dara.Model {
    static names() {
        return {
            DBInstanceWeight: 'DBInstanceWeight',
        };
    }
    static types() {
        return {
            DBInstanceWeight: { 'type': 'array', 'itemType': CalculateDBInstanceWeightResponseBodyItemsDBInstanceWeight },
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
exports.CalculateDBInstanceWeightResponseBodyItems = CalculateDBInstanceWeightResponseBodyItems;
class CalculateDBInstanceWeightResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            items: CalculateDBInstanceWeightResponseBodyItems,
            requestId: 'string',
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
exports.CalculateDBInstanceWeightResponseBody = CalculateDBInstanceWeightResponseBody;
//# sourceMappingURL=CalculateDbinstanceWeightResponseBody.js.map