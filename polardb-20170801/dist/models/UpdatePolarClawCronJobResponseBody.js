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
exports.UpdatePolarClawCronJobResponseBody = exports.UpdatePolarClawCronJobResponseBodyJob = exports.UpdatePolarClawCronJobResponseBodyJobState = exports.UpdatePolarClawCronJobResponseBodyJobSchedule = exports.UpdatePolarClawCronJobResponseBodyJobRuns = exports.UpdatePolarClawCronJobResponseBodyJobRunsUsage = exports.UpdatePolarClawCronJobResponseBodyJobPayload = exports.UpdatePolarClawCronJobResponseBodyJobDelivery = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdatePolarClawCronJobResponseBodyJobDelivery extends $dara.Model {
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
exports.UpdatePolarClawCronJobResponseBodyJobDelivery = UpdatePolarClawCronJobResponseBodyJobDelivery;
class UpdatePolarClawCronJobResponseBodyJobPayload extends $dara.Model {
    static names() {
        return {
            bestEffortDeliver: 'BestEffortDeliver',
            channel: 'Channel',
            deliver: 'Deliver',
            kind: 'Kind',
            lightContext: 'LightContext',
            message: 'Message',
            model: 'Model',
            text: 'Text',
            timeoutSeconds: 'TimeoutSeconds',
            to: 'To',
        };
    }
    static types() {
        return {
            bestEffortDeliver: 'boolean',
            channel: 'string',
            deliver: 'boolean',
            kind: 'string',
            lightContext: 'boolean',
            message: 'string',
            model: 'string',
            text: 'string',
            timeoutSeconds: 'number',
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
exports.UpdatePolarClawCronJobResponseBodyJobPayload = UpdatePolarClawCronJobResponseBodyJobPayload;
class UpdatePolarClawCronJobResponseBodyJobRunsUsage extends $dara.Model {
    static names() {
        return {
            inputTokens: 'InputTokens',
            outputTokens: 'OutputTokens',
            totalTokens: 'TotalTokens',
        };
    }
    static types() {
        return {
            inputTokens: 'number',
            outputTokens: 'number',
            totalTokens: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdatePolarClawCronJobResponseBodyJobRunsUsage = UpdatePolarClawCronJobResponseBodyJobRunsUsage;
class UpdatePolarClawCronJobResponseBodyJobRuns extends $dara.Model {
    static names() {
        return {
            action: 'Action',
            delivered: 'Delivered',
            deliveryStatus: 'DeliveryStatus',
            durationMs: 'DurationMs',
            jobId: 'JobId',
            jobName: 'JobName',
            model: 'Model',
            nextRunAtMs: 'NextRunAtMs',
            provider: 'Provider',
            runAtMs: 'RunAtMs',
            sessionId: 'SessionId',
            status: 'Status',
            summary: 'Summary',
            ts: 'Ts',
            usage: 'Usage',
        };
    }
    static types() {
        return {
            action: 'string',
            delivered: 'boolean',
            deliveryStatus: 'string',
            durationMs: 'number',
            jobId: 'string',
            jobName: 'string',
            model: 'string',
            nextRunAtMs: 'number',
            provider: 'string',
            runAtMs: 'number',
            sessionId: 'string',
            status: 'string',
            summary: 'string',
            ts: 'number',
            usage: UpdatePolarClawCronJobResponseBodyJobRunsUsage,
        };
    }
    validate() {
        if (this.usage && typeof this.usage.validate === 'function') {
            this.usage.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdatePolarClawCronJobResponseBodyJobRuns = UpdatePolarClawCronJobResponseBodyJobRuns;
class UpdatePolarClawCronJobResponseBodyJobSchedule extends $dara.Model {
    static names() {
        return {
            anchorMs: 'AnchorMs',
            at: 'At',
            everyMs: 'EveryMs',
            expr: 'Expr',
            kind: 'Kind',
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
exports.UpdatePolarClawCronJobResponseBodyJobSchedule = UpdatePolarClawCronJobResponseBodyJobSchedule;
class UpdatePolarClawCronJobResponseBodyJobState extends $dara.Model {
    static names() {
        return {
            consecutiveErrors: 'ConsecutiveErrors',
            lastRunAtMs: 'LastRunAtMs',
            lastRunStatus: 'LastRunStatus',
            nextRunAtMs: 'NextRunAtMs',
        };
    }
    static types() {
        return {
            consecutiveErrors: 'number',
            lastRunAtMs: 'number',
            lastRunStatus: 'string',
            nextRunAtMs: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdatePolarClawCronJobResponseBodyJobState = UpdatePolarClawCronJobResponseBodyJobState;
class UpdatePolarClawCronJobResponseBodyJob extends $dara.Model {
    static names() {
        return {
            agentId: 'AgentId',
            createdAtMs: 'CreatedAtMs',
            deleteAfterRun: 'DeleteAfterRun',
            delivery: 'Delivery',
            description: 'Description',
            enabled: 'Enabled',
            id: 'Id',
            name: 'Name',
            payload: 'Payload',
            runs: 'Runs',
            schedule: 'Schedule',
            sessionKey: 'SessionKey',
            sessionTarget: 'SessionTarget',
            state: 'State',
            updatedAtMs: 'UpdatedAtMs',
            wakeMode: 'WakeMode',
        };
    }
    static types() {
        return {
            agentId: 'string',
            createdAtMs: 'number',
            deleteAfterRun: 'boolean',
            delivery: UpdatePolarClawCronJobResponseBodyJobDelivery,
            description: 'string',
            enabled: 'boolean',
            id: 'string',
            name: 'string',
            payload: UpdatePolarClawCronJobResponseBodyJobPayload,
            runs: { 'type': 'array', 'itemType': UpdatePolarClawCronJobResponseBodyJobRuns },
            schedule: UpdatePolarClawCronJobResponseBodyJobSchedule,
            sessionKey: 'string',
            sessionTarget: 'string',
            state: UpdatePolarClawCronJobResponseBodyJobState,
            updatedAtMs: 'number',
            wakeMode: 'string',
        };
    }
    validate() {
        if (this.delivery && typeof this.delivery.validate === 'function') {
            this.delivery.validate();
        }
        if (this.payload && typeof this.payload.validate === 'function') {
            this.payload.validate();
        }
        if (Array.isArray(this.runs)) {
            $dara.Model.validateArray(this.runs);
        }
        if (this.schedule && typeof this.schedule.validate === 'function') {
            this.schedule.validate();
        }
        if (this.state && typeof this.state.validate === 'function') {
            this.state.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdatePolarClawCronJobResponseBodyJob = UpdatePolarClawCronJobResponseBodyJob;
class UpdatePolarClawCronJobResponseBody extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            code: 'Code',
            job: 'Job',
            message: 'Message',
            ok: 'Ok',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            code: 'number',
            job: UpdatePolarClawCronJobResponseBodyJob,
            message: 'string',
            ok: 'boolean',
            requestId: 'string',
        };
    }
    validate() {
        if (this.job && typeof this.job.validate === 'function') {
            this.job.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdatePolarClawCronJobResponseBody = UpdatePolarClawCronJobResponseBody;
//# sourceMappingURL=UpdatePolarClawCronJobResponseBody.js.map