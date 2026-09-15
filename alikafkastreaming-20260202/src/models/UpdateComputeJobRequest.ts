// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateComputeJobRequest extends $dara.Model {
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
  /**
   * @example
   * 订单流实时清洗
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobName: 'JobName',
      regionId: 'RegionId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

