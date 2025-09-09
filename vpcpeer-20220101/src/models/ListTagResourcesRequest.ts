// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * >  You must specify **ResourceId.N** or **Tag.N** that consists of **Tag.N.Key** and **Tag.N.Value**.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * >  You must specify **ResourceId.N** or **Tag.N** that consists of **Tag.N.Key** and **Tag.N.Value**.
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

export class ListTagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Tag Type:
   * 
   * - All(Default)
   * - Custom
   * - System
   * 
   * @example
   * All
   */
  category?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **50**. Default value: **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If this is your first query or no subsequent query is to be sent, ignore this parameter.
   * *   If a next query is to be sent, set the value to the value of **NextToken** that is returned in the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the resource.
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
   * @deprecated
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Set the value to **PeerConnection**, which specifies a VPC peering connection.
   * 
   * This parameter is required.
   * 
   * @example
   * PeerConnection
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @deprecated
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
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

