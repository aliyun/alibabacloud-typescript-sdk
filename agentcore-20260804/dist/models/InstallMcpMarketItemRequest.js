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
exports.InstallMcpMarketItemRequest = exports.InstallMcpMarketItemRequestBody = exports.InstallMcpMarketItemRequestBodyDeploymentConfig = exports.InstallMcpMarketItemRequestBodyDeploymentConfigRuntimeConfiguration = exports.InstallMcpMarketItemRequestBodyDeploymentConfigProxyConfiguration = exports.InstallMcpMarketItemRequestBodyDeploymentConfigParameterTransformConfiguration = exports.InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfiguration = exports.InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfigurationMountPoints = exports.InstallMcpMarketItemRequestBodyDeploymentConfigNetworkConfiguration = exports.InstallMcpMarketItemRequestBodyDeploymentConfigNasConfiguration = exports.InstallMcpMarketItemRequestBodyDeploymentConfigNasConfigurationMountPoints = exports.InstallMcpMarketItemRequestBodyDeploymentConfigMcpConfiguration = exports.InstallMcpMarketItemRequestBodyDeploymentConfigLogConfiguration = exports.InstallMcpMarketItemRequestBodyDeploymentConfigHookConfiguration = exports.InstallMcpMarketItemRequestBodyDeploymentConfigHookConfigurationHooks = exports.InstallMcpMarketItemRequestBodyDeploymentConfigContainerConfiguration = exports.InstallMcpMarketItemRequestBodyDeploymentConfigCodeConfiguration = exports.InstallMcpMarketItemRequestBodyDeploymentConfigAgentIdentityConfiguration = exports.InstallMcpMarketItemRequestBodyDeploymentConfigAccessControl = exports.InstallMcpMarketItemRequestBodyAuth = exports.InstallMcpMarketItemRequestBodyAuthHttpToMcp = exports.InstallMcpMarketItemRequestBodyAuthDirectProxy = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class InstallMcpMarketItemRequestBodyAuthDirectProxy extends $dara.Model {
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
exports.InstallMcpMarketItemRequestBodyAuthDirectProxy = InstallMcpMarketItemRequestBodyAuthDirectProxy;
class InstallMcpMarketItemRequestBodyAuthHttpToMcp extends $dara.Model {
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
exports.InstallMcpMarketItemRequestBodyAuthHttpToMcp = InstallMcpMarketItemRequestBodyAuthHttpToMcp;
class InstallMcpMarketItemRequestBodyAuth extends $dara.Model {
    static names() {
        return {
            directProxy: 'directProxy',
            enabled: 'enabled',
            httpToMcp: 'httpToMcp',
        };
    }
    static types() {
        return {
            directProxy: InstallMcpMarketItemRequestBodyAuthDirectProxy,
            enabled: 'boolean',
            httpToMcp: { 'type': 'array', 'itemType': InstallMcpMarketItemRequestBodyAuthHttpToMcp },
        };
    }
    validate() {
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
exports.InstallMcpMarketItemRequestBodyAuth = InstallMcpMarketItemRequestBodyAuth;
class InstallMcpMarketItemRequestBodyDeploymentConfigAccessControl extends $dara.Model {
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfigAccessControl = InstallMcpMarketItemRequestBodyDeploymentConfigAccessControl;
class InstallMcpMarketItemRequestBodyDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfigAgentIdentityConfiguration = InstallMcpMarketItemRequestBodyDeploymentConfigAgentIdentityConfiguration;
class InstallMcpMarketItemRequestBodyDeploymentConfigCodeConfiguration extends $dara.Model {
    static names() {
        return {
            codePackageToken: 'codePackageToken',
            codePackageUrl: 'codePackageUrl',
            command: 'command',
            language: 'language',
        };
    }
    static types() {
        return {
            codePackageToken: 'string',
            codePackageUrl: 'string',
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfigCodeConfiguration = InstallMcpMarketItemRequestBodyDeploymentConfigCodeConfiguration;
class InstallMcpMarketItemRequestBodyDeploymentConfigContainerConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfigContainerConfiguration = InstallMcpMarketItemRequestBodyDeploymentConfigContainerConfiguration;
class InstallMcpMarketItemRequestBodyDeploymentConfigHookConfigurationHooks extends $dara.Model {
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfigHookConfigurationHooks = InstallMcpMarketItemRequestBodyDeploymentConfigHookConfigurationHooks;
class InstallMcpMarketItemRequestBodyDeploymentConfigHookConfiguration extends $dara.Model {
    static names() {
        return {
            hooks: 'hooks',
        };
    }
    static types() {
        return {
            hooks: { 'type': 'array', 'itemType': InstallMcpMarketItemRequestBodyDeploymentConfigHookConfigurationHooks },
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfigHookConfiguration = InstallMcpMarketItemRequestBodyDeploymentConfigHookConfiguration;
class InstallMcpMarketItemRequestBodyDeploymentConfigLogConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfigLogConfiguration = InstallMcpMarketItemRequestBodyDeploymentConfigLogConfiguration;
class InstallMcpMarketItemRequestBodyDeploymentConfigMcpConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfigMcpConfiguration = InstallMcpMarketItemRequestBodyDeploymentConfigMcpConfiguration;
class InstallMcpMarketItemRequestBodyDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfigNasConfigurationMountPoints = InstallMcpMarketItemRequestBodyDeploymentConfigNasConfigurationMountPoints;
class InstallMcpMarketItemRequestBodyDeploymentConfigNasConfiguration extends $dara.Model {
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
            mountPoints: { 'type': 'array', 'itemType': InstallMcpMarketItemRequestBodyDeploymentConfigNasConfigurationMountPoints },
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfigNasConfiguration = InstallMcpMarketItemRequestBodyDeploymentConfigNasConfiguration;
class InstallMcpMarketItemRequestBodyDeploymentConfigNetworkConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfigNetworkConfiguration = InstallMcpMarketItemRequestBodyDeploymentConfigNetworkConfiguration;
class InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfigurationMountPoints = InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfigurationMountPoints;
class InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfiguration extends $dara.Model {
    static names() {
        return {
            mountPoints: 'mountPoints',
        };
    }
    static types() {
        return {
            mountPoints: { 'type': 'array', 'itemType': InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfigurationMountPoints },
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfiguration = InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfiguration;
class InstallMcpMarketItemRequestBodyDeploymentConfigParameterTransformConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfigParameterTransformConfiguration = InstallMcpMarketItemRequestBodyDeploymentConfigParameterTransformConfiguration;
class InstallMcpMarketItemRequestBodyDeploymentConfigProxyConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfigProxyConfiguration = InstallMcpMarketItemRequestBodyDeploymentConfigProxyConfiguration;
class InstallMcpMarketItemRequestBodyDeploymentConfigRuntimeConfiguration extends $dara.Model {
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfigRuntimeConfiguration = InstallMcpMarketItemRequestBodyDeploymentConfigRuntimeConfiguration;
class InstallMcpMarketItemRequestBodyDeploymentConfig extends $dara.Model {
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
            accessControl: InstallMcpMarketItemRequestBodyDeploymentConfigAccessControl,
            agentIdentityConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigAgentIdentityConfiguration,
            artifactType: 'string',
            codeConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigCodeConfiguration,
            containerConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigContainerConfiguration,
            hookConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigHookConfiguration,
            logConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigLogConfiguration,
            mcpConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigMcpConfiguration,
            nasConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigNasConfiguration,
            networkConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigNetworkConfiguration,
            ossMountConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigOssMountConfiguration,
            parameterTransformConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigParameterTransformConfiguration,
            proxyConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigProxyConfiguration,
            runtimeConfiguration: InstallMcpMarketItemRequestBodyDeploymentConfigRuntimeConfiguration,
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
exports.InstallMcpMarketItemRequestBodyDeploymentConfig = InstallMcpMarketItemRequestBodyDeploymentConfig;
class InstallMcpMarketItemRequestBody extends $dara.Model {
    static names() {
        return {
            addresses: 'addresses',
            auth: 'auth',
            customTags: 'customTags',
            deploymentConfig: 'deploymentConfig',
            description: 'description',
            name: 'name',
            protocol: 'protocol',
            swaggerConfig: 'swaggerConfig',
            type: 'type',
        };
    }
    static types() {
        return {
            addresses: { 'type': 'array', 'itemType': 'string' },
            auth: InstallMcpMarketItemRequestBodyAuth,
            customTags: { 'type': 'array', 'itemType': 'string' },
            deploymentConfig: InstallMcpMarketItemRequestBodyDeploymentConfig,
            description: 'string',
            name: 'string',
            protocol: 'string',
            swaggerConfig: 'string',
            type: 'string',
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
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.InstallMcpMarketItemRequestBody = InstallMcpMarketItemRequestBody;
class InstallMcpMarketItemRequest extends $dara.Model {
    static names() {
        return {
            body: 'body',
            clientToken: 'clientToken',
            templateVersion: 'templateVersion',
        };
    }
    static types() {
        return {
            body: InstallMcpMarketItemRequestBody,
            clientToken: 'string',
            templateVersion: 'string',
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
exports.InstallMcpMarketItemRequest = InstallMcpMarketItemRequest;
//# sourceMappingURL=InstallMcpMarketItemRequest.js.map