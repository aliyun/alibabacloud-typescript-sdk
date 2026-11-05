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
exports.InstallMcpMarketItemResponseBody = exports.InstallMcpMarketItemResponseBodyData = exports.InstallMcpMarketItemResponseBodyDataTemplate = exports.InstallMcpMarketItemResponseBodyDataMarketSource = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfig = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigRuntimeConfiguration = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigProxyConfiguration = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigParameterTransformConfiguration = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigOssMountConfiguration = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigNetworkConfiguration = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigNasConfiguration = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigNasConfigurationMountPoints = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigMcpConfiguration = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigLogConfiguration = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigHookConfiguration = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigHookConfigurationHooks = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigContainerConfiguration = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigCodeConfiguration = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigAgentIdentityConfiguration = exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigAccessControl = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class InstallMcpMarketItemResponseBodyDataDeploymentConfigAccessControl extends $dara.Model {
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigAccessControl = InstallMcpMarketItemResponseBodyDataDeploymentConfigAccessControl;
class InstallMcpMarketItemResponseBodyDataDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigAgentIdentityConfiguration = InstallMcpMarketItemResponseBodyDataDeploymentConfigAgentIdentityConfiguration;
class InstallMcpMarketItemResponseBodyDataDeploymentConfigCodeConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigCodeConfiguration = InstallMcpMarketItemResponseBodyDataDeploymentConfigCodeConfiguration;
class InstallMcpMarketItemResponseBodyDataDeploymentConfigContainerConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigContainerConfiguration = InstallMcpMarketItemResponseBodyDataDeploymentConfigContainerConfiguration;
class InstallMcpMarketItemResponseBodyDataDeploymentConfigHookConfigurationHooks extends $dara.Model {
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigHookConfigurationHooks = InstallMcpMarketItemResponseBodyDataDeploymentConfigHookConfigurationHooks;
class InstallMcpMarketItemResponseBodyDataDeploymentConfigHookConfiguration extends $dara.Model {
    static names() {
        return {
            hooks: 'hooks',
        };
    }
    static types() {
        return {
            hooks: { 'type': 'array', 'itemType': InstallMcpMarketItemResponseBodyDataDeploymentConfigHookConfigurationHooks },
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigHookConfiguration = InstallMcpMarketItemResponseBodyDataDeploymentConfigHookConfiguration;
class InstallMcpMarketItemResponseBodyDataDeploymentConfigLogConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigLogConfiguration = InstallMcpMarketItemResponseBodyDataDeploymentConfigLogConfiguration;
class InstallMcpMarketItemResponseBodyDataDeploymentConfigMcpConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigMcpConfiguration = InstallMcpMarketItemResponseBodyDataDeploymentConfigMcpConfiguration;
class InstallMcpMarketItemResponseBodyDataDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigNasConfigurationMountPoints = InstallMcpMarketItemResponseBodyDataDeploymentConfigNasConfigurationMountPoints;
class InstallMcpMarketItemResponseBodyDataDeploymentConfigNasConfiguration extends $dara.Model {
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
            mountPoints: { 'type': 'array', 'itemType': InstallMcpMarketItemResponseBodyDataDeploymentConfigNasConfigurationMountPoints },
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigNasConfiguration = InstallMcpMarketItemResponseBodyDataDeploymentConfigNasConfiguration;
class InstallMcpMarketItemResponseBodyDataDeploymentConfigNetworkConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigNetworkConfiguration = InstallMcpMarketItemResponseBodyDataDeploymentConfigNetworkConfiguration;
class InstallMcpMarketItemResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints = InstallMcpMarketItemResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints;
class InstallMcpMarketItemResponseBodyDataDeploymentConfigOssMountConfiguration extends $dara.Model {
    static names() {
        return {
            mountPoints: 'mountPoints',
        };
    }
    static types() {
        return {
            mountPoints: { 'type': 'array', 'itemType': InstallMcpMarketItemResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints },
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigOssMountConfiguration = InstallMcpMarketItemResponseBodyDataDeploymentConfigOssMountConfiguration;
class InstallMcpMarketItemResponseBodyDataDeploymentConfigParameterTransformConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigParameterTransformConfiguration = InstallMcpMarketItemResponseBodyDataDeploymentConfigParameterTransformConfiguration;
class InstallMcpMarketItemResponseBodyDataDeploymentConfigProxyConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigProxyConfiguration = InstallMcpMarketItemResponseBodyDataDeploymentConfigProxyConfiguration;
class InstallMcpMarketItemResponseBodyDataDeploymentConfigRuntimeConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfigRuntimeConfiguration = InstallMcpMarketItemResponseBodyDataDeploymentConfigRuntimeConfiguration;
class InstallMcpMarketItemResponseBodyDataDeploymentConfig extends $dara.Model {
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
            accessControl: InstallMcpMarketItemResponseBodyDataDeploymentConfigAccessControl,
            agentIdentityConfiguration: InstallMcpMarketItemResponseBodyDataDeploymentConfigAgentIdentityConfiguration,
            artifactType: 'string',
            codeConfiguration: InstallMcpMarketItemResponseBodyDataDeploymentConfigCodeConfiguration,
            containerConfiguration: InstallMcpMarketItemResponseBodyDataDeploymentConfigContainerConfiguration,
            hookConfiguration: InstallMcpMarketItemResponseBodyDataDeploymentConfigHookConfiguration,
            logConfiguration: InstallMcpMarketItemResponseBodyDataDeploymentConfigLogConfiguration,
            mcpConfiguration: InstallMcpMarketItemResponseBodyDataDeploymentConfigMcpConfiguration,
            nasConfiguration: InstallMcpMarketItemResponseBodyDataDeploymentConfigNasConfiguration,
            networkConfiguration: InstallMcpMarketItemResponseBodyDataDeploymentConfigNetworkConfiguration,
            ossMountConfiguration: InstallMcpMarketItemResponseBodyDataDeploymentConfigOssMountConfiguration,
            parameterTransformConfiguration: InstallMcpMarketItemResponseBodyDataDeploymentConfigParameterTransformConfiguration,
            proxyConfiguration: InstallMcpMarketItemResponseBodyDataDeploymentConfigProxyConfiguration,
            runtimeConfiguration: InstallMcpMarketItemResponseBodyDataDeploymentConfigRuntimeConfiguration,
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
exports.InstallMcpMarketItemResponseBodyDataDeploymentConfig = InstallMcpMarketItemResponseBodyDataDeploymentConfig;
class InstallMcpMarketItemResponseBodyDataMarketSource extends $dara.Model {
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
exports.InstallMcpMarketItemResponseBodyDataMarketSource = InstallMcpMarketItemResponseBodyDataMarketSource;
class InstallMcpMarketItemResponseBodyDataTemplate extends $dara.Model {
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
exports.InstallMcpMarketItemResponseBodyDataTemplate = InstallMcpMarketItemResponseBodyDataTemplate;
class InstallMcpMarketItemResponseBodyData extends $dara.Model {
    static names() {
        return {
            addresses: 'addresses',
            customTags: 'customTags',
            deploymentConfig: 'deploymentConfig',
            description: 'description',
            endpoint: 'endpoint',
            functionName: 'functionName',
            marketSource: 'marketSource',
            mcpServerId: 'mcpServerId',
            name: 'name',
            officialTag: 'officialTag',
            protocol: 'protocol',
            status: 'status',
            statusReason: 'statusReason',
            template: 'template',
            type: 'type',
            usageActive: 'usageActive',
        };
    }
    static types() {
        return {
            addresses: { 'type': 'array', 'itemType': 'string' },
            customTags: { 'type': 'array', 'itemType': 'string' },
            deploymentConfig: InstallMcpMarketItemResponseBodyDataDeploymentConfig,
            description: 'string',
            endpoint: 'string',
            functionName: 'string',
            marketSource: InstallMcpMarketItemResponseBodyDataMarketSource,
            mcpServerId: 'string',
            name: 'string',
            officialTag: 'string',
            protocol: 'string',
            status: 'string',
            statusReason: 'string',
            template: InstallMcpMarketItemResponseBodyDataTemplate,
            type: 'string',
            usageActive: 'boolean',
        };
    }
    validate() {
        if (Array.isArray(this.addresses)) {
            $dara.Model.validateArray(this.addresses);
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
exports.InstallMcpMarketItemResponseBodyData = InstallMcpMarketItemResponseBodyData;
class InstallMcpMarketItemResponseBody extends $dara.Model {
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
            data: InstallMcpMarketItemResponseBodyData,
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
exports.InstallMcpMarketItemResponseBody = InstallMcpMarketItemResponseBody;
//# sourceMappingURL=InstallMcpMarketItemResponseBody.js.map