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
exports.ListSkillsResponseBody = exports.ListSkillsResponseBodyData = exports.ListSkillsResponseBodyDataPageItems = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListSkillsResponseBodyDataPageItems extends $dara.Model {
    static names() {
        return {
            bizTags: 'bizTags',
            description: 'description',
            downloadCount: 'downloadCount',
            draftMode: 'draftMode',
            editable: 'editable',
            editingVersion: 'editingVersion',
            enable: 'enable',
            from: 'from',
            labels: 'labels',
            name: 'name',
            onlineCnt: 'onlineCnt',
            owner: 'owner',
            reviewingVersion: 'reviewingVersion',
            scope: 'scope',
            updateTime: 'updateTime',
            workspaceId: 'workspaceId',
            writeable: 'writeable',
        };
    }
    static types() {
        return {
            bizTags: 'string',
            description: 'string',
            downloadCount: 'number',
            draftMode: 'string',
            editable: 'boolean',
            editingVersion: 'string',
            enable: 'boolean',
            from: 'string',
            labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            name: 'string',
            onlineCnt: 'number',
            owner: 'string',
            reviewingVersion: 'string',
            scope: 'string',
            updateTime: 'number',
            workspaceId: 'string',
            writeable: 'boolean',
        };
    }
    validate() {
        if (this.labels) {
            $dara.Model.validateMap(this.labels);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListSkillsResponseBodyDataPageItems = ListSkillsResponseBodyDataPageItems;
class ListSkillsResponseBodyData extends $dara.Model {
    static names() {
        return {
            pageItems: 'pageItems',
            pageNumber: 'pageNumber',
            pagesAvailable: 'pagesAvailable',
            totalCount: 'totalCount',
        };
    }
    static types() {
        return {
            pageItems: { 'type': 'array', 'itemType': ListSkillsResponseBodyDataPageItems },
            pageNumber: 'number',
            pagesAvailable: 'number',
            totalCount: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.pageItems)) {
            $dara.Model.validateArray(this.pageItems);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListSkillsResponseBodyData = ListSkillsResponseBodyData;
class ListSkillsResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'data',
            maxResults: 'maxResults',
            nextToken: 'nextToken',
            requestId: 'requestId',
        };
    }
    static types() {
        return {
            data: ListSkillsResponseBodyData,
            maxResults: 'number',
            nextToken: 'string',
            requestId: 'string',
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
exports.ListSkillsResponseBody = ListSkillsResponseBody;
//# sourceMappingURL=ListSkillsResponseBody.js.map