// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayResourceQuotaUsageResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * true 时返回 used 和 limit；false 时省略二者。CustomPlugin 当前固定为 false，仅表示暂时隐藏配额展示，不影响插件上传、安装或既有配额校验。其他项按网关能力及有效额度判定，不能仅凭本字段推断写入操作是否允许。
   * 
   * @example
   * true
   */
  applicable?: boolean;
  /**
   * @remarks
   * 当前生效的非负整数配额上限，单位与 used 相同，已考虑现有配置、加白及适用的购买额度。仅 applicable=true 时返回，包括合法零值；示例不是所有网关的固定上限。
   * 
   * @example
   * 800
   */
  limit?: number;
  /**
   * @remarks
   * GATEWAY 表示当前网关；ACCOUNT_GATEWAY_TYPE 表示当前账号、地域及网关类型的范围。仅 CustomPlugin 保留 ACCOUNT_GATEWAY_TYPE 标识；该项当前不读取或返回上限。
   * 
   * @example
   * GATEWAY
   */
  limitScope?: string;
  /**
   * @remarks
   * 指标标识：Route（路由）、ConsumerAuthorizationRule（消费者授权规则）、McpServer（MCP Server）、Domain（域名）、Service（服务）、ConsumerQuotaRule（消费者配额规则）、K8sServiceSource（K8s 服务来源）、InstalledPlugin（已安装插件）、CustomPlugin（自定义插件）。
   * 
   * @example
   * Route
   */
  quotaKey?: string;
  /**
   * @remarks
   * 实际占用数量，为非负整数，单位与 quotaKey 对应。仅 applicable=true 时返回；零值为真实零用量，历史超额可大于 limit，不截断。
   * 
   * @example
   * 12
   */
  used?: number;
  /**
   * @remarks
   * GATEWAY 表示当前网关；ACCOUNT_REGION 表示当前账号在当前地域的共享范围。仅 CustomPlugin 保留 ACCOUNT_REGION 标识；该项当前不读取或返回用量。
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
   * 本次查询的目标网关唯一标识，与请求路径 gatewayId 一致。
   * 
   * @example
   * gw-d5be0s9q5z6f1234567g
   */
  gatewayId?: string;
  /**
   * @remarks
   * 固定返回九项，每个 quotaKey 仅出现一次。不适用或暂不展示的项仍保留，applicable=false 且省略 used/limit。不返回剩余额度或百分比；示例数值不是固定默认上限。
   * 
   * @example
   * [{"quotaKey":"Route","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":12,"limit":800},{"quotaKey":"ConsumerAuthorizationRule","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":20,"limit":1000},{"quotaKey":"McpServer","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":false},{"quotaKey":"Domain","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":2,"limit":100},{"quotaKey":"Service","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":5,"limit":800},{"quotaKey":"ConsumerQuotaRule","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":0,"limit":1000},{"quotaKey":"K8sServiceSource","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":1,"limit":3},{"quotaKey":"InstalledPlugin","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":2,"limit":5},{"quotaKey":"CustomPlugin","usedScope":"ACCOUNT_REGION","limitScope":"ACCOUNT_GATEWAY_TYPE","applicable":false}]
   */
  items?: GetGatewayResourceQuotaUsageResponseBodyDataItems[];
  /**
   * @remarks
   * 服务端完成本次统计的 UTC 时间，格式为 RFC 3339，可包含小数秒。各来源独立读取，不保证跨来源瞬时原子快照。
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
   * 业务响应码。成功时为 Ok；失败时为具体错误码，应结合 HTTP 状态码处理。
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * 目标网关及其九项资源配额观测结果。示例数值只说明格式，实际有效上限以本次响应为准。
   * 
   * @example
   * {"gatewayId":"gw-d5be0s9q5z6f1234567g","observedAt":"2026-09-17T08:00:00Z","items":[{"quotaKey":"Route","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":12,"limit":800},{"quotaKey":"ConsumerAuthorizationRule","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":20,"limit":1000},{"quotaKey":"McpServer","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":false},{"quotaKey":"Domain","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":2,"limit":100},{"quotaKey":"Service","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":5,"limit":800},{"quotaKey":"ConsumerQuotaRule","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":0,"limit":1000},{"quotaKey":"K8sServiceSource","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":1,"limit":3},{"quotaKey":"InstalledPlugin","usedScope":"GATEWAY","limitScope":"GATEWAY","applicable":true,"used":2,"limit":5},{"quotaKey":"CustomPlugin","usedScope":"ACCOUNT_REGION","limitScope":"ACCOUNT_GATEWAY_TYPE","applicable":false}]}
   */
  data?: GetGatewayResourceQuotaUsageResponseBodyData;
  /**
   * @remarks
   * 失败时返回的错误说明，成功响应通常省略本字段。示例为错误信息，不是成功响应。
   * 
   * @example
   * The specified gateway does not exist.
   */
  message?: string;
  /**
   * @remarks
   * 请求的唯一标识，用于排查问题。
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

