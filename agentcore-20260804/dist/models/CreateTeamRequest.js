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
exports.CreateTeamRequest = exports.CreateTeamRequestBody = exports.CreateTeamRequestBodyUsers = exports.CreateTeamRequestBodyAgents = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateTeamRequestBodyAgents extends $dara.Model {
    static names() {
        return {
            agentId: 'agentId',
            teamRole: 'teamRole',
        };
    }
    static types() {
        return {
            agentId: 'string',
            teamRole: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateTeamRequestBodyAgents = CreateTeamRequestBodyAgents;
class CreateTeamRequestBodyUsers extends $dara.Model {
    static names() {
        return {
            teamRole: 'teamRole',
            userId: 'userId',
        };
    }
    static types() {
        return {
            teamRole: 'string',
            userId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateTeamRequestBodyUsers = CreateTeamRequestBodyUsers;
class CreateTeamRequestBody extends $dara.Model {
    static names() {
        return {
            agents: 'agents',
            description: 'description',
            name: 'name',
            users: 'users',
        };
    }
    static types() {
        return {
            agents: { 'type': 'array', 'itemType': CreateTeamRequestBodyAgents },
            description: 'string',
            name: 'string',
            users: { 'type': 'array', 'itemType': CreateTeamRequestBodyUsers },
        };
    }
    validate() {
        if (Array.isArray(this.agents)) {
            $dara.Model.validateArray(this.agents);
        }
        if (Array.isArray(this.users)) {
            $dara.Model.validateArray(this.users);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateTeamRequestBody = CreateTeamRequestBody;
class CreateTeamRequest extends $dara.Model {
    static names() {
        return {
            body: 'body',
            clientToken: 'clientToken',
        };
    }
    static types() {
        return {
            body: CreateTeamRequestBody,
            clientToken: 'string',
        };
    }
    validate() {
        if (this.body && typeof this.body.validate === 'function') {
            this.body.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateTeamRequest = CreateTeamRequest;
//# sourceMappingURL=CreateTeamRequest.js.map