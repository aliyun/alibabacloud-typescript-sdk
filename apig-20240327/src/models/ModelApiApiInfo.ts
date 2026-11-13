// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelApiApiInfoDeployCntMapValue } from "./ModelApiApiInfoDeployCntMapValue";
import { ModelApiDomainInfo } from "./ModelApiDomainInfo";
import { GatewayInfo } from "./GatewayInfo";
import { ModelApiPolicyConfig } from "./ModelApiPolicyConfig";
import { HttpApiVersionInfo } from "./HttpApiVersionInfo";
import { ModelSelection } from "./ModelSelection";


export class ModelApiApiInfoIngressInfoEnvironmentInfo extends $dara.Model {
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

export class ModelApiApiInfoIngressInfoK8sClusterInfo extends $dara.Model {
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

export class ModelApiApiInfoIngressInfo extends $dara.Model {
  /**
   * @remarks
   * The environment context.
   */
  environmentInfo?: ModelApiApiInfoIngressInfoEnvironmentInfo;
  /**
   * @remarks
   * The ingress class.
   * 
   * @example
   * apig
   */
  ingressClass?: string;
  /**
   * @remarks
   * The Kubernetes cluster information.
   */
  k8sClusterInfo?: ModelApiApiInfoIngressInfoK8sClusterInfo;
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
      environmentInfo: ModelApiApiInfoIngressInfoEnvironmentInfo,
      ingressClass: 'string',
      k8sClusterInfo: ModelApiApiInfoIngressInfoK8sClusterInfo,
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

export class ModelApiApiInfoModelApiInfoResolvedModelSelection extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the expanded collection of the current configuration is fully read. A fully empty group returns true and an empty array. Missing, invalid groups, or read failures return false. This does not reflect the online publishing or consumer permission status.
   * 
   * @example
   * true
   */
  complete?: boolean;
  /**
   * @remarks
   * The identities of the models selected for public exposure in the current configuration, stably sorted and deduplicated. Logical models retain their own IDs and do not include fallback-only targets or underlying execution cards of logical models. If complete is false, this is an empty array and must not be interpreted as zero models.
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

export class ModelApiApiInfoModelApiInfo extends $dara.Model {
  /**
   * @remarks
   * The saved state of the direct supply fallback. A value of false indicates that it is disabled. This only reflects the saved configuration and does not indicate successful publishing or activation.
   * 
   * @example
   * false
   */
  directSupplyFallbackEnabled?: boolean;
  /**
   * @remarks
   * The model exposure mode. Only SELECTED is supported in Phase 1.
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
   * The read-only collection of publicly exposed models for the current configuration. It retains the modelSelection edit source, but the successful online collection is still subject to publishedEndpoints.
   */
  resolvedModelSelection?: ModelApiApiInfoModelApiInfoResolvedModelSelection;
  /**
   * @remarks
   * The routing mode. Only Direct is supported in Phase 1.
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
      resolvedModelSelection: ModelApiApiInfoModelApiInfoResolvedModelSelection,
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

export class ModelApiApiInfoModelCardRuntimeDiagnostics extends $dara.Model {
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

export class ModelApiApiInfoPublishedEndpoints extends $dara.Model {
  /**
   * @remarks
   * The name of the successfully published built-in endpoint.
   * 
   * @example
   * model-responses
   */
  endpoint?: string;
  /**
   * @remarks
   * The collection of executable ModelCard IDs successfully published for this path.
   */
  modelCardIds?: string[];
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      modelCardIds: 'modelCardIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
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

export class ModelApiApiInfo extends $dara.Model {
  /**
   * @remarks
   * The collection of agent protocols for the model API.
   */
  agentProtocols?: string[];
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
   * The read-only correlation identifier for creation requests. It is returned only when the association with the same instance is unique within approximately 24 hours after the first persistence following normal authentication. It is omitted for historical, expired, or ambiguous cases. This identifier cannot be used to determine the success of publishing or authorization, nor does it replace the creation of idempotent records.
   * 
   * @example
   * b1907ca4-952c-4c5f-8d1f-0aa6ae339c96
   */
  creationClientToken?: string;
  /**
   * @remarks
   * The deletion status of the new version model API. This field is read-only and optional. Deleting indicates that the deletion request is accepted but not yet completed. DeleteFailed indicates that the background deletion failed, and you can use the original clientToken to retry the DeleteModelApi operation. This field is not returned for normal publishing and historical undeployment. The absence of this field does not indicate that the deletion is complete.
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
  deployCntMap?: { [key: string]: ModelApiApiInfoDeployCntMapValue };
  /**
   * @remarks
   * The reason for the deployment or deletion failure. This field is read-only.
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
   * The read-only domain name details and the default domain name flag.
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
   * The default environment ID of the bound instance. This field is read-only.
   * 
   * @example
   * env-d00000000000000000000
   */
  environmentId?: string;
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
  ingressInfo?: ModelApiApiInfoIngressInfo;
  /**
   * @remarks
   * The model API public selection information.
   */
  modelApiInfo?: ModelApiApiInfoModelApiInfo;
  /**
   * @remarks
   * The read-only runtime diagnostic information for model cards, derived from the original markers of the deployment configuration. It is used only for the readability and diagnostics of abnormal drafts.
   */
  modelCardRuntimeDiagnostics?: ModelApiApiInfoModelCardRuntimeDiagnostics[];
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
   * The collection of successfully published per-path executable models. This field is read-only. It is empty when a snapshot is missing, which does not represent consumer permission.
   */
  publishedEndpoints?: ModelApiApiInfoPublishedEndpoints[];
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
   * The publishing status on the bound instance. In the new version, the status is Undeploying when a deletion is in progress, and UndeployFailed when a deletion fails. To determine whether an operation is a deletion, refer to the deleteStatus field.
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
      basePath: 'basePath',
      creationClientToken: 'creationClientToken',
      deleteStatus: 'deleteStatus',
      deployCntMap: 'deployCntMap',
      deployErrorMessage: 'deployErrorMessage',
      description: 'description',
      domainIds: 'domainIds',
      domainInfos: 'domainInfos',
      enableAuth: 'enableAuth',
      environmentId: 'environmentId',
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
      publishedEndpoints: 'publishedEndpoints',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      type: 'type',
      versionInfo: 'versionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProtocols: { 'type': 'array', 'itemType': 'string' },
      basePath: 'string',
      creationClientToken: 'string',
      deleteStatus: 'string',
      deployCntMap: { 'type': 'map', 'keyType': 'string', 'valueType': ModelApiApiInfoDeployCntMapValue },
      deployErrorMessage: 'string',
      description: 'string',
      domainIds: { 'type': 'array', 'itemType': 'string' },
      domainInfos: { 'type': 'array', 'itemType': ModelApiDomainInfo },
      enableAuth: 'boolean',
      environmentId: 'string',
      gatewayId: 'string',
      gatewayInfo: GatewayInfo,
      httpApiId: 'string',
      ingressInfo: ModelApiApiInfoIngressInfo,
      modelApiInfo: ModelApiApiInfoModelApiInfo,
      modelCardRuntimeDiagnostics: { 'type': 'array', 'itemType': ModelApiApiInfoModelCardRuntimeDiagnostics },
      modelCategory: 'string',
      name: 'string',
      policyConfigs: { 'type': 'array', 'itemType': ModelApiPolicyConfig },
      protocols: { 'type': 'array', 'itemType': 'string' },
      publishedEndpoints: { 'type': 'array', 'itemType': ModelApiApiInfoPublishedEndpoints },
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
    if(this.deployCntMap) {
      $dara.Model.validateMap(this.deployCntMap);
    }
    if(Array.isArray(this.domainIds)) {
      $dara.Model.validateArray(this.domainIds);
    }
    if(Array.isArray(this.domainInfos)) {
      $dara.Model.validateArray(this.domainInfos);
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
    if(Array.isArray(this.publishedEndpoints)) {
      $dara.Model.validateArray(this.publishedEndpoints);
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

