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
exports.UpdateContextDatabaseSyncJobScheduleRequest = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateContextDatabaseSyncJobScheduleRequest extends $dara.Model {
    static names() {
        return {
            clientToken: 'ClientToken',
            dailyTimes: 'DailyTimes',
            intervalMinutes: 'IntervalMinutes',
            jobId: 'JobId',
            missedPolicy: 'MissedPolicy',
            type: 'Type',
            workspaceId: 'WorkspaceId',
        };
    }
    static types() {
        return {
            clientToken: 'string',
            dailyTimes: { 'type': 'array', 'itemType': 'string' },
            intervalMinutes: 'number',
            jobId: 'string',
            missedPolicy: 'string',
            type: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.dailyTimes)) {
            $dara.Model.validateArray(this.dailyTimes);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateContextDatabaseSyncJobScheduleRequest = UpdateContextDatabaseSyncJobScheduleRequest;
//# sourceMappingURL=UpdateContextDatabaseSyncJobScheduleRequest.js.map