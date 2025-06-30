// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResolverRulesResponseBodyRulesBindVpcs extends $dara.Model {
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region to which the VPC belongs.
   * 
   * @example
   * ap-southeast-1
   */
  regionName?: string;
  /**
   * @remarks
   * The VPC ID. This ID uniquely identifies the VPC.
   * 
   * @example
   * vpc-0jl96awrjt75ezglc****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC name.
   * 
   * @example
   * vpc-name-test
   */
  vpcName?: string;
  /**
   * @remarks
   * The VPC type. Valid values:
   * 
   * *   STANDARD: standard VPC
   * *   EDS: Elastic Desktop Service (EDS) workspace VPC
   * 
   * @example
   * STANDARD
   */
  vpcType?: string;
  /**
   * @remarks
   * The user ID to which the VPC belongs.
   * 
   * @example
   * 141339776561****
   */
  vpcUserId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcType: 'VpcType',
      vpcUserId: 'VpcUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vpcType: 'string',
      vpcUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

