// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstances } from "./DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstances";


export class DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStat extends $dara.Model {
  /**
   * @remarks
   * The number of associated edge instances.
   * 
   * @example
   * 10
   */
  instanceCount?: string;
  /**
   * @remarks
   * The distribution status of the edge instance.
   */
  instances?: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstances;
  /**
   * @remarks
   * The distribution status. The value is of the enumeration type. Valid values:
   * 
   * *   SUCCESS: The distribution is successful.
   * *   FAILED: The distribution failed.
   * *   DISTING: The data is being distributed.
   * *   POD_RESTARTING: The idle pod is being restarted.
   * *   DELETED: The data is cleared or removed.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceCount: 'InstanceCount',
      instances: 'Instances',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCount: 'string',
      instances: DescribeDataDistResultResponseBodyDistResultsDistResultStatusStatsStatusStatInstances,
      status: 'string',
    };
  }

  validate() {
    if(this.instances && typeof (this.instances as any).validate === 'function') {
      (this.instances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

