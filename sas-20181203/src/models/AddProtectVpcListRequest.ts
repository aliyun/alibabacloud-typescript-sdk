// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddProtectVpcListRequest extends $dara.Model {
  /**
   * @remarks
   * Collection of new VPC instance IDs.
   * > Call the [DescribeVpcList](~~DescribeVpcList~~) interface to obtain this parameter.
   * 
   * @example
   * ["vpc-bp1vnpgotyzay6p5i****","vpc-bp1vnpgotyzay6p5i****"]
   */
  addVpcInstanceIdList?: string;
  /**
   * @remarks
   * Collection of VPC instance IDs to be deleted.
   * > Call the [DescribeVpcList](~~DescribeVpcList~~) interface to obtain this parameter.
   * 
   * @example
   * ["vpc-bp1vnpgotyzay6p5i****","vpc-bp1vnpgotyzay6p5i****"]
   */
  delVpcInstanceIdList?: string;
  static names(): { [key: string]: string } {
    return {
      addVpcInstanceIdList: 'AddVpcInstanceIdList',
      delVpcInstanceIdList: 'DelVpcInstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addVpcInstanceIdList: 'string',
      delVpcInstanceIdList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

