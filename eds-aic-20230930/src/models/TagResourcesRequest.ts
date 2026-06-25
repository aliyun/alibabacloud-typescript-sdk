// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The key can be up to 128 characters in length. It cannot be an empty string. The key cannot start with \\`aliyun\\` or \\`acs:\\` and cannot contain \\`http\\://\\` or \\`https\\://\\`.
   * 
   * @example
   * department
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The value can be up to 128 characters in length and can be an empty string. The value cannot start with \\`acs:\\` and cannot contain \\`http\\://\\` or \\`https\\://\\`.
   * 
   * @example
   * design
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
   * The list of cloud phone IDs. The list can contain 1 to 50 IDs.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. The value must be \\`ALIYUN::ACP::INSTANCE\\`.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::ACP::INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags. The list can contain 1 to 20 tags.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

