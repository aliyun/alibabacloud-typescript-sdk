// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRouteTargetGroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * Resource tag key. Up to 20 tag keys are supported. If you need to pass this value, you cannot input an empty string.
   * 
   * A tag key can have up to 128 characters and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  key?: string;
  /**
   * @remarks
   * Resource tag value. Up to 20 tag values are supported. If you need to pass this value, you can input an empty string.
   * 
   * A tag value can have up to 128 characters and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRouteTargetGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * Client token used to ensure idempotence of the request. Generate a unique parameter value from your client to ensure uniqueness across different requests. ClientToken only supports ASCII characters. Note: If you do not specify this, the system will automatically use the RequestId of the API request as the ClientToken identifier. The RequestId is different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Page size, with a range of **1** to **50**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * Route target group member instance ID.
   * Filters the route target groups that contain the specified member instance ID.
   * 
   * @example
   * ep-xxxx
   */
  memberId?: string;
  /**
   * @remarks
   * Token for the next query. Value: If it is the first query or there is no next query, this field does not need to be filled. If there is a next query, the value should be the NextToken returned from the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the VPC to which the route target group belongs. You can obtain the region ID by calling the DescribeRegions interface.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID. For more information about resource groups, see What is a Resource Group?
   * 
   * @example
   * rg-acfmxazdjdhd****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * List of route target group instance IDs.
   * 
   * Up to 50 instance IDs can be queried at a time.
   */
  routeTargetGroupIds?: string[];
  /**
   * @remarks
   * List of tags.
   */
  tag?: ListRouteTargetGroupsRequestTag[];
  /**
   * @remarks
   * The ID of the VPC to which the route target group belongs.
   * 
   * @example
   * vpc-xxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      maxResults: 'MaxResults',
      memberId: 'MemberId',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeTargetGroupIds: 'RouteTargetGroupIds',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      maxResults: 'number',
      memberId: 'string',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeTargetGroupIds: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListRouteTargetGroupsRequestTag },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.routeTargetGroupIds)) {
      $dara.Model.validateArray(this.routeTargetGroupIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

