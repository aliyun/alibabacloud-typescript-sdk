// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerAccessOverviewResponseBodyDataGateway extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI gateway instance to which the resource belongs.
   * 
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  /**
   * @remarks
   * The name of the consumer.
   * 
   * @example
   * beta-consumer
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetConsumerAccessOverviewResponseBodyDataImpactsAuthorizationCounts extends $dara.Model {
  /**
   * @remarks
   * The number of agent APIs with configured authorizations.
   * 
   * @example
   * 1
   */
  agentApis?: number;
  /**
   * @remarks
   * The number of MCP services with configured authorizations.
   * 
   * @example
   * 1
   */
  mcpServers?: number;
  /**
   * @remarks
   * The number of model APIs with configured authorizations.
   * 
   * @example
   * 1
   */
  modelApis?: number;
  static names(): { [key: string]: string } {
    return {
      agentApis: 'agentApis',
      mcpServers: 'mcpServers',
      modelApis: 'modelApis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentApis: 'number',
      mcpServers: 'number',
      modelApis: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerAccessOverviewResponseBodyDataImpactsGateway extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI gateway instance to which the resource belongs.
   * 
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  /**
   * @remarks
   * The name of the consumer.
   * 
   * @example
   * beta-consumer
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetConsumerAccessOverviewResponseBodyDataImpacts extends $dara.Model {
  /**
   * @remarks
   * The number of authorization configurations by resource type.
   * 
   * @example
   * {"modelApis":1,"mcpServers":0,"agentApis":0}
   */
  authorizationCounts?: GetConsumerAccessOverviewResponseBodyDataImpactsAuthorizationCounts;
  /**
   * @remarks
   * The gateway identifier and name in the current context.
   * 
   * @example
   * {"gatewayId":"gw-example01","name":"team-ai-gateway"}
   */
  gateway?: GetConsumerAccessOverviewResponseBodyDataImpactsGateway;
  /**
   * @remarks
   * The collection of resources for which the consumer has been granted authorization.
   * 
   * @example
   * ["team-chat"]
   */
  resources?: string[];
  static names(): { [key: string]: string } {
    return {
      authorizationCounts: 'authorizationCounts',
      gateway: 'gateway',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationCounts: GetConsumerAccessOverviewResponseBodyDataImpactsAuthorizationCounts,
      gateway: GetConsumerAccessOverviewResponseBodyDataImpactsGateway,
      resources: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.authorizationCounts && typeof (this.authorizationCounts as any).validate === 'function') {
      (this.authorizationCounts as any).validate();
    }
    if(this.gateway && typeof (this.gateway as any).validate === 'function') {
      (this.gateway as any).validate();
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerAccessOverviewResponseBodyDataModelTpmLimits extends $dara.Model {
  /**
   * @remarks
   * The maximum tokens per minute for the current consumer using this model. Returned only when a rule is configured for the consumer.
   * 
   * @example
   * 300
   */
  consumerTpm?: number;
  /**
   * @remarks
   * The maximum tokens per minute shared by all consumers for this model within the instance. Returned only when a global limit is configured.
   * 
   * @example
   * 1800
   */
  globalTpm?: number;
  /**
   * @remarks
   * The actual model card ID starting with msc- or the logical model ID starting with vm-.
   * 
   * @example
   * msc-example01
   */
  modelId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerTpm: 'consumerTpm',
      globalTpm: 'globalTpm',
      modelId: 'modelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerTpm: 'number',
      globalTpm: 'number',
      modelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerAccessOverviewResponseBodyDataQuotas extends $dara.Model {
  /**
   * @remarks
   * The quota limit for the current rule, using the same unit of measurement as the unit field.
   * 
   * @example
   * 1000000
   */
  limit?: number;
  /**
   * @remarks
   * The name of the consumer.
   * 
   * @example
   * beta-consumer
   */
  name?: string;
  /**
   * @remarks
   * The multiplier for the custom period.
   * 
   * @example
   * 1
   */
  periodMultiplier?: number;
  /**
   * @remarks
   * The type of the quota period. Valid values: day, week, and month.
   * 
   * @example
   * day
   */
  periodType?: string;
  /**
   * @remarks
   * The ID of the quota rule.
   * 
   * @example
   * qr-d00000000000000000000
   */
  ruleId?: string;
  /**
   * @remarks
   * The ID of the subject to which the quota belongs.
   * 
   * @example
   * cs-d00000000000000000000
   */
  subjectId?: string;
  /**
   * @remarks
   * The name of the subject to which the quota belongs.
   * 
   * @example
   * beta-consumer
   */
  subjectName?: string;
  /**
   * @remarks
   * The type of the quota subject. Valid values: consumer and consumer_group.
   * 
   * @example
   * consumer
   */
  subjectType?: string;
  /**
   * @remarks
   * The unit of measurement for the quota.
   * 
   * @example
   * token
   */
  unit?: string;
  /**
   * @remarks
   * The used quota within the period corresponding to the current rule, using the same unit of measurement as the unit field.
   * 
   * @example
   * 100
   */
  used?: number;
  /**
   * @remarks
   * The alignment of the period window. Valid values: calendar for natural periods and epoch for custom base periods.
   * 
   * @example
   * calendar
   */
  windowAlignment?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      name: 'name',
      periodMultiplier: 'periodMultiplier',
      periodType: 'periodType',
      ruleId: 'ruleId',
      subjectId: 'subjectId',
      subjectName: 'subjectName',
      subjectType: 'subjectType',
      unit: 'unit',
      used: 'used',
      windowAlignment: 'windowAlignment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      name: 'string',
      periodMultiplier: 'number',
      periodType: 'string',
      ruleId: 'string',
      subjectId: 'string',
      subjectName: 'string',
      subjectType: 'string',
      unit: 'string',
      used: 'number',
      windowAlignment: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerAccessOverviewResponseBodyDataResourcesEntitlementState extends $dara.Model {
  /**
   * @remarks
   * The applied authorization revision number.
   * 
   * @example
   * 1
   */
  appliedRevision?: number;
  /**
   * @remarks
   * The expected authorization revision number to be delivered.
   * 
   * @example
   * 2
   */
  desiredRevision?: number;
  /**
   * @remarks
   * The error description when processing fails. Empty when no error occurs.
   * 
   * @example
   * Configuration delivery failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status of the entitlement delivery. Valid values: Pending, Applying, Committed, and Failed.
   * 
   * @example
   * Committed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appliedRevision: 'appliedRevision',
      desiredRevision: 'desiredRevision',
      errorMessage: 'errorMessage',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedRevision: 'number',
      desiredRevision: 'number',
      errorMessage: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerAccessOverviewResponseBodyDataResourcesModelGroupsModels extends $dara.Model {
  /**
   * @remarks
   * The name of the consumer group that grants this authorization.
   * 
   * @example
   * beta-consumer-group
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The model identifier. A standard model uses the source model card ID, while a logical model endpoint uses a vm- prefix.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  /**
   * @remarks
   * The model source ID. Use the modelSourceId returned by CreateAiModelSource.
   * 
   * @example
   * ms-d00000000000000000000
   */
  modelSourceId?: string;
  /**
   * @remarks
   * The display name of the model source.
   * 
   * @example
   * Model Studio model source
   */
  modelSourceName?: string;
  /**
   * @remarks
   * The model type. Valid values: Model and LogicalModel.
   * 
   * @example
   * Model
   */
  modelType?: string;
  /**
   * @remarks
   * The name of the consumer.
   * 
   * @example
   * beta-consumer
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupName: 'consumerGroupName',
      modelCardId: 'modelCardId',
      modelSourceId: 'modelSourceId',
      modelSourceName: 'modelSourceName',
      modelType: 'modelType',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupName: 'string',
      modelCardId: 'string',
      modelSourceId: 'string',
      modelSourceName: 'string',
      modelType: 'string',
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

export class GetConsumerAccessOverviewResponseBodyDataResourcesModelGroups extends $dara.Model {
  /**
   * @remarks
   * The name of the consumer group that grants this authorization.
   * 
   * @example
   * beta-consumer-group
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The model group ID. Use the modelGroupId returned by CreateModelGroup.
   * 
   * @example
   * mg-d00000000000000000000
   */
  modelGroupId?: string;
  /**
   * @remarks
   * The list of accessible model endpoints within the current resource scope.
   * 
   * @example
   * [{"modelCardId":"msc-example01","name":"text-chat","modelType":"Model","modelSourceId":"ms-example01","modelSourceName":"team-model-source"}]
   */
  models?: GetConsumerAccessOverviewResponseBodyDataResourcesModelGroupsModels[];
  /**
   * @remarks
   * The name of the consumer.
   * 
   * @example
   * beta-consumer
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupName: 'consumerGroupName',
      modelGroupId: 'modelGroupId',
      models: 'models',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupName: 'string',
      modelGroupId: 'string',
      models: { 'type': 'array', 'itemType': GetConsumerAccessOverviewResponseBodyDataResourcesModelGroupsModels },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerAccessOverviewResponseBodyDataResourcesModels extends $dara.Model {
  /**
   * @remarks
   * The name of the consumer group that grants this authorization.
   * 
   * @example
   * beta-consumer-group
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The model identifier. A standard model uses the source model card ID, while a logical model endpoint uses a vm- prefix.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  /**
   * @remarks
   * The model source ID. Use the modelSourceId returned by CreateAiModelSource.
   * 
   * @example
   * ms-d00000000000000000000
   */
  modelSourceId?: string;
  /**
   * @remarks
   * The display name of the model source.
   * 
   * @example
   * Model Studio model source
   */
  modelSourceName?: string;
  /**
   * @remarks
   * The model type. Valid values: Model and LogicalModel.
   * 
   * @example
   * Model
   */
  modelType?: string;
  /**
   * @remarks
   * The name of the consumer.
   * 
   * @example
   * beta-consumer
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroupName: 'consumerGroupName',
      modelCardId: 'modelCardId',
      modelSourceId: 'modelSourceId',
      modelSourceName: 'modelSourceName',
      modelType: 'modelType',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupName: 'string',
      modelCardId: 'string',
      modelSourceId: 'string',
      modelSourceName: 'string',
      modelType: 'string',
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

export class GetConsumerAccessOverviewResponseBodyDataResources extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the authorization scope of the resource includes all models.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  allModels?: boolean;
  /**
   * @remarks
   * Specifies whether the authorization scope of the MCP resource includes all tools.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  allTools?: boolean;
  /**
   * @remarks
   * The name of the consumer group that grants this authorization.
   * 
   * @example
   * beta-consumer-group
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The existing desired and applied states of the model entitlement projection. Omitted when no state row exists.
   * 
   * @example
   * {"desiredRevision":2,"appliedRevision":1,"status":"Pending"}
   */
  entitlementState?: GetConsumerAccessOverviewResponseBodyDataResourcesEntitlementState;
  /**
   * @remarks
   * The expiration time. The value is null for long-term authorizations, an RFC 3339 formatted string for short-term authorizations with lossless projection, and omitted when unknown.
   * 
   * @example
   * 2026-12-31T23:59:59Z
   * 
   * **if can be null:**
   * true
   */
  expireTime?: string;
  /**
   * @remarks
   * The accessible model groups and their model collections.
   * 
   * @example
   * [{"modelGroupId":"mg-example01","name":"chat-models","models":[{"modelCardId":"msc-example01","name":"text-chat","modelType":"Model","modelSourceId":"ms-example01","modelSourceName":"team-model-source"}]}]
   */
  modelGroups?: GetConsumerAccessOverviewResponseBodyDataResourcesModelGroups[];
  /**
   * @remarks
   * The list of accessible model endpoints within the current resource scope.
   * 
   * @example
   * [{"modelCardId":"msc-example01","name":"text-chat","modelType":"Model","modelSourceId":"ms-example01","modelSourceName":"team-model-source"}]
   */
  models?: GetConsumerAccessOverviewResponseBodyDataResourcesModels[];
  /**
   * @remarks
   * The name of the consumer.
   * 
   * @example
   * beta-consumer
   */
  name?: string;
  /**
   * @remarks
   * The immutable identifier of the authorized resource.
   * 
   * @example
   * api-d00000000000000000000
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values: ModelApi, MCP, and Agent.
   * 
   * @example
   * ModelApi
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of MCP tool names that are allowed to be called within the resource scope.
   * 
   * @example
   * ["search"]
   */
  tools?: string[];
  static names(): { [key: string]: string } {
    return {
      allModels: 'allModels',
      allTools: 'allTools',
      consumerGroupName: 'consumerGroupName',
      entitlementState: 'entitlementState',
      expireTime: 'expireTime',
      modelGroups: 'modelGroups',
      models: 'models',
      name: 'name',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allModels: 'boolean',
      allTools: 'boolean',
      consumerGroupName: 'string',
      entitlementState: GetConsumerAccessOverviewResponseBodyDataResourcesEntitlementState,
      expireTime: 'string',
      modelGroups: { 'type': 'array', 'itemType': GetConsumerAccessOverviewResponseBodyDataResourcesModelGroups },
      models: { 'type': 'array', 'itemType': GetConsumerAccessOverviewResponseBodyDataResourcesModels },
      name: 'string',
      resourceId: 'string',
      resourceType: 'string',
      tools: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.entitlementState && typeof (this.entitlementState as any).validate === 'function') {
      (this.entitlementState as any).validate();
    }
    if(Array.isArray(this.modelGroups)) {
      $dara.Model.validateArray(this.modelGroups);
    }
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerAccessOverviewResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the query result is complete. A successful response returns a complete projection.
   * 
   * @example
   * true
   */
  complete?: boolean;
  /**
   * @remarks
   * The gateway identifier and name in the current context.
   * 
   * @example
   * {"gatewayId":"gw-example01","name":"team-ai-gateway"}
   */
  gateway?: GetConsumerAccessOverviewResponseBodyDataGateway;
  /**
   * @remarks
   * The description text of the consumer.
   * 
   * @example
   * Consumer for business applications
   */
  identityDescription?: string;
  /**
   * @remarks
   * The impact of authorization configurations for the consumer in readable gateways within the local region.
   * 
   * @example
   * [{"gateway":{"gatewayId":"gw-example01","name":"team-ai-gateway"},"resources":["team-chat"],"authorizationCounts":{"modelApis":1,"mcpServers":0,"agentApis":0}}]
   */
  impacts?: GetConsumerAccessOverviewResponseBodyDataImpacts[];
  /**
   * @remarks
   * The list of models with configured global or current consumer TPM limits in the target dedicated instance. Returned when includeModelTpm is set to true, and an empty array when no matching models exist.
   * 
   * @example
   * [{"modelId":"msc-example01","consumerTpm":300,"globalTpm":1800}]
   */
  modelTpmLimits?: GetConsumerAccessOverviewResponseBodyDataModelTpmLimits[];
  /**
   * @remarks
   * The quota rules and usage for the consumer and its associated consumer group.
   * 
   * @example
   * [{"ruleId":"rule-example01","subjectId":"cs-example01","subjectType":"consumer","subjectName":"team-app","name":"daily-tokens","limit":100000,"used":1250,"unit":"Token","periodType":"day","windowAlignment":"calendar"}]
   */
  quotas?: GetConsumerAccessOverviewResponseBodyDataQuotas[];
  /**
   * @remarks
   * The collection of resources for which the consumer has been granted authorization.
   * 
   * @example
   * [{"resourceId":"api-example01","name":"team-chat","resourceType":"ModelApi","models":[{"modelCardId":"msc-example01","name":"text-chat","modelType":"Model","modelSourceId":"ms-example01","modelSourceName":"team-model-source"}],"modelGroups":[]}]
   */
  resources?: GetConsumerAccessOverviewResponseBodyDataResources[];
  static names(): { [key: string]: string } {
    return {
      complete: 'complete',
      gateway: 'gateway',
      identityDescription: 'identityDescription',
      impacts: 'impacts',
      modelTpmLimits: 'modelTpmLimits',
      quotas: 'quotas',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complete: 'boolean',
      gateway: GetConsumerAccessOverviewResponseBodyDataGateway,
      identityDescription: 'string',
      impacts: { 'type': 'array', 'itemType': GetConsumerAccessOverviewResponseBodyDataImpacts },
      modelTpmLimits: { 'type': 'array', 'itemType': GetConsumerAccessOverviewResponseBodyDataModelTpmLimits },
      quotas: { 'type': 'array', 'itemType': GetConsumerAccessOverviewResponseBodyDataQuotas },
      resources: { 'type': 'array', 'itemType': GetConsumerAccessOverviewResponseBodyDataResources },
    };
  }

  validate() {
    if(this.gateway && typeof (this.gateway as any).validate === 'function') {
      (this.gateway as any).validate();
    }
    if(Array.isArray(this.impacts)) {
      $dara.Model.validateArray(this.impacts);
    }
    if(Array.isArray(this.modelTpmLimits)) {
      $dara.Model.validateArray(this.modelTpmLimits);
    }
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConsumerAccessOverviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. It returns Ok for a successful request or a specific business error code for a failed request.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The business result returned by the consumer operation.
   * 
   * @example
   * {"gateway":{"gatewayId":"gw-example01","name":"team-ai-gateway"},"identityDescription":"Consumer used by the conversation service","resources":[{"resourceId":"api-example01","name":"team-chat","resourceType":"ModelApi","models":[],"modelGroups":[]}],"quotas":[],"impacts":[{"gateway":{"gatewayId":"gw-example01","name":"team-ai-gateway"},"resources":["team-chat"],"authorizationCounts":{"modelApis":1,"mcpServers":0,"agentApis":0}}],"modelTpmLimits":[{"modelId":"msc-example01","consumerTpm":300,"globalTpm":1800}],"complete":true}
   */
  data?: GetConsumerAccessOverviewResponseBodyData;
  /**
   * @remarks
   * The response message that describes the request processing result.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request generated by the system to trace the call.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetConsumerAccessOverviewResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

