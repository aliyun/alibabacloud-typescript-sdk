// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcHoneyPotListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether the VPCs to query have cloud honeypot enabled. Valid values:
   * - **true**: enabled
   * - **false**: disabled
   * 
   * @example
   * true
   */
  honeyPotExistence?: boolean;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. If you leave this parameter empty, 20 entries are returned per page.
   * > We recommend that you specify this parameter.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the VPC in which the honeypot instance that you want to query resides.
   * > You can call the [DescribeVpcList](~~DescribeVpcList~~) operation to obtain the VPC ID.
   * 
   * @example
   * vpc-d7o009q63fqy21r8u****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC in which the honeypot instance that you want to query resides.
   * > You can call the [DescribeVpcList](~~DescribeVpcList~~) operation to obtain the VPC name.
   * 
   * @example
   * abcnet
   */
  vpcName?: string;
  /**
   * @remarks
   * The region ID of the VPC in which the honeypot instance that you want to query resides.
   * > You can call the [DescribeVpcList](~~DescribeVpcList~~) operation to obtain the region ID of the VPC.
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

