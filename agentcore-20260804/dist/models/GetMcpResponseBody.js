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
exports.GetMcpResponseBody = exports.GetMcpResponseBodyData = exports.GetMcpResponseBodyDataVirtualConfig = exports.GetMcpResponseBodyDataVirtualConfigSources = exports.GetMcpResponseBodyDataVirtualConfigSourcesTools = exports.GetMcpResponseBodyDataTemplate = exports.GetMcpResponseBodyDataOriginProbe = exports.GetMcpResponseBodyDataOriginProbeLastResult = exports.GetMcpResponseBodyDataOriginProbeLastResultError = exports.GetMcpResponseBodyDataOriginProbeLastResultActualConfiguration = exports.GetMcpResponseBodyDataOperation = exports.GetMcpResponseBodyDataOperationError = exports.GetMcpResponseBodyDataMarketSource = exports.GetMcpResponseBodyDataLastValidation = exports.GetMcpResponseBodyDataLastValidationItems = exports.GetMcpResponseBodyDataLastValidationItemsSources = exports.GetMcpResponseBodyDataLastValidationItemsSourcesTools = exports.GetMcpResponseBodyDataLastValidationItemsSourcesToolsCurrentDefinition = exports.GetMcpResponseBodyDataDeploymentConfig = exports.GetMcpResponseBodyDataDeploymentConfigRuntimeConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigProxyConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigParameterTransformConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigOssMountConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints = exports.GetMcpResponseBodyDataDeploymentConfigNetworkConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigNasConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigNasConfigurationMountPoints = exports.GetMcpResponseBodyDataDeploymentConfigMcpConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigLogConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigHookConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigHookConfigurationHooks = exports.GetMcpResponseBodyDataDeploymentConfigContainerConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfig = exports.GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigNetworkConfig = exports.GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigCertConfig = exports.GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigAuthConfig = exports.GetMcpResponseBodyDataDeploymentConfigCodeConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigAgentIdentityConfiguration = exports.GetMcpResponseBodyDataDeploymentConfigAccessControl = exports.GetMcpResponseBodyDataAuth = exports.GetMcpResponseBodyDataAuthHttpToMcp = exports.GetMcpResponseBodyDataAuthDirectProxy = exports.GetMcpResponseBodyDataAuthCodePackage = exports.GetMcpResponseBodyDataAppliedVirtualConfig = exports.GetMcpResponseBodyDataAppliedVirtualConfigSources = exports.GetMcpResponseBodyDataAppliedVirtualConfigSourcesTools = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetMcpResponseBodyDataAppliedVirtualConfigSourcesTools extends $dara.Model {
    static names() {
        return {
            expectedDigest: 'expectedDigest',
            name: 'name',
        };
    }
    static types() {
        return {
            expectedDigest: 'string',
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
exports.GetMcpResponseBodyDataAppliedVirtualConfigSourcesTools = GetMcpResponseBodyDataAppliedVirtualConfigSourcesTools;
class GetMcpResponseBodyDataAppliedVirtualConfigSources extends $dara.Model {
    static names() {
        return {
            mcpServerId: 'mcpServerId',
            tools: 'tools',
        };
    }
    static types() {
        return {
            mcpServerId: 'string',
            tools: { 'type': 'array', 'itemType': GetMcpResponseBodyDataAppliedVirtualConfigSourcesTools },
        };
    }
    validate() {
        if (Array.isArray(this.tools)) {
            $dara.Model.validateArray(this.tools);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataAppliedVirtualConfigSources = GetMcpResponseBodyDataAppliedVirtualConfigSources;
class GetMcpResponseBodyDataAppliedVirtualConfig extends $dara.Model {
    static names() {
        return {
            sources: 'sources',
        };
    }
    static types() {
        return {
            sources: { 'type': 'array', 'itemType': GetMcpResponseBodyDataAppliedVirtualConfigSources },
        };
    }
    validate() {
        if (Array.isArray(this.sources)) {
            $dara.Model.validateArray(this.sources);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataAppliedVirtualConfig = GetMcpResponseBodyDataAppliedVirtualConfig;
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
class GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigAuthConfig extends $dara.Model {
    static names() {
        return {
            password: 'password',
            userName: 'userName',
        };
    }
    static types() {
        return {
            password: 'string',
            userName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigAuthConfig = GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigAuthConfig;
class GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigCertConfig extends $dara.Model {
    static names() {
        return {
            insecure: 'insecure',
            rootCaCertBase64: 'rootCaCertBase64',
        };
    }
    static types() {
        return {
            insecure: 'boolean',
            rootCaCertBase64: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigCertConfig = GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigCertConfig;
class GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigNetworkConfig extends $dara.Model {
    static names() {
        return {
            securityGroupId: 'securityGroupId',
            vSwitchId: 'vSwitchId',
            vpcId: 'vpcId',
        };
    }
    static types() {
        return {
            securityGroupId: 'string',
            vSwitchId: 'string',
            vpcId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigNetworkConfig = GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigNetworkConfig;
class GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfig extends $dara.Model {
    static names() {
        return {
            authConfig: 'authConfig',
            certConfig: 'certConfig',
            networkConfig: 'networkConfig',
        };
    }
    static types() {
        return {
            authConfig: GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigAuthConfig,
            certConfig: GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigCertConfig,
            networkConfig: GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfigNetworkConfig,
        };
    }
    validate() {
        if (this.authConfig && typeof this.authConfig.validate === 'function') {
            this.authConfig.validate();
        }
        if (this.certConfig && typeof this.certConfig.validate === 'function') {
            this.certConfig.validate();
        }
        if (this.networkConfig && typeof this.networkConfig.validate === 'function') {
            this.networkConfig.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfig = GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfig;
class GetMcpResponseBodyDataDeploymentConfigContainerConfiguration extends $dara.Model {
    static names() {
        return {
            acrInstanceId: 'acrInstanceId',
            command: 'command',
            entrypoint: 'entrypoint',
            image: 'image',
            imageRegistryType: 'imageRegistryType',
            mcpRuntimeMode: 'mcpRuntimeMode',
            registryConfig: 'registryConfig',
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
            registryConfig: GetMcpResponseBodyDataDeploymentConfigContainerConfigurationRegistryConfig,
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
        if (this.registryConfig && typeof this.registryConfig.validate === 'function') {
            this.registryConfig.validate();
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
            sessionMode: 'sessionMode',
        };
    }
    static types() {
        return {
            endpointPath: 'string',
            sessionConcurrencyPerInstance: 'number',
            sessionIdleTimeoutSeconds: 'number',
            sessionMaxLifetimeSeconds: 'number',
            sessionMode: 'string',
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
class GetMcpResponseBodyDataLastValidationItemsSourcesToolsCurrentDefinition extends $dara.Model {
    static names() {
        return {
            inputSchema: 'inputSchema',
            outputSchema: 'outputSchema',
            toolDescription: 'toolDescription',
            toolName: 'toolName',
        };
    }
    static types() {
        return {
            inputSchema: 'string',
            outputSchema: 'string',
            toolDescription: 'string',
            toolName: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataLastValidationItemsSourcesToolsCurrentDefinition = GetMcpResponseBodyDataLastValidationItemsSourcesToolsCurrentDefinition;
class GetMcpResponseBodyDataLastValidationItemsSourcesTools extends $dara.Model {
    static names() {
        return {
            currentDefinition: 'currentDefinition',
            currentDigest: 'currentDigest',
            name: 'name',
            savedDigest: 'savedDigest',
            status: 'status',
        };
    }
    static types() {
        return {
            currentDefinition: GetMcpResponseBodyDataLastValidationItemsSourcesToolsCurrentDefinition,
            currentDigest: 'string',
            name: 'string',
            savedDigest: 'string',
            status: 'string',
        };
    }
    validate() {
        if (this.currentDefinition && typeof this.currentDefinition.validate === 'function') {
            this.currentDefinition.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataLastValidationItemsSourcesTools = GetMcpResponseBodyDataLastValidationItemsSourcesTools;
class GetMcpResponseBodyDataLastValidationItemsSources extends $dara.Model {
    static names() {
        return {
            affectedVirtualMcps: 'affectedVirtualMcps',
            checkedAt: 'checkedAt',
            mcpServerId: 'mcpServerId',
            reasonCode: 'reasonCode',
            status: 'status',
            tools: 'tools',
        };
    }
    static types() {
        return {
            affectedVirtualMcps: { 'type': 'array', 'itemType': 'string' },
            checkedAt: 'string',
            mcpServerId: 'string',
            reasonCode: 'string',
            status: 'string',
            tools: { 'type': 'array', 'itemType': GetMcpResponseBodyDataLastValidationItemsSourcesTools },
        };
    }
    validate() {
        if (Array.isArray(this.affectedVirtualMcps)) {
            $dara.Model.validateArray(this.affectedVirtualMcps);
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
exports.GetMcpResponseBodyDataLastValidationItemsSources = GetMcpResponseBodyDataLastValidationItemsSources;
class GetMcpResponseBodyDataLastValidationItems extends $dara.Model {
    static names() {
        return {
            checkedRevision: 'checkedRevision',
            sources: 'sources',
            virtualMcpServerId: 'virtualMcpServerId',
        };
    }
    static types() {
        return {
            checkedRevision: 'number',
            sources: { 'type': 'array', 'itemType': GetMcpResponseBodyDataLastValidationItemsSources },
            virtualMcpServerId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.sources)) {
            $dara.Model.validateArray(this.sources);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataLastValidationItems = GetMcpResponseBodyDataLastValidationItems;
class GetMcpResponseBodyDataLastValidation extends $dara.Model {
    static names() {
        return {
            createdAt: 'createdAt',
            failureCode: 'failureCode',
            failureMessage: 'failureMessage',
            finishedAt: 'finishedAt',
            items: 'items',
            status: 'status',
            validationId: 'validationId',
        };
    }
    static types() {
        return {
            createdAt: 'string',
            failureCode: 'string',
            failureMessage: 'string',
            finishedAt: 'string',
            items: { 'type': 'array', 'itemType': GetMcpResponseBodyDataLastValidationItems },
            status: 'string',
            validationId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.items)) {
            $dara.Model.validateArray(this.items);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataLastValidation = GetMcpResponseBodyDataLastValidation;
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
class GetMcpResponseBodyDataOperationError extends $dara.Model {
    static names() {
        return {
            code: 'code',
            message: 'message',
            retryable: 'retryable',
            source: 'source',
            stage: 'stage',
        };
    }
    static types() {
        return {
            code: 'string',
            message: 'string',
            retryable: 'boolean',
            source: 'string',
            stage: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataOperationError = GetMcpResponseBodyDataOperationError;
class GetMcpResponseBodyDataOperation extends $dara.Model {
    static names() {
        return {
            error: 'error',
            operationId: 'operationId',
            stage: 'stage',
            status: 'status',
            type: 'type',
            updatedAt: 'updatedAt',
        };
    }
    static types() {
        return {
            error: GetMcpResponseBodyDataOperationError,
            operationId: 'string',
            stage: 'string',
            status: 'string',
            type: 'string',
            updatedAt: 'string',
        };
    }
    validate() {
        if (this.error && typeof this.error.validate === 'function') {
            this.error.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataOperation = GetMcpResponseBodyDataOperation;
class GetMcpResponseBodyDataOriginProbeLastResultActualConfiguration extends $dara.Model {
    static names() {
        return {
            backendMcpProtocol: 'backendMcpProtocol',
            protocol: 'protocol',
            protocolVersion: 'protocolVersion',
            sessionMode: 'sessionMode',
        };
    }
    static types() {
        return {
            backendMcpProtocol: 'string',
            protocol: 'string',
            protocolVersion: 'string',
            sessionMode: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataOriginProbeLastResultActualConfiguration = GetMcpResponseBodyDataOriginProbeLastResultActualConfiguration;
class GetMcpResponseBodyDataOriginProbeLastResultError extends $dara.Model {
    static names() {
        return {
            code: 'code',
            message: 'message',
            retryable: 'retryable',
            source: 'source',
            stage: 'stage',
        };
    }
    static types() {
        return {
            code: 'string',
            message: 'string',
            retryable: 'boolean',
            source: 'string',
            stage: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataOriginProbeLastResultError = GetMcpResponseBodyDataOriginProbeLastResultError;
class GetMcpResponseBodyDataOriginProbeLastResult extends $dara.Model {
    static names() {
        return {
            actualConfiguration: 'actualConfiguration',
            error: 'error',
            probedAt: 'probedAt',
            stage: 'stage',
            status: 'status',
        };
    }
    static types() {
        return {
            actualConfiguration: GetMcpResponseBodyDataOriginProbeLastResultActualConfiguration,
            error: GetMcpResponseBodyDataOriginProbeLastResultError,
            probedAt: 'string',
            stage: 'string',
            status: 'string',
        };
    }
    validate() {
        if (this.actualConfiguration && typeof this.actualConfiguration.validate === 'function') {
            this.actualConfiguration.validate();
        }
        if (this.error && typeof this.error.validate === 'function') {
            this.error.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataOriginProbeLastResult = GetMcpResponseBodyDataOriginProbeLastResult;
class GetMcpResponseBodyDataOriginProbe extends $dara.Model {
    static names() {
        return {
            lastResult: 'lastResult',
        };
    }
    static types() {
        return {
            lastResult: GetMcpResponseBodyDataOriginProbeLastResult,
        };
    }
    validate() {
        if (this.lastResult && typeof this.lastResult.validate === 'function') {
            this.lastResult.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataOriginProbe = GetMcpResponseBodyDataOriginProbe;
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
class GetMcpResponseBodyDataVirtualConfigSourcesTools extends $dara.Model {
    static names() {
        return {
            expectedDigest: 'expectedDigest',
            name: 'name',
        };
    }
    static types() {
        return {
            expectedDigest: 'string',
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
exports.GetMcpResponseBodyDataVirtualConfigSourcesTools = GetMcpResponseBodyDataVirtualConfigSourcesTools;
class GetMcpResponseBodyDataVirtualConfigSources extends $dara.Model {
    static names() {
        return {
            mcpServerId: 'mcpServerId',
            tools: 'tools',
        };
    }
    static types() {
        return {
            mcpServerId: 'string',
            tools: { 'type': 'array', 'itemType': GetMcpResponseBodyDataVirtualConfigSourcesTools },
        };
    }
    validate() {
        if (Array.isArray(this.tools)) {
            $dara.Model.validateArray(this.tools);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataVirtualConfigSources = GetMcpResponseBodyDataVirtualConfigSources;
class GetMcpResponseBodyDataVirtualConfig extends $dara.Model {
    static names() {
        return {
            sources: 'sources',
        };
    }
    static types() {
        return {
            sources: { 'type': 'array', 'itemType': GetMcpResponseBodyDataVirtualConfigSources },
        };
    }
    validate() {
        if (Array.isArray(this.sources)) {
            $dara.Model.validateArray(this.sources);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetMcpResponseBodyDataVirtualConfig = GetMcpResponseBodyDataVirtualConfig;
class GetMcpResponseBodyData extends $dara.Model {
    static names() {
        return {
            addresses: 'addresses',
            appliedRevision: 'appliedRevision',
            appliedVirtualConfig: 'appliedVirtualConfig',
            auth: 'auth',
            backendMcpProtocol: 'backendMcpProtocol',
            createdAt: 'createdAt',
            customTags: 'customTags',
            deploymentConfig: 'deploymentConfig',
            description: 'description',
            endpoint: 'endpoint',
            functionName: 'functionName',
            lastValidation: 'lastValidation',
            lastValidationId: 'lastValidationId',
            marketSource: 'marketSource',
            mcpServerConfig: 'mcpServerConfig',
            mcpServerId: 'mcpServerId',
            name: 'name',
            officialTag: 'officialTag',
            operation: 'operation',
            operationTaskId: 'operationTaskId',
            originProbe: 'originProbe',
            originProtocolVersion: 'originProtocolVersion',
            permissionMode: 'permissionMode',
            protocol: 'protocol',
            resolvedImageUri: 'resolvedImageUri',
            revision: 'revision',
            sourceCount: 'sourceCount',
            status: 'status',
            statusReason: 'statusReason',
            statusReasonCode: 'statusReasonCode',
            swaggerConfig: 'swaggerConfig',
            template: 'template',
            toolCount: 'toolCount',
            type: 'type',
            updatedAt: 'updatedAt',
            url: 'url',
            usageActive: 'usageActive',
            virtualConfig: 'virtualConfig',
        };
    }
    static types() {
        return {
            addresses: { 'type': 'array', 'itemType': 'string' },
            appliedRevision: 'number',
            appliedVirtualConfig: GetMcpResponseBodyDataAppliedVirtualConfig,
            auth: GetMcpResponseBodyDataAuth,
            backendMcpProtocol: 'string',
            createdAt: 'string',
            customTags: { 'type': 'array', 'itemType': 'string' },
            deploymentConfig: GetMcpResponseBodyDataDeploymentConfig,
            description: 'string',
            endpoint: 'string',
            functionName: 'string',
            lastValidation: GetMcpResponseBodyDataLastValidation,
            lastValidationId: 'string',
            marketSource: GetMcpResponseBodyDataMarketSource,
            mcpServerConfig: 'string',
            mcpServerId: 'string',
            name: 'string',
            officialTag: 'string',
            operation: GetMcpResponseBodyDataOperation,
            operationTaskId: 'string',
            originProbe: GetMcpResponseBodyDataOriginProbe,
            originProtocolVersion: 'string',
            permissionMode: 'string',
            protocol: 'string',
            resolvedImageUri: 'string',
            revision: 'number',
            sourceCount: 'number',
            status: 'string',
            statusReason: 'string',
            statusReasonCode: 'string',
            swaggerConfig: 'string',
            template: GetMcpResponseBodyDataTemplate,
            toolCount: 'number',
            type: 'string',
            updatedAt: 'string',
            url: 'string',
            usageActive: 'boolean',
            virtualConfig: GetMcpResponseBodyDataVirtualConfig,
        };
    }
    validate() {
        if (Array.isArray(this.addresses)) {
            $dara.Model.validateArray(this.addresses);
        }
        if (this.appliedVirtualConfig && typeof this.appliedVirtualConfig.validate === 'function') {
            this.appliedVirtualConfig.validate();
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
        if (this.lastValidation && typeof this.lastValidation.validate === 'function') {
            this.lastValidation.validate();
        }
        if (this.marketSource && typeof this.marketSource.validate === 'function') {
            this.marketSource.validate();
        }
        if (this.operation && typeof this.operation.validate === 'function') {
            this.operation.validate();
        }
        if (this.originProbe && typeof this.originProbe.validate === 'function') {
            this.originProbe.validate();
        }
        if (this.template && typeof this.template.validate === 'function') {
            this.template.validate();
        }
        if (this.virtualConfig && typeof this.virtualConfig.validate === 'function') {
            this.virtualConfig.validate();
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