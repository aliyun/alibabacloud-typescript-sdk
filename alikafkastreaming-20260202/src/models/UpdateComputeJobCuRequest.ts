// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeJobCuRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  cuLimit?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  cuReserved?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alikafka_streaming-cn-a1b2c3d4
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * order_enrichment
   */
  jobName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cuLimit: 'CuLimit',
      cuReserved: 'CuReserved',
      instanceId: 'InstanceId',
      jobName: 'JobName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuLimit: 'number',
      cuReserved: 'number',
      instanceId: 'string',
      jobName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

