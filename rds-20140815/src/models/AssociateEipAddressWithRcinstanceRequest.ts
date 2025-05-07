// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateEipAddressWithRCInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The EIP ID.
   * 
   * >  If no EIP is available, create an EIP. For more information, see [Create an EIP](https://help.aliyun.com/document_detail/292841.html).
   * 
   * @example
   * eip-bp166out2x4bpcf******
   */
  allocationId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rc-i322y2t562oh7o******
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID. You can call the DescribeRegions operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      instanceId: 'string',
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

