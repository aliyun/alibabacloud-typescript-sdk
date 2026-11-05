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
exports.ContentPlanTopic = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ContentPlanTopic extends $dara.Model {
    static names() {
        return {
            articleConversationId: 'ArticleConversationId',
            articleId: 'ArticleId',
            articleStatus: 'ArticleStatus',
            diagnosisReferences: 'DiagnosisReferences',
            direction: 'Direction',
            failReason: 'FailReason',
            planId: 'PlanId',
            projectId: 'ProjectId',
            rationale: 'Rationale',
            recommendedChannels: 'RecommendedChannels',
            scheduledAt: 'ScheduledAt',
            skipReason: 'SkipReason',
            status: 'Status',
            title: 'Title',
            topicId: 'TopicId',
            writingDirection: 'WritingDirection',
        };
    }
    static types() {
        return {
            articleConversationId: 'string',
            articleId: 'string',
            articleStatus: 'string',
            diagnosisReferences: { 'type': 'array', 'itemType': 'string' },
            direction: 'string',
            failReason: 'string',
            planId: 'string',
            projectId: 'string',
            rationale: 'string',
            recommendedChannels: { 'type': 'array', 'itemType': 'string' },
            scheduledAt: 'string',
            skipReason: 'string',
            status: 'string',
            title: 'string',
            topicId: 'string',
            writingDirection: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.diagnosisReferences)) {
            $dara.Model.validateArray(this.diagnosisReferences);
        }
        if (Array.isArray(this.recommendedChannels)) {
            $dara.Model.validateArray(this.recommendedChannels);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ContentPlanTopic = ContentPlanTopic;
//# sourceMappingURL=ContentPlanTopic.js.map