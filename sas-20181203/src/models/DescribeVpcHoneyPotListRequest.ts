// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcHoneyPotListRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether the cloud honeypot feature is enabled for the VPCs. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  honeyPotExistence?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * > We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the VPC on which the honeypot is deployed.
   * 
   * > You can call the [DescribeVpcList](~~DescribeVpcList~~) operation to query the IDs of VPCs.
   * 
   * @example
   * vpc-d7o009q63fqy21r8u****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * > You can call the [DescribeVpcList](~~DescribeVpcList~~) operation to query the names of VPCs.
   * 
   * @example
   * abcnet
   */
  vpcName?: string;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * > You can call the [DescribeVpcList](~~DescribeVpcList~~) operation to query the region IDs of VPCs.
   * 
   * @example
   * ap-southeast-2
   */
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      honeyPotExistence: 'HoneyPotExistence',
      pageSize: 'PageSize',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
      vpcRegionId: 'VpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      honeyPotExistence: 'boolean',
      pageSize: 'number',
      vpcId: 'string',
      vpcName: 'string',
      vpcRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

