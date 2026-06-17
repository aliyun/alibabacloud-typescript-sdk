// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallManualVSwitchListRequest extends $dara.Model {
  /**
   * @remarks
   * The language of request and response messages.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member account.
   * 
   * @example
   * 18820897691****
   */
  memberUid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-qingdao
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the VPC instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-m5ewlqkuf7orclr1****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      memberUid: 'MemberUid',
      ownerId: 'OwnerId',
      regionNo: 'RegionNo',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      memberUid: 'string',
      ownerId: 'number',
      regionNo: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

