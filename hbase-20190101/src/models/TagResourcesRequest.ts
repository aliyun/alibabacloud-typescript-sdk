// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * > N specifies the sequence number of the tag key. For example:<ul>
   * <li>Tag.1.Key specifies the key of the first tag.</li>
   * <li>Tag.2.Key specifies the key of the second tag.</li></ul>.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * > N specifies the sequence number of the tag value. For example:<ul>
   * <li>Tag.1.Value specifies the value of the first tag.</li>
   * <li>Tag.2.Value specifies the value of the second tag.</li></ul>.
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

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/144489.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of instance IDs. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/144595.html) operation to query instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * bds-bp15e022622fk0w1
   */
  resourceId?: string[];
  /**
   * @remarks
   * The list of tags.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
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

