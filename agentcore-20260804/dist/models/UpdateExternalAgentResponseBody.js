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
exports.UpdateExternalAgentResponseBody = exports.UpdateExternalAgentResponseBodyData = exports.UpdateExternalAgentResponseBodyDataTools = exports.UpdateExternalAgentResponseBodyDataTemplate = exports.UpdateExternalAgentResponseBodyDataTemplateAiRegistry = exports.UpdateExternalAgentResponseBodyDataSkills = exports.UpdateExternalAgentResponseBodyDataSkillsVersionSelector = exports.UpdateExternalAgentResponseBodyDataModel = exports.UpdateExternalAgentResponseBodyDataModelQuota = exports.UpdateExternalAgentResponseBodyDataExternalAgentStatus = exports.UpdateExternalAgentResponseBodyDataConfiguredSkills = exports.UpdateExternalAgentResponseBodyDataConfiguredSkillsVersionSelector = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateExternalAgentResponseBodyDataConfiguredSkillsVersionSelector extends $dara.Model {
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
exports.UpdateExternalAgentResponseBodyDataConfiguredSkillsVersionSelector = UpdateExternalAgentResponseBodyDataConfiguredSkillsVersionSelector;
class UpdateExternalAgentResponseBodyDataConfiguredSkills extends $dara.Model {
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
            versionSelector: UpdateExternalAgentResponseBodyDataConfiguredSkillsVersionSelector,
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
exports.UpdateExternalAgentResponseBodyDataConfiguredSkills = UpdateExternalAgentResponseBodyDataConfiguredSkills;
class UpdateExternalAgentResponseBodyDataExternalAgentStatus extends $dara.Model {
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
exports.UpdateExternalAgentResponseBodyDataExternalAgentStatus = UpdateExternalAgentResponseBodyDataExternalAgentStatus;
class UpdateExternalAgentResponseBodyDataModelQuota extends $dara.Model {
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
exports.UpdateExternalAgentResponseBodyDataModelQuota = UpdateExternalAgentResponseBodyDataModelQuota;
class UpdateExternalAgentResponseBodyDataModel extends $dara.Model {
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
            quota: UpdateExternalAgentResponseBodyDataModelQuota,
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
exports.UpdateExternalAgentResponseBodyDataModel = UpdateExternalAgentResponseBodyDataModel;
class UpdateExternalAgentResponseBodyDataSkillsVersionSelector extends $dara.Model {
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
exports.UpdateExternalAgentResponseBodyDataSkillsVersionSelector = UpdateExternalAgentResponseBodyDataSkillsVersionSelector;
class UpdateExternalAgentResponseBodyDataSkills extends $dara.Model {
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
            versionSelector: UpdateExternalAgentResponseBodyDataSkillsVersionSelector,
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
exports.UpdateExternalAgentResponseBodyDataSkills = UpdateExternalAgentResponseBodyDataSkills;
class UpdateExternalAgentResponseBodyDataTemplateAiRegistry extends $dara.Model {
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
exports.UpdateExternalAgentResponseBodyDataTemplateAiRegistry = UpdateExternalAgentResponseBodyDataTemplateAiRegistry;
class UpdateExternalAgentResponseBodyDataTemplate extends $dara.Model {
    static names() {
        return {
            aiRegistry: 'aiRegistry',
        };
    }
    static types() {
        return {
            aiRegistry: UpdateExternalAgentResponseBodyDataTemplateAiRegistry,
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
exports.UpdateExternalAgentResponseBodyDataTemplate = UpdateExternalAgentResponseBodyDataTemplate;
class UpdateExternalAgentResponseBodyDataTools extends $dara.Model {
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
exports.UpdateExternalAgentResponseBodyDataTools = UpdateExternalAgentResponseBodyDataTools;
class UpdateExternalAgentResponseBodyData extends $dara.Model {
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
            configuredSkills: { 'type': 'array', 'itemType': UpdateExternalAgentResponseBodyDataConfiguredSkills },
            createMode: 'string',
            createdAt: 'string',
            deployType: 'string',
            description: 'string',
            externalAgentStatus: UpdateExternalAgentResponseBodyDataExternalAgentStatus,
            instruction: 'string',
            latestSpecVersion: 'number',
            latestVersionStatus: 'string',
            model: UpdateExternalAgentResponseBodyDataModel,
            modelSource: 'string',
            name: 'string',
            regionId: 'string',
            runtime: 'string',
            skills: { 'type': 'array', 'itemType': UpdateExternalAgentResponseBodyDataSkills },
            status: 'string',
            template: UpdateExternalAgentResponseBodyDataTemplate,
            tools: { 'type': 'array', 'itemType': UpdateExternalAgentResponseBodyDataTools },
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
exports.UpdateExternalAgentResponseBodyData = UpdateExternalAgentResponseBodyData;
class UpdateExternalAgentResponseBody extends $dara.Model {
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
            data: UpdateExternalAgentResponseBodyData,
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
exports.UpdateExternalAgentResponseBody = UpdateExternalAgentResponseBody;
//# sourceMappingURL=UpdateExternalAgentResponseBody.js.map