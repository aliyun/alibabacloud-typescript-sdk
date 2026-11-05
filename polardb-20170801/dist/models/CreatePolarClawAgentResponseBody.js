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
exports.CreatePolarClawAgentResponseBody = exports.CreatePolarClawAgentResponseBodyAgent = exports.CreatePolarClawAgentResponseBodyAgentIdentity = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreatePolarClawAgentResponseBodyAgentIdentity extends $dara.Model {
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
exports.CreatePolarClawAgentResponseBodyAgentIdentity = CreatePolarClawAgentResponseBodyAgentIdentity;
class CreatePolarClawAgentResponseBodyAgent extends $dara.Model {
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
            identity: CreatePolarClawAgentResponseBodyAgentIdentity,
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
exports.CreatePolarClawAgentResponseBodyAgent = CreatePolarClawAgentResponseBodyAgent;
class CreatePolarClawAgentResponseBody extends $dara.Model {
    static names() {
        return {
            agent: 'Agent',
            agentId: 'AgentId',
            applicationId: 'ApplicationId',
            code: 'Code',
            message: 'Message',
            name: 'Name',
            requestId: 'RequestId',
            workspace: 'Workspace',
        };
    }
    static types() {
        return {
            agent: CreatePolarClawAgentResponseBodyAgent,
            agentId: 'string',
            applicationId: 'string',
            code: 'number',
            message: 'string',
            name: 'string',
            requestId: 'string',
            workspace: 'string',
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
exports.CreatePolarClawAgentResponseBody = CreatePolarClawAgentResponseBody;
//# sourceMappingURL=CreatePolarClawAgentResponseBody.js.map