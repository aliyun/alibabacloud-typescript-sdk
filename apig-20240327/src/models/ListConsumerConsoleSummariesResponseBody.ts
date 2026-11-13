// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerConsoleSummariesResponseBodyDataCounts extends $dara.Model {
  /**
   * @remarks
   * The total number of readable consumers in the local region.
   * 
   * @example
   * 4
   */
  all?: number;
  /**
   * @remarks
   * The number of disabled consumers.
   * 
   * @example
   * 1
   */
  disabled?: number;
  /**
   * @remarks
   * The number of consumers that have authorization configurations in the current instance.
   * 
   * @example
   * 2
   */
  granted?: number;
  /**
   * @remarks
   * The number of consumer groups.
   * 
   * @example
   * 1
   */
  groups?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      disabled: 'disabled',
      granted: 'granted',
      groups: 'groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      disabled: 'number',
      granted: 'number',
      groups: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerConsoleSummariesResponseBodyDataItemsConsumerGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * cg-d00000000000000000000
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The description of the consumer.
   * 
   * @example
   * Consumer used for business integration
   */
  description?: string;
  /**
   * @remarks
   * The time when the consumer joined the consumer group. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1715769600000
   */
  joinTimestamp?: number;
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
      consumerGroupId: 'consumerGroupId',
      description: 'description',
      joinTimestamp: 'joinTimestamp',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroupId: 'string',
      description: 'string',
      joinTimestamp: 'number',
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

export class ListConsumerConsoleSummariesResponseBodyDataItemsCredentials extends $dara.Model {
  /**
   * @remarks
   * The number of credentials of this type.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The credential type. Valid values: Apikey, Jwt, and AkSk. No keys or secrets are returned.
   * 
   * @example
   * Apikey
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerConsoleSummariesResponseBodyDataItemsLocalAccess extends $dara.Model {
  /**
   * @remarks
   * The number of agent APIs that have authorizations configured.
   * 
   * @example
   * 1
   */
  agentApis?: number;
  /**
   * @remarks
   * The number of MCP servers that have authorizations configured.
   * 
   * @example
   * 1
   */
  mcpServers?: number;
  /**
   * @remarks
   * The number of model APIs that have authorizations configured.
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

export class ListConsumerConsoleSummariesResponseBodyDataItemsOtherGateways extends $dara.Model {
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

export class ListConsumerConsoleSummariesResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the authorization scope of this resource includes all models.
   */
  allModels?: boolean;
  /**
   * @remarks
   * The list of consumer groups that the consumer has joined.
   */
  consumerGroups?: ListConsumerConsoleSummariesResponseBodyDataItemsConsumerGroups[];
  /**
   * @remarks
   * The consumer ID returned by the create or query consumer API.
   * 
   * @example
   * cs-d00000000000000000000
   */
  consumerId?: string;
  /**
   * @remarks
   * The time when the consumer was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The summary of credential types and quantities for the consumer. The actual credential content is not returned.
   */
  credentials?: ListConsumerConsoleSummariesResponseBodyDataItemsCredentials[];
  /**
   * @remarks
   * The deployment status of the consumer configuration. An empty string is returned if no deployment status is available.
   * 
   * @example
   * ""
   */
  deployStatus?: string;
  /**
   * @remarks
   * The description of the consumer.
   * 
   * @example
   * Consumer used for business integration
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the consumer is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The number of authorization configurations in the current gateway, counted by resource type.
   */
  localAccess?: ListConsumerConsoleSummariesResponseBodyDataItemsLocalAccess;
  /**
   * @remarks
   * The number of models.
   * 
   * @example
   * 4
   */
  modelCount?: number;
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
   * The summary of access configurations for the consumer in other readable gateways.
   */
  otherGateways?: ListConsumerConsoleSummariesResponseBodyDataItemsOtherGateways[];
  /**
   * @remarks
   * The time when the consumer was updated. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      allModels: 'allModels',
      consumerGroups: 'consumerGroups',
      consumerId: 'consumerId',
      createTimestamp: 'createTimestamp',
      credentials: 'credentials',
      deployStatus: 'deployStatus',
      description: 'description',
      enable: 'enable',
      localAccess: 'localAccess',
      modelCount: 'modelCount',
      name: 'name',
      otherGateways: 'otherGateways',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allModels: 'boolean',
      consumerGroups: { 'type': 'array', 'itemType': ListConsumerConsoleSummariesResponseBodyDataItemsConsumerGroups },
      consumerId: 'string',
      createTimestamp: 'number',
      credentials: { 'type': 'array', 'itemType': ListConsumerConsoleSummariesResponseBodyDataItemsCredentials },
      deployStatus: 'string',
      description: 'string',
      enable: 'boolean',
      localAccess: ListConsumerConsoleSummariesResponseBodyDataItemsLocalAccess,
      modelCount: 'number',
      name: 'string',
      otherGateways: { 'type': 'array', 'itemType': ListConsumerConsoleSummariesResponseBodyDataItemsOtherGateways },
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.consumerGroups)) {
      $dara.Model.validateArray(this.consumerGroups);
    }
    if(Array.isArray(this.credentials)) {
      $dara.Model.validateArray(this.credentials);
    }
    if(this.localAccess && typeof (this.localAccess as any).validate === 'function') {
      (this.localAccess as any).validate();
    }
    if(Array.isArray(this.otherGateways)) {
      $dara.Model.validateArray(this.otherGateways);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerConsoleSummariesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the query result is complete. A successful response returns a complete projection.
   */
  complete?: boolean;
  /**
   * @remarks
   * The statistics of the complete consumer set in the local region. This value is not affected by the current pagination.
   */
  counts?: ListConsumerConsoleSummariesResponseBodyDataCounts;
  /**
   * @remarks
   * The list of consumers returned on the current page.
   */
  items?: ListConsumerConsoleSummariesResponseBodyDataItems[];
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned from the previous page. Do not specify this parameter when you query the first page.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries that match the current query conditions.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      complete: 'complete',
      counts: 'counts',
      items: 'items',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complete: 'boolean',
      counts: ListConsumerConsoleSummariesResponseBodyDataCounts,
      items: { 'type': 'array', 'itemType': ListConsumerConsoleSummariesResponseBodyDataItems },
      maxResults: 'number',
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.counts && typeof (this.counts as any).validate === 'function') {
      (this.counts as any).validate();
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerConsoleSummariesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code. A value of Ok indicates success. If the call fails, a specific business error code is returned.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The business data returned for the consumer operation.
   */
  data?: ListConsumerConsoleSummariesResponseBodyData;
  /**
   * @remarks
   * The response message that describes the result of the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID generated by the system to trace the call.
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
      data: ListConsumerConsoleSummariesResponseBodyData,
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

