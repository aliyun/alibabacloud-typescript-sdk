// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateEipAddressWithRCInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * > If you do not have an EIP, [create an EIP](https://help.aliyun.com/document_detail/292841.html) first.
   * 
   * @example
   * eip-bp166out2x4bpcf******
   */
  allocationId?: string;
  /**
   * @remarks
   * The instance ID of the RDS Custom instance.
   * 
   * @example
   * rc-i322y2t562oh7o******
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the available regions.
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

