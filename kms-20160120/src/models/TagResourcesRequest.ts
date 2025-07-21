// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. A tag consists of a key-value pair.
   * 
   * You can enter up to 20 tags. Enter multiple tags in the `[{"Key":"key1","Value":"value1"},{"Key":"key2","Value":"value2"},..]` format.
   * 
   * Each key can be up to 128 characters in length and can contain letters, digits, forward slashes (/), backslashes (\\\\), underscores (_), hyphens (-), periods (.), plus signs (+), equal signs (=), colons (:), and at signs (@).
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
   * Each value can be up to 128 characters in length and can contain letters, digits, forward slashes (/), backslashes (\\\\), underscores (_), hyphens (-), periods (.), plus signs (+), equal signs (=), colons (:), and at signs (@).
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

export class TagResourcesRequest extends $dara.Model {
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
   * The IDs of the resources to which you want to add tags. You can enter a maximum of 50 resource IDs.
   * 
   * Enter multiple resource IDs in the `["ResourceId. 1","ResourceId. 2",...]` format.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource to which you want to add tags. Valid values:
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
   * A list of tags. You can enter up to 20 tags.
   * 
   * A tag consists of a key-value pair. Enter multiple tags in the `[{"Key":"key1","Value":"value1"},{"Key":"key2","Value":"value2"},..]` format.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
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

