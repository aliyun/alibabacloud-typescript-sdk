// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags. This parameter takes effect only when the tag key list is empty.
   * 
   * @example
   * true
   */
  all?: boolean;
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
   * > - The resource type can be user or access configuration:
   * > - - If the resource type is user, specify the user ID.
   * > - - If the resource type is access configuration, specify the access configuration ID.
   * 
   * <notice>If the DirectoryId parameter is not specified, you must add the "${DirectoryId}_" prefix to the resource ID.</notice>
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * - user: user
   * - accessConfiguration: access configuration
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys. You can specify up to 20 tag keys in a single call.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      directoryId: 'DirectoryId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      directoryId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

