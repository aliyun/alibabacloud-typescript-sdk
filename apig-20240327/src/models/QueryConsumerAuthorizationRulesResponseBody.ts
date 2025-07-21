// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiApiInfo } from "./HttpApiApiInfo";
import { ConsumerInfo } from "./ConsumerInfo";
import { EnvironmentInfo } from "./EnvironmentInfo";
import { GatewayInfo } from "./GatewayInfo";
import { HttpApiOperationInfo } from "./HttpApiOperationInfo";
import { HttpRoute } from "./HttpRoute";


export class QueryConsumerAuthorizationRulesResponseBodyDataItemsResourceInfo extends $dara.Model {
  /**
   * @remarks
   * The operation information.
   */
  operationInfo?: HttpApiOperationInfo;
  /**
   * @remarks
   * The route.
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
   * The API details.
   */
  apiInfo?: HttpApiApiInfo;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * car-csgeka5lhtggrjcprok0
   */
  consumerAuthorizationRuleId?: string;
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
   * The deployment status of the API in the current environment.
   * 
   * @example
   * {}
   */
  deployStatus?: string;
  /**
   * @remarks
   * The environment information.
   */
  environmentInfo?: EnvironmentInfo;
  /**
   * @remarks
   * The expiry mode. Valid values: LongTerm and ShortTerm.
   * 
   * @example
   * ShortTerm
   */
  expireMode?: string;
  /**
   * @remarks
   * The rule status.
   * 
   * @example
   * InEffect
   */
  expireStatus?: string;
  /**
   * @remarks
   * The time when the rule expires.
   * 
   * @example
   * 172086834548
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * The instance information.
   */
  gatewayInfo?: GatewayInfo;
  /**
   * @remarks
   * The resource IDs.
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
      consumerId: 'consumerId',
      consumerInfo: 'consumerInfo',
      createTimestamp: 'createTimestamp',
      deployStatus: 'deployStatus',
      environmentInfo: 'environmentInfo',
      expireMode: 'expireMode',
      expireStatus: 'expireStatus',
      expireTimestamp: 'expireTimestamp',
      gatewayInfo: 'gatewayInfo',
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
      consumerId: 'string',
      consumerInfo: ConsumerInfo,
      createTimestamp: 'number',
      deployStatus: 'string',
      environmentInfo: EnvironmentInfo,
      expireMode: 'string',
      expireStatus: 'string',
      expireTimestamp: 'number',
      gatewayInfo: GatewayInfo,
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
   * The rules.
   */
  items?: QueryConsumerAuthorizationRulesResponseBodyDataItems[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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
   * The status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: QueryConsumerAuthorizationRulesResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
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

