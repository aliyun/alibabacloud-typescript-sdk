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
exports.GetTeamResponseBody = exports.GetTeamResponseBodyData = exports.GetTeamResponseBodyDataUsers = exports.GetTeamResponseBodyDataAgents = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetTeamResponseBodyDataAgents extends $dara.Model {
    static names() {
        return {
            agentId: 'agentId',
            createMode: 'createMode',
            createdAt: 'createdAt',
            deployType: 'deployType',
            description: 'description',
            latestSpecVersion: 'latestSpecVersion',
            name: 'name',
            runtime: 'runtime',
            status: 'status',
            teamRole: 'teamRole',
            updatedAt: 'updatedAt',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            agentId: 'string',
            createMode: 'string',
            createdAt: 'string',
            deployType: 'string',
            description: 'string',
            latestSpecVersion: 'number',
            name: 'string',
            runtime: 'string',
            status: 'string',
            teamRole: 'string',
            updatedAt: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetTeamResponseBodyDataAgents = GetTeamResponseBodyDataAgents;
class GetTeamResponseBodyDataUsers extends $dara.Model {
    static names() {
        return {
            authMethod: 'authMethod',
            createdAt: 'createdAt',
            displayName: 'displayName',
            email: 'email',
            initialPassword: 'initialPassword',
            name: 'name',
            note: 'note',
            status: 'status',
            teamRole: 'teamRole',
            updatedAt: 'updatedAt',
            userId: 'userId',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            authMethod: 'string',
            createdAt: 'string',
            displayName: 'string',
            email: 'string',
            initialPassword: 'string',
            name: 'string',
            note: 'string',
            status: 'string',
            teamRole: 'string',
            updatedAt: 'string',
            userId: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetTeamResponseBodyDataUsers = GetTeamResponseBodyDataUsers;
class GetTeamResponseBodyData extends $dara.Model {
    static names() {
        return {
            agents: 'agents',
            createdAt: 'createdAt',
            description: 'description',
            name: 'name',
            regionId: 'regionId',
            status: 'status',
            teamId: 'teamId',
            updatedAt: 'updatedAt',
            users: 'users',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            agents: { 'type': 'array', 'itemType': GetTeamResponseBodyDataAgents },
            createdAt: 'string',
            description: 'string',
            name: 'string',
            regionId: 'string',
            status: 'string',
            teamId: 'string',
            updatedAt: 'string',
            users: { 'type': 'array', 'itemType': GetTeamResponseBodyDataUsers },
            workspaceId: 'string',
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
exports.GetTeamResponseBodyData = GetTeamResponseBodyData;
class GetTeamResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'code',
            data: 'data',
            httpStatusCode: 'httpStatusCode',
            message: 'message',
            requestId: 'requestId',
            success: 'success',
        };
    }
    static types() {
        return {
            code: 'string',
            data: GetTeamResponseBodyData,
            httpStatusCode: 'number',
            message: 'string',
            requestId: 'string',
            success: 'boolean',
        };
    }
    validate() {
        if (this.data && typeof this.data.validate === 'function') {
            this.data.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetTeamResponseBody = GetTeamResponseBody;
//# sourceMappingURL=GetTeamResponseBody.js.map