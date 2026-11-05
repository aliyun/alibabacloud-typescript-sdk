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
exports.ListGroupsForUserResponseBody = exports.ListGroupsForUserResponseBodyGroups = exports.ListGroupsForUserResponseBodyGroupsGroup = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListGroupsForUserResponseBodyGroupsGroup extends $dara.Model {
    static names() {
        return {
            comments: 'Comments',
            displayName: 'DisplayName',
            groupId: 'GroupId',
            groupName: 'GroupName',
            joinDate: 'JoinDate',
        };
    }
    static types() {
        return {
            comments: 'string',
            displayName: 'string',
            groupId: 'string',
            groupName: 'string',
            joinDate: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListGroupsForUserResponseBodyGroupsGroup = ListGroupsForUserResponseBodyGroupsGroup;
class ListGroupsForUserResponseBodyGroups extends $dara.Model {
    static names() {
        return {
            group: 'Group',
        };
    }
    static types() {
        return {
            group: { 'type': 'array', 'itemType': ListGroupsForUserResponseBodyGroupsGroup },
        };
    }
    validate() {
        if (Array.isArray(this.group)) {
            $dara.Model.validateArray(this.group);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListGroupsForUserResponseBodyGroups = ListGroupsForUserResponseBodyGroups;
class ListGroupsForUserResponseBody extends $dara.Model {
    static names() {
        return {
            groups: 'Groups',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            groups: ListGroupsForUserResponseBodyGroups,
            requestId: 'string',
        };
    }
    validate() {
        if (this.groups && typeof this.groups.validate === 'function') {
            this.groups.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListGroupsForUserResponseBody = ListGroupsForUserResponseBody;
//# sourceMappingURL=ListGroupsForUserResponseBody.js.map