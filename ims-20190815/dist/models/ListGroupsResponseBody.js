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
exports.ListGroupsResponseBody = exports.ListGroupsResponseBodyGroups = exports.ListGroupsResponseBodyGroupsGroup = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListGroupsResponseBodyGroupsGroup extends $dara.Model {
    static names() {
        return {
            comments: 'Comments',
            createDate: 'CreateDate',
            displayName: 'DisplayName',
            groupId: 'GroupId',
            groupName: 'GroupName',
            updateDate: 'UpdateDate',
        };
    }
    static types() {
        return {
            comments: 'string',
            createDate: 'string',
            displayName: 'string',
            groupId: 'string',
            groupName: 'string',
            updateDate: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListGroupsResponseBodyGroupsGroup = ListGroupsResponseBodyGroupsGroup;
class ListGroupsResponseBodyGroups extends $dara.Model {
    static names() {
        return {
            group: 'Group',
        };
    }
    static types() {
        return {
            group: { 'type': 'array', 'itemType': ListGroupsResponseBodyGroupsGroup },
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
exports.ListGroupsResponseBodyGroups = ListGroupsResponseBodyGroups;
class ListGroupsResponseBody extends $dara.Model {
    static names() {
        return {
            groups: 'Groups',
            isTruncated: 'IsTruncated',
            marker: 'Marker',
            requestId: 'RequestId',
        };
    }
    static types() {
        return {
            groups: ListGroupsResponseBodyGroups,
            isTruncated: 'boolean',
            marker: 'string',
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
exports.ListGroupsResponseBody = ListGroupsResponseBody;
//# sourceMappingURL=ListGroupsResponseBody.js.map