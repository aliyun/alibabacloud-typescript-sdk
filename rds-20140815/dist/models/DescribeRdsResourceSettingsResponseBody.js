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
exports.DescribeRdsResourceSettingsResponseBody = exports.DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings = exports.DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting extends $dara.Model {
    static names() {
        return {
            endDate: 'EndDate',
            isTop: 'IsTop',
            noticeBarContent: 'NoticeBarContent',
            poppedUpButtonText: 'PoppedUpButtonText',
            poppedUpButtonType: 'PoppedUpButtonType',
            poppedUpButtonUrl: 'PoppedUpButtonUrl',
            poppedUpContent: 'PoppedUpContent',
            resourceNiche: 'ResourceNiche',
            startDate: 'StartDate',
        };
    }
    static types() {
        return {
            endDate: 'string',
            isTop: 'string',
            noticeBarContent: 'string',
            poppedUpButtonText: 'string',
            poppedUpButtonType: 'string',
            poppedUpButtonUrl: 'string',
            poppedUpContent: 'string',
            resourceNiche: 'string',
            startDate: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting = DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting;
class DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings extends $dara.Model {
    static names() {
        return {
            rdsInstanceResourceSetting: 'RdsInstanceResourceSetting',
        };
    }
    static types() {
        return {
            rdsInstanceResourceSetting: { 'type': 'array', 'itemType': DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting },
        };
    }
    validate() {
        if (Array.isArray(this.rdsInstanceResourceSetting)) {
            $dara.Model.validateArray(this.rdsInstanceResourceSetting);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings = DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings;
class DescribeRdsResourceSettingsResponseBody extends $dara.Model {
    static names() {
        return {
            rdsInstanceResourceSettings: 'RdsInstanceResourceSettings',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            rdsInstanceResourceSettings: DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings,
            requestId: 'string',
        };
    }
    validate() {
        if (this.rdsInstanceResourceSettings && typeof this.rdsInstanceResourceSettings.validate === 'function') {
            this.rdsInstanceResourceSettings.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeRdsResourceSettingsResponseBody = DescribeRdsResourceSettingsResponseBody;
//# sourceMappingURL=DescribeRdsResourceSettingsResponseBody.js.map