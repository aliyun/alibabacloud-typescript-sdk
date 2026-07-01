// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamDiscoveredResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The resource discovery instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-res-disco-jt5f2af2u6nk2z321****
   */
  ipamResourceDiscoveryId?: string;
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
   * - If this is the first query or no subsequent query exists, leave this parameter empty.
   * - If a subsequent query exists, set this parameter to the **NextToken** value returned in the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The hosted region ID of the resource discovery instance.
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
   * The operating region of the resource discovery.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - **VPC**: VPC.
   * 
   * - **VSwitch**: vSwitch.
   * 
   * @example
   * VPC
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      ipamResourceDiscoveryId: 'IpamResourceDiscoveryId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceRegionId: 'ResourceRegionId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipamResourceDiscoveryId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceRegionId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

