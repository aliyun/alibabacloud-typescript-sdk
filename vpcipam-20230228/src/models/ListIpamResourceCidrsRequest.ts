// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamResourceCidrsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the IPAM pool.
   * 
   * >  You must specify at least one of **IpamScopeId** and **IpamPoolId**.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * The ID of the IPAM scope.
   * 
   * >  You must specify at least one of **IpamScopeId** and **IpamPoolId**.
   * 
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the IPAM instance is hosted.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * vpc-bp16qjewdsunr41m1****
   */
  resourceId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of resource. Valid values:
   * 
   * *   **VPC**
   * *   **VSwitch**
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1fjfnrg3av6zb9e****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ipamPoolId: 'IpamPoolId',
      ipamScopeId: 'IpamScopeId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamPoolId: 'string',
      ipamScopeId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
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

