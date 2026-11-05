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
exports.GetModelOperatorOrderResponseBody = exports.GetModelOperatorOrderResponseBodyData = exports.GetModelOperatorOrderResponseBodyDataInstanceList = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetModelOperatorOrderResponseBodyDataInstanceList extends $dara.Model {
    static names() {
        return {
            chargeType: 'ChargeType',
            endTime: 'EndTime',
            instanceClass: 'InstanceClass',
            instanceId: 'InstanceId',
            startTime: 'StartTime',
            status: 'Status',
        };
    }
    static types() {
        return {
            chargeType: 'string',
            endTime: 'number',
            instanceClass: 'string',
            instanceId: 'string',
            startTime: 'number',
            status: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetModelOperatorOrderResponseBodyDataInstanceList = GetModelOperatorOrderResponseBodyDataInstanceList;
class GetModelOperatorOrderResponseBodyData extends $dara.Model {
    static names() {
        return {
            hasValidOrder: 'HasValidOrder',
            instanceList: 'InstanceList',
        };
    }
    static types() {
        return {
            hasValidOrder: 'boolean',
            instanceList: { 'type': 'array', 'itemType': GetModelOperatorOrderResponseBodyDataInstanceList },
        };
    }
    validate() {
        if (Array.isArray(this.instanceList)) {
            $dara.Model.validateArray(this.instanceList);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetModelOperatorOrderResponseBodyData = GetModelOperatorOrderResponseBodyData;
class GetModelOperatorOrderResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            message: 'Message',
            requestId: 'RequestId',
            success: 'Success',
        };
    }
    static types() {
        return {
            data: GetModelOperatorOrderResponseBodyData,
            message: 'string',
            requestId: 'string',
            success: 'boolean',
        };
    }
    validate() {
        if (this.data && typeof this.data.validate === 'function') {
            this.data.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetModelOperatorOrderResponseBody = GetModelOperatorOrderResponseBody;
//# sourceMappingURL=GetModelOperatorOrderResponseBody.js.map