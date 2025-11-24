// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcsResponseBodyVpcs extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the VPC is the default VPC in the specified region. Valid values:
   * 
   * *   `true`: yes
   * *   `false`: no
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The status of the VPC. Valid values:
   * 
   * *   `Pending`: The VPC is being configured.
   * *   `Available`: The VPC is available for use.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of a VPC.
   * 
   * @example
   * vpc-bp1qkf2o3xmqc2519****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * vpc-test
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      status: 'Status',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      status: 'string',
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

export class DescribeVpcsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned on a single page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the end of the current returned page. If this parameter is empty, it indicates that you have retrieved all the data.
   * 
   * This parameter is required.
   * 
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD65C0AD-D3C6-48D3-8D93-38D2015C****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned. By default, this parameter is not returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of VPCs that are available in the specified region.
   */
  vpcs?: DescribeVpcsResponseBodyVpcs[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcs: 'Vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      vpcs: { 'type': 'array', 'itemType': DescribeVpcsResponseBodyVpcs },
    };
  }

  validate() {
    if(Array.isArray(this.vpcs)) {
      $dara.Model.validateArray(this.vpcs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

