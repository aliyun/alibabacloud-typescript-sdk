// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePolicyGovernanceInClusterResponseBodyAdmitLogLog } from "./DescribePolicyGovernanceInClusterResponseBodyAdmitLogLog";


export class DescribePolicyGovernanceInClusterResponseBodyAdmitLog extends $dara.Model {
  /**
   * @remarks
   * The number of audit log entries.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The audit log content.
   */
  log?: DescribePolicyGovernanceInClusterResponseBodyAdmitLogLog;
  /**
   * @remarks
   * The status of the query. Valid values:
   * 
   * *   `Complete`: The query succeeded and the complete query result is returned.
   * *   `Incomplete`: The query succeeded but the query result is incomplete. To obtain the complete query result, you must repeat the request.
   * 
   * @example
   * Complete
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      log: 'log',
      progress: 'progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      log: DescribePolicyGovernanceInClusterResponseBodyAdmitLogLog,
      progress: 'string',
    };
  }

  validate() {
    if(this.log && typeof (this.log as any).validate === 'function') {
      (this.log as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

