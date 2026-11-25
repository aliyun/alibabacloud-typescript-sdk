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
   * The team snapshot-based sandbox creation concurrency quota, in requests. This value represents the maximum number of snapshot-based sandbox creation requests that can be executed at the same time. When updating, omit this parameter or set it to null to retain the original configuration. Set it to a positive integer to specify an exclusive quota. Set it to 0 to prohibit snapshot-based sandbox creation. Set it to -1 to clear the exclusive quota and restore the remaining quota of the shared account. In query responses, this parameter is omitted if it is not configured. An explicit value of 0 is retained, and -1 is not returned.
   * 
   * @example
   * 10
   */
  createSandboxWithSnapshotConcurrency?: number;
  /**
   * @remarks
   * The team snapshot creation concurrency quota, in requests. This value represents the maximum number of snapshot creation requests that can be executed at the same time. When updating, omit this parameter or set it to null to retain the original configuration. Set it to a positive integer to specify an exclusive quota. Set it to 0 to prohibit snapshot creation. Set it to -1 to clear the exclusive quota and restore the remaining quota of the shared account. In query responses, this parameter is omitted if it is not configured. An explicit value of 0 is retained, and -1 is not returned.
   * 
   * @example
   * 10
   */
  createSnapshotConcurrency?: number;
  /**
   * @remarks
   * The quota for active instances.
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
   * The team sandbox hibernation concurrency quota, in requests. This value represents the maximum number of sandbox hibernation requests that can be executed at the same time. When updating, omit this parameter or set it to null to retain the original configuration. Set it to a positive integer to specify an exclusive quota. Set it to 0 to prohibit sandbox hibernation. Set it to -1 to clear the exclusive quota and restore the remaining quota of the shared account. In query responses, this parameter is omitted if it is not configured. An explicit value of 0 is retained, and -1 is not returned.
   * 
   * @example
   * 10
   */
  pauseConcurrency?: number;
  /**
   * @remarks
   * The team sandbox wake-up concurrency quota, in requests. This value represents the maximum number of sandbox wake-up requests that can be executed at the same time. When updating, omit this parameter or set it to null to retain the original configuration. Set it to a positive integer to specify an exclusive quota. Set it to 0 to prohibit sandbox wake-up. Set it to -1 to clear the exclusive quota and restore the remaining quota of the shared account. In query responses, this parameter is omitted if it is not configured. An explicit value of 0 is retained, and -1 is not returned.
   * 
   * @example
   * 10
   */
  resumeConcurrency?: number;
  /**
   * @remarks
   * The team CPU creation rate, in cores per minute. When updating, omit this parameter or set it to null to retain the original configuration. Set it to a positive integer to specify an exclusive rate. Set it to 0 to prohibit new CPU capacity. Set it to -1 to clear the exclusive rate and restore the remaining rate of the shared account. In query responses, this parameter is omitted if it is not configured. An explicit value of 0 is retained, and -1 is not returned.
   * 
   * @example
   * 120
   */
  scalingCpuCoresPerMinute?: number;
  /**
   * @remarks
   * The quota tag value, which represents the team ID. Quotas are independently calculated based on this dimension.
   * 
   * @example
   * 7696f4cf-****
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'cpuCores',
      createSandboxWithSnapshotConcurrency: 'createSandboxWithSnapshotConcurrency',
      createSnapshotConcurrency: 'createSnapshotConcurrency',
      instanceCount: 'instanceCount',
      memoryGB: 'memoryGB',
      pauseConcurrency: 'pauseConcurrency',
      resumeConcurrency: 'resumeConcurrency',
      scalingCpuCoresPerMinute: 'scalingCpuCoresPerMinute',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCores: 'number',
      createSandboxWithSnapshotConcurrency: 'number',
      createSnapshotConcurrency: 'number',
      instanceCount: 'number',
      memoryGB: 'number',
      pauseConcurrency: 'number',
      resumeConcurrency: 'number',
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

