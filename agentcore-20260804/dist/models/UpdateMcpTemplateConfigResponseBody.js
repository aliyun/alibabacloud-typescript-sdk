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
exports.UpdateMcpTemplateConfigResponseBody = exports.UpdateMcpTemplateConfigResponseBodyData = exports.UpdateMcpTemplateConfigResponseBodyDataTemplate = exports.UpdateMcpTemplateConfigResponseBodyDataMarketSource = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfig = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigRuntimeConfiguration = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigProxyConfiguration = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigParameterTransformConfiguration = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigOssMountConfiguration = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigNetworkConfiguration = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigNasConfiguration = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigNasConfigurationMountPoints = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigMcpConfiguration = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigLogConfiguration = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigHookConfiguration = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigHookConfigurationHooks = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigContainerConfiguration = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigCodeConfiguration = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigAgentIdentityConfiguration = exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigAccessControl = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigAccessControl extends $dara.Model {
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigAccessControl = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigAccessControl;
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigAgentIdentityConfiguration = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigAgentIdentityConfiguration;
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigCodeConfiguration extends $dara.Model {
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigCodeConfiguration = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigCodeConfiguration;
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigContainerConfiguration extends $dara.Model {
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigContainerConfiguration = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigContainerConfiguration;
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigHookConfigurationHooks extends $dara.Model {
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigHookConfigurationHooks = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigHookConfigurationHooks;
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigHookConfiguration extends $dara.Model {
    static names() {
        return {
            hooks: 'hooks',
        };
    }
    static types() {
        return {
            hooks: { 'type': 'array', 'itemType': UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigHookConfigurationHooks },
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigHookConfiguration = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigHookConfiguration;
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigLogConfiguration extends $dara.Model {
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigLogConfiguration = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigLogConfiguration;
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigMcpConfiguration extends $dara.Model {
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigMcpConfiguration = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigMcpConfiguration;
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigNasConfigurationMountPoints = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigNasConfigurationMountPoints;
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigNasConfiguration extends $dara.Model {
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
            mountPoints: { 'type': 'array', 'itemType': UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigNasConfigurationMountPoints },
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigNasConfiguration = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigNasConfiguration;
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigNetworkConfiguration extends $dara.Model {
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigNetworkConfiguration = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigNetworkConfiguration;
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints;
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigOssMountConfiguration extends $dara.Model {
    static names() {
        return {
            mountPoints: 'mountPoints',
        };
    }
    static types() {
        return {
            mountPoints: { 'type': 'array', 'itemType': UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigOssMountConfigurationMountPoints },
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigOssMountConfiguration = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigOssMountConfiguration;
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigParameterTransformConfiguration extends $dara.Model {
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigParameterTransformConfiguration = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigParameterTransformConfiguration;
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigProxyConfiguration extends $dara.Model {
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigProxyConfiguration = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigProxyConfiguration;
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigRuntimeConfiguration extends $dara.Model {
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigRuntimeConfiguration = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigRuntimeConfiguration;
class UpdateMcpTemplateConfigResponseBodyDataDeploymentConfig extends $dara.Model {
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
            accessControl: UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigAccessControl,
            agentIdentityConfiguration: UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigAgentIdentityConfiguration,
            artifactType: 'string',
            codeConfiguration: UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigCodeConfiguration,
            containerConfiguration: UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigContainerConfiguration,
            hookConfiguration: UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigHookConfiguration,
            logConfiguration: UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigLogConfiguration,
            mcpConfiguration: UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigMcpConfiguration,
            nasConfiguration: UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigNasConfiguration,
            networkConfiguration: UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigNetworkConfiguration,
            ossMountConfiguration: UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigOssMountConfiguration,
            parameterTransformConfiguration: UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigParameterTransformConfiguration,
            proxyConfiguration: UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigProxyConfiguration,
            runtimeConfiguration: UpdateMcpTemplateConfigResponseBodyDataDeploymentConfigRuntimeConfiguration,
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
exports.UpdateMcpTemplateConfigResponseBodyDataDeploymentConfig = UpdateMcpTemplateConfigResponseBodyDataDeploymentConfig;
class UpdateMcpTemplateConfigResponseBodyDataMarketSource extends $dara.Model {
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
exports.UpdateMcpTemplateConfigResponseBodyDataMarketSource = UpdateMcpTemplateConfigResponseBodyDataMarketSource;
class UpdateMcpTemplateConfigResponseBodyDataTemplate extends $dara.Model {
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
exports.UpdateMcpTemplateConfigResponseBodyDataTemplate = UpdateMcpTemplateConfigResponseBodyDataTemplate;
class UpdateMcpTemplateConfigResponseBodyData extends $dara.Model {
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
            deploymentConfig: UpdateMcpTemplateConfigResponseBodyDataDeploymentConfig,
            description: 'string',
            endpoint: 'string',
            functionName: 'string',
            marketSource: UpdateMcpTemplateConfigResponseBodyDataMarketSource,
            mcpServerId: 'string',
            name: 'string',
            officialTag: 'string',
            protocol: 'string',
            status: 'string',
            statusReason: 'string',
            template: UpdateMcpTemplateConfigResponseBodyDataTemplate,
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
exports.UpdateMcpTemplateConfigResponseBodyData = UpdateMcpTemplateConfigResponseBodyData;
class UpdateMcpTemplateConfigResponseBody extends $dara.Model {
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
            data: UpdateMcpTemplateConfigResponseBodyData,
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
exports.UpdateMcpTemplateConfigResponseBody = UpdateMcpTemplateConfigResponseBody;
//# sourceMappingURL=UpdateMcpTemplateConfigResponseBody.js.map