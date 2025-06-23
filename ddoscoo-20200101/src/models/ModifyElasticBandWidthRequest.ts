// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElasticBandWidthRequest extends $dara.Model {
  /**
   * @remarks
   * The new burstable protection bandwidth that you want to use. Unit: Gbit/s.
   * 
   * > You can call the [DescribeElasticBandwidthSpec](https://help.aliyun.com/document_detail/91502.html) operation to query the available burstable protection bandwidth of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 50
   */
  elasticBandwidth?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * >  The instance must be in a normal state. You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-mp91j1ao****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticBandwidth: 'ElasticBandwidth',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticBandwidth: 'number',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

