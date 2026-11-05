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
exports.ListUsersResponseBody = exports.ListUsersResponseBodyUsers = exports.ListUsersResponseBodyUsersUser = exports.ListUsersResponseBodyUsersUserTags = exports.ListUsersResponseBodyUsersUserTagsTag = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListUsersResponseBodyUsersUserTagsTag extends $dara.Model {
    static names() {
        return {
            tagKey: 'TagKey',
            tagValue: 'TagValue',
        };
    }
    static types() {
        return {
            tagKey: 'string',
            tagValue: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListUsersResponseBodyUsersUserTagsTag = ListUsersResponseBodyUsersUserTagsTag;
class ListUsersResponseBodyUsersUserTags extends $dara.Model {
    static names() {
        return {
            tag: 'Tag',
        };
    }
    static types() {
        return {
            tag: { 'type': 'array', 'itemType': ListUsersResponseBodyUsersUserTagsTag },
        };
    }
    validate() {
        if (Array.isArray(this.tag)) {
            $dara.Model.validateArray(this.tag);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListUsersResponseBodyUsersUserTags = ListUsersResponseBodyUsersUserTags;
class ListUsersResponseBodyUsersUser extends $dara.Model {
    static names() {
        return {
            comments: 'Comments',
            createDate: 'CreateDate',
            displayName: 'DisplayName',
            email: 'Email',
            lastLoginDate: 'LastLoginDate',
            mobilePhone: 'MobilePhone',
            provisionType: 'ProvisionType',
            status: 'Status',
            tags: 'Tags',
            updateDate: 'UpdateDate',
            userId: 'UserId',
            userPrincipalName: 'UserPrincipalName',
        };
    }
    static types() {
        return {
            comments: 'string',
            createDate: 'string',
            displayName: 'string',
            email: 'string',
            lastLoginDate: 'string',
            mobilePhone: 'string',
            provisionType: 'string',
            status: 'string',
            tags: ListUsersResponseBodyUsersUserTags,
            updateDate: 'string',
            userId: 'string',
            userPrincipalName: 'string',
        };
    }
    validate() {
        if (this.tags && typeof this.tags.validate === 'function') {
            this.tags.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListUsersResponseBodyUsersUser = ListUsersResponseBodyUsersUser;
class ListUsersResponseBodyUsers extends $dara.Model {
    static names() {
        return {
            user: 'User',
        };
    }
    static types() {
        return {
            user: { 'type': 'array', 'itemType': ListUsersResponseBodyUsersUser },
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
exports.ListUsersResponseBodyUsers = ListUsersResponseBodyUsers;
class ListUsersResponseBody extends $dara.Model {
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
            users: ListUsersResponseBodyUsers,
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
exports.ListUsersResponseBody = ListUsersResponseBody;
//# sourceMappingURL=ListUsersResponseBody.js.map