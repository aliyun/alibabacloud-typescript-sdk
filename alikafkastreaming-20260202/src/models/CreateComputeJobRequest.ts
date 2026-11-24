// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateComputeJobRequest extends $dara.Model {
  /**
   * @remarks
   * The compute unit (CU) limit for the job.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  cuLimit?: number;
  /**
   * @remarks
   * The reserved compute units (CUs) for the job.
   * 
   * > The reserved CUs must not exceed the CU limit.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  cuReserved?: number;
  /**
   * @remarks
   * The compute instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_streaming-cn-pe333xxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the compute job.
   * 
   * This parameter is required.
   * 
   * @example
   * order_enrichment
   */
  jobName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The remarks for the job.
   * 
   * @example
   * Real-time order stream cleaning
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      cuLimit: 'CuLimit',
      cuReserved: 'CuReserved',
      instanceId: 'InstanceId',
      jobName: 'JobName',
      regionId: 'RegionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cuLimit: 'number',
      cuReserved: 'number',
      instanceId: 'string',
      jobName: 'string',
      regionId: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

