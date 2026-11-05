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
exports.DescribeReadDBInstanceDelayResponseBody = exports.DescribeReadDBInstanceDelayResponseBodyItems = exports.DescribeReadDBInstanceDelayResponseBodyItemsItems = exports.DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelay = exports.DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay = exports.DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDelayTimes = exports.DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDBInstanceNames = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDBInstanceNames extends $dara.Model {
    static names() {
        return {
            readDBInstanceName: 'ReadDBInstanceName',
        };
    }
    static types() {
        return {
            readDBInstanceName: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.readDBInstanceName)) {
            $dara.Model.validateArray(this.readDBInstanceName);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDBInstanceNames = DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDBInstanceNames;
class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDelayTimes extends $dara.Model {
    static names() {
        return {
            readDelayTime: 'ReadDelayTime',
        };
    }
    static types() {
        return {
            readDelayTime: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.readDelayTime)) {
            $dara.Model.validateArray(this.readDelayTime);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDelayTimes = DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDelayTimes;
class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay extends $dara.Model {
    static names() {
        return {
            flushLag: 'FlushLag',
            flushLatency: 'FlushLatency',
            readDBInstanceName: 'ReadDBInstanceName',
            replayLag: 'ReplayLag',
            replayLatency: 'ReplayLatency',
            sendLatency: 'SendLatency',
            writeLag: 'WriteLag',
            writeLatency: 'WriteLatency',
        };
    }
    static types() {
        return {
            flushLag: 'string',
            flushLatency: 'string',
            readDBInstanceName: 'string',
            replayLag: 'string',
            replayLatency: 'string',
            sendLatency: 'string',
            writeLag: 'string',
            writeLatency: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay = DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay;
class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelay extends $dara.Model {
    static names() {
        return {
            readonlyInstanceDelay: 'ReadonlyInstanceDelay',
        };
    }
    static types() {
        return {
            readonlyInstanceDelay: { 'type': 'array', 'itemType': DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay },
        };
    }
    validate() {
        if (Array.isArray(this.readonlyInstanceDelay)) {
            $dara.Model.validateArray(this.readonlyInstanceDelay);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelay = DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelay;
class DescribeReadDBInstanceDelayResponseBodyItemsItems extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            readDBInstanceNames: 'ReadDBInstanceNames',
            readDelayTimes: 'ReadDelayTimes',
            readonlyInstanceDelay: 'ReadonlyInstanceDelay',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            readDBInstanceNames: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDBInstanceNames,
            readDelayTimes: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadDelayTimes,
            readonlyInstanceDelay: DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelay,
        };
    }
    validate() {
        if (this.readDBInstanceNames && typeof this.readDBInstanceNames.validate === 'function') {
            this.readDBInstanceNames.validate();
        }
        if (this.readDelayTimes && typeof this.readDelayTimes.validate === 'function') {
            this.readDelayTimes.validate();
        }
        if (this.readonlyInstanceDelay && typeof this.readonlyInstanceDelay.validate === 'function') {
            this.readonlyInstanceDelay.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeReadDBInstanceDelayResponseBodyItemsItems = DescribeReadDBInstanceDelayResponseBodyItemsItems;
class DescribeReadDBInstanceDelayResponseBodyItems extends $dara.Model {
    static names() {
        return {
            items: 'Items',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': DescribeReadDBInstanceDelayResponseBodyItemsItems },
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeReadDBInstanceDelayResponseBodyItems = DescribeReadDBInstanceDelayResponseBodyItems;
class DescribeReadDBInstanceDelayResponseBody extends $dara.Model {
    static names() {
        return {
            DBInstanceId: 'DBInstanceId',
            delayTime: 'DelayTime',
            items: 'Items',
            readDBInstanceId: 'ReadDBInstanceId',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            DBInstanceId: 'string',
            delayTime: 'number',
            items: DescribeReadDBInstanceDelayResponseBodyItems,
            readDBInstanceId: 'string',
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
exports.DescribeReadDBInstanceDelayResponseBody = DescribeReadDBInstanceDelayResponseBody;
//# sourceMappingURL=DescribeReadDbinstanceDelayResponseBody.js.map