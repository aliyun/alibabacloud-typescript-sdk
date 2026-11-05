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
exports.ListSkillResponseBody = exports.ListSkillResponseBodyData = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListSkillResponseBodyData extends $dara.Model {
    static names() {
        return {
            activeVersion: 'ActiveVersion',
            activeVersionId: 'ActiveVersionId',
            category: 'Category',
            content: 'Content',
            createdAt: 'CreatedAt',
            dbtypes: 'Dbtypes',
            description: 'Description',
            displayName: 'DisplayName',
            icon: 'Icon',
            id: 'Id',
            isDeleted: 'IsDeleted',
            name: 'Name',
            scope: 'Scope',
            skillType: 'SkillType',
            slug: 'Slug',
            updatedAt: 'UpdatedAt',
            visibility: 'Visibility',
        };
    }
    static types() {
        return {
            activeVersion: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            activeVersionId: 'string',
            category: 'string',
            content: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
            createdAt: 'string',
            dbtypes: { 'type': 'array', 'itemType': 'string' },
            description: 'string',
            displayName: 'string',
            icon: 'string',
            id: 'string',
            isDeleted: 'boolean',
            name: 'string',
            scope: 'string',
            skillType: 'string',
            slug: 'string',
            updatedAt: 'string',
            visibility: 'string',
        };
    }
    validate() {
        if (this.activeVersion) {
            $dara.Model.validateMap(this.activeVersion);
        }
        if (this.content) {
            $dara.Model.validateMap(this.content);
        }
        if (Array.isArray(this.dbtypes)) {
            $dara.Model.validateArray(this.dbtypes);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListSkillResponseBodyData = ListSkillResponseBodyData;
class ListSkillResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'Data',
            pageNumber: 'PageNumber',
            pageSize: 'PageSize',
            requestId: 'RequestId',
            totalCount: 'TotalCount',
        };
    }
    static types() {
        return {
            data: { 'type': 'array', 'itemType': ListSkillResponseBodyData },
            pageNumber: 'number',
            pageSize: 'number',
            requestId: 'string',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.data)) {
            $dara.Model.validateArray(this.data);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListSkillResponseBody = ListSkillResponseBody;
//# sourceMappingURL=ListSkillResponseBody.js.map