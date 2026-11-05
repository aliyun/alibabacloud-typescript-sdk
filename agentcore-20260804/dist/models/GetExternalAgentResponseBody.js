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
exports.GetExternalAgentResponseBody = exports.GetExternalAgentResponseBodyData = exports.GetExternalAgentResponseBodyDataTools = exports.GetExternalAgentResponseBodyDataTemplate = exports.GetExternalAgentResponseBodyDataTemplateAiRegistry = exports.GetExternalAgentResponseBodyDataSkills = exports.GetExternalAgentResponseBodyDataSkillsVersionSelector = exports.GetExternalAgentResponseBodyDataModel = exports.GetExternalAgentResponseBodyDataModelQuota = exports.GetExternalAgentResponseBodyDataExternalAgentStatus = exports.GetExternalAgentResponseBodyDataConfiguredSkills = exports.GetExternalAgentResponseBodyDataConfiguredSkillsVersionSelector = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetExternalAgentResponseBodyDataConfiguredSkillsVersionSelector extends $dara.Model {
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
exports.GetExternalAgentResponseBodyDataConfiguredSkillsVersionSelector = GetExternalAgentResponseBodyDataConfiguredSkillsVersionSelector;
class GetExternalAgentResponseBodyDataConfiguredSkills extends $dara.Model {
    static names() {
        return {
            name: 'name',
            sourceType: 'sourceType',
            version: 'version',
            versionSelector: 'versionSelector',
        };
    }
    static types() {
        return {
            name: 'string',
            sourceType: 'string',
            version: 'string',
            versionSelector: GetExternalAgentResponseBodyDataConfiguredSkillsVersionSelector,
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
exports.GetExternalAgentResponseBodyDataConfiguredSkills = GetExternalAgentResponseBodyDataConfiguredSkills;
class GetExternalAgentResponseBodyDataExternalAgentStatus extends $dara.Model {
    static names() {
        return {
            heartbeatStatus: 'heartbeatStatus',
            lastActiveAt: 'lastActiveAt',
            lastHeartbeat: 'lastHeartbeat',
            localIP: 'localIP',
            runtime: 'runtime',
        };
    }
    static types() {
        return {
            heartbeatStatus: 'string',
            lastActiveAt: 'string',
            lastHeartbeat: 'string',
            localIP: 'string',
            runtime: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetExternalAgentResponseBodyDataExternalAgentStatus = GetExternalAgentResponseBodyDataExternalAgentStatus;
class GetExternalAgentResponseBodyDataModelQuota extends $dara.Model {
    static names() {
        return {
            enabled: 'enabled',
            limitType: 'limitType',
            overLimit: 'overLimit',
            periodType: 'periodType',
            ruleStatus: 'ruleStatus',
            usageLimit: 'usageLimit',
            usedAmount: 'usedAmount',
        };
    }
    static types() {
        return {
            enabled: 'boolean',
            limitType: 'string',
            overLimit: 'boolean',
            periodType: 'string',
            ruleStatus: 'string',
            usageLimit: 'number',
            usedAmount: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetExternalAgentResponseBodyDataModelQuota = GetExternalAgentResponseBodyDataModelQuota;
class GetExternalAgentResponseBodyDataModel extends $dara.Model {
    static names() {
        return {
            modelConnectionId: 'modelConnectionId',
            modelName: 'modelName',
            quota: 'quota',
        };
    }
    static types() {
        return {
            modelConnectionId: 'string',
            modelName: 'string',
            quota: GetExternalAgentResponseBodyDataModelQuota,
        };
    }
    validate() {
        if (this.quota && typeof this.quota.validate === 'function') {
            this.quota.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetExternalAgentResponseBodyDataModel = GetExternalAgentResponseBodyDataModel;
class GetExternalAgentResponseBodyDataSkillsVersionSelector extends $dara.Model {
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
exports.GetExternalAgentResponseBodyDataSkillsVersionSelector = GetExternalAgentResponseBodyDataSkillsVersionSelector;
class GetExternalAgentResponseBodyDataSkills extends $dara.Model {
    static names() {
        return {
            appliedVersion: 'appliedVersion',
            fromTemplate: 'fromTemplate',
            name: 'name',
            resolvedVersion: 'resolvedVersion',
            sourceType: 'sourceType',
            version: 'version',
            versionSelector: 'versionSelector',
        };
    }
    static types() {
        return {
            appliedVersion: 'string',
            fromTemplate: 'boolean',
            name: 'string',
            resolvedVersion: 'string',
            sourceType: 'string',
            version: 'string',
            versionSelector: GetExternalAgentResponseBodyDataSkillsVersionSelector,
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
exports.GetExternalAgentResponseBodyDataSkills = GetExternalAgentResponseBodyDataSkills;
class GetExternalAgentResponseBodyDataTemplateAiRegistry extends $dara.Model {
    static names() {
        return {
            name: 'name',
            version: 'version',
        };
    }
    static types() {
        return {
            name: 'string',
            version: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetExternalAgentResponseBodyDataTemplateAiRegistry = GetExternalAgentResponseBodyDataTemplateAiRegistry;
class GetExternalAgentResponseBodyDataTemplate extends $dara.Model {
    static names() {
        return {
            aiRegistry: 'aiRegistry',
        };
    }
    static types() {
        return {
            aiRegistry: GetExternalAgentResponseBodyDataTemplateAiRegistry,
        };
    }
    validate() {
        if (this.aiRegistry && typeof this.aiRegistry.validate === 'function') {
            this.aiRegistry.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetExternalAgentResponseBodyDataTemplate = GetExternalAgentResponseBodyDataTemplate;
class GetExternalAgentResponseBodyDataTools extends $dara.Model {
    static names() {
        return {
            name: 'name',
            type: 'type',
        };
    }
    static types() {
        return {
            name: 'string',
            type: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetExternalAgentResponseBodyDataTools = GetExternalAgentResponseBodyDataTools;
class GetExternalAgentResponseBodyData extends $dara.Model {
    static names() {
        return {
            agentId: 'agentId',
            configuredSkills: 'configuredSkills',
            createMode: 'createMode',
            createdAt: 'createdAt',
            deployType: 'deployType',
            description: 'description',
            externalAgentStatus: 'externalAgentStatus',
            instruction: 'instruction',
            latestSpecVersion: 'latestSpecVersion',
            latestVersionStatus: 'latestVersionStatus',
            model: 'model',
            modelSource: 'modelSource',
            name: 'name',
            regionId: 'regionId',
            runtime: 'runtime',
            skills: 'skills',
            status: 'status',
            template: 'template',
            tools: 'tools',
            updatedAt: 'updatedAt',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            agentId: 'string',
            configuredSkills: { 'type': 'array', 'itemType': GetExternalAgentResponseBodyDataConfiguredSkills },
            createMode: 'string',
            createdAt: 'string',
            deployType: 'string',
            description: 'string',
            externalAgentStatus: GetExternalAgentResponseBodyDataExternalAgentStatus,
            instruction: 'string',
            latestSpecVersion: 'number',
            latestVersionStatus: 'string',
            model: GetExternalAgentResponseBodyDataModel,
            modelSource: 'string',
            name: 'string',
            regionId: 'string',
            runtime: 'string',
            skills: { 'type': 'array', 'itemType': GetExternalAgentResponseBodyDataSkills },
            status: 'string',
            template: GetExternalAgentResponseBodyDataTemplate,
            tools: { 'type': 'array', 'itemType': GetExternalAgentResponseBodyDataTools },
            updatedAt: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.configuredSkills)) {
            $dara.Model.validateArray(this.configuredSkills);
        }
        if (this.externalAgentStatus && typeof this.externalAgentStatus.validate === 'function') {
            this.externalAgentStatus.validate();
        }
        if (this.model && typeof this.model.validate === 'function') {
            this.model.validate();
        }
        if (Array.isArray(this.skills)) {
            $dara.Model.validateArray(this.skills);
        }
        if (this.template && typeof this.template.validate === 'function') {
            this.template.validate();
        }
        if (Array.isArray(this.tools)) {
            $dara.Model.validateArray(this.tools);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetExternalAgentResponseBodyData = GetExternalAgentResponseBodyData;
class GetExternalAgentResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'code',
            data: 'data',
            httpStatusCode: 'httpStatusCode',
            message: 'message',
            requestId: 'requestId',
            success: 'success',
        };
    }
    static types() {
        return {
            code: 'string',
            data: GetExternalAgentResponseBodyData,
            httpStatusCode: 'number',
            message: 'string',
            requestId: 'string',
            success: 'boolean',
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
exports.GetExternalAgentResponseBody = GetExternalAgentResponseBody;
//# sourceMappingURL=GetExternalAgentResponseBody.js.map