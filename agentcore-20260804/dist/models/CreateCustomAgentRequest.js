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
exports.CreateCustomAgentRequest = exports.CreateCustomAgentRequestBody = exports.CreateCustomAgentRequestBodyRuntime = exports.CreateCustomAgentRequestBodyRuntimeSessionPolicy = exports.CreateCustomAgentRequestBodyRuntimeHpa = exports.CreateCustomAgentRequestBodyRuntimeCompute = exports.CreateCustomAgentRequestBodyProtocol = exports.CreateCustomAgentRequestBodyProtocolPaths = exports.CreateCustomAgentRequestBodyOssMounts = exports.CreateCustomAgentRequestBodyObservability = exports.CreateCustomAgentRequestBodyNetwork = exports.CreateCustomAgentRequestBodyNetworkAccessVpc = exports.CreateCustomAgentRequestBodyNetworkAccessInternet = exports.CreateCustomAgentRequestBodyLogging = exports.CreateCustomAgentRequestBodyLoggingSls = exports.CreateCustomAgentRequestBodyHealthCheck = exports.CreateCustomAgentRequestBodyEnvironment = exports.CreateCustomAgentRequestBodyEnvironmentVariables = exports.CreateCustomAgentRequestBodyCustomImage = exports.CreateCustomAgentRequestBodyCustomImagePullNetwork = exports.CreateCustomAgentRequestBodyArtifact = exports.CreateCustomAgentRequestBodyArtifactContainer = exports.CreateCustomAgentRequestBodyArtifactCode = exports.CreateCustomAgentRequestBodyAgenticFsMounts = void 0;
// This file is auto-generated, don't edit it
const $dara = __importStar(require("@darabonba/typescript"));
class CreateCustomAgentRequestBodyAgenticFsMounts extends $dara.Model {
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
exports.CreateCustomAgentRequestBodyAgenticFsMounts = CreateCustomAgentRequestBodyAgenticFsMounts;
class CreateCustomAgentRequestBodyArtifactCode extends $dara.Model {
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
exports.CreateCustomAgentRequestBodyArtifactCode = CreateCustomAgentRequestBodyArtifactCode;
class CreateCustomAgentRequestBodyArtifactContainer extends $dara.Model {
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
exports.CreateCustomAgentRequestBodyArtifactContainer = CreateCustomAgentRequestBodyArtifactContainer;
class CreateCustomAgentRequestBodyArtifact extends $dara.Model {
    static names() {
        return {
            code: 'code',
            container: 'container',
            port: 'port',
        };
    }
    static types() {
        return {
            code: CreateCustomAgentRequestBodyArtifactCode,
            container: CreateCustomAgentRequestBodyArtifactContainer,
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
exports.CreateCustomAgentRequestBodyArtifact = CreateCustomAgentRequestBodyArtifact;
class CreateCustomAgentRequestBodyCustomImagePullNetwork extends $dara.Model {
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
exports.CreateCustomAgentRequestBodyCustomImagePullNetwork = CreateCustomAgentRequestBodyCustomImagePullNetwork;
class CreateCustomAgentRequestBodyCustomImage extends $dara.Model {
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
            pullNetwork: CreateCustomAgentRequestBodyCustomImagePullNetwork,
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
exports.CreateCustomAgentRequestBodyCustomImage = CreateCustomAgentRequestBodyCustomImage;
class CreateCustomAgentRequestBodyEnvironmentVariables extends $dara.Model {
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
exports.CreateCustomAgentRequestBodyEnvironmentVariables = CreateCustomAgentRequestBodyEnvironmentVariables;
class CreateCustomAgentRequestBodyEnvironment extends $dara.Model {
    static names() {
        return {
            variables: 'variables',
        };
    }
    static types() {
        return {
            variables: { 'type': 'array', 'itemType': CreateCustomAgentRequestBodyEnvironmentVariables },
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
exports.CreateCustomAgentRequestBodyEnvironment = CreateCustomAgentRequestBodyEnvironment;
class CreateCustomAgentRequestBodyHealthCheck extends $dara.Model {
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
exports.CreateCustomAgentRequestBodyHealthCheck = CreateCustomAgentRequestBodyHealthCheck;
class CreateCustomAgentRequestBodyLoggingSls extends $dara.Model {
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
exports.CreateCustomAgentRequestBodyLoggingSls = CreateCustomAgentRequestBodyLoggingSls;
class CreateCustomAgentRequestBodyLogging extends $dara.Model {
    static names() {
        return {
            sls: 'sls',
        };
    }
    static types() {
        return {
            sls: CreateCustomAgentRequestBodyLoggingSls,
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
exports.CreateCustomAgentRequestBodyLogging = CreateCustomAgentRequestBodyLogging;
class CreateCustomAgentRequestBodyNetworkAccessInternet extends $dara.Model {
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
exports.CreateCustomAgentRequestBodyNetworkAccessInternet = CreateCustomAgentRequestBodyNetworkAccessInternet;
class CreateCustomAgentRequestBodyNetworkAccessVpc extends $dara.Model {
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
exports.CreateCustomAgentRequestBodyNetworkAccessVpc = CreateCustomAgentRequestBodyNetworkAccessVpc;
class CreateCustomAgentRequestBodyNetwork extends $dara.Model {
    static names() {
        return {
            accessInternet: 'accessInternet',
            accessVpc: 'accessVpc',
        };
    }
    static types() {
        return {
            accessInternet: CreateCustomAgentRequestBodyNetworkAccessInternet,
            accessVpc: CreateCustomAgentRequestBodyNetworkAccessVpc,
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
exports.CreateCustomAgentRequestBodyNetwork = CreateCustomAgentRequestBodyNetwork;
class CreateCustomAgentRequestBodyObservability extends $dara.Model {
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
exports.CreateCustomAgentRequestBodyObservability = CreateCustomAgentRequestBodyObservability;
class CreateCustomAgentRequestBodyOssMounts extends $dara.Model {
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
exports.CreateCustomAgentRequestBodyOssMounts = CreateCustomAgentRequestBodyOssMounts;
class CreateCustomAgentRequestBodyProtocolPaths extends $dara.Model {
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
exports.CreateCustomAgentRequestBodyProtocolPaths = CreateCustomAgentRequestBodyProtocolPaths;
class CreateCustomAgentRequestBodyProtocol extends $dara.Model {
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
            paths: { 'type': 'array', 'itemType': CreateCustomAgentRequestBodyProtocolPaths },
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
exports.CreateCustomAgentRequestBodyProtocol = CreateCustomAgentRequestBodyProtocol;
class CreateCustomAgentRequestBodyRuntimeCompute extends $dara.Model {
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
exports.CreateCustomAgentRequestBodyRuntimeCompute = CreateCustomAgentRequestBodyRuntimeCompute;
class CreateCustomAgentRequestBodyRuntimeHpa extends $dara.Model {
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
exports.CreateCustomAgentRequestBodyRuntimeHpa = CreateCustomAgentRequestBodyRuntimeHpa;
class CreateCustomAgentRequestBodyRuntimeSessionPolicy extends $dara.Model {
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
exports.CreateCustomAgentRequestBodyRuntimeSessionPolicy = CreateCustomAgentRequestBodyRuntimeSessionPolicy;
class CreateCustomAgentRequestBodyRuntime extends $dara.Model {
    static names() {
        return {
            compute: 'compute',
            hpa: 'hpa',
            sessionPolicy: 'sessionPolicy',
        };
    }
    static types() {
        return {
            compute: CreateCustomAgentRequestBodyRuntimeCompute,
            hpa: CreateCustomAgentRequestBodyRuntimeHpa,
            sessionPolicy: CreateCustomAgentRequestBodyRuntimeSessionPolicy,
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
exports.CreateCustomAgentRequestBodyRuntime = CreateCustomAgentRequestBodyRuntime;
class CreateCustomAgentRequestBody extends $dara.Model {
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
            agenticFsMounts: { 'type': 'array', 'itemType': CreateCustomAgentRequestBodyAgenticFsMounts },
            artifact: CreateCustomAgentRequestBodyArtifact,
            customImage: CreateCustomAgentRequestBodyCustomImage,
            description: 'string',
            environment: CreateCustomAgentRequestBodyEnvironment,
            healthCheck: CreateCustomAgentRequestBodyHealthCheck,
            logging: CreateCustomAgentRequestBodyLogging,
            name: 'string',
            network: CreateCustomAgentRequestBodyNetwork,
            observability: CreateCustomAgentRequestBodyObservability,
            ossMounts: { 'type': 'array', 'itemType': CreateCustomAgentRequestBodyOssMounts },
            protocol: { 'type': 'array', 'itemType': CreateCustomAgentRequestBodyProtocol },
            roleArn: 'string',
            runtime: CreateCustomAgentRequestBodyRuntime,
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
exports.CreateCustomAgentRequestBody = CreateCustomAgentRequestBody;
class CreateCustomAgentRequest extends $dara.Model {
    static names() {
        return {
            body: 'body',
            clientToken: 'clientToken',
        };
    }
    static types() {
        return {
            body: CreateCustomAgentRequestBody,
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
exports.CreateCustomAgentRequest = CreateCustomAgentRequest;
//# sourceMappingURL=CreateCustomAgentRequest.js.map