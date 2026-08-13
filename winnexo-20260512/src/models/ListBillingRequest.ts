// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBillingRequest extends $dara.Model {
  /**
   * @remarks
   * 业务来源ID（可选筛选）
   * 
   * @example
   * exampleBizId
   */
  bizId?: string;
  /**
   * @remarks
   * 业务来源类型（可选筛选）
   * 
   * @example
   * string_value
   */
  bizType?: string;
  /**
   * @remarks
   * 结束时间范围，ISO-8601 字符串，如 2026-08-05T16:30:00.000Z
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * 是否过滤 credit 消耗为 0 的账单，默认 true（过滤）
   * 
   * @example
   * true
   */
  ignoreZero?: boolean;
  /**
   * @remarks
   * 操作类型（可选筛选）
   * 
   * @example
   * string_value
   */
  operation?: string;
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
   * 开始时间范围，ISO-8601 字符串，如 2026-08-05T16:30:00.000Z
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * 状态（可选筛选）
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * 租户ID，公共参数；winnexo-cli 通过 --tenant-id 显式传入
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * 用户ID（WINNEXO 平台用户ID，可选筛选）
   * 
   * @example
   * 1
   */
  wnUserId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      bizType: 'bizType',
      endTime: 'endTime',
      ignoreZero: 'ignoreZero',
      operation: 'operation',
      page: 'page',
      pageSize: 'pageSize',
      startTime: 'startTime',
      status: 'status',
      tenantId: 'tenantId',
      wnUserId: 'wnUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      endTime: 'string',
      ignoreZero: 'boolean',
      operation: 'string',
      page: 'number',
      pageSize: 'number',
      startTime: 'string',
      status: 'string',
      tenantId: 'string',
      wnUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

