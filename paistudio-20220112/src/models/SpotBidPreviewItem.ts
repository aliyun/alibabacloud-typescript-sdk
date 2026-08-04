// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SpotBidPreviewItem extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the spot bid is active. If set to `false`, the bid is paused.
   */
  active?: boolean;
  /**
   * @remarks
   * Determines whether instances can be deployed across different High-Performance Network (HPN) zones. Defaults to `false`.
   */
  allowCrossHpnZone?: boolean;
  /**
   * @remarks
   * The ID of the cluster where resources are provisioned.
   */
  clusterId?: string;
  /**
   * @remarks
   * The GC level for the spot instance.
   */
  gcLevel?: string;
  /**
   * @remarks
   * The type of compute instance.
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the associated job.
   */
  jobName?: string;
  /**
   * @remarks
   * The maximum discount percentage from the on-demand price.
   */
  maxDiscount?: number;
  /**
   * @remarks
   * A message that provides additional details about the current phase.
   */
  message?: string;
  /**
   * @remarks
   * The name of the spot bid preview.
   */
  name?: string;
  /**
   * @remarks
   * The current phase of the spot bid preview. Valid values are `Pending`, `Active`, and `Failed`.
   */
  phase?: string;
  /**
   * @remarks
   * The number of instance replicas.
   */
  replicas?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      allowCrossHpnZone: 'allowCrossHpnZone',
      clusterId: 'clusterId',
      gcLevel: 'gcLevel',
      instanceType: 'instanceType',
      jobName: 'jobName',
      maxDiscount: 'maxDiscount',
      message: 'message',
      name: 'name',
      phase: 'phase',
      replicas: 'replicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      allowCrossHpnZone: 'boolean',
      clusterId: 'string',
      gcLevel: 'string',
      instanceType: 'string',
      jobName: 'string',
      maxDiscount: 'number',
      message: 'string',
      name: 'string',
      phase: 'string',
      replicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

