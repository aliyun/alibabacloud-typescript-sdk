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
exports.UpdateCustomAgentResponseBody = exports.UpdateCustomAgentResponseBodyData = exports.UpdateCustomAgentResponseBodyDataRuntime = exports.UpdateCustomAgentResponseBodyDataRuntimeSessionPolicy = exports.UpdateCustomAgentResponseBodyDataRuntimeHpa = exports.UpdateCustomAgentResponseBodyDataRuntimeCompute = exports.UpdateCustomAgentResponseBodyDataProtocol = exports.UpdateCustomAgentResponseBodyDataProtocolPaths = exports.UpdateCustomAgentResponseBodyDataOssMounts = exports.UpdateCustomAgentResponseBodyDataObservability = exports.UpdateCustomAgentResponseBodyDataNetwork = exports.UpdateCustomAgentResponseBodyDataNetworkAccessVpc = exports.UpdateCustomAgentResponseBodyDataNetworkAccessInternet = exports.UpdateCustomAgentResponseBodyDataLogging = exports.UpdateCustomAgentResponseBodyDataLoggingSls = exports.UpdateCustomAgentResponseBodyDataLatestExecutionError = exports.UpdateCustomAgentResponseBodyDataImagePreparation = exports.UpdateCustomAgentResponseBodyDataImageCachePreparation = exports.UpdateCustomAgentResponseBodyDataHealthCheck = exports.UpdateCustomAgentResponseBodyDataEnvironment = exports.UpdateCustomAgentResponseBodyDataEnvironmentVariables = exports.UpdateCustomAgentResponseBodyDataCustomImage = exports.UpdateCustomAgentResponseBodyDataCustomImagePullNetwork = exports.UpdateCustomAgentResponseBodyDataCurrentImage = exports.UpdateCustomAgentResponseBodyDataCurrentImagePullNetwork = exports.UpdateCustomAgentResponseBodyDataCodePackageInfo = exports.UpdateCustomAgentResponseBodyDataArtifact = exports.UpdateCustomAgentResponseBodyDataArtifactContainer = exports.UpdateCustomAgentResponseBodyDataArtifactCode = exports.UpdateCustomAgentResponseBodyDataAgenticFsMounts = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateCustomAgentResponseBodyDataAgenticFsMounts extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataAgenticFsMounts = UpdateCustomAgentResponseBodyDataAgenticFsMounts;
class UpdateCustomAgentResponseBodyDataArtifactCode extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataArtifactCode = UpdateCustomAgentResponseBodyDataArtifactCode;
class UpdateCustomAgentResponseBodyDataArtifactContainer extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataArtifactContainer = UpdateCustomAgentResponseBodyDataArtifactContainer;
class UpdateCustomAgentResponseBodyDataArtifact extends $dara.Model {
    static names() {
        return {
            code: 'code',
            container: 'container',
            port: 'port',
        };
    }
    static types() {
        return {
            code: UpdateCustomAgentResponseBodyDataArtifactCode,
            container: UpdateCustomAgentResponseBodyDataArtifactContainer,
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
exports.UpdateCustomAgentResponseBodyDataArtifact = UpdateCustomAgentResponseBodyDataArtifact;
class UpdateCustomAgentResponseBodyDataCodePackageInfo extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataCodePackageInfo = UpdateCustomAgentResponseBodyDataCodePackageInfo;
class UpdateCustomAgentResponseBodyDataCurrentImagePullNetwork extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataCurrentImagePullNetwork = UpdateCustomAgentResponseBodyDataCurrentImagePullNetwork;
class UpdateCustomAgentResponseBodyDataCurrentImage extends $dara.Model {
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
            pullNetwork: UpdateCustomAgentResponseBodyDataCurrentImagePullNetwork,
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
exports.UpdateCustomAgentResponseBodyDataCurrentImage = UpdateCustomAgentResponseBodyDataCurrentImage;
class UpdateCustomAgentResponseBodyDataCustomImagePullNetwork extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataCustomImagePullNetwork = UpdateCustomAgentResponseBodyDataCustomImagePullNetwork;
class UpdateCustomAgentResponseBodyDataCustomImage extends $dara.Model {
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
            pullNetwork: UpdateCustomAgentResponseBodyDataCustomImagePullNetwork,
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
exports.UpdateCustomAgentResponseBodyDataCustomImage = UpdateCustomAgentResponseBodyDataCustomImage;
class UpdateCustomAgentResponseBodyDataEnvironmentVariables extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataEnvironmentVariables = UpdateCustomAgentResponseBodyDataEnvironmentVariables;
class UpdateCustomAgentResponseBodyDataEnvironment extends $dara.Model {
    static names() {
        return {
            variables: 'variables',
        };
    }
    static types() {
        return {
            variables: { 'type': 'array', 'itemType': UpdateCustomAgentResponseBodyDataEnvironmentVariables },
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
exports.UpdateCustomAgentResponseBodyDataEnvironment = UpdateCustomAgentResponseBodyDataEnvironment;
class UpdateCustomAgentResponseBodyDataHealthCheck extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataHealthCheck = UpdateCustomAgentResponseBodyDataHealthCheck;
class UpdateCustomAgentResponseBodyDataImageCachePreparation extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataImageCachePreparation = UpdateCustomAgentResponseBodyDataImageCachePreparation;
class UpdateCustomAgentResponseBodyDataImagePreparation extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataImagePreparation = UpdateCustomAgentResponseBodyDataImagePreparation;
class UpdateCustomAgentResponseBodyDataLatestExecutionError extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataLatestExecutionError = UpdateCustomAgentResponseBodyDataLatestExecutionError;
class UpdateCustomAgentResponseBodyDataLoggingSls extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataLoggingSls = UpdateCustomAgentResponseBodyDataLoggingSls;
class UpdateCustomAgentResponseBodyDataLogging extends $dara.Model {
    static names() {
        return {
            sls: 'sls',
        };
    }
    static types() {
        return {
            sls: UpdateCustomAgentResponseBodyDataLoggingSls,
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
exports.UpdateCustomAgentResponseBodyDataLogging = UpdateCustomAgentResponseBodyDataLogging;
class UpdateCustomAgentResponseBodyDataNetworkAccessInternet extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataNetworkAccessInternet = UpdateCustomAgentResponseBodyDataNetworkAccessInternet;
class UpdateCustomAgentResponseBodyDataNetworkAccessVpc extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataNetworkAccessVpc = UpdateCustomAgentResponseBodyDataNetworkAccessVpc;
class UpdateCustomAgentResponseBodyDataNetwork extends $dara.Model {
    static names() {
        return {
            accessInternet: 'accessInternet',
            accessVpc: 'accessVpc',
        };
    }
    static types() {
        return {
            accessInternet: UpdateCustomAgentResponseBodyDataNetworkAccessInternet,
            accessVpc: UpdateCustomAgentResponseBodyDataNetworkAccessVpc,
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
exports.UpdateCustomAgentResponseBodyDataNetwork = UpdateCustomAgentResponseBodyDataNetwork;
class UpdateCustomAgentResponseBodyDataObservability extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataObservability = UpdateCustomAgentResponseBodyDataObservability;
class UpdateCustomAgentResponseBodyDataOssMounts extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataOssMounts = UpdateCustomAgentResponseBodyDataOssMounts;
class UpdateCustomAgentResponseBodyDataProtocolPaths extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataProtocolPaths = UpdateCustomAgentResponseBodyDataProtocolPaths;
class UpdateCustomAgentResponseBodyDataProtocol extends $dara.Model {
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
            paths: { 'type': 'array', 'itemType': UpdateCustomAgentResponseBodyDataProtocolPaths },
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
exports.UpdateCustomAgentResponseBodyDataProtocol = UpdateCustomAgentResponseBodyDataProtocol;
class UpdateCustomAgentResponseBodyDataRuntimeCompute extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataRuntimeCompute = UpdateCustomAgentResponseBodyDataRuntimeCompute;
class UpdateCustomAgentResponseBodyDataRuntimeHpa extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataRuntimeHpa = UpdateCustomAgentResponseBodyDataRuntimeHpa;
class UpdateCustomAgentResponseBodyDataRuntimeSessionPolicy extends $dara.Model {
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
exports.UpdateCustomAgentResponseBodyDataRuntimeSessionPolicy = UpdateCustomAgentResponseBodyDataRuntimeSessionPolicy;
class UpdateCustomAgentResponseBodyDataRuntime extends $dara.Model {
    static names() {
        return {
            compute: 'compute',
            hpa: 'hpa',
            sessionPolicy: 'sessionPolicy',
        };
    }
    static types() {
        return {
            compute: UpdateCustomAgentResponseBodyDataRuntimeCompute,
            hpa: UpdateCustomAgentResponseBodyDataRuntimeHpa,
            sessionPolicy: UpdateCustomAgentResponseBodyDataRuntimeSessionPolicy,
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
exports.UpdateCustomAgentResponseBodyDataRuntime = UpdateCustomAgentResponseBodyDataRuntime;
class UpdateCustomAgentResponseBodyData extends $dara.Model {
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
            agenticFsMounts: { 'type': 'array', 'itemType': UpdateCustomAgentResponseBodyDataAgenticFsMounts },
            artifact: UpdateCustomAgentResponseBodyDataArtifact,
            codePackageInfo: UpdateCustomAgentResponseBodyDataCodePackageInfo,
            createMode: 'string',
            createdAt: 'string',
            currentImage: UpdateCustomAgentResponseBodyDataCurrentImage,
            customImage: UpdateCustomAgentResponseBodyDataCustomImage,
            deployType: 'string',
            description: 'string',
            effectiveSpecVersion: 'number',
            environment: UpdateCustomAgentResponseBodyDataEnvironment,
            healthCheck: UpdateCustomAgentResponseBodyDataHealthCheck,
            imageCacheId: 'string',
            imageCachePreparation: UpdateCustomAgentResponseBodyDataImageCachePreparation,
            imagePreparation: UpdateCustomAgentResponseBodyDataImagePreparation,
            latestExecutionError: UpdateCustomAgentResponseBodyDataLatestExecutionError,
            latestSpecVersion: 'number',
            latestVersionStatus: 'string',
            logging: UpdateCustomAgentResponseBodyDataLogging,
            name: 'string',
            network: UpdateCustomAgentResponseBodyDataNetwork,
            observability: UpdateCustomAgentResponseBodyDataObservability,
            ossMounts: { 'type': 'array', 'itemType': UpdateCustomAgentResponseBodyDataOssMounts },
            protocol: { 'type': 'array', 'itemType': UpdateCustomAgentResponseBodyDataProtocol },
            regionId: 'string',
            roleArn: 'string',
            runtime: UpdateCustomAgentResponseBodyDataRuntime,
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
exports.UpdateCustomAgentResponseBodyData = UpdateCustomAgentResponseBodyData;
class UpdateCustomAgentResponseBody extends $dara.Model {
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
            data: UpdateCustomAgentResponseBodyData,
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
exports.UpdateCustomAgentResponseBody = UpdateCustomAgentResponseBody;
//# sourceMappingURL=UpdateCustomAgentResponseBody.js.map