// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. A tag consists of a key-value pair.
   * 
   * You can enter up to 20 tags. Enter multiple tags in the `[{"Key":"key1","Value":"value1"},{"Key":"key2","Value":"value2"},..]` format.
   * 
   * >  The key cannot start with aliyun or acs:.
   * 
   * @example
   * disk-encryption
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. A tag consists of a key-value pair.
   * 
   * You can enter up to 20 tags. Enter multiple tags in the `[{"Key":"key1","Value":"value1"},{"Key":"key2","Value":"value2"},..]` format.
   * 
   * @example
   * true
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
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * >  If the call does not return all result entries, the value of the NextToken parameter is returned. By default, 200 rows are returned. You can call this operation again and set the value of the parameter to the value of the parameter that is returned in the last call to implement paged query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/601478.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * A list of resource IDs for which you want to query tags. You can enter a maximum of 50 resource IDs.
   * 
   * Enter multiple resource IDs in the `["ResourceId. 1","ResourceId. 2",...]` format.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of resource whose tags you want to query. Valid value:
   * 
   * *   key
   * *   secret
   * 
   * This parameter is required.
   * 
   * @example
   * key
   */
  resourceType?: string;
  /**
   * @remarks
   * A list of tags that you want to query. Valid values of N: 1 to 20.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

