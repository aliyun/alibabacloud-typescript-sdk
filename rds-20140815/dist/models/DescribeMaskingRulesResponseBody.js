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
exports.DescribeMaskingRulesResponseBody = exports.DescribeMaskingRulesResponseBodyData = exports.DescribeMaskingRulesResponseBodyDataRules = exports.DescribeMaskingRulesResponseBodyDataRulesRuleConfig = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeMaskingRulesResponseBodyDataRulesRuleConfig extends $dara.Model {
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
exports.DescribeMaskingRulesResponseBodyDataRulesRuleConfig = DescribeMaskingRulesResponseBodyDataRulesRuleConfig;
class DescribeMaskingRulesResponseBodyDataRules extends $dara.Model {
    static names() {
        return {
            defaultAlgo: 'DefaultAlgo',
            enabled: 'Enabled',
            maskingAlgo: 'MaskingAlgo',
            ruleConfig: 'RuleConfig',
            ruleName: 'RuleName',
        };
    }
    static types() {
        return {
            defaultAlgo: 'string',
            enabled: 'string',
            maskingAlgo: 'string',
            ruleConfig: DescribeMaskingRulesResponseBodyDataRulesRuleConfig,
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
exports.DescribeMaskingRulesResponseBodyDataRules = DescribeMaskingRulesResponseBodyDataRules;
class DescribeMaskingRulesResponseBodyData extends $dara.Model {
    static names() {
        return {
            rules: 'Rules',
        };
    }
    static types() {
        return {
            rules: { 'type': 'array', 'itemType': DescribeMaskingRulesResponseBodyDataRules },
        };
    }
    validate() {
        if (Array.isArray(this.rules)) {
            $dara.Model.validateArray(this.rules);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeMaskingRulesResponseBodyData = DescribeMaskingRulesResponseBodyData;
class DescribeMaskingRulesResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            data: DescribeMaskingRulesResponseBodyData,
            requestId: 'string',
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
exports.DescribeMaskingRulesResponseBody = DescribeMaskingRulesResponseBody;
//# sourceMappingURL=DescribeMaskingRulesResponseBody.js.map