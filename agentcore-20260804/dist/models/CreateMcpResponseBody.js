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
exports.CreateMcpResponseBody = exports.CreateMcpResponseBodyData = exports.CreateMcpResponseBodyDataTemplate = exports.CreateMcpResponseBodyDataMarketSource = exports.CreateMcpResponseBodyDataDeploymentConfig = exports.CreateMcpResponseBodyDataDeploymentConfigRuntimeConfiguration = exports.CreateMcpResponseBodyDataDeploymentConfigProxyConfiguration = exports.CreateMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration = exports.CreateMcpResponseBodyDataDeploymentConfigOssMountConfiguration = exports.CreateMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints = exports.CreateMcpResponseBodyDataDeploymentConfigNetworkConfiguration = exports.CreateMcpResponseBodyDataDeploymentConfigNasConfiguration = exports.CreateMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints = exports.CreateMcpResponseBodyDataDeploymentConfigMcpConfiguration = exports.CreateMcpResponseBodyDataDeploymentConfigLogConfiguration = exports.CreateMcpResponseBodyDataDeploymentConfigHookConfiguration = exports.CreateMcpResponseBodyDataDeploymentConfigHookConfigurationHooks = exports.CreateMcpResponseBodyDataDeploymentConfigContainerConfiguration = exports.CreateMcpResponseBodyDataDeploymentConfigCodeConfiguration = exports.CreateMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration = exports.CreateMcpResponseBodyDataDeploymentConfigAccessControl = exports.CreateMcpResponseBodyDataAuth = exports.CreateMcpResponseBodyDataAuthHttpToMcp = exports.CreateMcpResponseBodyDataAuthDirectProxy = exports.CreateMcpResponseBodyDataAuthCodePackage = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateMcpResponseBodyDataAuthCodePackage extends $dara.Model {
    static names() {
        return {
            apiKey: 'apiKey',
            headerName: 'headerName',
        };
    }
    static types() {
        return {
            apiKey: 'string',
            headerName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataAuthCodePackage = CreateMcpResponseBodyDataAuthCodePackage;
class CreateMcpResponseBodyDataAuthDirectProxy extends $dara.Model {
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
exports.CreateMcpResponseBodyDataAuthDirectProxy = CreateMcpResponseBodyDataAuthDirectProxy;
class CreateMcpResponseBodyDataAuthHttpToMcp extends $dara.Model {
    static names() {
        return {
            credential: 'credential',
            id: 'id',
            name: 'name',
            position: 'position',
            type: 'type',
        };
    }
    static types() {
        return {
            credential: 'string',
            id: 'string',
            name: 'string',
            position: 'string',
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
exports.CreateMcpResponseBodyDataAuthHttpToMcp = CreateMcpResponseBodyDataAuthHttpToMcp;
class CreateMcpResponseBodyDataAuth extends $dara.Model {
    static names() {
        return {
            codePackage: 'codePackage',
            directProxy: 'directProxy',
            enabled: 'enabled',
            httpToMcp: 'httpToMcp',
        };
    }
    static types() {
        return {
            codePackage: CreateMcpResponseBodyDataAuthCodePackage,
            directProxy: CreateMcpResponseBodyDataAuthDirectProxy,
            enabled: 'boolean',
            httpToMcp: { 'type': 'array', 'itemType': CreateMcpResponseBodyDataAuthHttpToMcp },
        };
    }
    validate() {
        if (this.codePackage && typeof this.codePackage.validate === 'function') {
            this.codePackage.validate();
        }
        if (this.directProxy && typeof this.directProxy.validate === 'function') {
            this.directProxy.validate();
        }
        if (Array.isArray(this.httpToMcp)) {
            $dara.Model.validateArray(this.httpToMcp);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataAuth = CreateMcpResponseBodyDataAuth;
class CreateMcpResponseBodyDataDeploymentConfigAccessControl extends $dara.Model {
    static names() {
        return {
            credentialId: 'credentialId',
            enabled: 'enabled',
            mode: 'mode',
        };
    }
    static types() {
        return {
            credentialId: 'string',
            enabled: 'boolean',
            mode: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataDeploymentConfigAccessControl = CreateMcpResponseBodyDataDeploymentConfigAccessControl;
class CreateMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
    static names() {
        return {
            authorizationEnabled: 'authorizationEnabled',
            credentialProviderArn: 'credentialProviderArn',
            credentialProviderType: 'credentialProviderType',
            enabled: 'enabled',
        };
    }
    static types() {
        return {
            authorizationEnabled: 'boolean',
            credentialProviderArn: 'string',
            credentialProviderType: 'string',
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
exports.CreateMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration = CreateMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration;
class CreateMcpResponseBodyDataDeploymentConfigCodeConfiguration extends $dara.Model {
    static names() {
        return {
            codePackageToken: 'codePackageToken',
            command: 'command',
            language: 'language',
        };
    }
    static types() {
        return {
            codePackageToken: 'string',
            command: { 'type': 'array', 'itemType': 'string' },
            language: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.command)) {
            $dara.Model.validateArray(this.command);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataDeploymentConfigCodeConfiguration = CreateMcpResponseBodyDataDeploymentConfigCodeConfiguration;
class CreateMcpResponseBodyDataDeploymentConfigContainerConfiguration extends $dara.Model {
    static names() {
        return {
            acrInstanceId: 'acrInstanceId',
            command: 'command',
            entrypoint: 'entrypoint',
            image: 'image',
            imageRegistryType: 'imageRegistryType',
            mcpRuntimeMode: 'mcpRuntimeMode',
            sourceType: 'sourceType',
        };
    }
    static types() {
        return {
            acrInstanceId: 'string',
            command: { 'type': 'array', 'itemType': 'string' },
            entrypoint: { 'type': 'array', 'itemType': 'string' },
            image: 'string',
            imageRegistryType: 'string',
            mcpRuntimeMode: 'string',
            sourceType: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.command)) {
            $dara.Model.validateArray(this.command);
        }
        if (Array.isArray(this.entrypoint)) {
            $dara.Model.validateArray(this.entrypoint);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataDeploymentConfigContainerConfiguration = CreateMcpResponseBodyDataDeploymentConfigContainerConfiguration;
class CreateMcpResponseBodyDataDeploymentConfigHookConfigurationHooks extends $dara.Model {
    static names() {
        return {
            apiVersion: 'apiVersion',
            description: 'description',
            enabled: 'enabled',
            event: 'event',
            headers: 'headers',
            timeout: 'timeout',
            url: 'url',
        };
    }
    static types() {
        return {
            apiVersion: 'string',
            description: 'string',
            enabled: 'boolean',
            event: 'string',
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            timeout: 'number',
            url: 'string',
        };
    }
    validate() {
        if (this.headers) {
            $dara.Model.validateMap(this.headers);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataDeploymentConfigHookConfigurationHooks = CreateMcpResponseBodyDataDeploymentConfigHookConfigurationHooks;
class CreateMcpResponseBodyDataDeploymentConfigHookConfiguration extends $dara.Model {
    static names() {
        return {
            hooks: 'hooks',
        };
    }
    static types() {
        return {
            hooks: { 'type': 'array', 'itemType': CreateMcpResponseBodyDataDeploymentConfigHookConfigurationHooks },
        };
    }
    validate() {
        if (Array.isArray(this.hooks)) {
            $dara.Model.validateArray(this.hooks);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataDeploymentConfigHookConfiguration = CreateMcpResponseBodyDataDeploymentConfigHookConfiguration;
class CreateMcpResponseBodyDataDeploymentConfigLogConfiguration extends $dara.Model {
    static names() {
        return {
            enableInstanceMetrics: 'enableInstanceMetrics',
            enableRequestMetrics: 'enableRequestMetrics',
            logBeginRule: 'logBeginRule',
            logstore: 'logstore',
            project: 'project',
        };
    }
    static types() {
        return {
            enableInstanceMetrics: 'boolean',
            enableRequestMetrics: 'boolean',
            logBeginRule: 'string',
            logstore: 'string',
            project: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataDeploymentConfigLogConfiguration = CreateMcpResponseBodyDataDeploymentConfigLogConfiguration;
class CreateMcpResponseBodyDataDeploymentConfigMcpConfiguration extends $dara.Model {
    static names() {
        return {
            endpointPath: 'endpointPath',
            sessionConcurrencyPerInstance: 'sessionConcurrencyPerInstance',
            sessionIdleTimeoutSeconds: 'sessionIdleTimeoutSeconds',
            sessionMaxLifetimeSeconds: 'sessionMaxLifetimeSeconds',
        };
    }
    static types() {
        return {
            endpointPath: 'string',
            sessionConcurrencyPerInstance: 'number',
            sessionIdleTimeoutSeconds: 'number',
            sessionMaxLifetimeSeconds: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataDeploymentConfigMcpConfiguration = CreateMcpResponseBodyDataDeploymentConfigMcpConfiguration;
class CreateMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
    static names() {
        return {
            enableTls: 'enableTls',
            mountDir: 'mountDir',
            serverAddr: 'serverAddr',
        };
    }
    static types() {
        return {
            enableTls: 'boolean',
            mountDir: 'string',
            serverAddr: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints = CreateMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints;
class CreateMcpResponseBodyDataDeploymentConfigNasConfiguration extends $dara.Model {
    static names() {
        return {
            groupId: 'groupId',
            mountPoints: 'mountPoints',
            userId: 'userId',
        };
    }
    static types() {
        return {
            groupId: 'number',
            mountPoints: { 'type': 'array', 'itemType': CreateMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints },
            userId: 'number',
        };
    }
    validate() {
        if (Array.isArray(this.mountPoints)) {
            $dara.Model.validateArray(this.mountPoints);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataDeploymentConfigNasConfiguration = CreateMcpResponseBodyDataDeploymentConfigNasConfiguration;
class CreateMcpResponseBodyDataDeploymentConfigNetworkConfiguration extends $dara.Model {
    static names() {
        return {
            networkMode: 'networkMode',
            securityGroupId: 'securityGroupId',
            vSwitchIds: 'vSwitchIds',
            vpcId: 'vpcId',
        };
    }
    static types() {
        return {
            networkMode: 'string',
            securityGroupId: 'string',
            vSwitchIds: { 'type': 'array', 'itemType': 'string' },
            vpcId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.vSwitchIds)) {
            $dara.Model.validateArray(this.vSwitchIds);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataDeploymentConfigNetworkConfiguration = CreateMcpResponseBodyDataDeploymentConfigNetworkConfiguration;
class CreateMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
    static names() {
        return {
            bucketName: 'bucketName',
            bucketPath: 'bucketPath',
            endpoint: 'endpoint',
            mountDir: 'mountDir',
            readOnly: 'readOnly',
        };
    }
    static types() {
        return {
            bucketName: 'string',
            bucketPath: 'string',
            endpoint: 'string',
            mountDir: 'string',
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
exports.CreateMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints = CreateMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints;
class CreateMcpResponseBodyDataDeploymentConfigOssMountConfiguration extends $dara.Model {
    static names() {
        return {
            mountPoints: 'mountPoints',
        };
    }
    static types() {
        return {
            mountPoints: { 'type': 'array', 'itemType': CreateMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints },
        };
    }
    validate() {
        if (Array.isArray(this.mountPoints)) {
            $dara.Model.validateArray(this.mountPoints);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataDeploymentConfigOssMountConfiguration = CreateMcpResponseBodyDataDeploymentConfigOssMountConfiguration;
class CreateMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration extends $dara.Model {
    static names() {
        return {
            enabled: 'enabled',
            ruleSetId: 'ruleSetId',
            version: 'version',
        };
    }
    static types() {
        return {
            enabled: 'boolean',
            ruleSetId: 'string',
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
exports.CreateMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration = CreateMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration;
class CreateMcpResponseBodyDataDeploymentConfigProxyConfiguration extends $dara.Model {
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
exports.CreateMcpResponseBodyDataDeploymentConfigProxyConfiguration = CreateMcpResponseBodyDataDeploymentConfigProxyConfiguration;
class CreateMcpResponseBodyDataDeploymentConfigRuntimeConfiguration extends $dara.Model {
    static names() {
        return {
            cpu: 'cpu',
            diskSize: 'diskSize',
            environmentVariables: 'environmentVariables',
            executionRoleArn: 'executionRoleArn',
            instanceConcurrency: 'instanceConcurrency',
            memory: 'memory',
            port: 'port',
            timeout: 'timeout',
        };
    }
    static types() {
        return {
            cpu: 'number',
            diskSize: 'number',
            environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            executionRoleArn: 'string',
            instanceConcurrency: 'number',
            memory: 'number',
            port: 'number',
            timeout: 'number',
        };
    }
    validate() {
        if (this.environmentVariables) {
            $dara.Model.validateMap(this.environmentVariables);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataDeploymentConfigRuntimeConfiguration = CreateMcpResponseBodyDataDeploymentConfigRuntimeConfiguration;
class CreateMcpResponseBodyDataDeploymentConfig extends $dara.Model {
    static names() {
        return {
            accessControl: 'accessControl',
            agentIdentityConfiguration: 'agentIdentityConfiguration',
            artifactType: 'artifactType',
            codeConfiguration: 'codeConfiguration',
            containerConfiguration: 'containerConfiguration',
            hookConfiguration: 'hookConfiguration',
            logConfiguration: 'logConfiguration',
            mcpConfiguration: 'mcpConfiguration',
            nasConfiguration: 'nasConfiguration',
            networkConfiguration: 'networkConfiguration',
            ossMountConfiguration: 'ossMountConfiguration',
            parameterTransformConfiguration: 'parameterTransformConfiguration',
            proxyConfiguration: 'proxyConfiguration',
            runtimeConfiguration: 'runtimeConfiguration',
        };
    }
    static types() {
        return {
            accessControl: CreateMcpResponseBodyDataDeploymentConfigAccessControl,
            agentIdentityConfiguration: CreateMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration,
            artifactType: 'string',
            codeConfiguration: CreateMcpResponseBodyDataDeploymentConfigCodeConfiguration,
            containerConfiguration: CreateMcpResponseBodyDataDeploymentConfigContainerConfiguration,
            hookConfiguration: CreateMcpResponseBodyDataDeploymentConfigHookConfiguration,
            logConfiguration: CreateMcpResponseBodyDataDeploymentConfigLogConfiguration,
            mcpConfiguration: CreateMcpResponseBodyDataDeploymentConfigMcpConfiguration,
            nasConfiguration: CreateMcpResponseBodyDataDeploymentConfigNasConfiguration,
            networkConfiguration: CreateMcpResponseBodyDataDeploymentConfigNetworkConfiguration,
            ossMountConfiguration: CreateMcpResponseBodyDataDeploymentConfigOssMountConfiguration,
            parameterTransformConfiguration: CreateMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration,
            proxyConfiguration: CreateMcpResponseBodyDataDeploymentConfigProxyConfiguration,
            runtimeConfiguration: CreateMcpResponseBodyDataDeploymentConfigRuntimeConfiguration,
        };
    }
    validate() {
        if (this.accessControl && typeof this.accessControl.validate === 'function') {
            this.accessControl.validate();
        }
        if (this.agentIdentityConfiguration && typeof this.agentIdentityConfiguration.validate === 'function') {
            this.agentIdentityConfiguration.validate();
        }
        if (this.codeConfiguration && typeof this.codeConfiguration.validate === 'function') {
            this.codeConfiguration.validate();
        }
        if (this.containerConfiguration && typeof this.containerConfiguration.validate === 'function') {
            this.containerConfiguration.validate();
        }
        if (this.hookConfiguration && typeof this.hookConfiguration.validate === 'function') {
            this.hookConfiguration.validate();
        }
        if (this.logConfiguration && typeof this.logConfiguration.validate === 'function') {
            this.logConfiguration.validate();
        }
        if (this.mcpConfiguration && typeof this.mcpConfiguration.validate === 'function') {
            this.mcpConfiguration.validate();
        }
        if (this.nasConfiguration && typeof this.nasConfiguration.validate === 'function') {
            this.nasConfiguration.validate();
        }
        if (this.networkConfiguration && typeof this.networkConfiguration.validate === 'function') {
            this.networkConfiguration.validate();
        }
        if (this.ossMountConfiguration && typeof this.ossMountConfiguration.validate === 'function') {
            this.ossMountConfiguration.validate();
        }
        if (this.parameterTransformConfiguration && typeof this.parameterTransformConfiguration.validate === 'function') {
            this.parameterTransformConfiguration.validate();
        }
        if (this.proxyConfiguration && typeof this.proxyConfiguration.validate === 'function') {
            this.proxyConfiguration.validate();
        }
        if (this.runtimeConfiguration && typeof this.runtimeConfiguration.validate === 'function') {
            this.runtimeConfiguration.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataDeploymentConfig = CreateMcpResponseBodyDataDeploymentConfig;
class CreateMcpResponseBodyDataMarketSource extends $dara.Model {
    static names() {
        return {
            marketItemId: 'marketItemId',
        };
    }
    static types() {
        return {
            marketItemId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataMarketSource = CreateMcpResponseBodyDataMarketSource;
class CreateMcpResponseBodyDataTemplate extends $dara.Model {
    static names() {
        return {
            appliedTemplateVersion: 'appliedTemplateVersion',
            latestTemplateVersion: 'latestTemplateVersion',
            schemaVersion: 'schemaVersion',
            templateInputSchema: 'templateInputSchema',
            updateAvailable: 'updateAvailable',
        };
    }
    static types() {
        return {
            appliedTemplateVersion: 'string',
            latestTemplateVersion: 'string',
            schemaVersion: 'string',
            templateInputSchema: 'string',
            updateAvailable: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyDataTemplate = CreateMcpResponseBodyDataTemplate;
class CreateMcpResponseBodyData extends $dara.Model {
    static names() {
        return {
            addresses: 'addresses',
            auth: 'auth',
            customTags: 'customTags',
            deploymentConfig: 'deploymentConfig',
            description: 'description',
            endpoint: 'endpoint',
            functionName: 'functionName',
            marketSource: 'marketSource',
            mcpServerConfig: 'mcpServerConfig',
            mcpServerId: 'mcpServerId',
            name: 'name',
            officialTag: 'officialTag',
            permissionMode: 'permissionMode',
            protocol: 'protocol',
            status: 'status',
            statusReason: 'statusReason',
            swaggerConfig: 'swaggerConfig',
            template: 'template',
            type: 'type',
            usageActive: 'usageActive',
        };
    }
    static types() {
        return {
            addresses: { 'type': 'array', 'itemType': 'string' },
            auth: CreateMcpResponseBodyDataAuth,
            customTags: { 'type': 'array', 'itemType': 'string' },
            deploymentConfig: CreateMcpResponseBodyDataDeploymentConfig,
            description: 'string',
            endpoint: 'string',
            functionName: 'string',
            marketSource: CreateMcpResponseBodyDataMarketSource,
            mcpServerConfig: 'string',
            mcpServerId: 'string',
            name: 'string',
            officialTag: 'string',
            permissionMode: 'string',
            protocol: 'string',
            status: 'string',
            statusReason: 'string',
            swaggerConfig: 'string',
            template: CreateMcpResponseBodyDataTemplate,
            type: 'string',
            usageActive: 'boolean',
        };
    }
    validate() {
        if (Array.isArray(this.addresses)) {
            $dara.Model.validateArray(this.addresses);
        }
        if (this.auth && typeof this.auth.validate === 'function') {
            this.auth.validate();
        }
        if (Array.isArray(this.customTags)) {
            $dara.Model.validateArray(this.customTags);
        }
        if (this.deploymentConfig && typeof this.deploymentConfig.validate === 'function') {
            this.deploymentConfig.validate();
        }
        if (this.marketSource && typeof this.marketSource.validate === 'function') {
            this.marketSource.validate();
        }
        if (this.template && typeof this.template.validate === 'function') {
            this.template.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateMcpResponseBodyData = CreateMcpResponseBodyData;
class CreateMcpResponseBody extends $dara.Model {
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
            data: CreateMcpResponseBodyData,
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
exports.CreateMcpResponseBody = CreateMcpResponseBody;
//# sourceMappingURL=CreateMcpResponseBody.js.map