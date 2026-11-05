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
exports.GetMcpResponseBody = exports.GetMcpResponseBodyData = exports.GetMcpResponseBodyDataTemplate = exports.GetMcpResponseBodyDataMarketSource = exports.GetMcpResponseBodyDataDeploymentConfig = exports.GetMcpResponseBodyDataDeploymentConfigRuntimeConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigProxyConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigOssMountConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints = exports.GetMcpResponseBodyDataDeploymentConfigNetworkConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigNasConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints = exports.GetMcpResponseBodyDataDeploymentConfigMcpConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigLogConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigHookConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigHookConfigurationHooks = exports.GetMcpResponseBodyDataDeploymentConfigContainerConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigCodeConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigAccessControl = exports.GetMcpResponseBodyDataAuth = exports.GetMcpResponseBodyDataAuthHttpToMcp = exports.GetMcpResponseBodyDataAuthDirectProxy = exports.GetMcpResponseBodyDataAuthCodePackage = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetMcpResponseBodyDataAuthCodePackage extends $dara.Model {
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
exports.GetMcpResponseBodyDataAuthCodePackage = GetMcpResponseBodyDataAuthCodePackage;
class GetMcpResponseBodyDataAuthDirectProxy extends $dara.Model {
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
exports.GetMcpResponseBodyDataAuthDirectProxy = GetMcpResponseBodyDataAuthDirectProxy;
class GetMcpResponseBodyDataAuthHttpToMcp extends $dara.Model {
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
exports.GetMcpResponseBodyDataAuthHttpToMcp = GetMcpResponseBodyDataAuthHttpToMcp;
class GetMcpResponseBodyDataAuth extends $dara.Model {
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
            codePackage: GetMcpResponseBodyDataAuthCodePackage,
            directProxy: GetMcpResponseBodyDataAuthDirectProxy,
            enabled: 'boolean',
            httpToMcp: { 'type': 'array', 'itemType': GetMcpResponseBodyDataAuthHttpToMcp },
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
exports.GetMcpResponseBodyDataAuth = GetMcpResponseBodyDataAuth;
class GetMcpResponseBodyDataDeploymentConfigAccessControl extends $dara.Model {
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
exports.GetMcpResponseBodyDataDeploymentConfigAccessControl = GetMcpResponseBodyDataDeploymentConfigAccessControl;
class GetMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
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
exports.GetMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration = GetMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration;
class GetMcpResponseBodyDataDeploymentConfigCodeConfiguration extends $dara.Model {
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
exports.GetMcpResponseBodyDataDeploymentConfigCodeConfiguration = GetMcpResponseBodyDataDeploymentConfigCodeConfiguration;
class GetMcpResponseBodyDataDeploymentConfigContainerConfiguration extends $dara.Model {
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
exports.GetMcpResponseBodyDataDeploymentConfigContainerConfiguration = GetMcpResponseBodyDataDeploymentConfigContainerConfiguration;
class GetMcpResponseBodyDataDeploymentConfigHookConfigurationHooks extends $dara.Model {
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
exports.GetMcpResponseBodyDataDeploymentConfigHookConfigurationHooks = GetMcpResponseBodyDataDeploymentConfigHookConfigurationHooks;
class GetMcpResponseBodyDataDeploymentConfigHookConfiguration extends $dara.Model {
    static names() {
        return {
            hooks: 'hooks',
        };
    }
    static types() {
        return {
            hooks: { 'type': 'array', 'itemType': GetMcpResponseBodyDataDeploymentConfigHookConfigurationHooks },
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
exports.GetMcpResponseBodyDataDeploymentConfigHookConfiguration = GetMcpResponseBodyDataDeploymentConfigHookConfiguration;
class GetMcpResponseBodyDataDeploymentConfigLogConfiguration extends $dara.Model {
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
exports.GetMcpResponseBodyDataDeploymentConfigLogConfiguration = GetMcpResponseBodyDataDeploymentConfigLogConfiguration;
class GetMcpResponseBodyDataDeploymentConfigMcpConfiguration extends $dara.Model {
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
exports.GetMcpResponseBodyDataDeploymentConfigMcpConfiguration = GetMcpResponseBodyDataDeploymentConfigMcpConfiguration;
class GetMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
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
exports.GetMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints = GetMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints;
class GetMcpResponseBodyDataDeploymentConfigNasConfiguration extends $dara.Model {
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
            mountPoints: { 'type': 'array', 'itemType': GetMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints },
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
exports.GetMcpResponseBodyDataDeploymentConfigNasConfiguration = GetMcpResponseBodyDataDeploymentConfigNasConfiguration;
class GetMcpResponseBodyDataDeploymentConfigNetworkConfiguration extends $dara.Model {
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
exports.GetMcpResponseBodyDataDeploymentConfigNetworkConfiguration = GetMcpResponseBodyDataDeploymentConfigNetworkConfiguration;
class GetMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
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
exports.GetMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints = GetMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints;
class GetMcpResponseBodyDataDeploymentConfigOssMountConfiguration extends $dara.Model {
    static names() {
        return {
            mountPoints: 'mountPoints',
        };
    }
    static types() {
        return {
            mountPoints: { 'type': 'array', 'itemType': GetMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints },
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
exports.GetMcpResponseBodyDataDeploymentConfigOssMountConfiguration = GetMcpResponseBodyDataDeploymentConfigOssMountConfiguration;
class GetMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration extends $dara.Model {
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
exports.GetMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration = GetMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration;
class GetMcpResponseBodyDataDeploymentConfigProxyConfiguration extends $dara.Model {
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
exports.GetMcpResponseBodyDataDeploymentConfigProxyConfiguration = GetMcpResponseBodyDataDeploymentConfigProxyConfiguration;
class GetMcpResponseBodyDataDeploymentConfigRuntimeConfiguration extends $dara.Model {
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
exports.GetMcpResponseBodyDataDeploymentConfigRuntimeConfiguration = GetMcpResponseBodyDataDeploymentConfigRuntimeConfiguration;
class GetMcpResponseBodyDataDeploymentConfig extends $dara.Model {
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
            accessControl: GetMcpResponseBodyDataDeploymentConfigAccessControl,
            agentIdentityConfiguration: GetMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration,
            artifactType: 'string',
            codeConfiguration: GetMcpResponseBodyDataDeploymentConfigCodeConfiguration,
            containerConfiguration: GetMcpResponseBodyDataDeploymentConfigContainerConfiguration,
            hookConfiguration: GetMcpResponseBodyDataDeploymentConfigHookConfiguration,
            logConfiguration: GetMcpResponseBodyDataDeploymentConfigLogConfiguration,
            mcpConfiguration: GetMcpResponseBodyDataDeploymentConfigMcpConfiguration,
            nasConfiguration: GetMcpResponseBodyDataDeploymentConfigNasConfiguration,
            networkConfiguration: GetMcpResponseBodyDataDeploymentConfigNetworkConfiguration,
            ossMountConfiguration: GetMcpResponseBodyDataDeploymentConfigOssMountConfiguration,
            parameterTransformConfiguration: GetMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration,
            proxyConfiguration: GetMcpResponseBodyDataDeploymentConfigProxyConfiguration,
            runtimeConfiguration: GetMcpResponseBodyDataDeploymentConfigRuntimeConfiguration,
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
exports.GetMcpResponseBodyDataDeploymentConfig = GetMcpResponseBodyDataDeploymentConfig;
class GetMcpResponseBodyDataMarketSource extends $dara.Model {
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
exports.GetMcpResponseBodyDataMarketSource = GetMcpResponseBodyDataMarketSource;
class GetMcpResponseBodyDataTemplate extends $dara.Model {
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
exports.GetMcpResponseBodyDataTemplate = GetMcpResponseBodyDataTemplate;
class GetMcpResponseBodyData extends $dara.Model {
    static names() {
        return {
            addresses: 'addresses',
            auth: 'auth',
            createdAt: 'createdAt',
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
            updatedAt: 'updatedAt',
            url: 'url',
            usageActive: 'usageActive',
        };
    }
    static types() {
        return {
            addresses: { 'type': 'array', 'itemType': 'string' },
            auth: GetMcpResponseBodyDataAuth,
            createdAt: 'string',
            customTags: { 'type': 'array', 'itemType': 'string' },
            deploymentConfig: GetMcpResponseBodyDataDeploymentConfig,
            description: 'string',
            endpoint: 'string',
            functionName: 'string',
            marketSource: GetMcpResponseBodyDataMarketSource,
            mcpServerConfig: 'string',
            mcpServerId: 'string',
            name: 'string',
            officialTag: 'string',
            permissionMode: 'string',
            protocol: 'string',
            status: 'string',
            statusReason: 'string',
            swaggerConfig: 'string',
            template: GetMcpResponseBodyDataTemplate,
            type: 'string',
            updatedAt: 'string',
            url: 'string',
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
exports.GetMcpResponseBodyData = GetMcpResponseBodyData;
class GetMcpResponseBody extends $dara.Model {
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
            data: GetMcpResponseBodyData,
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
exports.GetMcpResponseBody = GetMcpResponseBody;
//# sourceMappingURL=GetMcpResponseBody.js.map