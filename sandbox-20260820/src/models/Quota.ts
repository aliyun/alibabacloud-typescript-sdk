// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Quota extends $dara.Model {
  /**
   * @remarks
   * The vCPU quota, in cores.
   * 
   * @example
   * 100
   */
  cpuCores?: number;
  /**
   * @remarks
   * The quota for the number of active instances.
   * 
   * @example
   * 100
   */
  instanceCount?: number;
  /**
   * @remarks
   * The memory quota, in GB.
   * 
   * @example
   * 200
   */
  memoryGB?: number;
  /**
   * @remarks
   * The team CPU creation rate in cores per minute. To retain the original configuration during an update, omit this parameter or set it to null. A positive integer sets an exclusive rate. A value of 0 prevents adding new CPU capacity. A value of -1 clears the exclusive rate and restores the remaining shared account rate. When queried, this parameter is omitted if it is not configured, an explicit 0 is retained, and -1 is not returned.
   * 
   * @example
   * 120
   */
  scalingCpuCoresPerMinute?: number;
  /**
   * @remarks
   * The quota tag value, which is set to the team ID. Quotas are independently calculated based on this dimension.
   * 
   * @example
   * 7696f4cf-****
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'cpuCores',
      instanceCount: 'instanceCount',
      memoryGB: 'memoryGB',
      scalingCpuCoresPerMinute: 'scalingCpuCoresPerMinute',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'number',
      instanceCount: 'number',
      memoryGB: 'number',
      scalingCpuCoresPerMinute: 'number',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

