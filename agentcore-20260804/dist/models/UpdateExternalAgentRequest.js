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
exports.UpdateExternalAgentRequest = exports.UpdateExternalAgentRequestBody = exports.UpdateExternalAgentRequestBodyTools = exports.UpdateExternalAgentRequestBodyTemplate = exports.UpdateExternalAgentRequestBodyTemplateAiRegistry = exports.UpdateExternalAgentRequestBodySkills = exports.UpdateExternalAgentRequestBodySkillsVersionSelector = exports.UpdateExternalAgentRequestBodyModel = exports.UpdateExternalAgentRequestBodyModelQuota = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateExternalAgentRequestBodyModelQuota extends $dara.Model {
    static names() {
        return {
            enabled: 'enabled',
            limitType: 'limitType',
            periodType: 'periodType',
            usageLimit: 'usageLimit',
        };
    }
    static types() {
        return {
            enabled: 'boolean',
            limitType: 'string',
            periodType: 'string',
            usageLimit: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateExternalAgentRequestBodyModelQuota = UpdateExternalAgentRequestBodyModelQuota;
class UpdateExternalAgentRequestBodyModel extends $dara.Model {
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
            quota: UpdateExternalAgentRequestBodyModelQuota,
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
exports.UpdateExternalAgentRequestBodyModel = UpdateExternalAgentRequestBodyModel;
class UpdateExternalAgentRequestBodySkillsVersionSelector extends $dara.Model {
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
exports.UpdateExternalAgentRequestBodySkillsVersionSelector = UpdateExternalAgentRequestBodySkillsVersionSelector;
class UpdateExternalAgentRequestBodySkills extends $dara.Model {
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
            versionSelector: UpdateExternalAgentRequestBodySkillsVersionSelector,
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
exports.UpdateExternalAgentRequestBodySkills = UpdateExternalAgentRequestBodySkills;
class UpdateExternalAgentRequestBodyTemplateAiRegistry extends $dara.Model {
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
exports.UpdateExternalAgentRequestBodyTemplateAiRegistry = UpdateExternalAgentRequestBodyTemplateAiRegistry;
class UpdateExternalAgentRequestBodyTemplate extends $dara.Model {
    static names() {
        return {
            aiRegistry: 'aiRegistry',
        };
    }
    static types() {
        return {
            aiRegistry: UpdateExternalAgentRequestBodyTemplateAiRegistry,
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
exports.UpdateExternalAgentRequestBodyTemplate = UpdateExternalAgentRequestBodyTemplate;
class UpdateExternalAgentRequestBodyTools extends $dara.Model {
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
exports.UpdateExternalAgentRequestBodyTools = UpdateExternalAgentRequestBodyTools;
class UpdateExternalAgentRequestBody extends $dara.Model {
    static names() {
        return {
            description: 'description',
            instruction: 'instruction',
            model: 'model',
            modelSource: 'modelSource',
            name: 'name',
            skills: 'skills',
            template: 'template',
            tools: 'tools',
        };
    }
    static types() {
        return {
            description: 'string',
            instruction: 'string',
            model: UpdateExternalAgentRequestBodyModel,
            modelSource: 'string',
            name: 'string',
            skills: { 'type': 'array', 'itemType': UpdateExternalAgentRequestBodySkills },
            template: UpdateExternalAgentRequestBodyTemplate,
            tools: { 'type': 'array', 'itemType': UpdateExternalAgentRequestBodyTools },
        };
    }
    validate() {
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
exports.UpdateExternalAgentRequestBody = UpdateExternalAgentRequestBody;
class UpdateExternalAgentRequest extends $dara.Model {
    static names() {
        return {
            body: 'body',
            clientToken: 'clientToken',
        };
    }
    static types() {
        return {
            body: UpdateExternalAgentRequestBody,
            clientToken: 'string',
        };
    }
    validate() {
        if (this.body && typeof this.body.validate === 'function') {
            this.body.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateExternalAgentRequest = UpdateExternalAgentRequest;
//# sourceMappingURL=UpdateExternalAgentRequest.js.map