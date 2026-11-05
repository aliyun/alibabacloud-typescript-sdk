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
exports.DescribePolarClawAgentToolsResponseBody = exports.DescribePolarClawAgentToolsResponseBodyProfiles = exports.DescribePolarClawAgentToolsResponseBodyGroups = exports.DescribePolarClawAgentToolsResponseBodyGroupsTools = exports.DescribePolarClawAgentToolsResponseBodyCurrentConfig = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class DescribePolarClawAgentToolsResponseBodyCurrentConfig extends $dara.Model {
    static names() {
        return {
            allow: 'Allow',
            alsoAllow: 'AlsoAllow',
            deny: 'Deny',
            profile: 'Profile',
        };
    }
    static types() {
        return {
            allow: { 'type': 'array', 'itemType': 'string' },
            alsoAllow: { 'type': 'array', 'itemType': 'string' },
            deny: { 'type': 'array', 'itemType': 'string' },
            profile: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.allow)) {
            $dara.Model.validateArray(this.allow);
        }
        if (Array.isArray(this.alsoAllow)) {
            $dara.Model.validateArray(this.alsoAllow);
        }
        if (Array.isArray(this.deny)) {
            $dara.Model.validateArray(this.deny);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawAgentToolsResponseBodyCurrentConfig = DescribePolarClawAgentToolsResponseBodyCurrentConfig;
class DescribePolarClawAgentToolsResponseBodyGroupsTools extends $dara.Model {
    static names() {
        return {
            defaultProfiles: 'DefaultProfiles',
            description: 'Description',
            id: 'Id',
            label: 'Label',
            source: 'Source',
        };
    }
    static types() {
        return {
            defaultProfiles: { 'type': 'array', 'itemType': 'string' },
            description: 'string',
            id: 'string',
            label: 'string',
            source: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.defaultProfiles)) {
            $dara.Model.validateArray(this.defaultProfiles);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawAgentToolsResponseBodyGroupsTools = DescribePolarClawAgentToolsResponseBodyGroupsTools;
class DescribePolarClawAgentToolsResponseBodyGroups extends $dara.Model {
    static names() {
        return {
            id: 'Id',
            label: 'Label',
            source: 'Source',
            tools: 'Tools',
        };
    }
    static types() {
        return {
            id: 'string',
            label: 'string',
            source: 'string',
            tools: { 'type': 'array', 'itemType': DescribePolarClawAgentToolsResponseBodyGroupsTools },
        };
    }
    validate() {
        if (Array.isArray(this.tools)) {
            $dara.Model.validateArray(this.tools);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawAgentToolsResponseBodyGroups = DescribePolarClawAgentToolsResponseBodyGroups;
class DescribePolarClawAgentToolsResponseBodyProfiles extends $dara.Model {
    static names() {
        return {
            id: 'Id',
            label: 'Label',
        };
    }
    static types() {
        return {
            id: 'string',
            label: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawAgentToolsResponseBodyProfiles = DescribePolarClawAgentToolsResponseBodyProfiles;
class DescribePolarClawAgentToolsResponseBody extends $dara.Model {
    static names() {
        return {
            agentId: 'AgentId',
            applicationId: 'ApplicationId',
            code: 'Code',
            currentConfig: 'CurrentConfig',
            groups: 'Groups',
            message: 'Message',
            profiles: 'Profiles',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            agentId: 'string',
            applicationId: 'string',
            code: 'number',
            currentConfig: DescribePolarClawAgentToolsResponseBodyCurrentConfig,
            groups: { 'type': 'array', 'itemType': DescribePolarClawAgentToolsResponseBodyGroups },
            message: 'string',
            profiles: { 'type': 'array', 'itemType': DescribePolarClawAgentToolsResponseBodyProfiles },
            requestId: 'string',
        };
    }
    validate() {
        if (this.currentConfig && typeof this.currentConfig.validate === 'function') {
            this.currentConfig.validate();
        }
        if (Array.isArray(this.groups)) {
            $dara.Model.validateArray(this.groups);
        }
        if (Array.isArray(this.profiles)) {
            $dara.Model.validateArray(this.profiles);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.DescribePolarClawAgentToolsResponseBody = DescribePolarClawAgentToolsResponseBody;
//# sourceMappingURL=DescribePolarClawAgentToolsResponseBody.js.map