// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * > 
   * > - - The tag key cannot start with aliyun or acs: in any case. 
   * > - - The tag key cannot contain http:// or https:// in any case.
   * > - - The tag key cannot be an empty string.
   * 
   * This parameter is required.
   * 
   * @example
   * key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * > 
   * > - - The tag value cannot contain http:// or https:// in any case.
   * > - - The tag value cannot be an empty string.
   * 
   * This parameter is required.
   * 
   * @example
   * value
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
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The list of resource IDs. You can specify up to 50 resource IDs in a single call.
   * > 
   * > - Supported resource types include users and access configurations:
   * > - - If the resource type is user, specify the user ID.
   * > - - If the resource type is access configuration, specify the access configuration ID.
   * 
   * <notice>If the DirectoryId parameter is not specified, you must add the prefix "${DirectoryId}_" to the resource ID.</notice>
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - user: User.
   * 
   * - accessConfiguration: Access configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tags. You can add up to 20 tags in a single call.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
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

