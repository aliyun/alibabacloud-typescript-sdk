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
exports.DescribeCostRulesResponseBody = exports.DescribeCostRulesResponseBodyItems = exports.DescribeCostRulesResponseBodyItemsInputTokenTiers = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeCostRulesResponseBodyItemsInputTokenTiers extends $dara.Model {
    static names() {
        return {
            inputCostPointsPerMillion: 'InputCostPointsPerMillion',
            tier: 'Tier',
        };
    }
    static types() {
        return {
            inputCostPointsPerMillion: 'string',
            tier: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCostRulesResponseBodyItemsInputTokenTiers = DescribeCostRulesResponseBodyItemsInputTokenTiers;
class DescribeCostRulesResponseBodyItems extends $dara.Model {
    static names() {
        return {
            cacheCostPointsPerMillion: 'CacheCostPointsPerMillion',
            cacheCreationCostPointsPerMillion: 'CacheCreationCostPointsPerMillion',
            costRuleId: 'CostRuleId',
            effectiveEndTime: 'EffectiveEndTime',
            effectiveStartTime: 'EffectiveStartTime',
            effectiveTargetType: 'EffectiveTargetType',
            effectiveTargetValue: 'EffectiveTargetValue',
            explicitCacheCostPointsPerMillion: 'ExplicitCacheCostPointsPerMillion',
            gmtCreated: 'GmtCreated',
            gmtModified: 'GmtModified',
            gwClusterId: 'GwClusterId',
            imageCostPointsPerCount: 'ImageCostPointsPerCount',
            inputCostPointsPerMillion: 'InputCostPointsPerMillion',
            inputTokenTier: 'InputTokenTier',
            inputTokenTiers: 'InputTokenTiers',
            model: 'Model',
            modelServiceId: 'ModelServiceId',
            modelServiceName: 'ModelServiceName',
            outputCostPointsPerMillion: 'OutputCostPointsPerMillion',
            videoCostPointsPerSecond: 'VideoCostPointsPerSecond',
        };
    }
    static types() {
        return {
            cacheCostPointsPerMillion: 'string',
            cacheCreationCostPointsPerMillion: 'string',
            costRuleId: 'string',
            effectiveEndTime: 'string',
            effectiveStartTime: 'string',
            effectiveTargetType: 'string',
            effectiveTargetValue: 'string',
            explicitCacheCostPointsPerMillion: 'string',
            gmtCreated: 'string',
            gmtModified: 'string',
            gwClusterId: 'string',
            imageCostPointsPerCount: 'string',
            inputCostPointsPerMillion: 'string',
            inputTokenTier: 'string',
            inputTokenTiers: { 'type': 'array', 'itemType': DescribeCostRulesResponseBodyItemsInputTokenTiers },
            model: 'string',
            modelServiceId: 'string',
            modelServiceName: 'string',
            outputCostPointsPerMillion: 'string',
            videoCostPointsPerSecond: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.inputTokenTiers)) {
            $dara.Model.validateArray(this.inputTokenTiers);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeCostRulesResponseBodyItems = DescribeCostRulesResponseBodyItems;
class DescribeCostRulesResponseBody extends $dara.Model {
    static names() {
        return {
            items: 'Items',
            pageNumber: 'PageNumber',
            pageRecordCount: 'PageRecordCount',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalRecordCount: 'TotalRecordCount',
        };
    }
    static types() {
        return {
            items: { 'type': 'array', 'itemType': DescribeCostRulesResponseBodyItems },
            pageNumber: 'number',
            pageRecordCount: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalRecordCount: 'number',
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
exports.DescribeCostRulesResponseBody = DescribeCostRulesResponseBody;
//# sourceMappingURL=DescribeCostRulesResponseBody.js.map