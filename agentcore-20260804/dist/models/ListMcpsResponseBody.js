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
exports.ListMcpsResponseBody = exports.ListMcpsResponseBodyItems = exports.ListMcpsResponseBodyItemsMarketSource = exports.ListMcpsResponseBodyItemsDeploymentConfig = exports.ListMcpsResponseBodyItemsDeploymentConfigRuntimeConfiguration = exports.ListMcpsResponseBodyItemsDeploymentConfigProxyConfiguration = exports.ListMcpsResponseBodyItemsDeploymentConfigParameterTransformConfiguration = exports.ListMcpsResponseBodyItemsDeploymentConfigOssMountConfiguration = exports.ListMcpsResponseBodyItemsDeploymentConfigOssMountConfigurationMountPoints = exports.ListMcpsResponseBodyItemsDeploymentConfigNetworkConfiguration = exports.ListMcpsResponseBodyItemsDeploymentConfigNasConfiguration = exports.ListMcpsResponseBodyItemsDeploymentConfigNasConfigurationMountPoints = exports.ListMcpsResponseBodyItemsDeploymentConfigMcpConfiguration = exports.ListMcpsResponseBodyItemsDeploymentConfigLogConfiguration = exports.ListMcpsResponseBodyItemsDeploymentConfigHookConfiguration = exports.ListMcpsResponseBodyItemsDeploymentConfigHookConfigurationHooks = exports.ListMcpsResponseBodyItemsDeploymentConfigContainerConfiguration = exports.ListMcpsResponseBodyItemsDeploymentConfigCodeConfiguration = exports.ListMcpsResponseBodyItemsDeploymentConfigAgentIdentityConfiguration = exports.ListMcpsResponseBodyItemsDeploymentConfigAccessControl = exports.ListMcpsResponseBodyItemsAuth = exports.ListMcpsResponseBodyItemsAuthHttpToMcp = exports.ListMcpsResponseBodyItemsAuthDirectProxy = exports.ListMcpsResponseBodyItemsAuthCodePackage = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class ListMcpsResponseBodyItemsAuthCodePackage extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsAuthCodePackage = ListMcpsResponseBodyItemsAuthCodePackage;
class ListMcpsResponseBodyItemsAuthDirectProxy extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsAuthDirectProxy = ListMcpsResponseBodyItemsAuthDirectProxy;
class ListMcpsResponseBodyItemsAuthHttpToMcp extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsAuthHttpToMcp = ListMcpsResponseBodyItemsAuthHttpToMcp;
class ListMcpsResponseBodyItemsAuth extends $dara.Model {
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
            codePackage: ListMcpsResponseBodyItemsAuthCodePackage,
            directProxy: ListMcpsResponseBodyItemsAuthDirectProxy,
            enabled: 'boolean',
            httpToMcp: { 'type': 'array', 'itemType': ListMcpsResponseBodyItemsAuthHttpToMcp },
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
exports.ListMcpsResponseBodyItemsAuth = ListMcpsResponseBodyItemsAuth;
class ListMcpsResponseBodyItemsDeploymentConfigAccessControl extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsDeploymentConfigAccessControl = ListMcpsResponseBodyItemsDeploymentConfigAccessControl;
class ListMcpsResponseBodyItemsDeploymentConfigAgentIdentityConfiguration extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsDeploymentConfigAgentIdentityConfiguration = ListMcpsResponseBodyItemsDeploymentConfigAgentIdentityConfiguration;
class ListMcpsResponseBodyItemsDeploymentConfigCodeConfiguration extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsDeploymentConfigCodeConfiguration = ListMcpsResponseBodyItemsDeploymentConfigCodeConfiguration;
class ListMcpsResponseBodyItemsDeploymentConfigContainerConfiguration extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsDeploymentConfigContainerConfiguration = ListMcpsResponseBodyItemsDeploymentConfigContainerConfiguration;
class ListMcpsResponseBodyItemsDeploymentConfigHookConfigurationHooks extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsDeploymentConfigHookConfigurationHooks = ListMcpsResponseBodyItemsDeploymentConfigHookConfigurationHooks;
class ListMcpsResponseBodyItemsDeploymentConfigHookConfiguration extends $dara.Model {
    static names() {
        return {
            hooks: 'hooks',
        };
    }
    static types() {
        return {
            hooks: { 'type': 'array', 'itemType': ListMcpsResponseBodyItemsDeploymentConfigHookConfigurationHooks },
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
exports.ListMcpsResponseBodyItemsDeploymentConfigHookConfiguration = ListMcpsResponseBodyItemsDeploymentConfigHookConfiguration;
class ListMcpsResponseBodyItemsDeploymentConfigLogConfiguration extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsDeploymentConfigLogConfiguration = ListMcpsResponseBodyItemsDeploymentConfigLogConfiguration;
class ListMcpsResponseBodyItemsDeploymentConfigMcpConfiguration extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsDeploymentConfigMcpConfiguration = ListMcpsResponseBodyItemsDeploymentConfigMcpConfiguration;
class ListMcpsResponseBodyItemsDeploymentConfigNasConfigurationMountPoints extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsDeploymentConfigNasConfigurationMountPoints = ListMcpsResponseBodyItemsDeploymentConfigNasConfigurationMountPoints;
class ListMcpsResponseBodyItemsDeploymentConfigNasConfiguration extends $dara.Model {
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
            mountPoints: { 'type': 'array', 'itemType': ListMcpsResponseBodyItemsDeploymentConfigNasConfigurationMountPoints },
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
exports.ListMcpsResponseBodyItemsDeploymentConfigNasConfiguration = ListMcpsResponseBodyItemsDeploymentConfigNasConfiguration;
class ListMcpsResponseBodyItemsDeploymentConfigNetworkConfiguration extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsDeploymentConfigNetworkConfiguration = ListMcpsResponseBodyItemsDeploymentConfigNetworkConfiguration;
class ListMcpsResponseBodyItemsDeploymentConfigOssMountConfigurationMountPoints extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsDeploymentConfigOssMountConfigurationMountPoints = ListMcpsResponseBodyItemsDeploymentConfigOssMountConfigurationMountPoints;
class ListMcpsResponseBodyItemsDeploymentConfigOssMountConfiguration extends $dara.Model {
    static names() {
        return {
            mountPoints: 'mountPoints',
        };
    }
    static types() {
        return {
            mountPoints: { 'type': 'array', 'itemType': ListMcpsResponseBodyItemsDeploymentConfigOssMountConfigurationMountPoints },
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
exports.ListMcpsResponseBodyItemsDeploymentConfigOssMountConfiguration = ListMcpsResponseBodyItemsDeploymentConfigOssMountConfiguration;
class ListMcpsResponseBodyItemsDeploymentConfigParameterTransformConfiguration extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsDeploymentConfigParameterTransformConfiguration = ListMcpsResponseBodyItemsDeploymentConfigParameterTransformConfiguration;
class ListMcpsResponseBodyItemsDeploymentConfigProxyConfiguration extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsDeploymentConfigProxyConfiguration = ListMcpsResponseBodyItemsDeploymentConfigProxyConfiguration;
class ListMcpsResponseBodyItemsDeploymentConfigRuntimeConfiguration extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsDeploymentConfigRuntimeConfiguration = ListMcpsResponseBodyItemsDeploymentConfigRuntimeConfiguration;
class ListMcpsResponseBodyItemsDeploymentConfig extends $dara.Model {
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
            accessControl: ListMcpsResponseBodyItemsDeploymentConfigAccessControl,
            agentIdentityConfiguration: ListMcpsResponseBodyItemsDeploymentConfigAgentIdentityConfiguration,
            artifactType: 'string',
            codeConfiguration: ListMcpsResponseBodyItemsDeploymentConfigCodeConfiguration,
            containerConfiguration: ListMcpsResponseBodyItemsDeploymentConfigContainerConfiguration,
            hookConfiguration: ListMcpsResponseBodyItemsDeploymentConfigHookConfiguration,
            logConfiguration: ListMcpsResponseBodyItemsDeploymentConfigLogConfiguration,
            mcpConfiguration: ListMcpsResponseBodyItemsDeploymentConfigMcpConfiguration,
            nasConfiguration: ListMcpsResponseBodyItemsDeploymentConfigNasConfiguration,
            networkConfiguration: ListMcpsResponseBodyItemsDeploymentConfigNetworkConfiguration,
            ossMountConfiguration: ListMcpsResponseBodyItemsDeploymentConfigOssMountConfiguration,
            parameterTransformConfiguration: ListMcpsResponseBodyItemsDeploymentConfigParameterTransformConfiguration,
            proxyConfiguration: ListMcpsResponseBodyItemsDeploymentConfigProxyConfiguration,
            runtimeConfiguration: ListMcpsResponseBodyItemsDeploymentConfigRuntimeConfiguration,
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
exports.ListMcpsResponseBodyItemsDeploymentConfig = ListMcpsResponseBodyItemsDeploymentConfig;
class ListMcpsResponseBodyItemsMarketSource extends $dara.Model {
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
exports.ListMcpsResponseBodyItemsMarketSource = ListMcpsResponseBodyItemsMarketSource;
class ListMcpsResponseBodyItems extends $dara.Model {
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
            mcpServerId: 'mcpServerId',
            name: 'name',
            officialTag: 'officialTag',
            permissionMode: 'permissionMode',
            protocol: 'protocol',
            status: 'status',
            statusReason: 'statusReason',
            swaggerConfig: 'swaggerConfig',
            type: 'type',
            updatedAt: 'updatedAt',
            usageActive: 'usageActive',
        };
    }
    static types() {
        return {
            addresses: { 'type': 'array', 'itemType': 'string' },
            auth: ListMcpsResponseBodyItemsAuth,
            createdAt: 'string',
            customTags: { 'type': 'array', 'itemType': 'string' },
            deploymentConfig: ListMcpsResponseBodyItemsDeploymentConfig,
            description: 'string',
            endpoint: 'string',
            functionName: 'string',
            marketSource: ListMcpsResponseBodyItemsMarketSource,
            mcpServerId: 'string',
            name: 'string',
            officialTag: 'string',
            permissionMode: 'string',
            protocol: 'string',
            status: 'string',
            statusReason: 'string',
            swaggerConfig: 'string',
            type: 'string',
            updatedAt: 'string',
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
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.ListMcpsResponseBodyItems = ListMcpsResponseBodyItems;
class ListMcpsResponseBody extends $dara.Model {
    static names() {
        return {
            code: 'code',
            httpStatusCode: 'httpStatusCode',
            items: 'items',
            maxResults: 'maxResults',
            message: 'message',
            nextToken: 'nextToken',
            requestId: 'requestId',
            success: 'success',
            totalCount: 'totalCount',
        };
    }
    static types() {
        return {
            code: 'string',
            httpStatusCode: 'number',
            items: { 'type': 'array', 'itemType': ListMcpsResponseBodyItems },
            maxResults: 'number',
            message: 'string',
            nextToken: 'string',
            requestId: 'string',
            success: 'boolean',
            totalCount: 'number',
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
exports.ListMcpsResponseBody = ListMcpsResponseBody;
//# sourceMappingURL=ListMcpsResponseBody.js.map