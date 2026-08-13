// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBillingResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * 账单业务ID
   * 
   * @example
   * exampleBillingId
   */
  billingId?: string;
  /**
   * @remarks
   * 业务来源ID
   * 
   * @example
   * exampleBizId
   */
  bizId?: string;
  /**
   * @remarks
   * 业务来源类型
   * 
   * @example
   * string_value
   */
  bizType?: string;
  /**
   * @remarks
   * costSource
   * 
   * @example
   * string_value
   */
  costSource?: string[];
  /**
   * @remarks
   * costSourceDisplayName
   * 
   * @example
   * string_value
   */
  costSourceDisplayName?: string[];
  /**
   * @remarks
   * 结束时间
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * 入口对象ID
   * 
   * @example
   * exampleEntryObjectId
   */
  entryObjectId?: string;
  /**
   * @remarks
   * 入口对象类型
   * 
   * @example
   * string_value
   */
  entryObjectType?: string;
  /**
   * @remarks
   * 是否影子账单
   * 
   * @example
   * true
   */
  isShadow?: boolean;
  /**
   * @remarks
   * 操作类型
   * 
   * @example
   * string_value
   */
  operation?: string;
  /**
   * @remarks
   * 操作类型展示名称
   * 
   * @example
   * string_value
   */
  operationDisplayName?: string;
  /**
   * @remarks
   * 开始时间
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * 状态
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * 状态展示名称
   * 
   * @example
   * string_value
   */
  statusDisplayName?: string;
  /**
   * @remarks
   * 租户ID
   * 
   * @example
   * 10000
   */
  tenantId?: number;
  /**
   * @remarks
   * 汇总 credit 消耗
   * 
   * @example
   * string_value
   */
  totalCreditCost?: string;
  /**
   * @remarks
   * WINNEXO 平台用户ID
   * 
   * @example
   * 1
   */
  wnUserId?: string;
  static names(): { [key: string]: string } {
    return {
      billingId: 'billingId',
      bizId: 'bizId',
      bizType: 'bizType',
      costSource: 'costSource',
      costSourceDisplayName: 'costSourceDisplayName',
      endTime: 'endTime',
      entryObjectId: 'entryObjectId',
      entryObjectType: 'entryObjectType',
      isShadow: 'isShadow',
      operation: 'operation',
      operationDisplayName: 'operationDisplayName',
      startTime: 'startTime',
      status: 'status',
      statusDisplayName: 'statusDisplayName',
      tenantId: 'tenantId',
      totalCreditCost: 'totalCreditCost',
      wnUserId: 'wnUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingId: 'string',
      bizId: 'string',
      bizType: 'string',
      costSource: { 'type': 'array', 'itemType': 'string' },
      costSourceDisplayName: { 'type': 'array', 'itemType': 'string' },
      endTime: 'string',
      entryObjectId: 'string',
      entryObjectType: 'string',
      isShadow: 'boolean',
      operation: 'string',
      operationDisplayName: 'string',
      startTime: 'string',
      status: 'string',
      statusDisplayName: 'string',
      tenantId: 'number',
      totalCreditCost: 'string',
      wnUserId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.costSource)) {
      $dara.Model.validateArray(this.costSource);
    }
    if(Array.isArray(this.costSourceDisplayName)) {
      $dara.Model.validateArray(this.costSourceDisplayName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBillingResponseBody extends $dara.Model {
  /**
   * @remarks
   * 业务状态码：成功为 200，失败为后端错误码（ERR.* / InvalidParameter.*）
   * 
   * @example
   * 200
   */
  code?: string;
  list?: ListBillingResponseBodyList[];
  /**
   * @remarks
   * 错误描述，成功时为空
   */
  message?: string;
  /**
   * @remarks
   * 页码
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * 每页条数
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 请求追踪 ID
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * 总数
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      list: 'list',
      message: 'message',
      page: 'page',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      list: { 'type': 'array', 'itemType': ListBillingResponseBodyList },
      message: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

