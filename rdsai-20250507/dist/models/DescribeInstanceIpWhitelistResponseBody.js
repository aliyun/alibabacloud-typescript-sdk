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
exports.DescribeInstanceIpWhitelistResponseBody = exports.DescribeInstanceIpWhitelistResponseBodyIpWhiteListGroups = exports.DescribeInstanceIpWhitelistResponseBodyDbIpWhiteListGroups = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribeInstanceIpWhitelistResponseBodyDbIpWhiteListGroups extends $dara.Model {
    static names() {
        return {
            groupName: 'GroupName',
            ipWhitelist: 'IpWhitelist',
        };
    }
    static types() {
        return {
            groupName: 'string',
            ipWhitelist: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeInstanceIpWhitelistResponseBodyDbIpWhiteListGroups = DescribeInstanceIpWhitelistResponseBodyDbIpWhiteListGroups;
class DescribeInstanceIpWhitelistResponseBodyIpWhiteListGroups extends $dara.Model {
    static names() {
        return {
            groupName: 'GroupName',
            ipWhitelist: 'IpWhitelist',
        };
    }
    static types() {
        return {
            groupName: 'string',
            ipWhitelist: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeInstanceIpWhitelistResponseBodyIpWhiteListGroups = DescribeInstanceIpWhitelistResponseBodyIpWhiteListGroups;
class DescribeInstanceIpWhitelistResponseBody extends $dara.Model {
    static names() {
        return {
            branchName: 'BranchName',
            dbIpWhiteListGroups: 'DbIpWhiteListGroups',
            instanceName: 'InstanceName',
            ipWhiteListGroups: 'IpWhiteListGroups',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            branchName: 'string',
            dbIpWhiteListGroups: { 'type': 'array', 'itemType': DescribeInstanceIpWhitelistResponseBodyDbIpWhiteListGroups },
            instanceName: 'string',
            ipWhiteListGroups: { 'type': 'array', 'itemType': DescribeInstanceIpWhitelistResponseBodyIpWhiteListGroups },
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.dbIpWhiteListGroups)) {
            $dara.Model.validateArray(this.dbIpWhiteListGroups);
        }
        if (Array.isArray(this.ipWhiteListGroups)) {
            $dara.Model.validateArray(this.ipWhiteListGroups);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribeInstanceIpWhitelistResponseBody = DescribeInstanceIpWhitelistResponseBody;
//# sourceMappingURL=DescribeInstanceIpWhitelistResponseBody.js.map