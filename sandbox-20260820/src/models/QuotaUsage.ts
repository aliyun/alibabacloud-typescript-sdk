// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotaUsage extends $dara.Model {
  /**
   * @remarks
   * The consumed CPU quota in vCPUs, which does not represent CPU utilization.
   * 
   * @example
   * 1
   */
  cpuCores?: number;
  /**
   * @remarks
   * The number of unreleased instance authorizations.
   * 
   * @example
   * 1
   */
  instanceCount?: number;
  /**
   * @remarks
   * The consumed memory quota in GB, which does not represent the actual memory used by processes.
   * 
   * @example
   * 1.5
   */
  memoryGB?: number;
  /**
   * @remarks
   * The number of cores consumed from the team\\"s exclusive CPU creation quota that have not yet been naturally replenished. This is not the cumulative creation volume over the last minute. This field is omitted when no valid exclusive bucket snapshot is available, and actual zeros and decimals are retained.
   * 
   * @example
   * 19.875
   */
  scalingCpuCoresPerMinute?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'cpuCores',
      instanceCount: 'instanceCount',
      memoryGB: 'memoryGB',
      scalingCpuCoresPerMinute: 'scalingCpuCoresPerMinute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'number',
      instanceCount: 'number',
      memoryGB: 'number',
      scalingCpuCoresPerMinute: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

