// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamResourceCidrsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the IPAM pool.
   * 
   * > **IpamPoolId** cannot be the instance ID of a shared IPAM pool.
   * 
   * @example
   * ipam-pool-6rcq3tobayc20t****
   */
  ipamPoolId?: string;
  /**
   * @remarks
   * The instance ID of the IPAM scope.
   * 
   * @example
   * ipam-scope-glfmcyldpm8lsy****
   */
  ipamScopeId?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * 
   * - If this is the first request or no more results exist, leave this parameter empty.
   * - If more results exist, set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where IPAM is hosted.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
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
   * The resource type. Valid values:
   * 
   * - **VPC**: The resource type is VPC.
   * - **VSwitch**: The resource type is vSwitch.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance to which the resource belongs.
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

