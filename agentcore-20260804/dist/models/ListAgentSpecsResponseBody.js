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
exports.ListAgentSpecsResponseBody = exports.ListAgentSpecsResponseBodyData = exports.ListAgentSpecsResponseBodyDataPageItems = exports.ListAgentSpecsResponseBodyDataPageItemsSkills = exports.ListAgentSpecsResponseBodyDataPageItemsSkillsVersionSelector = exports.ListAgentSpecsResponseBodyDataPageItemsMcpServers = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListAgentSpecsResponseBodyDataPageItemsMcpServers extends $dara.Model {
    static names() {
        return {
            name: 'name',
        };
    }
    static types() {
        return {
            name: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAgentSpecsResponseBodyDataPageItemsMcpServers = ListAgentSpecsResponseBodyDataPageItemsMcpServers;
class ListAgentSpecsResponseBodyDataPageItemsSkillsVersionSelector extends $dara.Model {
    static names() {
        return {
            type: 'type',
            value: 'value',
        };
    }
    static types() {
        return {
            type: 'string',
            value: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAgentSpecsResponseBodyDataPageItemsSkillsVersionSelector = ListAgentSpecsResponseBodyDataPageItemsSkillsVersionSelector;
class ListAgentSpecsResponseBodyDataPageItemsSkills extends $dara.Model {
    static names() {
        return {
            name: 'name',
            sourceType: 'sourceType',
            versionSelector: 'versionSelector',
        };
    }
    static types() {
        return {
            name: 'string',
            sourceType: 'string',
            versionSelector: ListAgentSpecsResponseBodyDataPageItemsSkillsVersionSelector,
        };
    }
    validate() {
        if (this.versionSelector && typeof this.versionSelector.validate === 'function') {
            this.versionSelector.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAgentSpecsResponseBodyDataPageItemsSkills = ListAgentSpecsResponseBodyDataPageItemsSkills;
class ListAgentSpecsResponseBodyDataPageItems extends $dara.Model {
    static names() {
        return {
            bizTags: 'bizTags',
            description: 'description',
            downloadCount: 'downloadCount',
            editingVersion: 'editingVersion',
            enable: 'enable',
            from: 'from',
            labels: 'labels',
            mcpServers: 'mcpServers',
            name: 'name',
            onlineCnt: 'onlineCnt',
            reviewingVersion: 'reviewingVersion',
            scope: 'scope',
            skills: 'skills',
            updateTime: 'updateTime',
        };
    }
    static types() {
        return {
            bizTags: 'string',
            description: 'string',
            downloadCount: 'number',
            editingVersion: 'string',
            enable: 'boolean',
            from: 'string',
            labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            mcpServers: { 'type': 'array', 'itemType': ListAgentSpecsResponseBodyDataPageItemsMcpServers },
            name: 'string',
            onlineCnt: 'number',
            reviewingVersion: 'string',
            scope: 'string',
            skills: { 'type': 'array', 'itemType': ListAgentSpecsResponseBodyDataPageItemsSkills },
            updateTime: 'number',
        };
    }
    validate() {
        if (this.labels) {
            $dara.Model.validateMap(this.labels);
        }
        if (Array.isArray(this.mcpServers)) {
            $dara.Model.validateArray(this.mcpServers);
        }
        if (Array.isArray(this.skills)) {
            $dara.Model.validateArray(this.skills);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListAgentSpecsResponseBodyDataPageItems = ListAgentSpecsResponseBodyDataPageItems;
class ListAgentSpecsResponseBodyData extends $dara.Model {
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
            pageItems: { 'type': 'array', 'itemType': ListAgentSpecsResponseBodyDataPageItems },
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
exports.ListAgentSpecsResponseBodyData = ListAgentSpecsResponseBodyData;
class ListAgentSpecsResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'data',
            requestId: 'requestId',
        };
    }
    static types() {
        return {
            data: ListAgentSpecsResponseBodyData,
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
exports.ListAgentSpecsResponseBody = ListAgentSpecsResponseBody;
//# sourceMappingURL=ListAgentSpecsResponseBody.js.map