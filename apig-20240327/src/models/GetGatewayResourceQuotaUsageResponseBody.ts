// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayResourceQuotaUsageResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether quota numerical values are provided.
   * 
   * @example
   * true
   */
  applicable?: boolean;
  /**
   * @remarks
   * The effective limit.
   * 
   * @example
   * 800
   */
  limit?: number;
  /**
   * @remarks
   * The scope to which the limit applies.
   * 
   * @example
   * GATEWAY
   */
  limitScope?: string;
  /**
   * @remarks
   * The quota metric.
   * 
   * @example
   * Route
   */
  quotaKey?: string;
  /**
   * @remarks
   * The current usage.
   * 
   * @example
   * 12
   */
  used?: number;
  /**
   * @remarks
   * The scope for usage statistics.
   * 
   * @example
   * GATEWAY
   */
  usedScope?: string;
  static names(): { [key: string]: string } {
    return {
      applicable: 'applicable',
      limit: 'limit',
      limitScope: 'limitScope',
      quotaKey: 'quotaKey',
      used: 'used',
      usedScope: 'usedScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicable: 'boolean',
      limit: 'number',
      limitScope: 'string',
      quotaKey: 'string',
      used: 'number',
      usedScope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayResourceQuotaUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-d5be0s9q5z6f1234567g
   */
  gatewayId?: string;
  /**
   * @remarks
   * The resource quota items.
   * 
   * @example
   * [{"quotaKey":"Route","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":12,"limit":800},{"quotaKey":"ConsumerAuthorizationRule","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":20,"limit":1000},{"quotaKey":"McpServer","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":false},{"quotaKey":"Domain","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":2,"limit":100},{"quotaKey":"Service","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":5,"limit":800},{"quotaKey":"ConsumerQuotaRule","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":0,"limit":1000},{"quotaKey":"K8sServiceSource","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":1,"limit":3},{"quotaKey":"InstalledPlugin","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":2,"limit":5},{"quotaKey":"CustomPlugin","usedScope":"ACCOUNT_REGION","limitScope":"ACCOUNT_GATEWAY_TYPE","applicable":false}]
   */
  items?: GetGatewayResourceQuotaUsageResponseBodyDataItems[];
  /**
   * @remarks
   * The time when the statistics collection was completed.
   * 
   * @example
   * 2026-09-17T08:00:00Z
   */
  observedAt?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      items: 'items',
      observedAt: 'observedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      items: { 'type': 'array', 'itemType': GetGatewayResourceQuotaUsageResponseBodyDataItems },
      observedAt: 'string',
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

export class GetGatewayResourceQuotaUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The quota query result.
   * 
   * @example
   * {"gatewayId":"gw-d5be0s9q5z6f1234567g","observedAt":"2026-09-17T08:00:00Z","items":[{"quotaKey":"Route","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":12,"limit":800},{"quotaKey":"ConsumerAuthorizationRule","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":20,"limit":1000},{"quotaKey":"McpServer","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":false},{"quotaKey":"Domain","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":2,"limit":100},{"quotaKey":"Service","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":5,"limit":800},{"quotaKey":"ConsumerQuotaRule","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":0,"limit":1000},{"quotaKey":"K8sServiceSource","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":1,"limit":3},{"quotaKey":"InstalledPlugin","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":2,"limit":5},{"quotaKey":"CustomPlugin","usedScope":"ACCOUNT_REGION","limitScope":"ACCOUNT_GATEWAY_TYPE","applicable":false}]}
   */
  data?: GetGatewayResourceQuotaUsageResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified gateway does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0A6A1A0-8793-4C10-AB1A-2C03E770A912
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
      data: GetGatewayResourceQuotaUsageResponseBodyData,
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

