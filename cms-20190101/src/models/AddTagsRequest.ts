// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTagsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * Valid values of N: 1 to 3. A tag key can be 1 to 64 characters in length.
   * 
   * You can create a tag key or specify an existing tag key. For more information about how to obtain a tag key, see [DescribeTagKeyList](https://help.aliyun.com/document_detail/2513189.html).
   * 
   * >  The tag key cannot start with `aliyun` or `acs:`. The tag key (`Tag.N.Key`) and tag value (`Tag.N.Value`) must be specified at the same time.
   * 
   * This parameter is required.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * Valid values of N: 1 to 3. A tag value can be 1 to 64 characters in length.
   * 
   * You can create a tag value or specify an existing tag value. For more information about how to obtain a tag value, see [DescribeTagValueList](https://help.aliyun.com/document_detail/2513188.html).
   * 
   * >  The tag value cannot start with `aliyun` or `acs:`. The tag key (`Tag.N.Key`) and tag value (`Tag.N.Value`) must be specified at the same time.
   * 
   * This parameter is required.
   * 
   * @example
   * value1
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

export class AddTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * Valid values of N: 1 to 20.
   * 
   * For information about how to query the IDs of application groups, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/2513168.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 7301****
   */
  groupIds?: string[];
  regionId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * This parameter is required.
   */
  tag?: AddTagsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      groupIds: 'GroupIds',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupIds: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': AddTagsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
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

