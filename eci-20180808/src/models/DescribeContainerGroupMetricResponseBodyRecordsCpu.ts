// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerGroupMetricResponseBodyRecordsCPU extends $dara.Model {
  /**
   * @remarks
   * The upper limit of vCPU usage. The calculation formula for this parameter: The number of vCPUs × 1000.
   * 
   * @example
   * 2000
   */
  limit?: number;
  /**
   * @remarks
   * The average load in the last 10 seconds.
   * 
   * @example
   * 0
   */
  load?: number;
  /**
   * @remarks
   * The cumulative usage of vCPUs.
   * 
   * @example
   * 70769883
   */
  usageCoreNanoSeconds?: number;
  /**
   * @remarks
   * The vCPU usage in the sampling window. Unit for the sampling window: nanoseconds.
   * 
   * @example
   * 0
   */
  usageNanoCores?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      load: 'Load',
      usageCoreNanoSeconds: 'UsageCoreNanoSeconds',
      usageNanoCores: 'UsageNanoCores',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      load: 'number',
      usageCoreNanoSeconds: 'number',
      usageNanoCores: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

