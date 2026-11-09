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
exports.UpdateManagedAgentResponseBody = exports.UpdateManagedAgentResponseBodyData = exports.UpdateManagedAgentResponseBodyDataTools = exports.UpdateManagedAgentResponseBodyDataTemplate = exports.UpdateManagedAgentResponseBodyDataTemplateAiRegistry = exports.UpdateManagedAgentResponseBodyDataSubAgents = exports.UpdateManagedAgentResponseBodyDataSubAgentsSkills = exports.UpdateManagedAgentResponseBodyDataSkills = exports.UpdateManagedAgentResponseBodyDataSkillsVersionSelector = exports.UpdateManagedAgentResponseBodyDataRuntime = exports.UpdateManagedAgentResponseBodyDataRuntimeSessionPolicy = exports.UpdateManagedAgentResponseBodyDataRuntimeHpa = exports.UpdateManagedAgentResponseBodyDataRuntimeCompute = exports.UpdateManagedAgentResponseBodyDataPromptVariables = exports.UpdateManagedAgentResponseBodyDataOssMounts = exports.UpdateManagedAgentResponseBodyDataNetwork = exports.UpdateManagedAgentResponseBodyDataNetworkAccessVpc = exports.UpdateManagedAgentResponseBodyDataNetworkAccessInternet = exports.UpdateManagedAgentResponseBodyDataModel = exports.UpdateManagedAgentResponseBodyDataModelQuota = exports.UpdateManagedAgentResponseBodyDataHarness = exports.UpdateManagedAgentResponseBodyDataHarnessConfiguration = exports.UpdateManagedAgentResponseBodyDataEnvironment = exports.UpdateManagedAgentResponseBodyDataEnvironmentVariables = exports.UpdateManagedAgentResponseBodyDataEnvironmentCredentialReferences = exports.UpdateManagedAgentResponseBodyDataConfiguredSkills = exports.UpdateManagedAgentResponseBodyDataConfiguredSkillsVersionSelector = exports.UpdateManagedAgentResponseBodyDataAgenticFsMounts = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateManagedAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataAgenticFsMounts = UpdateManagedAgentResponseBodyDataAgenticFsMounts;
class UpdateManagedAgentResponseBodyDataConfiguredSkillsVersionSelector extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataConfiguredSkillsVersionSelector = UpdateManagedAgentResponseBodyDataConfiguredSkillsVersionSelector;
class UpdateManagedAgentResponseBodyDataConfiguredSkills extends $dara.Model {
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
            versionSelector: UpdateManagedAgentResponseBodyDataConfiguredSkillsVersionSelector,
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
exports.UpdateManagedAgentResponseBodyDataConfiguredSkills = UpdateManagedAgentResponseBodyDataConfiguredSkills;
class UpdateManagedAgentResponseBodyDataEnvironmentCredentialReferences extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataEnvironmentCredentialReferences = UpdateManagedAgentResponseBodyDataEnvironmentCredentialReferences;
class UpdateManagedAgentResponseBodyDataEnvironmentVariables extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataEnvironmentVariables = UpdateManagedAgentResponseBodyDataEnvironmentVariables;
class UpdateManagedAgentResponseBodyDataEnvironment extends $dara.Model {
    static names() {
        return {
            credentialReferences: 'credentialReferences',
            variables: 'variables',
        };
    }
    static types() {
        return {
            credentialReferences: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataEnvironmentCredentialReferences },
            variables: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataEnvironmentVariables },
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
exports.UpdateManagedAgentResponseBodyDataEnvironment = UpdateManagedAgentResponseBodyDataEnvironment;
class UpdateManagedAgentResponseBodyDataHarnessConfiguration extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataHarnessConfiguration = UpdateManagedAgentResponseBodyDataHarnessConfiguration;
class UpdateManagedAgentResponseBodyDataHarness extends $dara.Model {
    static names() {
        return {
            configuration: 'configuration',
            outdatedInstanceCount: 'outdatedInstanceCount',
            type: 'type',
            version: 'version',
        };
    }
    static types() {
        return {
            configuration: UpdateManagedAgentResponseBodyDataHarnessConfiguration,
            outdatedInstanceCount: 'number',
            type: 'string',
            version: 'string',
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
exports.UpdateManagedAgentResponseBodyDataHarness = UpdateManagedAgentResponseBodyDataHarness;
class UpdateManagedAgentResponseBodyDataModelQuota extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataModelQuota = UpdateManagedAgentResponseBodyDataModelQuota;
class UpdateManagedAgentResponseBodyDataModel extends $dara.Model {
    static names() {
        return {
            modelConnectionId: 'modelConnectionId',
            modelName: 'modelName',
            quota: 'quota',
            thinkingLevel: 'thinkingLevel',
        };
    }
    static types() {
        return {
            modelConnectionId: 'string',
            modelName: 'string',
            quota: UpdateManagedAgentResponseBodyDataModelQuota,
            thinkingLevel: 'string',
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
exports.UpdateManagedAgentResponseBodyDataModel = UpdateManagedAgentResponseBodyDataModel;
class UpdateManagedAgentResponseBodyDataNetworkAccessInternet extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataNetworkAccessInternet = UpdateManagedAgentResponseBodyDataNetworkAccessInternet;
class UpdateManagedAgentResponseBodyDataNetworkAccessVpc extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataNetworkAccessVpc = UpdateManagedAgentResponseBodyDataNetworkAccessVpc;
class UpdateManagedAgentResponseBodyDataNetwork extends $dara.Model {
    static names() {
        return {
            accessInternet: 'accessInternet',
            accessVpc: 'accessVpc',
        };
    }
    static types() {
        return {
            accessInternet: UpdateManagedAgentResponseBodyDataNetworkAccessInternet,
            accessVpc: UpdateManagedAgentResponseBodyDataNetworkAccessVpc,
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
exports.UpdateManagedAgentResponseBodyDataNetwork = UpdateManagedAgentResponseBodyDataNetwork;
class UpdateManagedAgentResponseBodyDataOssMounts extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataOssMounts = UpdateManagedAgentResponseBodyDataOssMounts;
class UpdateManagedAgentResponseBodyDataPromptVariables extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataPromptVariables = UpdateManagedAgentResponseBodyDataPromptVariables;
class UpdateManagedAgentResponseBodyDataRuntimeCompute extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataRuntimeCompute = UpdateManagedAgentResponseBodyDataRuntimeCompute;
class UpdateManagedAgentResponseBodyDataRuntimeHpa extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataRuntimeHpa = UpdateManagedAgentResponseBodyDataRuntimeHpa;
class UpdateManagedAgentResponseBodyDataRuntimeSessionPolicy extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataRuntimeSessionPolicy = UpdateManagedAgentResponseBodyDataRuntimeSessionPolicy;
class UpdateManagedAgentResponseBodyDataRuntime extends $dara.Model {
    static names() {
        return {
            compute: 'compute',
            hpa: 'hpa',
            sessionPolicy: 'sessionPolicy',
        };
    }
    static types() {
        return {
            compute: UpdateManagedAgentResponseBodyDataRuntimeCompute,
            hpa: UpdateManagedAgentResponseBodyDataRuntimeHpa,
            sessionPolicy: UpdateManagedAgentResponseBodyDataRuntimeSessionPolicy,
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
exports.UpdateManagedAgentResponseBodyDataRuntime = UpdateManagedAgentResponseBodyDataRuntime;
class UpdateManagedAgentResponseBodyDataSkillsVersionSelector extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataSkillsVersionSelector = UpdateManagedAgentResponseBodyDataSkillsVersionSelector;
class UpdateManagedAgentResponseBodyDataSkills extends $dara.Model {
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
            versionSelector: UpdateManagedAgentResponseBodyDataSkillsVersionSelector,
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
exports.UpdateManagedAgentResponseBodyDataSkills = UpdateManagedAgentResponseBodyDataSkills;
class UpdateManagedAgentResponseBodyDataSubAgentsSkills extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataSubAgentsSkills = UpdateManagedAgentResponseBodyDataSubAgentsSkills;
class UpdateManagedAgentResponseBodyDataSubAgents extends $dara.Model {
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
            skills: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataSubAgentsSkills },
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
exports.UpdateManagedAgentResponseBodyDataSubAgents = UpdateManagedAgentResponseBodyDataSubAgents;
class UpdateManagedAgentResponseBodyDataTemplateAiRegistry extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataTemplateAiRegistry = UpdateManagedAgentResponseBodyDataTemplateAiRegistry;
class UpdateManagedAgentResponseBodyDataTemplate extends $dara.Model {
    static names() {
        return {
            aiRegistry: 'aiRegistry',
        };
    }
    static types() {
        return {
            aiRegistry: UpdateManagedAgentResponseBodyDataTemplateAiRegistry,
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
exports.UpdateManagedAgentResponseBodyDataTemplate = UpdateManagedAgentResponseBodyDataTemplate;
class UpdateManagedAgentResponseBodyDataTools extends $dara.Model {
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
exports.UpdateManagedAgentResponseBodyDataTools = UpdateManagedAgentResponseBodyDataTools;
class UpdateManagedAgentResponseBodyData extends $dara.Model {
    static names() {
        return {
            accessMode: 'accessMode',
            accessScope: 'accessScope',
            agentId: 'agentId',
            agenticFsMounts: 'agenticFsMounts',
            configuredSkills: 'configuredSkills',
            createMode: 'createMode',
            createdAt: 'createdAt',
            deployType: 'deployType',
            description: 'description',
            environment: 'environment',
            harness: 'harness',
            instruction: 'instruction',
            latestSpecVersion: 'latestSpecVersion',
            latestVersionStatus: 'latestVersionStatus',
            model: 'model',
            name: 'name',
            network: 'network',
            ossMounts: 'ossMounts',
            promptVariables: 'promptVariables',
            regionId: 'regionId',
            runtime: 'runtime',
            sandboxPhaseCounts: 'sandboxPhaseCounts',
            skills: 'skills',
            status: 'status',
            subAgents: 'subAgents',
            template: 'template',
            tools: 'tools',
            updatedAt: 'updatedAt',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            accessMode: 'string',
            accessScope: 'string',
            agentId: 'string',
            agenticFsMounts: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataAgenticFsMounts },
            configuredSkills: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataConfiguredSkills },
            createMode: 'string',
            createdAt: 'string',
            deployType: 'string',
            description: 'string',
            environment: UpdateManagedAgentResponseBodyDataEnvironment,
            harness: UpdateManagedAgentResponseBodyDataHarness,
            instruction: 'string',
            latestSpecVersion: 'number',
            latestVersionStatus: 'string',
            model: UpdateManagedAgentResponseBodyDataModel,
            name: 'string',
            network: UpdateManagedAgentResponseBodyDataNetwork,
            ossMounts: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataOssMounts },
            promptVariables: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataPromptVariables },
            regionId: 'string',
            runtime: UpdateManagedAgentResponseBodyDataRuntime,
            sandboxPhaseCounts: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
            skills: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataSkills },
            status: 'string',
            subAgents: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataSubAgents },
            template: UpdateManagedAgentResponseBodyDataTemplate,
            tools: { 'type': 'array', 'itemType': UpdateManagedAgentResponseBodyDataTools },
            updatedAt: 'string',
            workspaceId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.agenticFsMounts)) {
            $dara.Model.validateArray(this.agenticFsMounts);
        }
        if (Array.isArray(this.configuredSkills)) {
            $dara.Model.validateArray(this.configuredSkills);
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
        if (this.sandboxPhaseCounts) {
            $dara.Model.validateMap(this.sandboxPhaseCounts);
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
exports.UpdateManagedAgentResponseBodyData = UpdateManagedAgentResponseBodyData;
class UpdateManagedAgentResponseBody extends $dara.Model {
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
            data: UpdateManagedAgentResponseBodyData,
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
exports.UpdateManagedAgentResponseBody = UpdateManagedAgentResponseBody;
//# sourceMappingURL=UpdateManagedAgentResponseBody.js.map