// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAgenticDBProjectHistoryRetentionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The database cluster ID.
   * 
   * @example
   * pagc-bp1abcdef1234567
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The effective retention period for historical data, in seconds.
   * 
   * @example
   * 604800
   */
  historyRetentionSeconds?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * proj-a1b2c3d4e5f6
   */
  projectId?: string;
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
   * The tenant ID.
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
      requestId: 'RequestId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      historyRetentionSeconds: 'number',
      projectId: 'string',
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

