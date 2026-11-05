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
exports.CreatePolarClawCronJobRequest = exports.CreatePolarClawCronJobRequestSchedule = exports.CreatePolarClawCronJobRequestPayload = exports.CreatePolarClawCronJobRequestFailureAlert = exports.CreatePolarClawCronJobRequestDelivery = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreatePolarClawCronJobRequestDelivery extends $dara.Model {
    static names() {
        return {
            accountId: 'AccountId',
            bestEffort: 'BestEffort',
            channel: 'Channel',
            mode: 'Mode',
            to: 'To',
        };
    }
    static types() {
        return {
            accountId: 'string',
            bestEffort: 'boolean',
            channel: 'string',
            mode: 'string',
            to: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreatePolarClawCronJobRequestDelivery = CreatePolarClawCronJobRequestDelivery;
class CreatePolarClawCronJobRequestFailureAlert extends $dara.Model {
    static names() {
        return {
            accountId: 'AccountId',
            after: 'After',
            channel: 'Channel',
            cooldownMs: 'CooldownMs',
            mode: 'Mode',
            to: 'To',
        };
    }
    static types() {
        return {
            accountId: 'string',
            after: 'number',
            channel: 'string',
            cooldownMs: 'number',
            mode: 'string',
            to: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreatePolarClawCronJobRequestFailureAlert = CreatePolarClawCronJobRequestFailureAlert;
class CreatePolarClawCronJobRequestPayload extends $dara.Model {
    static names() {
        return {
            bestEffortDeliver: 'BestEffortDeliver',
            channel: 'Channel',
            deliver: 'Deliver',
            fallbacks: 'Fallbacks',
            kind: 'Kind',
            lightContext: 'LightContext',
            message: 'Message',
            model: 'Model',
            text: 'Text',
            thinking: 'Thinking',
            timeoutSeconds: 'TimeoutSeconds',
            to: 'To',
        };
    }
    static types() {
        return {
            bestEffortDeliver: 'boolean',
            channel: 'string',
            deliver: 'boolean',
            fallbacks: { 'type': 'array', 'itemType': 'string' },
            kind: 'string',
            lightContext: 'boolean',
            message: 'string',
            model: 'string',
            text: 'string',
            thinking: 'string',
            timeoutSeconds: 'number',
            to: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.fallbacks)) {
            $dara.Model.validateArray(this.fallbacks);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreatePolarClawCronJobRequestPayload = CreatePolarClawCronJobRequestPayload;
class CreatePolarClawCronJobRequestSchedule extends $dara.Model {
    static names() {
        return {
            anchorMs: 'AnchorMs',
            at: 'At',
            everyMs: 'EveryMs',
            expr: 'Expr',
            kind: 'Kind',
            staggerMs: 'StaggerMs',
            tz: 'Tz',
        };
    }
    static types() {
        return {
            anchorMs: 'number',
            at: 'string',
            everyMs: 'number',
            expr: 'string',
            kind: 'string',
            staggerMs: 'number',
            tz: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreatePolarClawCronJobRequestSchedule = CreatePolarClawCronJobRequestSchedule;
class CreatePolarClawCronJobRequest extends $dara.Model {
    static names() {
        return {
            agentId: 'AgentId',
            applicationId: 'ApplicationId',
            deleteAfterRun: 'DeleteAfterRun',
            delivery: 'Delivery',
            description: 'Description',
            enabled: 'Enabled',
            failureAlert: 'FailureAlert',
            name: 'Name',
            payload: 'Payload',
            restart: 'Restart',
            runImmediately: 'RunImmediately',
            schedule: 'Schedule',
            sessionKey: 'SessionKey',
            sessionTarget: 'SessionTarget',
            wakeMode: 'WakeMode',
        };
    }
    static types() {
        return {
            agentId: 'string',
            applicationId: 'string',
            deleteAfterRun: 'boolean',
            delivery: CreatePolarClawCronJobRequestDelivery,
            description: 'string',
            enabled: 'boolean',
            failureAlert: CreatePolarClawCronJobRequestFailureAlert,
            name: 'string',
            payload: CreatePolarClawCronJobRequestPayload,
            restart: 'boolean',
            runImmediately: 'boolean',
            schedule: CreatePolarClawCronJobRequestSchedule,
            sessionKey: 'string',
            sessionTarget: 'string',
            wakeMode: 'string',
        };
    }
    validate() {
        if (this.delivery && typeof this.delivery.validate === 'function') {
            this.delivery.validate();
        }
        if (this.failureAlert && typeof this.failureAlert.validate === 'function') {
            this.failureAlert.validate();
        }
        if (this.payload && typeof this.payload.validate === 'function') {
            this.payload.validate();
        }
        if (this.schedule && typeof this.schedule.validate === 'function') {
            this.schedule.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreatePolarClawCronJobRequest = CreatePolarClawCronJobRequest;
//# sourceMappingURL=CreatePolarClawCronJobRequest.js.map