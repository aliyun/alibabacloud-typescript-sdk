// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeJobCuRequest extends $dara.Model {
  /**
   * @remarks
   * **The CU limit for the job.**
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  cuLimit?: number;
  /**
   * @remarks
   * **The reserved CUs for the job.**
   * 
   * > The number of reserved CUs must not exceed the CU limit.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  cuReserved?: number;
  /**
   * @remarks
   * **The compute instance ID.**
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_streaming-cn-a1b2c3d4
   */
  instanceId?: string;
  /**
   * @remarks
   * **The name of the compute job.**
   * 
   * This parameter is required.
   * 
   * @example
   * order_enrichment
   */
  jobName?: string;
  /**
   * @remarks
   * **The region ID.**
   * 
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

