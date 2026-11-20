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
   * The number of unreleased snapshot-based sandbox creation concurrency authorizations.
   * 
   * @example
   * 1
   */
  createSessionWithSnapshotConcurrency?: number;
  /**
   * @remarks
   * The number of unreleased snapshot creation concurrency authorizations.
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
   * The consumed memory quota in GB, not the actual memory used by processes.
   * 
   * @example
   * 1.5
   */
  memoryGB?: number;
  /**
   * @remarks
   * The number of unreleased sandbox hibernation concurrency authorizations.
   * 
   * @example
   * 1
   */
  pauseConcurrency?: number;
  /**
   * @remarks
   * The number of unreleased sandbox resume concurrency authorizations.
   * 
   * @example
   * 1
   */
  resumeConcurrency?: number;
  /**
   * @remarks
   * The number of cores consumed from the team\\"s exclusive CPU creation quota that have not yet been naturally replenished. This is not the cumulative creation volume in the last minute. This field is omitted when there is no valid exclusive bucket snapshot, and actual zeros and decimal values are preserved.
   * 
   * @example
   * 19.875
   */
  scalingCpuCoresPerMinute?: number;
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

