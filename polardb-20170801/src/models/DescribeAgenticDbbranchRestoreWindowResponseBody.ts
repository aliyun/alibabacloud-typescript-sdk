// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBBranchRestoreWindowResponseBody extends $dara.Model {
  /**
   * @example
   * br-1a2b3c4d5e6f
   */
  branchId?: string;
  /**
   * @example
   * pagc-bp1abcdef1234567
   */
  DBClusterId?: string;
  /**
   * @remarks
   * 可用于创建历史分支的最早时间，采用 UTC RFC3339 格式，允许选择该时间点。范围会随时间变化，创建时会再次校验。
   * 
   * @example
   * 2026-10-15T07:32:00Z
   */
  earliestRestorableTime?: string;
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
      branchId: 'BranchId',
      DBClusterId: 'DBClusterId',
      earliestRestorableTime: 'EarliestRestorableTime',
      projectId: 'ProjectId',
      queriedAt: 'QueriedAt',
      requestId: 'RequestId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchId: 'string',
      DBClusterId: 'string',
      earliestRestorableTime: 'string',
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

