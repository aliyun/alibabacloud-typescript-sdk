// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElasticBizBandWidthRequest extends $dara.Model {
  /**
   * @remarks
   * The burstable clean bandwidth. Unit: Mbit/s. The burstable clean bandwidth cannot exceed nine times the clean bandwidth of your Anti-DDoS Pro or Anti-DDoS Premium instance, and the sum of the clean bandwidth and the burstable clean bandwidth cannot exceed the maximum clean bandwidth that is supported by your instance. The value 0 indicates that the burstable clean bandwidth feature is disabled. You can disable the burstable clean bandwidth feature once a month.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  elasticBizBandwidth?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-tl32morr****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metering method of the burstable clean bandwidth feature. Valid values:
   * 
   * *   **month**: the metering method of monthly 95th percentile
   * *   **day**: the metering method of daily 95th percentile
   * 
   * @example
   * month
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      elasticBizBandwidth: 'ElasticBizBandwidth',
      instanceId: 'InstanceId',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticBizBandwidth: 'number',
      instanceId: 'string',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

