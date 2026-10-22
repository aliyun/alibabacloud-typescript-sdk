// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBProjectHistoryRetentionResponseBody extends $dara.Model {
  /**
   * @example
   * pagc-bp1abcdef1234567
   */
  DBClusterId?: string;
  /**
   * @remarks
   * 项目当前生效的历史数据保留时长。实际可恢复范围请查询分支恢复窗口。
   * 
   * @example
   * 604800
   */
  historyRetentionSeconds?: number;
  /**
   * @example
   * proj-a1b2c3d4e5f6
   */
  projectId?: string;
  /**
   * @remarks
   * 完成本次查询的时间，采用 UTC RFC3339 格式，不代表最晚可恢复时间。
   * 
   * @example
   * 2026-10-16T07:32:00Z
   */
  queriedAt?: string;
  /**
   * @example
   * req-123
   */
  requestId?: string;
  /**
   * @example
   * t-4b83e0da66674951
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      historyRetentionSeconds: 'HistoryRetentionSeconds',
      projectId: 'ProjectId',
      queriedAt: 'QueriedAt',
      requestId: 'RequestId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      historyRetentionSeconds: 'number',
      projectId: 'string',
      queriedAt: 'string',
      requestId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

