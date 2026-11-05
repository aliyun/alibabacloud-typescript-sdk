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
exports.DescribePolarClawChannelsResponseBody = exports.DescribePolarClawChannelsResponseBodyChannels = exports.DescribePolarClawChannelsResponseBodyChannelsAccounts = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePolarClawChannelsResponseBodyChannelsAccounts extends $dara.Model {
    static names() {
        return {
            accountId: 'AccountId',
            configured: 'Configured',
            connected: 'Connected',
            enabled: 'Enabled',
            issues: 'Issues',
            lastInboundAt: 'LastInboundAt',
            lastOutboundAt: 'LastOutboundAt',
        };
    }
    static types() {
        return {
            accountId: 'string',
            configured: 'boolean',
            connected: 'boolean',
            enabled: 'boolean',
            issues: { 'type': 'array', 'itemType': 'string' },
            lastInboundAt: 'number',
            lastOutboundAt: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.issues)) {
            $dara.Model.validateArray(this.issues);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawChannelsResponseBodyChannelsAccounts = DescribePolarClawChannelsResponseBodyChannelsAccounts;
class DescribePolarClawChannelsResponseBodyChannels extends $dara.Model {
    static names() {
        return {
            accounts: 'Accounts',
            channelId: 'ChannelId',
            configured: 'Configured',
            defaultAccountId: 'DefaultAccountId',
            enabled: 'Enabled',
        };
    }
    static types() {
        return {
            accounts: { 'type': 'array', 'itemType': DescribePolarClawChannelsResponseBodyChannelsAccounts },
            channelId: 'string',
            configured: 'boolean',
            defaultAccountId: 'string',
            enabled: 'boolean',
        };
    }
    validate() {
        if (Array.isArray(this.accounts)) {
            $dara.Model.validateArray(this.accounts);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawChannelsResponseBodyChannels = DescribePolarClawChannelsResponseBodyChannels;
class DescribePolarClawChannelsResponseBody extends $dara.Model {
    static names() {
        return {
            applicationId: 'ApplicationId',
            channels: 'Channels',
            code: 'Code',
            message: 'Message',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            applicationId: 'string',
            channels: { 'type': 'array', 'itemType': DescribePolarClawChannelsResponseBodyChannels },
            code: 'number',
            message: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.channels)) {
            $dara.Model.validateArray(this.channels);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawChannelsResponseBody = DescribePolarClawChannelsResponseBody;
//# sourceMappingURL=DescribePolarClawChannelsResponseBody.js.map