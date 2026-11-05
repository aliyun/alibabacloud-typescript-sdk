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
exports.DescribeSlotsResponseBody = exports.DescribeSlotsResponseBodySlots = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeSlotsResponseBodySlots extends $dara.Model {
    static names() {
        return {
            database: 'Database',
            plugin: 'Plugin',
            slotName: 'SlotName',
            slotStatus: 'SlotStatus',
            slotType: 'SlotType',
            subReplayLag: 'SubReplayLag',
            temporary: 'Temporary',
            walDelay: 'WalDelay',
        };
    }
    static types() {
        return {
            database: 'string',
            plugin: 'string',
            slotName: 'string',
            slotStatus: 'string',
            slotType: 'string',
            subReplayLag: 'string',
            temporary: 'string',
            walDelay: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSlotsResponseBodySlots = DescribeSlotsResponseBodySlots;
class DescribeSlotsResponseBody extends $dara.Model {
    static names() {
        return {
            requestId: 'RequestId',
            slots: 'Slots',
        };
    }
    static types() {
        return {
            requestId: 'string',
            slots: { 'type': 'array', 'itemType': DescribeSlotsResponseBodySlots },
        };
    }
    validate() {
        if (Array.isArray(this.slots)) {
            $dara.Model.validateArray(this.slots);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeSlotsResponseBody = DescribeSlotsResponseBody;
//# sourceMappingURL=DescribeSlotsResponseBody.js.map