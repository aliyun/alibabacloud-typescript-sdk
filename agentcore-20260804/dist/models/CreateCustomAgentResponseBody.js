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
exports.CreateCustomAgentResponseBody = exports.CreateCustomAgentResponseBodyData = exports.CreateCustomAgentResponseBodyDataRuntime = exports.CreateCustomAgentResponseBodyDataRuntimeSessionPolicy = exports.CreateCustomAgentResponseBodyDataRuntimeHpa = exports.CreateCustomAgentResponseBodyDataRuntimeCompute = exports.CreateCustomAgentResponseBodyDataProtocol = exports.CreateCustomAgentResponseBodyDataProtocolPaths = exports.CreateCustomAgentResponseBodyDataOssMounts = exports.CreateCustomAgentResponseBodyDataObservability = exports.CreateCustomAgentResponseBodyDataNetwork = exports.CreateCustomAgentResponseBodyDataNetworkAccessVpc = exports.CreateCustomAgentResponseBodyDataNetworkAccessInternet = exports.CreateCustomAgentResponseBodyDataLogging = exports.CreateCustomAgentResponseBodyDataLoggingSls = exports.CreateCustomAgentResponseBodyDataLatestExecutionError = exports.CreateCustomAgentResponseBodyDataImagePreparation = exports.CreateCustomAgentResponseBodyDataImageCachePreparation = exports.CreateCustomAgentResponseBodyDataHealthCheck = exports.CreateCustomAgentResponseBodyDataEnvironment = exports.CreateCustomAgentResponseBodyDataEnvironmentVariables = exports.CreateCustomAgentResponseBodyDataCustomImage = exports.CreateCustomAgentResponseBodyDataCustomImagePullNetwork = exports.CreateCustomAgentResponseBodyDataCurrentImage = exports.CreateCustomAgentResponseBodyDataCurrentImagePullNetwork = exports.CreateCustomAgentResponseBodyDataCodePackageInfo = exports.CreateCustomAgentResponseBodyDataArtifact = exports.CreateCustomAgentResponseBodyDataArtifactContainer = exports.CreateCustomAgentResponseBodyDataArtifactCode = exports.CreateCustomAgentResponseBodyDataAgenticFsMounts = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateCustomAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataAgenticFsMounts = CreateCustomAgentResponseBodyDataAgenticFsMounts;
class CreateCustomAgentResponseBodyDataArtifactCode extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataArtifactCode = CreateCustomAgentResponseBodyDataArtifactCode;
class CreateCustomAgentResponseBodyDataArtifactContainer extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataArtifactContainer = CreateCustomAgentResponseBodyDataArtifactContainer;
class CreateCustomAgentResponseBodyDataArtifact extends $dara.Model {
    static names() {
        return {
            code: 'code',
            container: 'container',
            port: 'port',
        };
    }
    static types() {
        return {
            code: CreateCustomAgentResponseBodyDataArtifactCode,
            container: CreateCustomAgentResponseBodyDataArtifactContainer,
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
exports.CreateCustomAgentResponseBodyDataArtifact = CreateCustomAgentResponseBodyDataArtifact;
class CreateCustomAgentResponseBodyDataCodePackageInfo extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataCodePackageInfo = CreateCustomAgentResponseBodyDataCodePackageInfo;
class CreateCustomAgentResponseBodyDataCurrentImagePullNetwork extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataCurrentImagePullNetwork = CreateCustomAgentResponseBodyDataCurrentImagePullNetwork;
class CreateCustomAgentResponseBodyDataCurrentImage extends $dara.Model {
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
            pullNetwork: CreateCustomAgentResponseBodyDataCurrentImagePullNetwork,
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
exports.CreateCustomAgentResponseBodyDataCurrentImage = CreateCustomAgentResponseBodyDataCurrentImage;
class CreateCustomAgentResponseBodyDataCustomImagePullNetwork extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataCustomImagePullNetwork = CreateCustomAgentResponseBodyDataCustomImagePullNetwork;
class CreateCustomAgentResponseBodyDataCustomImage extends $dara.Model {
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
            pullNetwork: CreateCustomAgentResponseBodyDataCustomImagePullNetwork,
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
exports.CreateCustomAgentResponseBodyDataCustomImage = CreateCustomAgentResponseBodyDataCustomImage;
class CreateCustomAgentResponseBodyDataEnvironmentVariables extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataEnvironmentVariables = CreateCustomAgentResponseBodyDataEnvironmentVariables;
class CreateCustomAgentResponseBodyDataEnvironment extends $dara.Model {
    static names() {
        return {
            variables: 'variables',
        };
    }
    static types() {
        return {
            variables: { 'type': 'array', 'itemType': CreateCustomAgentResponseBodyDataEnvironmentVariables },
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
exports.CreateCustomAgentResponseBodyDataEnvironment = CreateCustomAgentResponseBodyDataEnvironment;
class CreateCustomAgentResponseBodyDataHealthCheck extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataHealthCheck = CreateCustomAgentResponseBodyDataHealthCheck;
class CreateCustomAgentResponseBodyDataImageCachePreparation extends $dara.Model {
    static names() {
        return {
            imageId: 'imageId',
            statusAtAcceptance: 'statusAtAcceptance',
            submissionStatus: 'submissionStatus',
        };
    }
    static types() {
        return {
            imageId: 'string',
            statusAtAcceptance: 'string',
            submissionStatus: 'string',
        };
    }
    validate() {
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.CreateCustomAgentResponseBodyDataImageCachePreparation = CreateCustomAgentResponseBodyDataImageCachePreparation;
class CreateCustomAgentResponseBodyDataImagePreparation extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataImagePreparation = CreateCustomAgentResponseBodyDataImagePreparation;
class CreateCustomAgentResponseBodyDataLatestExecutionError extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataLatestExecutionError = CreateCustomAgentResponseBodyDataLatestExecutionError;
class CreateCustomAgentResponseBodyDataLoggingSls extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataLoggingSls = CreateCustomAgentResponseBodyDataLoggingSls;
class CreateCustomAgentResponseBodyDataLogging extends $dara.Model {
    static names() {
        return {
            sls: 'sls',
        };
    }
    static types() {
        return {
            sls: CreateCustomAgentResponseBodyDataLoggingSls,
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
exports.CreateCustomAgentResponseBodyDataLogging = CreateCustomAgentResponseBodyDataLogging;
class CreateCustomAgentResponseBodyDataNetworkAccessInternet extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataNetworkAccessInternet = CreateCustomAgentResponseBodyDataNetworkAccessInternet;
class CreateCustomAgentResponseBodyDataNetworkAccessVpc extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataNetworkAccessVpc = CreateCustomAgentResponseBodyDataNetworkAccessVpc;
class CreateCustomAgentResponseBodyDataNetwork extends $dara.Model {
    static names() {
        return {
            accessInternet: 'accessInternet',
            accessVpc: 'accessVpc',
        };
    }
    static types() {
        return {
            accessInternet: CreateCustomAgentResponseBodyDataNetworkAccessInternet,
            accessVpc: CreateCustomAgentResponseBodyDataNetworkAccessVpc,
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
exports.CreateCustomAgentResponseBodyDataNetwork = CreateCustomAgentResponseBodyDataNetwork;
class CreateCustomAgentResponseBodyDataObservability extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataObservability = CreateCustomAgentResponseBodyDataObservability;
class CreateCustomAgentResponseBodyDataOssMounts extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataOssMounts = CreateCustomAgentResponseBodyDataOssMounts;
class CreateCustomAgentResponseBodyDataProtocolPaths extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataProtocolPaths = CreateCustomAgentResponseBodyDataProtocolPaths;
class CreateCustomAgentResponseBodyDataProtocol extends $dara.Model {
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
            paths: { 'type': 'array', 'itemType': CreateCustomAgentResponseBodyDataProtocolPaths },
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
exports.CreateCustomAgentResponseBodyDataProtocol = CreateCustomAgentResponseBodyDataProtocol;
class CreateCustomAgentResponseBodyDataRuntimeCompute extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataRuntimeCompute = CreateCustomAgentResponseBodyDataRuntimeCompute;
class CreateCustomAgentResponseBodyDataRuntimeHpa extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataRuntimeHpa = CreateCustomAgentResponseBodyDataRuntimeHpa;
class CreateCustomAgentResponseBodyDataRuntimeSessionPolicy extends $dara.Model {
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
exports.CreateCustomAgentResponseBodyDataRuntimeSessionPolicy = CreateCustomAgentResponseBodyDataRuntimeSessionPolicy;
class CreateCustomAgentResponseBodyDataRuntime extends $dara.Model {
    static names() {
        return {
            compute: 'compute',
            hpa: 'hpa',
            sessionPolicy: 'sessionPolicy',
        };
    }
    static types() {
        return {
            compute: CreateCustomAgentResponseBodyDataRuntimeCompute,
            hpa: CreateCustomAgentResponseBodyDataRuntimeHpa,
            sessionPolicy: CreateCustomAgentResponseBodyDataRuntimeSessionPolicy,
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
exports.CreateCustomAgentResponseBodyDataRuntime = CreateCustomAgentResponseBodyDataRuntime;
class CreateCustomAgentResponseBodyData extends $dara.Model {
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
            imageCachePreparation: 'imageCachePreparation',
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
            agenticFsMounts: { 'type': 'array', 'itemType': CreateCustomAgentResponseBodyDataAgenticFsMounts },
            artifact: CreateCustomAgentResponseBodyDataArtifact,
            codePackageInfo: CreateCustomAgentResponseBodyDataCodePackageInfo,
            createMode: 'string',
            createdAt: 'string',
            currentImage: CreateCustomAgentResponseBodyDataCurrentImage,
            customImage: CreateCustomAgentResponseBodyDataCustomImage,
            deployType: 'string',
            description: 'string',
            effectiveSpecVersion: 'number',
            environment: CreateCustomAgentResponseBodyDataEnvironment,
            healthCheck: CreateCustomAgentResponseBodyDataHealthCheck,
            imageCacheId: 'string',
            imageCachePreparation: CreateCustomAgentResponseBodyDataImageCachePreparation,
            imagePreparation: CreateCustomAgentResponseBodyDataImagePreparation,
            latestExecutionError: CreateCustomAgentResponseBodyDataLatestExecutionError,
            latestSpecVersion: 'number',
            latestVersionStatus: 'string',
            logging: CreateCustomAgentResponseBodyDataLogging,
            name: 'string',
            network: CreateCustomAgentResponseBodyDataNetwork,
            observability: CreateCustomAgentResponseBodyDataObservability,
            ossMounts: { 'type': 'array', 'itemType': CreateCustomAgentResponseBodyDataOssMounts },
            protocol: { 'type': 'array', 'itemType': CreateCustomAgentResponseBodyDataProtocol },
            regionId: 'string',
            roleArn: 'string',
            runtime: CreateCustomAgentResponseBodyDataRuntime,
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
        if (this.imageCachePreparation && typeof this.imageCachePreparation.validate === 'function') {
            this.imageCachePreparation.validate();
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
exports.CreateCustomAgentResponseBodyData = CreateCustomAgentResponseBodyData;
class CreateCustomAgentResponseBody extends $dara.Model {
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
            data: CreateCustomAgentResponseBodyData,
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
exports.CreateCustomAgentResponseBody = CreateCustomAgentResponseBody;
//# sourceMappingURL=CreateCustomAgentResponseBody.js.map