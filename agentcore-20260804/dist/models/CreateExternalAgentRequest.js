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
exports.CreateExternalAgentRequest = exports.CreateExternalAgentRequestBody = exports.CreateExternalAgentRequestBodyTools = exports.CreateExternalAgentRequestBodyTemplate = exports.CreateExternalAgentRequestBodyTemplateAiRegistry = exports.CreateExternalAgentRequestBodySkills = exports.CreateExternalAgentRequestBodySkillsVersionSelector = exports.CreateExternalAgentRequestBodyModel = exports.CreateExternalAgentRequestBodyModelQuota = exports.CreateExternalAgentRequestBodyEnvironment = exports.CreateExternalAgentRequestBodyEnvironmentCredentialReferences = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateExternalAgentRequestBodyEnvironmentCredentialReferences extends $dara.Model {
    static names() {
        return {
            credentialId: 'credentialId',
        };
    }
    static types() {
        return {
            credentialId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateExternalAgentRequestBodyEnvironmentCredentialReferences = CreateExternalAgentRequestBodyEnvironmentCredentialReferences;
class CreateExternalAgentRequestBodyEnvironment extends $dara.Model {
    static names() {
        return {
            credentialReferences: 'credentialReferences',
        };
    }
    static types() {
        return {
            credentialReferences: { 'type': 'array', 'itemType': CreateExternalAgentRequestBodyEnvironmentCredentialReferences },
        };
    }
    validate() {
        if (Array.isArray(this.credentialReferences)) {
            $dara.Model.validateArray(this.credentialReferences);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateExternalAgentRequestBodyEnvironment = CreateExternalAgentRequestBodyEnvironment;
class CreateExternalAgentRequestBodyModelQuota extends $dara.Model {
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
exports.CreateExternalAgentRequestBodyModelQuota = CreateExternalAgentRequestBodyModelQuota;
class CreateExternalAgentRequestBodyModel extends $dara.Model {
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
            quota: CreateExternalAgentRequestBodyModelQuota,
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
exports.CreateExternalAgentRequestBodyModel = CreateExternalAgentRequestBodyModel;
class CreateExternalAgentRequestBodySkillsVersionSelector extends $dara.Model {
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
exports.CreateExternalAgentRequestBodySkillsVersionSelector = CreateExternalAgentRequestBodySkillsVersionSelector;
class CreateExternalAgentRequestBodySkills extends $dara.Model {
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
            versionSelector: CreateExternalAgentRequestBodySkillsVersionSelector,
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
exports.CreateExternalAgentRequestBodySkills = CreateExternalAgentRequestBodySkills;
class CreateExternalAgentRequestBodyTemplateAiRegistry extends $dara.Model {
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
exports.CreateExternalAgentRequestBodyTemplateAiRegistry = CreateExternalAgentRequestBodyTemplateAiRegistry;
class CreateExternalAgentRequestBodyTemplate extends $dara.Model {
    static names() {
        return {
            aiRegistry: 'aiRegistry',
        };
    }
    static types() {
        return {
            aiRegistry: CreateExternalAgentRequestBodyTemplateAiRegistry,
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
exports.CreateExternalAgentRequestBodyTemplate = CreateExternalAgentRequestBodyTemplate;
class CreateExternalAgentRequestBodyTools extends $dara.Model {
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
exports.CreateExternalAgentRequestBodyTools = CreateExternalAgentRequestBodyTools;
class CreateExternalAgentRequestBody extends $dara.Model {
    static names() {
        return {
            description: 'description',
            environment: 'environment',
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
            environment: CreateExternalAgentRequestBodyEnvironment,
            instruction: 'string',
            model: CreateExternalAgentRequestBodyModel,
            modelSource: 'string',
            name: 'string',
            skills: { 'type': 'array', 'itemType': CreateExternalAgentRequestBodySkills },
            template: CreateExternalAgentRequestBodyTemplate,
            tools: { 'type': 'array', 'itemType': CreateExternalAgentRequestBodyTools },
        };
    }
    validate() {
        if (this.environment && typeof this.environment.validate === 'function') {
            this.environment.validate();
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
exports.CreateExternalAgentRequestBody = CreateExternalAgentRequestBody;
class CreateExternalAgentRequest extends $dara.Model {
    static names() {
        return {
            body: 'body',
            clientToken: 'clientToken',
        };
    }
    static types() {
        return {
            body: CreateExternalAgentRequestBody,
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
exports.CreateExternalAgentRequest = CreateExternalAgentRequest;
//# sourceMappingURL=CreateExternalAgentRequest.js.map