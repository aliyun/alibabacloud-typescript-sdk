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
exports.GetAccountSecurityPracticeReportResponseBody = exports.GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfo = exports.GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfoAccountSecurityPracticeUserInfo = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfoAccountSecurityPracticeUserInfo extends $dara.Model {
    static names() {
        return {
            bindMfa: 'BindMfa',
            oldAkNum: 'OldAkNum',
            rootWithAccessKey: 'RootWithAccessKey',
            subUser: 'SubUser',
            subUserBindMfa: 'SubUserBindMfa',
            subUserPwdLevel: 'SubUserPwdLevel',
            subUserWithOldAccessKey: 'SubUserWithOldAccessKey',
            subUserWithUnusedAccessKey: 'SubUserWithUnusedAccessKey',
            unusedAkNum: 'UnusedAkNum',
        };
    }
    static types() {
        return {
            bindMfa: 'boolean',
            oldAkNum: 'number',
            rootWithAccessKey: 'number',
            subUser: 'number',
            subUserBindMfa: 'number',
            subUserPwdLevel: 'string',
            subUserWithOldAccessKey: 'number',
            subUserWithUnusedAccessKey: 'number',
            unusedAkNum: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfoAccountSecurityPracticeUserInfo = GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfoAccountSecurityPracticeUserInfo;
class GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfo extends $dara.Model {
    static names() {
        return {
            accountSecurityPracticeUserInfo: 'AccountSecurityPracticeUserInfo',
            score: 'Score',
        };
    }
    static types() {
        return {
            accountSecurityPracticeUserInfo: GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfoAccountSecurityPracticeUserInfo,
            score: 'number',
        };
    }
    validate() {
        if (this.accountSecurityPracticeUserInfo && typeof this.accountSecurityPracticeUserInfo.validate === 'function') {
            this.accountSecurityPracticeUserInfo.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfo = GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfo;
class GetAccountSecurityPracticeReportResponseBody extends $dara.Model {
    static names() {
        return {
            accountSecurityPracticeInfo: 'AccountSecurityPracticeInfo',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            accountSecurityPracticeInfo: GetAccountSecurityPracticeReportResponseBodyAccountSecurityPracticeInfo,
            requestId: 'string',
        };
    }
    validate() {
        if (this.accountSecurityPracticeInfo && typeof this.accountSecurityPracticeInfo.validate === 'function') {
            this.accountSecurityPracticeInfo.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetAccountSecurityPracticeReportResponseBody = GetAccountSecurityPracticeReportResponseBody;
//# sourceMappingURL=GetAccountSecurityPracticeReportResponseBody.js.map