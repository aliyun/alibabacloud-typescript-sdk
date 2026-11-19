// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTagsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * Valid values of N: 1 to 3. The tag key must be 1 to 64 characters in length.
   * 
   * You can enter a new tag key or use an existing tag key in CloudMonitor. For more information about how to obtain tag keys, see [DescribeTagKeyList](https://help.aliyun.com/document_detail/2513189.html).
   * 
   * > The tag key cannot start with `aliyun` or `acs:`. You must specify both the tag key (`Tag.N.Key`) and the tag value (`Tag.N.Value`).
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
   * Valid values of N: 1 to 3. The tag value must be 1 to 64 characters in length.
   * 
   * You can enter a new tag value or use an existing tag value in CloudMonitor. For more information about how to obtain tag values, see [DescribeTagValueList](https://help.aliyun.com/document_detail/2513188.html).
   * 
   * > The tag value cannot start with `aliyun` or `acs:`. You must specify both the tag key (`Tag.N.Key`) and the tag value (`Tag.N.Value`).
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
   * The IDs of the application groups.
   * 
   * Valid values of N: 1 to 20.
   * 
   * For more information about how to obtain the ID of an application group, see [DescribeMonitorGroups](https://help.aliyun.com/document_detail/2513168.html).
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
   * The list of tags.
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

