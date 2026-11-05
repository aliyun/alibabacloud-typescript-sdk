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
exports.UpdateManagedAgentRequest = exports.UpdateManagedAgentRequestBody = exports.UpdateManagedAgentRequestBodyTools = exports.UpdateManagedAgentRequestBodyTemplate = exports.UpdateManagedAgentRequestBodyTemplateAiRegistry = exports.UpdateManagedAgentRequestBodySubAgents = exports.UpdateManagedAgentRequestBodySubAgentsSkills = exports.UpdateManagedAgentRequestBodySkills = exports.UpdateManagedAgentRequestBodySkillsVersionSelector = exports.UpdateManagedAgentRequestBodyRuntime = exports.UpdateManagedAgentRequestBodyRuntimeSessionPolicy = exports.UpdateManagedAgentRequestBodyRuntimeHpa = exports.UpdateManagedAgentRequestBodyRuntimeCompute = exports.UpdateManagedAgentRequestBodyPromptVariables = exports.UpdateManagedAgentRequestBodyOssMounts = exports.UpdateManagedAgentRequestBodyNetwork = exports.UpdateManagedAgentRequestBodyNetworkAccessVpc = exports.UpdateManagedAgentRequestBodyNetworkAccessInternet = exports.UpdateManagedAgentRequestBodyModel = exports.UpdateManagedAgentRequestBodyModelQuota = exports.UpdateManagedAgentRequestBodyHarness = exports.UpdateManagedAgentRequestBodyHarnessConfiguration = exports.UpdateManagedAgentRequestBodyEnvironment = exports.UpdateManagedAgentRequestBodyEnvironmentVariables = exports.UpdateManagedAgentRequestBodyEnvironmentCredentialReferences = exports.UpdateManagedAgentRequestBodyAgenticFsMounts = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateManagedAgentRequestBodyAgenticFsMounts extends $dara.Model {
    static names() {
        return {
            mountPath: 'mountPath',
            path: 'path',
            readOnly: 'readOnly',
            server: 'server',
        };
    }
    static types() {
        return {
            mountPath: 'string',
            path: 'string',
            readOnly: 'boolean',
            server: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateManagedAgentRequestBodyAgenticFsMounts = UpdateManagedAgentRequestBodyAgenticFsMounts;
class UpdateManagedAgentRequestBodyEnvironmentCredentialReferences extends $dara.Model {
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
exports.UpdateManagedAgentRequestBodyEnvironmentCredentialReferences = UpdateManagedAgentRequestBodyEnvironmentCredentialReferences;
class UpdateManagedAgentRequestBodyEnvironmentVariables extends $dara.Model {
    static names() {
        return {
            name: 'name',
            value: 'value',
        };
    }
    static types() {
        return {
            name: 'string',
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
exports.UpdateManagedAgentRequestBodyEnvironmentVariables = UpdateManagedAgentRequestBodyEnvironmentVariables;
class UpdateManagedAgentRequestBodyEnvironment extends $dara.Model {
    static names() {
        return {
            credentialReferences: 'credentialReferences',
            variables: 'variables',
        };
    }
    static types() {
        return {
            credentialReferences: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodyEnvironmentCredentialReferences },
            variables: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodyEnvironmentVariables },
        };
    }
    validate() {
        if (Array.isArray(this.credentialReferences)) {
            $dara.Model.validateArray(this.credentialReferences);
        }
        if (Array.isArray(this.variables)) {
            $dara.Model.validateArray(this.variables);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateManagedAgentRequestBodyEnvironment = UpdateManagedAgentRequestBodyEnvironment;
class UpdateManagedAgentRequestBodyHarnessConfiguration extends $dara.Model {
    static names() {
        return {
            connectorServiceAccountKey: 'connectorServiceAccountKey',
            connectorServiceAccountName: 'connectorServiceAccountName',
        };
    }
    static types() {
        return {
            connectorServiceAccountKey: 'string',
            connectorServiceAccountName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateManagedAgentRequestBodyHarnessConfiguration = UpdateManagedAgentRequestBodyHarnessConfiguration;
class UpdateManagedAgentRequestBodyHarness extends $dara.Model {
    static names() {
        return {
            configuration: 'configuration',
            type: 'type',
        };
    }
    static types() {
        return {
            configuration: UpdateManagedAgentRequestBodyHarnessConfiguration,
            type: 'string',
        };
    }
    validate() {
        if (this.configuration && typeof this.configuration.validate === 'function') {
            this.configuration.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateManagedAgentRequestBodyHarness = UpdateManagedAgentRequestBodyHarness;
class UpdateManagedAgentRequestBodyModelQuota extends $dara.Model {
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
exports.UpdateManagedAgentRequestBodyModelQuota = UpdateManagedAgentRequestBodyModelQuota;
class UpdateManagedAgentRequestBodyModel extends $dara.Model {
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
            quota: UpdateManagedAgentRequestBodyModelQuota,
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
exports.UpdateManagedAgentRequestBodyModel = UpdateManagedAgentRequestBodyModel;
class UpdateManagedAgentRequestBodyNetworkAccessInternet extends $dara.Model {
    static names() {
        return {
            enabled: 'enabled',
        };
    }
    static types() {
        return {
            enabled: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateManagedAgentRequestBodyNetworkAccessInternet = UpdateManagedAgentRequestBodyNetworkAccessInternet;
class UpdateManagedAgentRequestBodyNetworkAccessVpc extends $dara.Model {
    static names() {
        return {
            enabled: 'enabled',
        };
    }
    static types() {
        return {
            enabled: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateManagedAgentRequestBodyNetworkAccessVpc = UpdateManagedAgentRequestBodyNetworkAccessVpc;
class UpdateManagedAgentRequestBodyNetwork extends $dara.Model {
    static names() {
        return {
            accessInternet: 'accessInternet',
            accessVpc: 'accessVpc',
        };
    }
    static types() {
        return {
            accessInternet: UpdateManagedAgentRequestBodyNetworkAccessInternet,
            accessVpc: UpdateManagedAgentRequestBodyNetworkAccessVpc,
        };
    }
    validate() {
        if (this.accessInternet && typeof this.accessInternet.validate === 'function') {
            this.accessInternet.validate();
        }
        if (this.accessVpc && typeof this.accessVpc.validate === 'function') {
            this.accessVpc.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateManagedAgentRequestBodyNetwork = UpdateManagedAgentRequestBodyNetwork;
class UpdateManagedAgentRequestBodyOssMounts extends $dara.Model {
    static names() {
        return {
            bucketName: 'bucketName',
            mountPath: 'mountPath',
            path: 'path',
            readOnly: 'readOnly',
        };
    }
    static types() {
        return {
            bucketName: 'string',
            mountPath: 'string',
            path: 'string',
            readOnly: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateManagedAgentRequestBodyOssMounts = UpdateManagedAgentRequestBodyOssMounts;
class UpdateManagedAgentRequestBodyPromptVariables extends $dara.Model {
    static names() {
        return {
            defaultValue: 'defaultValue',
            description: 'description',
            name: 'name',
        };
    }
    static types() {
        return {
            defaultValue: 'string',
            description: 'string',
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
exports.UpdateManagedAgentRequestBodyPromptVariables = UpdateManagedAgentRequestBodyPromptVariables;
class UpdateManagedAgentRequestBodyRuntimeCompute extends $dara.Model {
    static names() {
        return {
            computeClass: 'computeClass',
        };
    }
    static types() {
        return {
            computeClass: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateManagedAgentRequestBodyRuntimeCompute = UpdateManagedAgentRequestBodyRuntimeCompute;
class UpdateManagedAgentRequestBodyRuntimeHpa extends $dara.Model {
    static names() {
        return {
            enabled: 'enabled',
            maxConcurrentSessionsPerSandbox: 'maxConcurrentSessionsPerSandbox',
            maxSandboxCount: 'maxSandboxCount',
            minSandboxCount: 'minSandboxCount',
            sessionTtlSeconds: 'sessionTtlSeconds',
        };
    }
    static types() {
        return {
            enabled: 'boolean',
            maxConcurrentSessionsPerSandbox: 'number',
            maxSandboxCount: 'number',
            minSandboxCount: 'number',
            sessionTtlSeconds: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateManagedAgentRequestBodyRuntimeHpa = UpdateManagedAgentRequestBodyRuntimeHpa;
class UpdateManagedAgentRequestBodyRuntimeSessionPolicy extends $dara.Model {
    static names() {
        return {
            headerName: 'headerName',
            type: 'type',
        };
    }
    static types() {
        return {
            headerName: 'string',
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
exports.UpdateManagedAgentRequestBodyRuntimeSessionPolicy = UpdateManagedAgentRequestBodyRuntimeSessionPolicy;
class UpdateManagedAgentRequestBodyRuntime extends $dara.Model {
    static names() {
        return {
            compute: 'compute',
            hpa: 'hpa',
            sessionPolicy: 'sessionPolicy',
        };
    }
    static types() {
        return {
            compute: UpdateManagedAgentRequestBodyRuntimeCompute,
            hpa: UpdateManagedAgentRequestBodyRuntimeHpa,
            sessionPolicy: UpdateManagedAgentRequestBodyRuntimeSessionPolicy,
        };
    }
    validate() {
        if (this.compute && typeof this.compute.validate === 'function') {
            this.compute.validate();
        }
        if (this.hpa && typeof this.hpa.validate === 'function') {
            this.hpa.validate();
        }
        if (this.sessionPolicy && typeof this.sessionPolicy.validate === 'function') {
            this.sessionPolicy.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateManagedAgentRequestBodyRuntime = UpdateManagedAgentRequestBodyRuntime;
class UpdateManagedAgentRequestBodySkillsVersionSelector extends $dara.Model {
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
exports.UpdateManagedAgentRequestBodySkillsVersionSelector = UpdateManagedAgentRequestBodySkillsVersionSelector;
class UpdateManagedAgentRequestBodySkills extends $dara.Model {
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
            versionSelector: UpdateManagedAgentRequestBodySkillsVersionSelector,
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
exports.UpdateManagedAgentRequestBodySkills = UpdateManagedAgentRequestBodySkills;
class UpdateManagedAgentRequestBodySubAgentsSkills extends $dara.Model {
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
exports.UpdateManagedAgentRequestBodySubAgentsSkills = UpdateManagedAgentRequestBodySubAgentsSkills;
class UpdateManagedAgentRequestBodySubAgents extends $dara.Model {
    static names() {
        return {
            instruction: 'instruction',
            name: 'name',
            skills: 'skills',
        };
    }
    static types() {
        return {
            instruction: 'string',
            name: 'string',
            skills: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodySubAgentsSkills },
        };
    }
    validate() {
        if (Array.isArray(this.skills)) {
            $dara.Model.validateArray(this.skills);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateManagedAgentRequestBodySubAgents = UpdateManagedAgentRequestBodySubAgents;
class UpdateManagedAgentRequestBodyTemplateAiRegistry extends $dara.Model {
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
exports.UpdateManagedAgentRequestBodyTemplateAiRegistry = UpdateManagedAgentRequestBodyTemplateAiRegistry;
class UpdateManagedAgentRequestBodyTemplate extends $dara.Model {
    static names() {
        return {
            aiRegistry: 'aiRegistry',
        };
    }
    static types() {
        return {
            aiRegistry: UpdateManagedAgentRequestBodyTemplateAiRegistry,
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
exports.UpdateManagedAgentRequestBodyTemplate = UpdateManagedAgentRequestBodyTemplate;
class UpdateManagedAgentRequestBodyTools extends $dara.Model {
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
exports.UpdateManagedAgentRequestBodyTools = UpdateManagedAgentRequestBodyTools;
class UpdateManagedAgentRequestBody extends $dara.Model {
    static names() {
        return {
            accessMode: 'accessMode',
            accessScope: 'accessScope',
            agenticFsMounts: 'agenticFsMounts',
            description: 'description',
            environment: 'environment',
            harness: 'harness',
            instruction: 'instruction',
            model: 'model',
            name: 'name',
            network: 'network',
            ossMounts: 'ossMounts',
            promptVariables: 'promptVariables',
            runtime: 'runtime',
            skills: 'skills',
            subAgents: 'subAgents',
            template: 'template',
            tools: 'tools',
        };
    }
    static types() {
        return {
            accessMode: 'string',
            accessScope: 'string',
            agenticFsMounts: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodyAgenticFsMounts },
            description: 'string',
            environment: UpdateManagedAgentRequestBodyEnvironment,
            harness: UpdateManagedAgentRequestBodyHarness,
            instruction: 'string',
            model: UpdateManagedAgentRequestBodyModel,
            name: 'string',
            network: UpdateManagedAgentRequestBodyNetwork,
            ossMounts: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodyOssMounts },
            promptVariables: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodyPromptVariables },
            runtime: UpdateManagedAgentRequestBodyRuntime,
            skills: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodySkills },
            subAgents: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodySubAgents },
            template: UpdateManagedAgentRequestBodyTemplate,
            tools: { 'type': 'array', 'itemType': UpdateManagedAgentRequestBodyTools },
        };
    }
    validate() {
        if (Array.isArray(this.agenticFsMounts)) {
            $dara.Model.validateArray(this.agenticFsMounts);
        }
        if (this.environment && typeof this.environment.validate === 'function') {
            this.environment.validate();
        }
        if (this.harness && typeof this.harness.validate === 'function') {
            this.harness.validate();
        }
        if (this.model && typeof this.model.validate === 'function') {
            this.model.validate();
        }
        if (this.network && typeof this.network.validate === 'function') {
            this.network.validate();
        }
        if (Array.isArray(this.ossMounts)) {
            $dara.Model.validateArray(this.ossMounts);
        }
        if (Array.isArray(this.promptVariables)) {
            $dara.Model.validateArray(this.promptVariables);
        }
        if (this.runtime && typeof this.runtime.validate === 'function') {
            this.runtime.validate();
        }
        if (Array.isArray(this.skills)) {
            $dara.Model.validateArray(this.skills);
        }
        if (Array.isArray(this.subAgents)) {
            $dara.Model.validateArray(this.subAgents);
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
exports.UpdateManagedAgentRequestBody = UpdateManagedAgentRequestBody;
class UpdateManagedAgentRequest extends $dara.Model {
    static names() {
        return {
            body: 'body',
            clientToken: 'clientToken',
        };
    }
    static types() {
        return {
            body: UpdateManagedAgentRequestBody,
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
exports.UpdateManagedAgentRequest = UpdateManagedAgentRequest;
//# sourceMappingURL=UpdateManagedAgentRequest.js.map