// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotaUsage extends $dara.Model {
  /**
   * @remarks
   * The consumed CPU quota in vCPUs, not the CPU utilization.
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
   * The consumed memory quota in GB, not the actual memory used by processes.
   * 
   * @example
   * 1.5
   */
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'cpuCores',
      instanceCount: 'instanceCount',
      memoryGB: 'memoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'number',
      instanceCount: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

