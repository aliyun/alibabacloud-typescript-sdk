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
exports.ModifyMaskingRulesRequest = exports.ModifyMaskingRulesRequestRuleConfig = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ModifyMaskingRulesRequestRuleConfig extends $dara.Model {
    static names() {
        return {
            columns: 'Columns',
            databases: 'Databases',
            tables: 'Tables',
        };
    }
    static types() {
        return {
            columns: { 'type': 'array', 'itemType': 'string' },
            databases: { 'type': 'array', 'itemType': 'string' },
            tables: { 'type': 'array', 'itemType': 'string' },
        };
    }
    validate() {
        if (Array.isArray(this.columns)) {
            $dara.Model.validateArray(this.columns);
        }
        if (Array.isArray(this.databases)) {
            $dara.Model.validateArray(this.databases);
        }
        if (Array.isArray(this.tables)) {
            $dara.Model.validateArray(this.tables);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyMaskingRulesRequestRuleConfig = ModifyMaskingRulesRequestRuleConfig;
class ModifyMaskingRulesRequest extends $dara.Model {
    static names() {
        return {
            DBInstanceName: 'DBInstanceName',
            DBName: 'DBName',
            defaultAlgo: 'DefaultAlgo',
            enabled: 'Enabled',
            maskingAlgo: 'MaskingAlgo',
            ownerId: 'OwnerId',
            regionId: 'RegionId',
            resourceOwnerAccount: 'ResourceOwnerAccount',
            resourceOwnerId: 'ResourceOwnerId',
            ruleConfig: 'RuleConfig',
            ruleName: 'RuleName',
        };
    }
    static types() {
        return {
            DBInstanceName: 'string',
            DBName: 'string',
            defaultAlgo: 'string',
            enabled: 'string',
            maskingAlgo: 'string',
            ownerId: 'string',
            regionId: 'string',
            resourceOwnerAccount: 'string',
            resourceOwnerId: 'number',
            ruleConfig: ModifyMaskingRulesRequestRuleConfig,
            ruleName: 'string',
        };
    }
    validate() {
        if (this.ruleConfig && typeof this.ruleConfig.validate === 'function') {
            this.ruleConfig.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ModifyMaskingRulesRequest = ModifyMaskingRulesRequest;
//# sourceMappingURL=ModifyMaskingRulesRequest.js.map