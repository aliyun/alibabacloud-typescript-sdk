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
exports.UpdatePolarClawAgentResponseBody = exports.UpdatePolarClawAgentResponseBodyAgent = exports.UpdatePolarClawAgentResponseBodyAgentIdentity = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdatePolarClawAgentResponseBodyAgentIdentity extends $dara.Model {
    static names() {
        return {
            avatar: 'Avatar',
            avatarUrl: 'AvatarUrl',
            emoji: 'Emoji',
            name: 'Name',
            theme: 'Theme',
        };
    }
    static types() {
        return {
            avatar: 'string',
            avatarUrl: 'string',
            emoji: 'string',
            name: 'string',
            theme: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdatePolarClawAgentResponseBodyAgentIdentity = UpdatePolarClawAgentResponseBodyAgentIdentity;
class UpdatePolarClawAgentResponseBodyAgent extends $dara.Model {
    static names() {
        return {
            id: 'Id',
            identity: 'Identity',
            name: 'Name',
            workspace: 'Workspace',
        };
    }
    static types() {
        return {
            id: 'string',
            identity: UpdatePolarClawAgentResponseBodyAgentIdentity,
            name: 'string',
            workspace: 'string',
        };
    }
    validate() {
        if (this.identity && typeof this.identity.validate === 'function') {
            this.identity.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdatePolarClawAgentResponseBodyAgent = UpdatePolarClawAgentResponseBodyAgent;
class UpdatePolarClawAgentResponseBody extends $dara.Model {
    static names() {
        return {
            agent: 'Agent',
            agentId: 'AgentId',
            applicationId: 'ApplicationId',
            code: 'Code',
            message: 'Message',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            agent: UpdatePolarClawAgentResponseBodyAgent,
            agentId: 'string',
            applicationId: 'string',
            code: 'number',
            message: 'string',
            requestId: 'string',
        };
    }
    validate() {
        if (this.agent && typeof this.agent.validate === 'function') {
            this.agent.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdatePolarClawAgentResponseBody = UpdatePolarClawAgentResponseBody;
//# sourceMappingURL=UpdatePolarClawAgentResponseBody.js.map