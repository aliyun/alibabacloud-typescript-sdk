// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamPoolCidrsRequest extends $dara.Model {
  /**
   * @remarks
   * The provisioned CIDR block to query.
   * 
   * > Only IPv4 CIDR blocks are supported.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The instance ID of the IPAM pool.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to retrieve the next page of results. Set the value to the `NextToken` value that is returned in the last call. You do not need to specify this parameter for the first call.
   * 
   * - If **NextToken** is empty, no further query is needed.
   * 
   * - If **NextToken** has a value, use it as the token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the IPAM is created.
   * 
   * Call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      ipamPoolId: 'IpamPoolId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      ipamPoolId: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

