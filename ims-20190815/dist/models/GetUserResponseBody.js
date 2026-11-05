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
exports.GetUserResponseBody = exports.GetUserResponseBodyUser = exports.GetUserResponseBodyUserTags = exports.GetUserResponseBodyUserTagsTag = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetUserResponseBodyUserTagsTag extends $dara.Model {
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
exports.GetUserResponseBodyUserTagsTag = GetUserResponseBodyUserTagsTag;
class GetUserResponseBodyUserTags extends $dara.Model {
    static names() {
        return {
            tag: 'Tag',
        };
    }
    static types() {
        return {
            tag: { 'type': 'array', 'itemType': GetUserResponseBodyUserTagsTag },
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
exports.GetUserResponseBodyUserTags = GetUserResponseBodyUserTags;
class GetUserResponseBodyUser extends $dara.Model {
    static names() {
        return {
            comments: 'Comments',
            createDate: 'CreateDate',
            displayName: 'DisplayName',
            email: 'Email',
            lastLoginDate: 'LastLoginDate',
            mobilePhone: 'MobilePhone',
            provisionType: 'ProvisionType',
            tags: 'Tags',
            updateDate: 'UpdateDate',
            userId: 'UserId',
            userName: 'UserName',
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
            tags: GetUserResponseBodyUserTags,
            updateDate: 'string',
            userId: 'string',
            userName: 'string',
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
exports.GetUserResponseBodyUser = GetUserResponseBodyUser;
class GetUserResponseBody extends $dara.Model {
    static names() {
        return {
            requestId: 'RequestId',
            user: 'User',
        };
    }
    static types() {
        return {
            requestId: 'string',
            user: GetUserResponseBodyUser,
        };
    }
    validate() {
        if (this.user && typeof this.user.validate === 'function') {
            this.user.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetUserResponseBody = GetUserResponseBody;
//# sourceMappingURL=GetUserResponseBody.js.map