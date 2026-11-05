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
exports.ListTeamsResponseBody = exports.ListTeamsResponseBodyItems = exports.ListTeamsResponseBodyItemsUsers = exports.ListTeamsResponseBodyItemsAgents = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListTeamsResponseBodyItemsAgents extends $dara.Model {
    static names() {
        return {
            agentId: 'agentId',
            agentName: 'agentName',
            teamRole: 'teamRole',
        };
    }
    static types() {
        return {
            agentId: 'string',
            agentName: 'string',
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
exports.ListTeamsResponseBodyItemsAgents = ListTeamsResponseBodyItemsAgents;
class ListTeamsResponseBodyItemsUsers extends $dara.Model {
    static names() {
        return {
            teamRole: 'teamRole',
            userId: 'userId',
            userName: 'userName',
        };
    }
    static types() {
        return {
            teamRole: 'string',
            userId: 'string',
            userName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListTeamsResponseBodyItemsUsers = ListTeamsResponseBodyItemsUsers;
class ListTeamsResponseBodyItems extends $dara.Model {
    static names() {
        return {
            agents: 'agents',
            createdAt: 'createdAt',
            description: 'description',
            name: 'name',
            status: 'status',
            teamId: 'teamId',
            updatedAt: 'updatedAt',
            users: 'users',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            agents: { 'type': 'array', 'itemType': ListTeamsResponseBodyItemsAgents },
            createdAt: 'string',
            description: 'string',
            name: 'string',
            status: 'string',
            teamId: 'string',
            updatedAt: 'string',
            users: { 'type': 'array', 'itemType': ListTeamsResponseBodyItemsUsers },
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
exports.ListTeamsResponseBodyItems = ListTeamsResponseBodyItems;
class ListTeamsResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'code',
            httpStatusCode: 'httpStatusCode',
            items: 'items',
            maxResults: 'maxResults',
            message: 'message',
            nextToken: 'nextToken',
            requestId: 'requestId',
            success: 'success',
            totalCount: 'totalCount',
        };
    }
    static types() {
        return {
            code: 'string',
            httpStatusCode: 'number',
            items: { 'type': 'array', 'itemType': ListTeamsResponseBodyItems },
            maxResults: 'number',
            message: 'string',
            nextToken: 'string',
            requestId: 'string',
            success: 'boolean',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListTeamsResponseBody = ListTeamsResponseBody;
//# sourceMappingURL=ListTeamsResponseBody.js.map