// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBProjectHistoryRetentionResponseBody extends $dara.Model {
  /**
   * @remarks
   * DBClusterId
   * 
   * @example
   * pagc-bp1abcdef1234567
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The effective history data retention period for the project. For the actual recoverable range, query the branch recovery window.
   * 
   * @example
   * 604800
   */
  historyRetentionSeconds?: number;
  /**
   * @remarks
   * ProjectId
   * 
   * @example
   * proj-a1b2c3d4e5f6
   */
  projectId?: string;
  /**
   * @remarks
   * The time when the query was completed, in UTC RFC3339 format. This does not represent the latest recoverable time.
   * 
   * @example
   * 2026-10-16T07:32:00Z
   */
  queriedAt?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-123
   */
  requestId?: string;
  /**
   * @remarks
   * TenantId
   * 
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

