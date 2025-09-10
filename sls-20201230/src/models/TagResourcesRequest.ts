// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. The key must meet the following requirements:
   * 
   * *   The key must be `1 to 128` characters in length.
   * *   The key cannot contain `http://` or `https://`.
   * *   The key cannot start with `acs:` or `aliyun`.
   * 
   * This parameter is required.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The value must meet the following requirements:
   * 
   * *   The value must be `1 to 128` characters in length.
   * *   The value cannot contain `http://` or `https://`.
   * 
   * This parameter is required.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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
   * The resource IDs. You can specify only one resource and add tags to the resource.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   project
   * *   logstore
   * *   dashboard
   * *   machinegroup
   * *   logtailconfig
   * 
   * This parameter is required.
   * 
   * @example
   * project
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags that you want to add to the resource. You can specify up to 20 tags in each call. Each tag is a key-value pair.
   * 
   * This parameter is required.
   */
  tags?: TagResourcesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tags: { 'type': 'array', 'itemType': TagResourcesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

