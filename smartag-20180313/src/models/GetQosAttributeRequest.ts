// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQosAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * This parameter is required.
   * 
   * @example
   * qos-1iqifund3gcno5****
   */
  qosId?: string;
  /**
   * @remarks
   * The ID of the region where the QoS policy is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      qosId: 'QosId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosId: 'string',
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

