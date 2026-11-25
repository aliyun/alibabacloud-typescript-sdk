// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuotaUsage extends $dara.Model {
  /**
   * @remarks
   * The consumed CPU quota in vCPUs, which is not the CPU utilization.
   * 
   * @example
   * 1
   */
  cpuCores?: number;
  /**
   * @remarks
   * The number of unreleased concurrency authorizations for snapshot-based sandbox creation.
   * 
   * @example
   * 1
   */
  createSandboxWithSnapshotConcurrency?: number;
  /**
   * @remarks
   * The number of unreleased concurrency authorizations for snapshot creation.
   * 
   * @example
   * 1
   */
  createSnapshotConcurrency?: number;
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
   * The consumed memory quota in GB, which is not the actual memory used by processes.
   * 
   * @example
   * 1.5
   */
  memoryGB?: number;
  /**
   * @remarks
   * The number of unreleased concurrency authorizations for sandbox hibernation.
   * 
   * @example
   * 1
   */
  pauseConcurrency?: number;
  /**
   * @remarks
   * The number of unreleased concurrency authorizations for resuming sandboxes.
   * 
   * @example
   * 1
   */
  resumeConcurrency?: number;
  /**
   * @remarks
   * The number of cores consumed from the exclusive CPU creation quota of the team that have not yet been naturally replenished. This is not the cumulative creation volume over the last minute. This field is omitted when no valid exclusive bucket snapshot is available. Actual zeros and decimals are retained.
   * 
   * @example
   * 19.875
   */
  scalingCpuCoresPerMinute?: number;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

