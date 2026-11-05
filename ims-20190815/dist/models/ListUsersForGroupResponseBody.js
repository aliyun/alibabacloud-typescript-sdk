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
exports.ListUsersForGroupResponseBody = exports.ListUsersForGroupResponseBodyUsers = exports.ListUsersForGroupResponseBodyUsersUser = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListUsersForGroupResponseBodyUsersUser extends $dara.Model {
    static names() {
        return {
            displayName: 'DisplayName',
            joinDate: 'JoinDate',
            userId: 'UserId',
            userPrincipalName: 'UserPrincipalName',
        };
    }
    static types() {
        return {
            displayName: 'string',
            joinDate: 'string',
            userId: 'string',
            userPrincipalName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListUsersForGroupResponseBodyUsersUser = ListUsersForGroupResponseBodyUsersUser;
class ListUsersForGroupResponseBodyUsers extends $dara.Model {
    static names() {
        return {
            user: 'User',
        };
    }
    static types() {
        return {
            user: { 'type': 'array', 'itemType': ListUsersForGroupResponseBodyUsersUser },
        };
    }
    validate() {
        if (Array.isArray(this.user)) {
            $dara.Model.validateArray(this.user);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListUsersForGroupResponseBodyUsers = ListUsersForGroupResponseBodyUsers;
class ListUsersForGroupResponseBody extends $dara.Model {
    static names() {
        return {
            isTruncated: 'IsTruncated',
            marker: 'Marker',
            requestId: 'RequestId',
            users: 'Users',
        };
    }
    static types() {
        return {
            isTruncated: 'boolean',
            marker: 'string',
            requestId: 'string',
            users: ListUsersForGroupResponseBodyUsers,
        };
    }
    validate() {
        if (this.users && typeof this.users.validate === 'function') {
            this.users.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListUsersForGroupResponseBody = ListUsersForGroupResponseBody;
//# sourceMappingURL=ListUsersForGroupResponseBody.js.map