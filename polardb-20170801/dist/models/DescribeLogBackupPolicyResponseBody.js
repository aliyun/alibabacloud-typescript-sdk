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
exports.DescribeLogBackupPolicyResponseBody = exports.DescribeLogBackupPolicyResponseBodyAdvancedLogPolicies = exports.DescribeLogBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeLogBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy extends $dara.Model {
    static names() {
        return {
            destRegion: 'DestRegion',
            destType: 'DestType',
            enableLogBackup: 'EnableLogBackup',
            logRetentionType: 'LogRetentionType',
            logRetentionValue: 'LogRetentionValue',
            policyId: 'PolicyId',
            srcRegion: 'SrcRegion',
            srcType: 'SrcType',
        };
    }
    static types() {
        return {
            destRegion: 'string',
            destType: 'string',
            enableLogBackup: 'number',
            logRetentionType: 'string',
            logRetentionValue: 'string',
            policyId: 'string',
            srcRegion: 'string',
            srcType: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeLogBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy = DescribeLogBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy;
class DescribeLogBackupPolicyResponseBodyAdvancedLogPolicies extends $dara.Model {
    static names() {
        return {
            advancedLogPolicy: 'AdvancedLogPolicy',
        };
    }
    static types() {
        return {
            advancedLogPolicy: { 'type': 'array', 'itemType': DescribeLogBackupPolicyResponseBodyAdvancedLogPoliciesAdvancedLogPolicy },
        };
    }
    validate() {
        if (Array.isArray(this.advancedLogPolicy)) {
            $dara.Model.validateArray(this.advancedLogPolicy);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeLogBackupPolicyResponseBodyAdvancedLogPolicies = DescribeLogBackupPolicyResponseBodyAdvancedLogPolicies;
class DescribeLogBackupPolicyResponseBody extends $dara.Model {
    static names() {
        return {
            advancedLogPolicies: 'AdvancedLogPolicies',
            enableBackupLog: 'EnableBackupLog',
            logBackupAnotherRegionRegion: 'LogBackupAnotherRegionRegion',
            logBackupAnotherRegionRetentionPeriod: 'LogBackupAnotherRegionRetentionPeriod',
            logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            advancedLogPolicies: DescribeLogBackupPolicyResponseBodyAdvancedLogPolicies,
            enableBackupLog: 'number',
            logBackupAnotherRegionRegion: 'string',
            logBackupAnotherRegionRetentionPeriod: 'string',
            logBackupRetentionPeriod: 'number',
            requestId: 'string',
        };
    }
    validate() {
        if (this.advancedLogPolicies && typeof this.advancedLogPolicies.validate === 'function') {
            this.advancedLogPolicies.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeLogBackupPolicyResponseBody = DescribeLogBackupPolicyResponseBody;
//# sourceMappingURL=DescribeLogBackupPolicyResponseBody.js.map