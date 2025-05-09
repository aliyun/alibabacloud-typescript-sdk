// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcListLiteResponseBodyVpcList extends $dara.Model {
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-wz9dqhljd10fk0b4eh885
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * Cloud_Firewall_VPC
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      regionNo: 'RegionNo',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNo: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

