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
exports.GetAgentSpecLatestResponseBody = exports.GetAgentSpecLatestResponseBodyData = exports.GetAgentSpecLatestResponseBodyDataSkills = exports.GetAgentSpecLatestResponseBodyDataSkillsVersionSelector = exports.GetAgentSpecLatestResponseBodyDataMcpServers = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
const DataResourceValue_1 = require("./DataResourceValue");
class GetAgentSpecLatestResponseBodyDataMcpServers extends $dara.Model {
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
exports.GetAgentSpecLatestResponseBodyDataMcpServers = GetAgentSpecLatestResponseBodyDataMcpServers;
class GetAgentSpecLatestResponseBodyDataSkillsVersionSelector extends $dara.Model {
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
exports.GetAgentSpecLatestResponseBodyDataSkillsVersionSelector = GetAgentSpecLatestResponseBodyDataSkillsVersionSelector;
class GetAgentSpecLatestResponseBodyDataSkills extends $dara.Model {
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
            versionSelector: GetAgentSpecLatestResponseBodyDataSkillsVersionSelector,
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
exports.GetAgentSpecLatestResponseBodyDataSkills = GetAgentSpecLatestResponseBodyDataSkills;
class GetAgentSpecLatestResponseBodyData extends $dara.Model {
    static names() {
        return {
            bizTags: 'bizTags',
            content: 'content',
            description: 'description',
            downloadCount: 'downloadCount',
            enable: 'enable',
            mcpServers: 'mcpServers',
            name: 'name',
            resource: 'resource',
            scope: 'scope',
            skills: 'skills',
            updateTime: 'updateTime',
        };
    }
    static types() {
        return {
            bizTags: 'string',
            content: 'string',
            description: 'string',
            downloadCount: 'number',
            enable: 'boolean',
            mcpServers: { 'type': 'array', 'itemType': GetAgentSpecLatestResponseBodyDataMcpServers },
            name: 'string',
            resource: { 'type': 'map', 'keyType': 'string', 'valueType': DataResourceValue_1.DataResourceValue },
            scope: 'string',
            skills: { 'type': 'array', 'itemType': GetAgentSpecLatestResponseBodyDataSkills },
            updateTime: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.mcpServers)) {
            $dara.Model.validateArray(this.mcpServers);
        }
        if (this.resource) {
            $dara.Model.validateMap(this.resource);
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
exports.GetAgentSpecLatestResponseBodyData = GetAgentSpecLatestResponseBodyData;
class GetAgentSpecLatestResponseBody extends $dara.Model {
    static names() {
        return {
            data: 'data',
            requestId: 'requestId',
        };
    }
    static types() {
        return {
            data: GetAgentSpecLatestResponseBodyData,
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
exports.GetAgentSpecLatestResponseBody = GetAgentSpecLatestResponseBody;
//# sourceMappingURL=GetAgentSpecLatestResponseBody.js.map