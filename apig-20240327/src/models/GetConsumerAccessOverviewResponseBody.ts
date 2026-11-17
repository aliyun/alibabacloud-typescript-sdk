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
   * The number of agent APIs for which authorization is configured.
   * 
   * @example
   * 1
   */
  agentApis?: number;
  /**
   * @remarks
   * The number of MCP servers for which authorization is configured.
   * 
   * @example
   * 1
   */
  mcpServers?: number;
  /**
   * @remarks
   * The number of model APIs for which authorization is configured.
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
   * The number of authorization configurations categorized by resource type.
   */
  authorizationCounts?: GetConsumerAccessOverviewResponseBodyDataImpactsAuthorizationCounts;
  /**
   * @remarks
   * The identifier and name of the gateway in the current context.
   */
  gateway?: GetConsumerAccessOverviewResponseBodyDataImpactsGateway;
  /**
   * @remarks
   * The set of resources authorized for the consumer.
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

export class GetConsumerAccessOverviewResponseBodyDataQuotas extends $dara.Model {
  /**
   * @remarks
   * The quota limit for the current rule. This value uses the same unit of measurement as the unit field.
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
   * The used quota within the period corresponding to the current rule. This value uses the same unit of measurement as the unit field.
   * 
   * @example
   * 100
   */
  used?: number;
  /**
   * @remarks
   * The alignment method of the period window. Valid values: calendar for natural periods and epoch for custom base periods.
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
   * The desired authorization revision number to be distributed.
   * 
   * @example
   * 2
   */
  desiredRevision?: number;
  /**
   * @remarks
   * The error description when processing fails. This field is empty when no error occurs.
   * 
   * @example
   * Configuration delivery failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * The status. Valid values: Pending, Applying, Committed, and Failed.
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
   * The name of the consumer group that provides this authorization.
   * 
   * @example
   * beta-consumer-group
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The identifier of the model. Standard models use the source model card ID, and logical model endpoints use an identifier prefixed with vm-.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  /**
   * @remarks
   * The ID of the model source. Use the modelSourceId returned by CreateAiModelSource.
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
   * The type of the model. Valid values: Model and LogicalModel.
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
   * The name of the consumer group that provides this authorization.
   * 
   * @example
   * beta-consumer-group
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The ID of the model group. Use the modelGroupId returned by CreateModelGroup.
   * 
   * @example
   * mg-d00000000000000000000
   */
  modelGroupId?: string;
  /**
   * @remarks
   * The list of model endpoints accessible within the current resource scope.
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
   * The name of the consumer group that provides this authorization.
   * 
   * @example
   * beta-consumer-group
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The identifier of the model. Standard models use the source model card ID, and logical model endpoints use an identifier prefixed with vm-.
   * 
   * @example
   * msc-d00000000000000000000
   */
  modelCardId?: string;
  /**
   * @remarks
   * The ID of the model source. Use the modelSourceId returned by CreateAiModelSource.
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
   * The type of the model. Valid values: Model and LogicalModel.
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
   * Indicates whether the authorization scope of this resource includes all models.
   * 
   * **if can be null:**
   * true
   */
  allModels?: boolean;
  /**
   * @remarks
   * Indicates whether the authorization scope of this MCP resource includes all tools.
   * 
   * **if can be null:**
   * true
   */
  allTools?: boolean;
  /**
   * @remarks
   * The name of the consumer group that provides this authorization.
   * 
   * @example
   * beta-consumer-group
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The existing desired or applied state of the model entitlement projection. This field is omitted when no state row exists.
   */
  entitlementState?: GetConsumerAccessOverviewResponseBodyDataResourcesEntitlementState;
  /**
   * @remarks
   * The expiration time. The value is null for long-term authorization, an RFC 3339 formatted string for short-term authorization that can be losslessly projected, and omitted when unknown.
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
   * The model groups and their model collections that are accessible.
   */
  modelGroups?: GetConsumerAccessOverviewResponseBodyDataResourcesModelGroups[];
  /**
   * @remarks
   * The list of model endpoints accessible within the current resource scope.
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
   * The type of the resource. Valid values: ModelApi, MCP, and Agent.
   * 
   * @example
   * ModelApi
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of MCP tool names that can be called within the resource scope.
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
   */
  complete?: boolean;
  /**
   * @remarks
   * The identifier and name of the gateway in the current context.
   */
  gateway?: GetConsumerAccessOverviewResponseBodyDataGateway;
  /**
   * @remarks
   * The description of the consumer.
   * 
   * @example
   * Consumer for business applications
   */
  identityDescription?: string;
  /**
   * @remarks
   * The impact of the authorization configuration of this consumer on readable gateways in the local region.
   */
  impacts?: GetConsumerAccessOverviewResponseBodyDataImpacts[];
  /**
   * @remarks
   * The quota rules and usage of the consumer and the consumer group to which it belongs.
   */
  quotas?: GetConsumerAccessOverviewResponseBodyDataQuotas[];
  /**
   * @remarks
   * The set of resources authorized for the consumer.
   */
  resources?: GetConsumerAccessOverviewResponseBodyDataResources[];
  static names(): { [key: string]: string } {
    return {
      complete: 'complete',
      gateway: 'gateway',
      identityDescription: 'identityDescription',
      impacts: 'impacts',
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
   * The response status code. Ok is returned for a successful request, and a specific business error code is returned for a failed request.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The business result returned for the consumer operation.
   */
  data?: GetConsumerAccessOverviewResponseBodyData;
  /**
   * @remarks
   * The response message that describes the processing result of the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. This ID is generated by the system to trace the call.
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

