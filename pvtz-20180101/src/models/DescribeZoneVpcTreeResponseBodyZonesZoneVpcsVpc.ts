// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc extends $dara.Model {
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-heyuan
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region to which the VPC belongs.
   * 
   * @example
   * China (Heyuan)
   */
  regionName?: string;
  /**
   * @remarks
   * The VPC ID. The unique ID of the VPC.
   * 
   * @example
   * vpc-f8zvrvr1payllgz38****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC name.
   * 
   * @example
   * demo-vpc
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
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcType: 'VpcType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
      vpcId: 'string',
      vpcName: 'string',
      vpcType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

