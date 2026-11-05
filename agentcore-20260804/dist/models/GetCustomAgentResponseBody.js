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
exports.GetCustomAgentResponseBody = exports.GetCustomAgentResponseBodyData = exports.GetCustomAgentResponseBodyDataRuntime = exports.GetCustomAgentResponseBodyDataRuntimeSessionPolicy = exports.GetCustomAgentResponseBodyDataRuntimeHpa = exports.GetCustomAgentResponseBodyDataRuntimeCompute = exports.GetCustomAgentResponseBodyDataProtocol = exports.GetCustomAgentResponseBodyDataProtocolPaths = exports.GetCustomAgentResponseBodyDataOssMounts = exports.GetCustomAgentResponseBodyDataObservability = exports.GetCustomAgentResponseBodyDataNetwork = exports.GetCustomAgentResponseBodyDataNetworkAccessVpc = exports.GetCustomAgentResponseBodyDataNetworkAccessInternet = exports.GetCustomAgentResponseBodyDataLogging = exports.GetCustomAgentResponseBodyDataLoggingSls = exports.GetCustomAgentResponseBodyDataLatestExecutionError = exports.GetCustomAgentResponseBodyDataImagePreparation = exports.GetCustomAgentResponseBodyDataHealthCheck = exports.GetCustomAgentResponseBodyDataEnvironment = exports.GetCustomAgentResponseBodyDataEnvironmentVariables = exports.GetCustomAgentResponseBodyDataCustomImage = exports.GetCustomAgentResponseBodyDataCustomImagePullNetwork = exports.GetCustomAgentResponseBodyDataCurrentImage = exports.GetCustomAgentResponseBodyDataCurrentImagePullNetwork = exports.GetCustomAgentResponseBodyDataCodePackageInfo = exports.GetCustomAgentResponseBodyDataArtifact = exports.GetCustomAgentResponseBodyDataArtifactContainer = exports.GetCustomAgentResponseBodyDataArtifactCode = exports.GetCustomAgentResponseBodyDataAgenticFsMounts = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class GetCustomAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
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
exports.GetCustomAgentResponseBodyDataAgenticFsMounts = GetCustomAgentResponseBodyDataAgenticFsMounts;
class GetCustomAgentResponseBodyDataArtifactCode extends $dara.Model {
    static names() {
        return {
            entrypoint: 'entrypoint',
            languageRuntime: 'languageRuntime',
            sourceUri: 'sourceUri',
        };
    }
    static types() {
        return {
            entrypoint: 'string',
            languageRuntime: 'string',
            sourceUri: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetCustomAgentResponseBodyDataArtifactCode = GetCustomAgentResponseBodyDataArtifactCode;
class GetCustomAgentResponseBodyDataArtifactContainer extends $dara.Model {
    static names() {
        return {
            entrypoint: 'entrypoint',
            instanceId: 'instanceId',
            namespace: 'namespace',
            repo: 'repo',
            tag: 'tag',
            type: 'type',
        };
    }
    static types() {
        return {
            entrypoint: 'string',
            instanceId: 'string',
            namespace: 'string',
            repo: 'string',
            tag: 'string',
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
exports.GetCustomAgentResponseBodyDataArtifactContainer = GetCustomAgentResponseBodyDataArtifactContainer;
class GetCustomAgentResponseBodyDataArtifact extends $dara.Model {
    static names() {
        return {
            code: 'code',
            container: 'container',
            port: 'port',
        };
    }
    static types() {
        return {
            code: GetCustomAgentResponseBodyDataArtifactCode,
            container: GetCustomAgentResponseBodyDataArtifactContainer,
            port: 'number',
        };
    }
    validate() {
        if (this.code && typeof this.code.validate === 'function') {
            this.code.validate();
        }
        if (this.container && typeof this.container.validate === 'function') {
            this.container.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetCustomAgentResponseBodyDataArtifact = GetCustomAgentResponseBodyDataArtifact;
class GetCustomAgentResponseBodyDataCodePackageInfo extends $dara.Model {
    static names() {
        return {
            crc64: 'crc64',
            etag: 'etag',
            fileName: 'fileName',
            fileSize: 'fileSize',
            format: 'format',
        };
    }
    static types() {
        return {
            crc64: 'string',
            etag: 'string',
            fileName: 'string',
            fileSize: 'number',
            format: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetCustomAgentResponseBodyDataCodePackageInfo = GetCustomAgentResponseBodyDataCodePackageInfo;
class GetCustomAgentResponseBodyDataCurrentImagePullNetwork extends $dara.Model {
    static names() {
        return {
            securityGroupId: 'securityGroupId',
            type: 'type',
            vSwitchId: 'vSwitchId',
            vpcId: 'vpcId',
        };
    }
    static types() {
        return {
            securityGroupId: 'string',
            type: 'string',
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
exports.GetCustomAgentResponseBodyDataCurrentImagePullNetwork = GetCustomAgentResponseBodyDataCurrentImagePullNetwork;
class GetCustomAgentResponseBodyDataCurrentImage extends $dara.Model {
    static names() {
        return {
            image: 'image',
            instanceId: 'instanceId',
            namespace: 'namespace',
            pullNetwork: 'pullNetwork',
            repo: 'repo',
            skipTlsVerify: 'skipTlsVerify',
            sourceType: 'sourceType',
            tag: 'tag',
            username: 'username',
        };
    }
    static types() {
        return {
            image: 'string',
            instanceId: 'string',
            namespace: 'string',
            pullNetwork: GetCustomAgentResponseBodyDataCurrentImagePullNetwork,
            repo: 'string',
            skipTlsVerify: 'boolean',
            sourceType: 'string',
            tag: 'string',
            username: 'string',
        };
    }
    validate() {
        if (this.pullNetwork && typeof this.pullNetwork.validate === 'function') {
            this.pullNetwork.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetCustomAgentResponseBodyDataCurrentImage = GetCustomAgentResponseBodyDataCurrentImage;
class GetCustomAgentResponseBodyDataCustomImagePullNetwork extends $dara.Model {
    static names() {
        return {
            securityGroupId: 'securityGroupId',
            type: 'type',
            vSwitchId: 'vSwitchId',
            vpcId: 'vpcId',
        };
    }
    static types() {
        return {
            securityGroupId: 'string',
            type: 'string',
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
exports.GetCustomAgentResponseBodyDataCustomImagePullNetwork = GetCustomAgentResponseBodyDataCustomImagePullNetwork;
class GetCustomAgentResponseBodyDataCustomImage extends $dara.Model {
    static names() {
        return {
            image: 'image',
            pullNetwork: 'pullNetwork',
            skipTlsVerify: 'skipTlsVerify',
            username: 'username',
        };
    }
    static types() {
        return {
            image: 'string',
            pullNetwork: GetCustomAgentResponseBodyDataCustomImagePullNetwork,
            skipTlsVerify: 'boolean',
            username: 'string',
        };
    }
    validate() {
        if (this.pullNetwork && typeof this.pullNetwork.validate === 'function') {
            this.pullNetwork.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetCustomAgentResponseBodyDataCustomImage = GetCustomAgentResponseBodyDataCustomImage;
class GetCustomAgentResponseBodyDataEnvironmentVariables extends $dara.Model {
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
exports.GetCustomAgentResponseBodyDataEnvironmentVariables = GetCustomAgentResponseBodyDataEnvironmentVariables;
class GetCustomAgentResponseBodyDataEnvironment extends $dara.Model {
    static names() {
        return {
            variables: 'variables',
        };
    }
    static types() {
        return {
            variables: { 'type': 'array', 'itemType': GetCustomAgentResponseBodyDataEnvironmentVariables },
        };
    }
    validate() {
        if (Array.isArray(this.variables)) {
            $dara.Model.validateArray(this.variables);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetCustomAgentResponseBodyDataEnvironment = GetCustomAgentResponseBodyDataEnvironment;
class GetCustomAgentResponseBodyDataHealthCheck extends $dara.Model {
    static names() {
        return {
            healthyThreshold: 'healthyThreshold',
            intervalSeconds: 'intervalSeconds',
            path: 'path',
            port: 'port',
            timeoutSeconds: 'timeoutSeconds',
            unhealthyThreshold: 'unhealthyThreshold',
        };
    }
    static types() {
        return {
            healthyThreshold: 'number',
            intervalSeconds: 'number',
            path: 'string',
            port: 'number',
            timeoutSeconds: 'number',
            unhealthyThreshold: 'number',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetCustomAgentResponseBodyDataHealthCheck = GetCustomAgentResponseBodyDataHealthCheck;
class GetCustomAgentResponseBodyDataImagePreparation extends $dara.Model {
    static names() {
        return {
            phase: 'phase',
            preparationId: 'preparationId',
        };
    }
    static types() {
        return {
            phase: 'string',
            preparationId: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetCustomAgentResponseBodyDataImagePreparation = GetCustomAgentResponseBodyDataImagePreparation;
class GetCustomAgentResponseBodyDataLatestExecutionError extends $dara.Model {
    static names() {
        return {
            code: 'code',
            message: 'message',
            retryable: 'retryable',
        };
    }
    static types() {
        return {
            code: 'string',
            message: 'string',
            retryable: 'boolean',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetCustomAgentResponseBodyDataLatestExecutionError = GetCustomAgentResponseBodyDataLatestExecutionError;
class GetCustomAgentResponseBodyDataLoggingSls extends $dara.Model {
    static names() {
        return {
            logstore: 'logstore',
            project: 'project',
        };
    }
    static types() {
        return {
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
exports.GetCustomAgentResponseBodyDataLoggingSls = GetCustomAgentResponseBodyDataLoggingSls;
class GetCustomAgentResponseBodyDataLogging extends $dara.Model {
    static names() {
        return {
            sls: 'sls',
        };
    }
    static types() {
        return {
            sls: GetCustomAgentResponseBodyDataLoggingSls,
        };
    }
    validate() {
        if (this.sls && typeof this.sls.validate === 'function') {
            this.sls.validate();
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetCustomAgentResponseBodyDataLogging = GetCustomAgentResponseBodyDataLogging;
class GetCustomAgentResponseBodyDataNetworkAccessInternet extends $dara.Model {
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
exports.GetCustomAgentResponseBodyDataNetworkAccessInternet = GetCustomAgentResponseBodyDataNetworkAccessInternet;
class GetCustomAgentResponseBodyDataNetworkAccessVpc extends $dara.Model {
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
exports.GetCustomAgentResponseBodyDataNetworkAccessVpc = GetCustomAgentResponseBodyDataNetworkAccessVpc;
class GetCustomAgentResponseBodyDataNetwork extends $dara.Model {
    static names() {
        return {
            accessInternet: 'accessInternet',
            accessVpc: 'accessVpc',
        };
    }
    static types() {
        return {
            accessInternet: GetCustomAgentResponseBodyDataNetworkAccessInternet,
            accessVpc: GetCustomAgentResponseBodyDataNetworkAccessVpc,
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
exports.GetCustomAgentResponseBodyDataNetwork = GetCustomAgentResponseBodyDataNetwork;
class GetCustomAgentResponseBodyDataObservability extends $dara.Model {
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
exports.GetCustomAgentResponseBodyDataObservability = GetCustomAgentResponseBodyDataObservability;
class GetCustomAgentResponseBodyDataOssMounts extends $dara.Model {
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
exports.GetCustomAgentResponseBodyDataOssMounts = GetCustomAgentResponseBodyDataOssMounts;
class GetCustomAgentResponseBodyDataProtocolPaths extends $dara.Model {
    static names() {
        return {
            description: 'description',
            name: 'name',
        };
    }
    static types() {
        return {
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
exports.GetCustomAgentResponseBodyDataProtocolPaths = GetCustomAgentResponseBodyDataProtocolPaths;
class GetCustomAgentResponseBodyDataProtocol extends $dara.Model {
    static names() {
        return {
            headers: 'headers',
            paths: 'paths',
            type: 'type',
        };
    }
    static types() {
        return {
            headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
            paths: { 'type': 'array', 'itemType': GetCustomAgentResponseBodyDataProtocolPaths },
            type: 'string',
        };
    }
    validate() {
        if (this.headers) {
            $dara.Model.validateMap(this.headers);
        }
        if (Array.isArray(this.paths)) {
            $dara.Model.validateArray(this.paths);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetCustomAgentResponseBodyDataProtocol = GetCustomAgentResponseBodyDataProtocol;
class GetCustomAgentResponseBodyDataRuntimeCompute extends $dara.Model {
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
exports.GetCustomAgentResponseBodyDataRuntimeCompute = GetCustomAgentResponseBodyDataRuntimeCompute;
class GetCustomAgentResponseBodyDataRuntimeHpa extends $dara.Model {
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
exports.GetCustomAgentResponseBodyDataRuntimeHpa = GetCustomAgentResponseBodyDataRuntimeHpa;
class GetCustomAgentResponseBodyDataRuntimeSessionPolicy extends $dara.Model {
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
exports.GetCustomAgentResponseBodyDataRuntimeSessionPolicy = GetCustomAgentResponseBodyDataRuntimeSessionPolicy;
class GetCustomAgentResponseBodyDataRuntime extends $dara.Model {
    static names() {
        return {
            compute: 'compute',
            hpa: 'hpa',
            sessionPolicy: 'sessionPolicy',
        };
    }
    static types() {
        return {
            compute: GetCustomAgentResponseBodyDataRuntimeCompute,
            hpa: GetCustomAgentResponseBodyDataRuntimeHpa,
            sessionPolicy: GetCustomAgentResponseBodyDataRuntimeSessionPolicy,
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
exports.GetCustomAgentResponseBodyDataRuntime = GetCustomAgentResponseBodyDataRuntime;
class GetCustomAgentResponseBodyData extends $dara.Model {
    static names() {
        return {
            accessMode: 'accessMode',
            accessScope: 'accessScope',
            agentId: 'agentId',
            agenticFsMounts: 'agenticFsMounts',
            artifact: 'artifact',
            codePackageInfo: 'codePackageInfo',
            createMode: 'createMode',
            createdAt: 'createdAt',
            currentImage: 'currentImage',
            customImage: 'customImage',
            deployType: 'deployType',
            description: 'description',
            effectiveSpecVersion: 'effectiveSpecVersion',
            environment: 'environment',
            healthCheck: 'healthCheck',
            imageCacheId: 'imageCacheId',
            imagePreparation: 'imagePreparation',
            latestExecutionError: 'latestExecutionError',
            latestSpecVersion: 'latestSpecVersion',
            latestVersionStatus: 'latestVersionStatus',
            logging: 'logging',
            name: 'name',
            network: 'network',
            observability: 'observability',
            ossMounts: 'ossMounts',
            protocol: 'protocol',
            regionId: 'regionId',
            roleArn: 'roleArn',
            runtime: 'runtime',
            sandboxPhaseCounts: 'sandboxPhaseCounts',
            status: 'status',
            updatedAt: 'updatedAt',
            useImageCache: 'useImageCache',
            workspaceId: 'workspaceId',
        };
    }
    static types() {
        return {
            accessMode: 'string',
            accessScope: 'string',
            agentId: 'string',
            agenticFsMounts: { 'type': 'array', 'itemType': GetCustomAgentResponseBodyDataAgenticFsMounts },
            artifact: GetCustomAgentResponseBodyDataArtifact,
            codePackageInfo: GetCustomAgentResponseBodyDataCodePackageInfo,
            createMode: 'string',
            createdAt: 'string',
            currentImage: GetCustomAgentResponseBodyDataCurrentImage,
            customImage: GetCustomAgentResponseBodyDataCustomImage,
            deployType: 'string',
            description: 'string',
            effectiveSpecVersion: 'number',
            environment: GetCustomAgentResponseBodyDataEnvironment,
            healthCheck: GetCustomAgentResponseBodyDataHealthCheck,
            imageCacheId: 'string',
            imagePreparation: GetCustomAgentResponseBodyDataImagePreparation,
            latestExecutionError: GetCustomAgentResponseBodyDataLatestExecutionError,
            latestSpecVersion: 'number',
            latestVersionStatus: 'string',
            logging: GetCustomAgentResponseBodyDataLogging,
            name: 'string',
            network: GetCustomAgentResponseBodyDataNetwork,
            observability: GetCustomAgentResponseBodyDataObservability,
            ossMounts: { 'type': 'array', 'itemType': GetCustomAgentResponseBodyDataOssMounts },
            protocol: { 'type': 'array', 'itemType': GetCustomAgentResponseBodyDataProtocol },
            regionId: 'string',
            roleArn: 'string',
            runtime: GetCustomAgentResponseBodyDataRuntime,
            sandboxPhaseCounts: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
            status: 'string',
            updatedAt: 'string',
            useImageCache: 'boolean',
            workspaceId: 'string',
        };
    }
    validate() {
        if (Array.isArray(this.agenticFsMounts)) {
            $dara.Model.validateArray(this.agenticFsMounts);
        }
        if (this.artifact && typeof this.artifact.validate === 'function') {
            this.artifact.validate();
        }
        if (this.codePackageInfo && typeof this.codePackageInfo.validate === 'function') {
            this.codePackageInfo.validate();
        }
        if (this.currentImage && typeof this.currentImage.validate === 'function') {
            this.currentImage.validate();
        }
        if (this.customImage && typeof this.customImage.validate === 'function') {
            this.customImage.validate();
        }
        if (this.environment && typeof this.environment.validate === 'function') {
            this.environment.validate();
        }
        if (this.healthCheck && typeof this.healthCheck.validate === 'function') {
            this.healthCheck.validate();
        }
        if (this.imagePreparation && typeof this.imagePreparation.validate === 'function') {
            this.imagePreparation.validate();
        }
        if (this.latestExecutionError && typeof this.latestExecutionError.validate === 'function') {
            this.latestExecutionError.validate();
        }
        if (this.logging && typeof this.logging.validate === 'function') {
            this.logging.validate();
        }
        if (this.network && typeof this.network.validate === 'function') {
            this.network.validate();
        }
        if (this.observability && typeof this.observability.validate === 'function') {
            this.observability.validate();
        }
        if (Array.isArray(this.ossMounts)) {
            $dara.Model.validateArray(this.ossMounts);
        }
        if (Array.isArray(this.protocol)) {
            $dara.Model.validateArray(this.protocol);
        }
        if (this.runtime && typeof this.runtime.validate === 'function') {
            this.runtime.validate();
        }
        if (this.sandboxPhaseCounts) {
            $dara.Model.validateMap(this.sandboxPhaseCounts);
        }
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.GetCustomAgentResponseBodyData = GetCustomAgentResponseBodyData;
class GetCustomAgentResponseBody extends $dara.Model {
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
            data: GetCustomAgentResponseBodyData,
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
exports.GetCustomAgentResponseBody = GetCustomAgentResponseBody;
//# sourceMappingURL=GetCustomAgentResponseBody.js.map