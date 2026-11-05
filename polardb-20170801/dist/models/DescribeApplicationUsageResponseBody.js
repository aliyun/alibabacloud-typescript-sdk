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
exports.DescribeApplicationUsageResponseBody = exports.DescribeApplicationUsageResponseBodySummary = exports.DescribeApplicationUsageResponseBodySkillUsage = exports.DescribeApplicationUsageResponseBodySessionSummary = exports.DescribeApplicationUsageResponseBodyModelUsage = exports.DescribeApplicationUsageResponseBodyDailyUsage = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeApplicationUsageResponseBodyDailyUsage extends $dara.Model {
    static names() {
        return {
            APICalls: 'APICalls',
            cacheReadTokens: 'CacheReadTokens',
            date: 'Date',
            inputTokens: 'InputTokens',
            outputTokens: 'OutputTokens',
            reasoningTokens: 'ReasoningTokens',
            sessions: 'Sessions',
        };
    }
    static types() {
        return {
            APICalls: 'number',
            cacheReadTokens: 'number',
            date: 'string',
            inputTokens: 'number',
            outputTokens: 'number',
            reasoningTokens: 'number',
            sessions: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationUsageResponseBodyDailyUsage = DescribeApplicationUsageResponseBodyDailyUsage;
class DescribeApplicationUsageResponseBodyModelUsage extends $dara.Model {
    static names() {
        return {
            APICalls: 'APICalls',
            cacheReadTokens: 'CacheReadTokens',
            inputTokens: 'InputTokens',
            model: 'Model',
            outputTokens: 'OutputTokens',
            provider: 'Provider',
            reasoningTokens: 'ReasoningTokens',
            sessions: 'Sessions',
        };
    }
    static types() {
        return {
            APICalls: 'number',
            cacheReadTokens: 'number',
            inputTokens: 'number',
            model: 'string',
            outputTokens: 'number',
            provider: 'string',
            reasoningTokens: 'number',
            sessions: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationUsageResponseBodyModelUsage = DescribeApplicationUsageResponseBodyModelUsage;
class DescribeApplicationUsageResponseBodySessionSummary extends $dara.Model {
    static names() {
        return {
            activeSessions: 'ActiveSessions',
            storedSessions: 'StoredSessions',
        };
    }
    static types() {
        return {
            activeSessions: 'number',
            storedSessions: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationUsageResponseBodySessionSummary = DescribeApplicationUsageResponseBodySessionSummary;
class DescribeApplicationUsageResponseBodySkillUsage extends $dara.Model {
    static names() {
        return {
            distinctSkills: 'DistinctSkills',
            totalActions: 'TotalActions',
            totalEdits: 'TotalEdits',
            totalLoads: 'TotalLoads',
        };
    }
    static types() {
        return {
            distinctSkills: 'number',
            totalActions: 'number',
            totalEdits: 'number',
            totalLoads: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationUsageResponseBodySkillUsage = DescribeApplicationUsageResponseBodySkillUsage;
class DescribeApplicationUsageResponseBodySummary extends $dara.Model {
    static names() {
        return {
            APICalls: 'APICalls',
            cacheReadTokens: 'CacheReadTokens',
            inputTokens: 'InputTokens',
            outputTokens: 'OutputTokens',
            reasoningTokens: 'ReasoningTokens',
            sessions: 'Sessions',
        };
    }
    static types() {
        return {
            APICalls: 'number',
            cacheReadTokens: 'number',
            inputTokens: 'number',
            outputTokens: 'number',
            reasoningTokens: 'number',
            sessions: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationUsageResponseBodySummary = DescribeApplicationUsageResponseBodySummary;
class DescribeApplicationUsageResponseBody extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            code: 'Code',
            dailyUsage: 'DailyUsage',
            days: 'Days',
            message: 'Message',
            modelUsage: 'ModelUsage',
            requestId: 'RequestId',
            sessionSummary: 'SessionSummary',
            skillUsage: 'SkillUsage',
            summary: 'Summary',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            code: 'number',
            dailyUsage: { 'type': 'array', 'itemType': DescribeApplicationUsageResponseBodyDailyUsage },
            days: 'number',
            message: 'string',
            modelUsage: { 'type': 'array', 'itemType': DescribeApplicationUsageResponseBodyModelUsage },
            requestId: 'string',
            sessionSummary: DescribeApplicationUsageResponseBodySessionSummary,
            skillUsage: DescribeApplicationUsageResponseBodySkillUsage,
            summary: DescribeApplicationUsageResponseBodySummary,
        };
    }
    validate() {
        if (Array.isArray(this.dailyUsage)) {
            $dara.Model.validateArray(this.dailyUsage);
        }
        if (Array.isArray(this.modelUsage)) {
            $dara.Model.validateArray(this.modelUsage);
        }
        if (this.sessionSummary && typeof this.sessionSummary.validate === 'function') {
            this.sessionSummary.validate();
        }
        if (this.skillUsage && typeof this.skillUsage.validate === 'function') {
            this.skillUsage.validate();
        }
        if (this.summary && typeof this.summary.validate === 'function') {
            this.summary.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeApplicationUsageResponseBody = DescribeApplicationUsageResponseBody;
//# sourceMappingURL=DescribeApplicationUsageResponseBody.js.map