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
   * The concurrent quota for creating sandboxes from snapshots in a team. This indicates the maximum number of requests for creating sandboxes from snapshots that can be executed at the same time. Omit or pass null to retain the original configuration during updates. A positive integer sets an exclusive quota. 0 prohibits creating sandboxes from snapshots. -1 clears the exclusive quota and restores the remaining quota of the shared account. During queries, this field is omitted if not configured, an explicit 0 is retained, and -1 is not returned.
   * 
   * @example
   * 10
   */
  createSessionWithSnapshotConcurrency?: number;
  /**
   * @remarks
   * The concurrent quota for creating snapshots in a team. This indicates the maximum number of snapshot creation requests that can be executed at the same time. Omit or pass null to retain the original configuration during updates. A positive integer sets an exclusive quota. 0 prohibits creating snapshots. -1 clears the exclusive quota and restores the remaining quota of the shared account. During queries, this field is omitted if not configured, an explicit 0 is retained, and -1 is not returned.
   * 
   * @example
   * 10
   */
  createSnapshotConcurrency?: number;
  /**
   * @remarks
   * The quota for the number of running instances.
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
   * The concurrent quota for sandbox hibernation in a team. This indicates the maximum number of sandbox hibernation requests that can be executed at the same time. Omit or pass null to retain the original configuration during updates. A positive integer sets an exclusive quota. 0 prohibits sandbox hibernation. -1 clears the exclusive quota and restores the remaining quota of the shared account. During queries, this field is omitted if not configured, an explicit 0 is retained, and -1 is not returned.
   * 
   * @example
   * 10
   */
  pauseConcurrency?: number;
  /**
   * @remarks
   * The concurrent quota for resuming sandboxes in a team. This indicates the maximum number of sandbox resumption requests that can be executed at the same time. Omit or pass null to retain the original configuration during updates. A positive integer sets an exclusive quota. 0 prohibits resuming sandboxes. -1 clears the exclusive quota and restores the remaining quota of the shared account. During queries, this field is omitted if not configured, an explicit 0 is retained, and -1 is not returned.
   * 
   * @example
   * 10
   */
  resumeConcurrency?: number;
  /**
   * @remarks
   * The Team CPU creation rate, in cores per minute. Omit or pass null to retain the original configuration during updates. A positive integer sets an exclusive rate. 0 prohibits adding new CPU capacity. -1 clears the exclusive rate and restores the remaining rate of the shared account. During queries, this field is omitted if not configured, an explicit 0 is retained, and -1 is not returned.
   * 
   * @example
   * 120
   */
  scalingCpuCoresPerMinute?: number;
  /**
   * @remarks
   * The quota tag value. This value is the team ID, and quotas are calculated independently based on this dimension.
   * 
   * @example
   * 7696f4cf-****
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCores: 'cpuCores',
      createSessionWithSnapshotConcurrency: 'createSessionWithSnapshotConcurrency',
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
      createSessionWithSnapshotConcurrency: 'number',
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

