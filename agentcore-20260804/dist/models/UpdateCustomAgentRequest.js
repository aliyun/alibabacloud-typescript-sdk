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
exports.UpdateCustomAgentRequest = exports.UpdateCustomAgentRequestBody = exports.UpdateCustomAgentRequestBodyRuntime = exports.UpdateCustomAgentRequestBodyRuntimeSessionPolicy = exports.UpdateCustomAgentRequestBodyRuntimeHpa = exports.UpdateCustomAgentRequestBodyRuntimeCompute = exports.UpdateCustomAgentRequestBodyProtocol = exports.UpdateCustomAgentRequestBodyProtocolPaths = exports.UpdateCustomAgentRequestBodyOssMounts = exports.UpdateCustomAgentRequestBodyObservability = exports.UpdateCustomAgentRequestBodyNetwork = exports.UpdateCustomAgentRequestBodyNetworkAccessVpc = exports.UpdateCustomAgentRequestBodyNetworkAccessInternet = exports.UpdateCustomAgentRequestBodyLogging = exports.UpdateCustomAgentRequestBodyLoggingSls = exports.UpdateCustomAgentRequestBodyHealthCheck = exports.UpdateCustomAgentRequestBodyEnvironment = exports.UpdateCustomAgentRequestBodyEnvironmentVariables = exports.UpdateCustomAgentRequestBodyCustomImage = exports.UpdateCustomAgentRequestBodyCustomImagePullNetwork = exports.UpdateCustomAgentRequestBodyArtifact = exports.UpdateCustomAgentRequestBodyArtifactContainer = exports.UpdateCustomAgentRequestBodyArtifactCode = exports.UpdateCustomAgentRequestBodyAgenticFsMounts = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class UpdateCustomAgentRequestBodyAgenticFsMounts extends $dara.Model {
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
exports.UpdateCustomAgentRequestBodyAgenticFsMounts = UpdateCustomAgentRequestBodyAgenticFsMounts;
class UpdateCustomAgentRequestBodyArtifactCode extends $dara.Model {
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
exports.UpdateCustomAgentRequestBodyArtifactCode = UpdateCustomAgentRequestBodyArtifactCode;
class UpdateCustomAgentRequestBodyArtifactContainer extends $dara.Model {
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
exports.UpdateCustomAgentRequestBodyArtifactContainer = UpdateCustomAgentRequestBodyArtifactContainer;
class UpdateCustomAgentRequestBodyArtifact extends $dara.Model {
    static names() {
        return {
            code: 'code',
            container: 'container',
            port: 'port',
        };
    }
    static types() {
        return {
            code: UpdateCustomAgentRequestBodyArtifactCode,
            container: UpdateCustomAgentRequestBodyArtifactContainer,
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
exports.UpdateCustomAgentRequestBodyArtifact = UpdateCustomAgentRequestBodyArtifact;
class UpdateCustomAgentRequestBodyCustomImagePullNetwork extends $dara.Model {
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
exports.UpdateCustomAgentRequestBodyCustomImagePullNetwork = UpdateCustomAgentRequestBodyCustomImagePullNetwork;
class UpdateCustomAgentRequestBodyCustomImage extends $dara.Model {
    static names() {
        return {
            image: 'image',
            password: 'password',
            pullNetwork: 'pullNetwork',
            skipTlsVerify: 'skipTlsVerify',
            username: 'username',
        };
    }
    static types() {
        return {
            image: 'string',
            password: 'string',
            pullNetwork: UpdateCustomAgentRequestBodyCustomImagePullNetwork,
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
exports.UpdateCustomAgentRequestBodyCustomImage = UpdateCustomAgentRequestBodyCustomImage;
class UpdateCustomAgentRequestBodyEnvironmentVariables extends $dara.Model {
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
exports.UpdateCustomAgentRequestBodyEnvironmentVariables = UpdateCustomAgentRequestBodyEnvironmentVariables;
class UpdateCustomAgentRequestBodyEnvironment extends $dara.Model {
    static names() {
        return {
            variables: 'variables',
        };
    }
    static types() {
        return {
            variables: { 'type': 'array', 'itemType': UpdateCustomAgentRequestBodyEnvironmentVariables },
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
exports.UpdateCustomAgentRequestBodyEnvironment = UpdateCustomAgentRequestBodyEnvironment;
class UpdateCustomAgentRequestBodyHealthCheck extends $dara.Model {
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
exports.UpdateCustomAgentRequestBodyHealthCheck = UpdateCustomAgentRequestBodyHealthCheck;
class UpdateCustomAgentRequestBodyLoggingSls extends $dara.Model {
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
exports.UpdateCustomAgentRequestBodyLoggingSls = UpdateCustomAgentRequestBodyLoggingSls;
class UpdateCustomAgentRequestBodyLogging extends $dara.Model {
    static names() {
        return {
            sls: 'sls',
        };
    }
    static types() {
        return {
            sls: UpdateCustomAgentRequestBodyLoggingSls,
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
exports.UpdateCustomAgentRequestBodyLogging = UpdateCustomAgentRequestBodyLogging;
class UpdateCustomAgentRequestBodyNetworkAccessInternet extends $dara.Model {
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
exports.UpdateCustomAgentRequestBodyNetworkAccessInternet = UpdateCustomAgentRequestBodyNetworkAccessInternet;
class UpdateCustomAgentRequestBodyNetworkAccessVpc extends $dara.Model {
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
exports.UpdateCustomAgentRequestBodyNetworkAccessVpc = UpdateCustomAgentRequestBodyNetworkAccessVpc;
class UpdateCustomAgentRequestBodyNetwork extends $dara.Model {
    static names() {
        return {
            accessInternet: 'accessInternet',
            accessVpc: 'accessVpc',
        };
    }
    static types() {
        return {
            accessInternet: UpdateCustomAgentRequestBodyNetworkAccessInternet,
            accessVpc: UpdateCustomAgentRequestBodyNetworkAccessVpc,
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
exports.UpdateCustomAgentRequestBodyNetwork = UpdateCustomAgentRequestBodyNetwork;
class UpdateCustomAgentRequestBodyObservability extends $dara.Model {
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
exports.UpdateCustomAgentRequestBodyObservability = UpdateCustomAgentRequestBodyObservability;
class UpdateCustomAgentRequestBodyOssMounts extends $dara.Model {
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
exports.UpdateCustomAgentRequestBodyOssMounts = UpdateCustomAgentRequestBodyOssMounts;
class UpdateCustomAgentRequestBodyProtocolPaths extends $dara.Model {
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
exports.UpdateCustomAgentRequestBodyProtocolPaths = UpdateCustomAgentRequestBodyProtocolPaths;
class UpdateCustomAgentRequestBodyProtocol extends $dara.Model {
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
            paths: { 'type': 'array', 'itemType': UpdateCustomAgentRequestBodyProtocolPaths },
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
exports.UpdateCustomAgentRequestBodyProtocol = UpdateCustomAgentRequestBodyProtocol;
class UpdateCustomAgentRequestBodyRuntimeCompute extends $dara.Model {
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
exports.UpdateCustomAgentRequestBodyRuntimeCompute = UpdateCustomAgentRequestBodyRuntimeCompute;
class UpdateCustomAgentRequestBodyRuntimeHpa extends $dara.Model {
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
exports.UpdateCustomAgentRequestBodyRuntimeHpa = UpdateCustomAgentRequestBodyRuntimeHpa;
class UpdateCustomAgentRequestBodyRuntimeSessionPolicy extends $dara.Model {
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
exports.UpdateCustomAgentRequestBodyRuntimeSessionPolicy = UpdateCustomAgentRequestBodyRuntimeSessionPolicy;
class UpdateCustomAgentRequestBodyRuntime extends $dara.Model {
    static names() {
        return {
            compute: 'compute',
            hpa: 'hpa',
            sessionPolicy: 'sessionPolicy',
        };
    }
    static types() {
        return {
            compute: UpdateCustomAgentRequestBodyRuntimeCompute,
            hpa: UpdateCustomAgentRequestBodyRuntimeHpa,
            sessionPolicy: UpdateCustomAgentRequestBodyRuntimeSessionPolicy,
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
exports.UpdateCustomAgentRequestBodyRuntime = UpdateCustomAgentRequestBodyRuntime;
class UpdateCustomAgentRequestBody extends $dara.Model {
    static names() {
        return {
            accessMode: 'accessMode',
            accessScope: 'accessScope',
            agenticFsMounts: 'agenticFsMounts',
            artifact: 'artifact',
            customImage: 'customImage',
            description: 'description',
            environment: 'environment',
            healthCheck: 'healthCheck',
            logging: 'logging',
            name: 'name',
            network: 'network',
            observability: 'observability',
            ossMounts: 'ossMounts',
            protocol: 'protocol',
            roleArn: 'roleArn',
            runtime: 'runtime',
            useImageCache: 'useImageCache',
        };
    }
    static types() {
        return {
            accessMode: 'string',
            accessScope: 'string',
            agenticFsMounts: { 'type': 'array', 'itemType': UpdateCustomAgentRequestBodyAgenticFsMounts },
            artifact: UpdateCustomAgentRequestBodyArtifact,
            customImage: UpdateCustomAgentRequestBodyCustomImage,
            description: 'string',
            environment: UpdateCustomAgentRequestBodyEnvironment,
            healthCheck: UpdateCustomAgentRequestBodyHealthCheck,
            logging: UpdateCustomAgentRequestBodyLogging,
            name: 'string',
            network: UpdateCustomAgentRequestBodyNetwork,
            observability: UpdateCustomAgentRequestBodyObservability,
            ossMounts: { 'type': 'array', 'itemType': UpdateCustomAgentRequestBodyOssMounts },
            protocol: { 'type': 'array', 'itemType': UpdateCustomAgentRequestBodyProtocol },
            roleArn: 'string',
            runtime: UpdateCustomAgentRequestBodyRuntime,
            useImageCache: 'boolean',
        };
    }
    validate() {
        if (Array.isArray(this.agenticFsMounts)) {
            $dara.Model.validateArray(this.agenticFsMounts);
        }
        if (this.artifact && typeof this.artifact.validate === 'function') {
            this.artifact.validate();
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
        super.validate();
    }
    constructor(map) {
        super(map);
    }
}
exports.UpdateCustomAgentRequestBody = UpdateCustomAgentRequestBody;
class UpdateCustomAgentRequest extends $dara.Model {
    static names() {
        return {
            body: 'body',
            clientToken: 'clientToken',
        };
    }
    static types() {
        return {
            body: UpdateCustomAgentRequestBody,
            clientToken: 'string',
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
exports.UpdateCustomAgentRequest = UpdateCustomAgentRequest;
//# sourceMappingURL=UpdateCustomAgentRequest.js.map