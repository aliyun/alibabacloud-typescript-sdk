// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiApiInfo } from "./HttpApiApiInfo";
import { EnvironmentInfo } from "./EnvironmentInfo";
import { GatewayInfo } from "./GatewayInfo";


export class ListConsumerAuthorizationRulesResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * API信息。
   */
  apiInfo?: HttpApiApiInfo;
  /**
   * @remarks
   * 消费者授权规则ID。
   * 
   * @example
   * car-csgeka5lhtggrjcprok0
   */
  consumerAuthorizationRuleId?: string;
  /**
   * @remarks
   * 消费者ID。
   * 
   * @example
   * cs-csheiftlhtgmp0j0hp4g
   */
  consumerId?: string;
  /**
   * @remarks
   * 创建时间戳。
   * 
   * @example
   * 1719386834548
   */
  createTimestamp?: number;
  /**
   * @remarks
   * API在当前环境的发布状态
   * 
   * @example
   * {}
   */
  deployStatus?: string;
  /**
   * @remarks
   * 环境信息。
   */
  environmentInfo?: EnvironmentInfo;
  /**
   * @remarks
   * 失效模式。LongTerm、ShortTerm，二选一。
   * 
   * @example
   * ShortTerm
   */
  expireMode?: string;
  /**
   * @remarks
   * 失效状态。
   * 
   * @example
   * InEffect
   */
  expireStatus?: string;
  /**
   * @remarks
   * 到期时间。
   * 
   * @example
   * 172086834548
   */
  expireTimestamp?: number;
  /**
   * @remarks
   * 网关信息。
   */
  gatewayInfo?: GatewayInfo;
  /**
   * @remarks
   * 资源ID。
   * 
   * @example
   * 2351944
   */
  resourceId?: string;
  /**
   * @remarks
   * 资源类型。
   * 
   * @example
   * HttpApiRoute
   */
  resourceType?: string;
  /**
   * @remarks
   * 更新时间戳。单位: 毫秒。
   * 
   * @example
   * 1721116090326
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'apiInfo',
      consumerAuthorizationRuleId: 'consumerAuthorizationRuleId',
      consumerId: 'consumerId',
      createTimestamp: 'createTimestamp',
      deployStatus: 'deployStatus',
      environmentInfo: 'environmentInfo',
      expireMode: 'expireMode',
      expireStatus: 'expireStatus',
      expireTimestamp: 'expireTimestamp',
      gatewayInfo: 'gatewayInfo',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      updateTimestamp: 'updateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: HttpApiApiInfo,
      consumerAuthorizationRuleId: 'string',
      consumerId: 'string',
      createTimestamp: 'number',
      deployStatus: 'string',
      environmentInfo: EnvironmentInfo,
      expireMode: 'string',
      expireStatus: 'string',
      expireTimestamp: 'number',
      gatewayInfo: GatewayInfo,
      resourceId: 'string',
      resourceType: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.apiInfo && typeof (this.apiInfo as any).validate === 'function') {
      (this.apiInfo as any).validate();
    }
    if(this.environmentInfo && typeof (this.environmentInfo as any).validate === 'function') {
      (this.environmentInfo as any).validate();
    }
    if(this.gatewayInfo && typeof (this.gatewayInfo as any).validate === 'function') {
      (this.gatewayInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConsumerAuthorizationRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 消费者授权信息列表。
   */
  items?: ListConsumerAuthorizationRulesResponseBodyDataItems[];
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
   * 9
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
      items: { 'type': 'array', 'itemType': ListConsumerAuthorizationRulesResponseBodyDataItems },
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

export class ListConsumerAuthorizationRulesResponseBody extends $dara.Model {
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
  data?: ListConsumerAuthorizationRulesResponseBodyData;
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
   * 294382D9-EE60-5735-A4CD-F2AC2840423D
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
      data: ListConsumerAuthorizationRulesResponseBodyData,
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

