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
exports.UpdatePolarClawAgentToolsResponseBody = exports.UpdatePolarClawAgentToolsResponseBodyTools = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdatePolarClawAgentToolsResponseBodyTools extends $dara.Model {
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
exports.UpdatePolarClawAgentToolsResponseBodyTools = UpdatePolarClawAgentToolsResponseBodyTools;
class UpdatePolarClawAgentToolsResponseBody extends $dara.Model {
    static names() {
        return {
            agentId: 'AgentId',
            applicationId: 'ApplicationId',
            code: 'Code',
            message: 'Message',
            ok: 'Ok',
            requestId: 'RequestId',
            tools: 'Tools',
        };
    }
    static types() {
        return {
            agentId: 'string',
            applicationId: 'string',
            code: 'number',
            message: 'string',
            ok: 'boolean',
            requestId: 'string',
            tools: UpdatePolarClawAgentToolsResponseBodyTools,
        };
    }
    validate() {
        if (this.tools && typeof this.tools.validate === 'function') {
            this.tools.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdatePolarClawAgentToolsResponseBody = UpdatePolarClawAgentToolsResponseBody;
//# sourceMappingURL=UpdatePolarClawAgentToolsResponseBody.js.map