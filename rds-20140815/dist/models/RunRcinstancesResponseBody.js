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
exports.RunRCInstancesResponseBody = exports.RunRCInstancesResponseBodyInstanceIdSets = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class RunRCInstancesResponseBodyInstanceIdSets extends $dara.Model {
    static names() {
        return {
            instanceIdSet: 'InstanceIdSet',
        };
    }
    static types() {
        return {
            instanceIdSet: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.instanceIdSet)) {
            $dara.Model.validateArray(this.instanceIdSet);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.RunRCInstancesResponseBodyInstanceIdSets = RunRCInstancesResponseBodyInstanceIdSets;
class RunRCInstancesResponseBody extends $dara.Model {
    static names() {
        return {
            instanceIdSets: 'InstanceIdSets',
            orderId: 'OrderId',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            instanceIdSets: RunRCInstancesResponseBodyInstanceIdSets,
            orderId: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (this.instanceIdSets && typeof this.instanceIdSets.validate === 'function') {
            this.instanceIdSets.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.RunRCInstancesResponseBody = RunRCInstancesResponseBody;
//# sourceMappingURL=RunRcinstancesResponseBody.js.map