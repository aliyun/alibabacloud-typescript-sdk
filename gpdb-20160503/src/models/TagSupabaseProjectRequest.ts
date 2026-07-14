// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagSupabaseProjectRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. This parameter cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value. This parameter can be an empty string. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`.
   * 
   * @example
   * test-value
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

export class TagSupabaseProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/86912.html) operation to query available region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Nth instance. Valid values of N: 1 to 50.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Set the value to `instance`.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The Nth tag. Valid values of N: 1 to 20.
   */
  tag?: TagSupabaseProjectRequestTag[];
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
      tag: { 'type': 'array', 'itemType': TagSupabaseProjectRequestTag },
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

