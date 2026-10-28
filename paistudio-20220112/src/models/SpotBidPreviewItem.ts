// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SpotBidPreviewItem extends $dara.Model {
  /**
   * @remarks
   * Specifies whether it is active.
   */
  active?: boolean;
  /**
   * @remarks
   * Specifies whether cross-super-node zones are allowed.
   */
  allowCrossHpnZone?: boolean;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cluster1
   */
  clusterId?: string;
  /**
   * @remarks
   * The GC level.
   * 
   * @example
   * A1
   */
  gcLevel?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ml.gp7vf.16.40xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * dlc1abcdefg12345
   */
  jobName?: string;
  /**
   * @remarks
   * The maximum discount price.
   * 
   * @example
   * 0.4
   */
  maxDiscount?: number;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * bid succeeded
   */
  message?: string;
  /**
   * @remarks
   * The pre-bid name.
   * 
   * @example
   * preview-xxxx
   */
  name?: string;
  /**
   * @remarks
   * The phase.
   */
  phase?: string;
  /**
   * @remarks
   * The number of replicas.
   * 
   * @example
   * 4
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

