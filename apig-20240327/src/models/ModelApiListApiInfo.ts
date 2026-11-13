// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AuthConfig } from "./AuthConfig";
import { ModelApiListApiInfoDeployCntMapValue } from "./ModelApiListApiInfoDeployCntMapValue";
import { HttpApiDeployConfig } from "./HttpApiDeployConfig";
import { ModelApiDomainInfo } from "./ModelApiDomainInfo";
import { GatewayInfo } from "./GatewayInfo";
import { ModelApiPolicyConfig } from "./ModelApiPolicyConfig";
import { HttpApiVersionInfo } from "./HttpApiVersionInfo";
import { ModelSelection } from "./ModelSelection";
import { HttpApiDomainInfo } from "./HttpApiDomainInfo";
import { HttpApiBackendMatchConditions } from "./HttpApiBackendMatchConditions";


export class ModelApiListApiInfoEnvironmentsGatewayInfo extends $dara.Model {
  /**
   * @remarks
   * The edition of the gateway instance. Valid values: Professional, Serverless, MultiTenantServerless, and Unknown.
   * 
   * @example
   * MultiTenantServerless
   */
  gatewayEdition?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * gw-xxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The name of the gateway instance.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayEdition: 'gatewayEdition',
      gatewayId: 'gatewayId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayEdition: 'string',
      gatewayId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelApiListApiInfoEnvironmentsServiceConfigs extends $dara.Model {
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * gs-xxx
   */
  gatewayServiceId?: string;
  /**
   * @remarks
   * The match conditions.
   */
  match?: HttpApiBackendMatchConditions;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * demo-service
   */
  name?: string;
  /**
   * @remarks
   * The service port.
   * 
   * @example
   * 8080
   */
  port?: string;
  /**
   * @remarks
   * The protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * svc-xxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * v1
   */
  version?: string;
  /**
   * @remarks
   * The weight.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayServiceId: 'gatewayServiceId',
      match: 'match',
      name: 'name',
      port: 'port',
      protocol: 'protocol',
      serviceId: 'serviceId',
      version: 'version',
      weight: 'weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayServiceId: 'string',
      match: HttpApiBackendMatchConditions,
      name: 'string',
      port: 'string',
      protocol: 'string',
      serviceId: 'string',
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelApiListApiInfoEnvironmentsSubDomains extends $dara.Model {
  /**
   * @remarks
   * The ID of the domain name.
   * 
   * @example
   * d-xxx
   */
  domainId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.example.com
   */
  name?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * Internet
   */
  networkType?: string;
  /**
   * @remarks
   * The access protocol.
   * 
   * @example
   * HTTP
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'domainId',
      name: 'name',
      networkType: 'networkType',
      protocol: 'protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      name: 'string',
      networkType: 'string',
      protocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelApiListApiInfoEnvironments extends $dara.Model {
  /**
   * @remarks
   * The alias of the environment.
   * 
   * @example
   * test
   */
  alias?: string;
  /**
   * @remarks
   * The release scenario.
   * 
   * @example
   * SingleService
   */
  backendScene?: string;
  /**
   * @remarks
   * The backend type.
   * 
   * @example
   * Service
   */
  backendType?: string;
  /**
   * @remarks
   * The custom domain name information published by the user.
   */
  customDomains?: HttpApiDomainInfo[];
  /**
   * @remarks
   * The read-only reason for the release failure.
   * 
   * @example
   * The model configuration is unavailable
   */
  deployErrorMessage?: string;
  /**
   * @remarks
   * The release status of the API in the current environment.
   * 
   * @example
   * Deployed
   */
  deployStatus?: string;
  /**
   * @remarks
   * The ID of the environment.
   * 
   * @example
   * env-xxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The gateway instance information to which the current environment belongs.
   */
  gatewayInfo?: ModelApiListApiInfoEnvironmentsGatewayInfo;
  /**
   * @remarks
   * The name of the environment.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The existing service configurations.
   */
  serviceConfigs?: ModelApiListApiInfoEnvironmentsServiceConfigs[];
  /**
   * @remarks
   * The list of default domain names for the environment.
   */
  subDomains?: ModelApiListApiInfoEnvironmentsSubDomains[];
  static names(): { [key: string]: string } {
    return {
      alias: 'alias',
      backendScene: 'backendScene',
      backendType: 'backendType',
      customDomains: 'customDomains',
      deployErrorMessage: 'deployErrorMessage',
      deployStatus: 'deployStatus',
      environmentId: 'environmentId',
      gatewayInfo: 'gatewayInfo',
      name: 'name',
      serviceConfigs: 'serviceConfigs',
      subDomains: 'subDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      backendScene: 'string',
      backendType: 'string',
      customDomains: { 'type': 'array', 'itemType': HttpApiDomainInfo },
      deployErrorMessage: 'string',
      deployStatus: 'string',
      environmentId: 'string',
      gatewayInfo: ModelApiListApiInfoEnvironmentsGatewayInfo,
      name: 'string',
      serviceConfigs: { 'type': 'array', 'itemType': ModelApiListApiInfoEnvironmentsServiceConfigs },
      subDomains: { 'type': 'array', 'itemType': ModelApiListApiInfoEnvironmentsSubDomains },
    };
  }

  validate() {
    if(Array.isArray(this.customDomains)) {
      $dara.Model.validateArray(this.customDomains);
    }
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    if(Array.isArray(this.serviceConfigs)) {
      $dara.Model.validateArray(this.serviceConfigs);
    }
    if(Array.isArray(this.subDomains)) {
      $dara.Model.validateArray(this.subDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelApiListApiInfoIngressInfoEnvironmentInfo extends $dara.Model {
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-d00000000000000000000
   */
  environmentId?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'environmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelApiListApiInfoIngressInfoK8sClusterInfo extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c00000000000000000000000000000001
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelApiListApiInfoIngressInfo extends $dara.Model {
  /**
   * @remarks
   * The environment context.
   */
  environmentInfo?: ModelApiListApiInfoIngressInfoEnvironmentInfo;
  /**
   * @remarks
   * The ingress class being listened to.
   * 
   * @example
   * apig
   */
  ingressClass?: string;
  /**
   * @remarks
   * The Kubernetes cluster information.
   */
  k8sClusterInfo?: ModelApiListApiInfoIngressInfoK8sClusterInfo;
  /**
   * @remarks
   * Specifies whether to update the address in the ingress status.
   * 
   * @example
   * false
   */
  overrideIngressIp?: boolean;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * src-d00000000000000000000
   */
  sourceId?: string;
  /**
   * @remarks
   * The watched namespace.
   * 
   * @example
   * default
   */
  watchNamespace?: string;
  static names(): { [key: string]: string } {
    return {
      environmentInfo: 'environmentInfo',
      ingressClass: 'ingressClass',
      k8sClusterInfo: 'k8sClusterInfo',
      overrideIngressIp: 'overrideIngressIp',
      sourceId: 'sourceId',
      watchNamespace: 'watchNamespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environmentInfo: ModelApiListApiInfoIngressInfoEnvironmentInfo,
      ingressClass: 'string',
      k8sClusterInfo: ModelApiListApiInfoIngressInfoK8sClusterInfo,
      overrideIngressIp: 'boolean',
      sourceId: 'string',
      watchNamespace: 'string',
    };
  }

  validate() {
    if(this.environmentInfo && typeof (this.environmentInfo as any).validate === 'function') {
      (this.environmentInfo as any).validate();
    }
    if(this.k8sClusterInfo && typeof (this.k8sClusterInfo as any).validate === 'function') {
      (this.k8sClusterInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelApiListApiInfoModelApiInfoResolvedModelSelection extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the group expansion collection for the current configuration is completely read. A complete empty group returns true and an empty array. A missing, invalid group, or read failure returns false. This does not represent the online release or consumer permission status.
   * 
   * @example
   * true
   */
  complete?: boolean;
  /**
   * @remarks
   * The model card IDs of the publicly selected models for the current configuration, stably sorted and deduplicated. Logical models retain their own IDs, excluding fallback-only targets or underlying execution cards of logical models. If complete is false, this is an empty array and must not be interpreted as zero models.
   */
  modelCardIds?: string[];
  static names(): { [key: string]: string } {
    return {
      complete: 'complete',
      modelCardIds: 'modelCardIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complete: 'boolean',
      modelCardIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.modelCardIds)) {
      $dara.Model.validateArray(this.modelCardIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelApiListApiInfoModelApiInfo extends $dara.Model {
  /**
   * @remarks
   * The save state of the direct supply fallback. A value of false indicates that it is disabled. This only reflects the saved configuration and does not indicate successful release or activation.
   * 
   * @example
   * false
   */
  directSupplyFallbackEnabled?: boolean;
  /**
   * @remarks
   * The model exposure mode. Only SELECTED is supported in the first phase.
   * 
   * @example
   * SELECTED
   */
  exposureMode?: string;
  /**
   * @remarks
   * The model selection configuration.
   */
  modelSelection?: ModelSelection;
  /**
   * @remarks
   * The read-only public model collection for the current configuration. If complete is false, the collection is unknown, and partial members must not be used as the full count.
   */
  resolvedModelSelection?: ModelApiListApiInfoModelApiInfoResolvedModelSelection;
  /**
   * @remarks
   * The routing mode. Only Direct is supported in the first phase.
   * 
   * @example
   * Direct
   */
  routingMode?: string;
  static names(): { [key: string]: string } {
    return {
      directSupplyFallbackEnabled: 'directSupplyFallbackEnabled',
      exposureMode: 'exposureMode',
      modelSelection: 'modelSelection',
      resolvedModelSelection: 'resolvedModelSelection',
      routingMode: 'routingMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directSupplyFallbackEnabled: 'boolean',
      exposureMode: 'string',
      modelSelection: ModelSelection,
      resolvedModelSelection: ModelApiListApiInfoModelApiInfoResolvedModelSelection,
      routingMode: 'string',
    };
  }

  validate() {
    if(this.modelSelection && typeof (this.modelSelection as any).validate === 'function') {
      (this.modelSelection as any).validate();
    }
    if(this.resolvedModelSelection && typeof (this.resolvedModelSelection as any).validate === 'function') {
      (this.resolvedModelSelection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelApiListApiInfoModelCardRuntimeDiagnostics extends $dara.Model {
  /**
   * @remarks
   * The index of the corresponding deployment configuration.
   * 
   * @example
   * 0
   */
  deployConfigIndex?: number;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  /**
   * @remarks
   * Indicates whether the marker of the deployment configuration is invalid.
   * 
   * @example
   * true
   */
  invalidConfiguration?: boolean;
  /**
   * @remarks
   * The list of reasons for invalidity.
   */
  reasons?: string[];
  static names(): { [key: string]: string } {
    return {
      deployConfigIndex: 'deployConfigIndex',
      gatewayId: 'gatewayId',
      invalidConfiguration: 'invalidConfiguration',
      reasons: 'reasons',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployConfigIndex: 'number',
      gatewayId: 'string',
      invalidConfiguration: 'boolean',
      reasons: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.reasons)) {
      $dara.Model.validateArray(this.reasons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelApiListApiInfo extends $dara.Model {
  /**
   * @remarks
   * The collection of agent protocols for the model API.
   */
  agentProtocols?: string[];
  /**
   * @remarks
   * The API protocols created by scenario. APIs created by selecting models provide open paths through modelApiInfo.
   */
  aiProtocols?: string[];
  /**
   * @remarks
   * The API authentication configurations created by scenario.
   */
  authConfig?: AuthConfig;
  /**
   * @remarks
   * The API base path.
   * 
   * @example
   * /v1
   */
  basePath?: string;
  /**
   * @remarks
   * The read-only association identifier for the creation request. It is returned only within approximately 24 hours after the first persistence and when the association with the same instance is unique after normal authentication. It is omitted when the identifier is historical, expired, or ambiguous. You cannot use this identifier to determine whether publishing or authorization is successful, nor does it replace the creation idempotency record.
   * 
   * @example
   * b1907ca4-952c-4c5f-8d1f-0aa6ae339c96
   */
  creationClientToken?: string;
  /**
   * @remarks
   * The optional read-only deletion status of the new model API. Deleting indicates that the deletion request is accepted but not completed. DeleteFailed indicates that the background deletion failed, and you can use the original clientToken to retry DeleteModelApi. This field is not returned for normal deployment and historical undeployment. The absence of this field does not indicate that the deletion is complete.
   * 
   * @example
   * Deleting
   */
  deleteStatus?: string;
  /**
   * @remarks
   * The publish status of the API operation.
   * 
   * @example
   * {"example-scope":{"deployedCnt":1,"cnt":1}}
   */
  deployCntMap?: { [key: string]: ModelApiListApiInfoDeployCntMapValue };
  /**
   * @remarks
   * The API deployment configurations and associated services created by scenario, provided as read-only list information.
   */
  deployConfigs?: HttpApiDeployConfig[];
  /**
   * @remarks
   * The read-only reason for deployment or deletion failure.
   * 
   * @example
   * The model configuration is unavailable
   */
  deployErrorMessage?: string;
  /**
   * @remarks
   * The API description.
   * 
   * @example
   * Model API for business integration
   */
  description?: string;
  /**
   * @remarks
   * The selected domain IDs.
   */
  domainIds?: string[];
  /**
   * @remarks
   * The read-only domain details and default domain flag.
   */
  domainInfos?: ModelApiDomainInfo[];
  /**
   * @remarks
   * Specifies whether to enable authentication.
   * 
   * @example
   * true
   */
  enableAuth?: boolean;
  /**
   * @remarks
   * The read-only default environment ID of the bound instance.
   * 
   * @example
   * env-d00000000000000000000
   */
  environmentId?: string;
  /**
   * @remarks
   * The publish environment context of the API.
   */
  environments?: ModelApiListApiInfoEnvironments[];
  /**
   * @remarks
   * The ID of the gateway instance to which the API belongs.
   * 
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  /**
   * @remarks
   * The read-only information of the bound instance.
   */
  gatewayInfo?: GatewayInfo;
  /**
   * @remarks
   * The model API ID.
   * 
   * @example
   * api-xxx
   */
  httpApiId?: string;
  /**
   * @remarks
   * The HTTP ingress API information.
   */
  ingressInfo?: ModelApiListApiInfoIngressInfo;
  /**
   * @remarks
   * The public selection information of the model API.
   */
  modelApiInfo?: ModelApiListApiInfoModelApiInfo;
  /**
   * @remarks
   * The read-only runtime diagnostics of the model card, derived from the original markers of the deployment configuration. This is used only for the readability and diagnosability of abnormal drafts.
   */
  modelCardRuntimeDiagnostics?: ModelApiListApiInfoModelCardRuntimeDiagnostics[];
  /**
   * @remarks
   * The model category of the model API.
   * 
   * @example
   * Text
   */
  modelCategory?: string;
  /**
   * @remarks
   * The API name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The inline configurations for AI request logs and AI security protection.
   */
  policyConfigs?: ModelApiPolicyConfig[];
  /**
   * @remarks
   * The list of API protocols.
   */
  protocols?: string[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-xxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The deployment status on the bound instance. In the new version, Undeploying indicates that the deletion is in progress, and UndeployFailed indicates that the deletion failed. Refer to deleteStatus to determine whether the operation is a deletion.
   * 
   * @example
   * Deployed
   */
  status?: string;
  /**
   * @remarks
   * The API type.
   * 
   * @example
   * LLM
   */
  type?: string;
  /**
   * @remarks
   * The API versioning information.
   */
  versionInfo?: HttpApiVersionInfo;
  static names(): { [key: string]: string } {
    return {
      agentProtocols: 'agentProtocols',
      aiProtocols: 'aiProtocols',
      authConfig: 'authConfig',
      basePath: 'basePath',
      creationClientToken: 'creationClientToken',
      deleteStatus: 'deleteStatus',
      deployCntMap: 'deployCntMap',
      deployConfigs: 'deployConfigs',
      deployErrorMessage: 'deployErrorMessage',
      description: 'description',
      domainIds: 'domainIds',
      domainInfos: 'domainInfos',
      enableAuth: 'enableAuth',
      environmentId: 'environmentId',
      environments: 'environments',
      gatewayId: 'gatewayId',
      gatewayInfo: 'gatewayInfo',
      httpApiId: 'httpApiId',
      ingressInfo: 'ingressInfo',
      modelApiInfo: 'modelApiInfo',
      modelCardRuntimeDiagnostics: 'modelCardRuntimeDiagnostics',
      modelCategory: 'modelCategory',
      name: 'name',
      policyConfigs: 'policyConfigs',
      protocols: 'protocols',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      type: 'type',
      versionInfo: 'versionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProtocols: { 'type': 'array', 'itemType': 'string' },
      aiProtocols: { 'type': 'array', 'itemType': 'string' },
      authConfig: AuthConfig,
      basePath: 'string',
      creationClientToken: 'string',
      deleteStatus: 'string',
      deployCntMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModelApiListApiInfoDeployCntMapValue },
      deployConfigs: { 'type': 'array', 'itemType': HttpApiDeployConfig },
      deployErrorMessage: 'string',
      description: 'string',
      domainIds: { 'type': 'array', 'itemType': 'string' },
      domainInfos: { 'type': 'array', 'itemType': ModelApiDomainInfo },
      enableAuth: 'boolean',
      environmentId: 'string',
      environments: { 'type': 'array', 'itemType': ModelApiListApiInfoEnvironments },
      gatewayId: 'string',
      gatewayInfo: GatewayInfo,
      httpApiId: 'string',
      ingressInfo: ModelApiListApiInfoIngressInfo,
      modelApiInfo: ModelApiListApiInfoModelApiInfo,
      modelCardRuntimeDiagnostics: { 'type': 'array', 'itemType': ModelApiListApiInfoModelCardRuntimeDiagnostics },
      modelCategory: 'string',
      name: 'string',
      policyConfigs: { 'type': 'array', 'itemType': ModelApiPolicyConfig },
      protocols: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      status: 'string',
      type: 'string',
      versionInfo: HttpApiVersionInfo,
    };
  }

  validate() {
    if(Array.isArray(this.agentProtocols)) {
      $dara.Model.validateArray(this.agentProtocols);
    }
    if(Array.isArray(this.aiProtocols)) {
      $dara.Model.validateArray(this.aiProtocols);
    }
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(this.deployCntMap) {
      $dara.Model.validateMap(this.deployCntMap);
    }
    if(Array.isArray(this.deployConfigs)) {
      $dara.Model.validateArray(this.deployConfigs);
    }
    if(Array.isArray(this.domainIds)) {
      $dara.Model.validateArray(this.domainIds);
    }
    if(Array.isArray(this.domainInfos)) {
      $dara.Model.validateArray(this.domainInfos);
    }
    if(Array.isArray(this.environments)) {
      $dara.Model.validateArray(this.environments);
    }
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    if(this.ingressInfo && typeof (this.ingressInfo as any).validate === 'function') {
      (this.ingressInfo as any).validate();
    }
    if(this.modelApiInfo && typeof (this.modelApiInfo as any).validate === 'function') {
      (this.modelApiInfo as any).validate();
    }
    if(Array.isArray(this.modelCardRuntimeDiagnostics)) {
      $dara.Model.validateArray(this.modelCardRuntimeDiagnostics);
    }
    if(Array.isArray(this.policyConfigs)) {
      $dara.Model.validateArray(this.policyConfigs);
    }
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    if(this.versionInfo && typeof (this.versionInfo as any).validate === 'function') {
      (this.versionInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

