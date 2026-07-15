// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiApiInfo } from "./HttpApiApiInfo";
import { ConsumerGroupInfo } from "./ConsumerGroupInfo";
import { ConsumerInfo } from "./ConsumerInfo";
import { EnvironmentInfo } from "./EnvironmentInfo";
import { GatewayInfo } from "./GatewayInfo";
import { HttpApiOperationInfo } from "./HttpApiOperationInfo";
import { HttpRoute } from "./HttpRoute";


export class QueryConsumerAuthorizationRulesResponseBodyDataItemsResourceInfo extends $dara.Model {
  /**
   * @remarks
   * The API operation information.
   */
  operationInfo?: HttpApiOperationInfo;
  /**
   * @remarks
   * The routing rule.
   */
  route?: HttpRoute;
  static names(): { [key: string]: string } {
    return {
      operationInfo: 'operationInfo',
      route: 'route',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationInfo: HttpApiOperationInfo,
      route: HttpRoute,
    };
  }

  validate() {
    if(this.operationInfo && typeof (this.operationInfo as any).validate === 'function') {
      (this.operationInfo as any).validate();
    }
    if(this.route && typeof (this.route as any).validate === 'function') {
      (this.route as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerAuthorizationRulesResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The API information.
   */
  apiInfo?: HttpApiApiInfo;
  /**
   * @remarks
   * The consumer authorization rule ID.
   * 
   * @example
   * car-csgeka5lhtggrjcprok0
   */
  consumerAuthorizationRuleId?: string;
  /**
   * @remarks
   * The consumer group ID. This field is returned for consumer group authorization rules.
   * 
   * @example
   * csg-8c13d2b4f8a1
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The consumer group information. This field is returned for consumer group authorization rules.
   */
  consumerGroupInfo?: ConsumerGroupInfo;
  /**
   * @remarks
   * The consumer ID.
   * 
   * @example
   * cs-csheiftlhtgmp0j0hp4g
   */
  consumerId?: string;
  /**
   * @remarks
   * The consumer information.
   */
  consumerInfo?: ConsumerInfo;
  /**
   * @remarks
   * The creation timestamp. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The publish status of the API in the current environment.
   * 
   * @example
   * {}
   */
  deployStatus?: string;
  /**
   * @remarks
   * The environment context.
   */
  environmentInfo?: EnvironmentInfo;
  /**
   * @remarks
   * The expiration mode. Valid values:
   * - LongTerm
   * - ShortTerm
   * 
   * @example
   * ShortTerm
   */
  expireMode?: string;
  /**
   * @remarks
   * The expiration status.
   * 
   * @example
   * InEffect
   */
  expireStatus?: string;
  /**
   * @remarks
   * The expiration time.
   * 
   * @example
   * 172086834548
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The gateway information.
   */
  gatewayInfo?: GatewayInfo;
  /**
   * @remarks
   * The principal type. Valid values: Consumer or ConsumerGroup.
   * 
   * @example
   * ConsumerGroup
   */
  principalType?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 2351944
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource information.
   */
  resourceInfo?: QueryConsumerAuthorizationRulesResponseBodyDataItemsResourceInfo;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * HttpApiRoute
   */
  resourceType?: string;
  /**
   * @remarks
   * The update timestamp. Unit: milliseconds.
   * 
   * @example
   * 1719386834548
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'apiInfo',
      consumerAuthorizationRuleId: 'consumerAuthorizationRuleId',
      consumerGroupId: 'consumerGroupId',
      consumerGroupInfo: 'consumerGroupInfo',
      consumerId: 'consumerId',
      consumerInfo: 'consumerInfo',
      createTimestamp: 'createTimestamp',
      deployStatus: 'deployStatus',
      environmentInfo: 'environmentInfo',
      expireMode: 'expireMode',
      expireStatus: 'expireStatus',
      expireTimestamp: 'expireTimestamp',
      gatewayInfo: 'gatewayInfo',
      principalType: 'principalType',
      resourceId: 'resourceId',
      resourceInfo: 'resourceInfo',
      resourceType: 'resourceType',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: HttpApiApiInfo,
      consumerAuthorizationRuleId: 'string',
      consumerGroupId: 'string',
      consumerGroupInfo: ConsumerGroupInfo,
      consumerId: 'string',
      consumerInfo: ConsumerInfo,
      createTimestamp: 'number',
      deployStatus: 'string',
      environmentInfo: EnvironmentInfo,
      expireMode: 'string',
      expireStatus: 'string',
      expireTimestamp: 'number',
      gatewayInfo: GatewayInfo,
      principalType: 'string',
      resourceId: 'string',
      resourceInfo: QueryConsumerAuthorizationRulesResponseBodyDataItemsResourceInfo,
      resourceType: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.apiInfo && typeof (this.apiInfo as any).validate === 'function') {
      (this.apiInfo as any).validate();
    }
    if(this.consumerGroupInfo && typeof (this.consumerGroupInfo as any).validate === 'function') {
      (this.consumerGroupInfo as any).validate();
    }
    if(this.consumerInfo && typeof (this.consumerInfo as any).validate === 'function') {
      (this.consumerInfo as any).validate();
    }
    if(this.environmentInfo && typeof (this.environmentInfo as any).validate === 'function') {
      (this.environmentInfo as any).validate();
    }
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    if(this.resourceInfo && typeof (this.resourceInfo as any).validate === 'function') {
      (this.resourceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerAuthorizationRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of consumer rules.
   */
  items?: QueryConsumerAuthorizationRulesResponseBodyDataItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 6
   */
  totalSize?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalSize: 'totalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': QueryConsumerAuthorizationRulesResponseBodyDataItems },
      pageNumber: 'number',
      pageSize: 'number',
      totalSize: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConsumerAuthorizationRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: QueryConsumerAuthorizationRulesResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A60EE5CA-1294-532A-9775-8D2FD1C6EFBF
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
      data: QueryConsumerAuthorizationRulesResponseBodyData,
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

