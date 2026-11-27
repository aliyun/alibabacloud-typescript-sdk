// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to unbind all tags from the target file system.
   * 
   * This parameter takes effect when TagKey.N is empty.
   * 
   * Valid values:
   * 
   * - true: Unbinds all tags from the target file system. If a file system has no tags, no processing is performed and success is returned directly.
   * - false (default): Does not perform the operation and returns success directly.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The list of resource IDs.
   * 
   * The ID of the target resource. Valid values of N: 1 to 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 03e08484f0
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
   * - filesystem: file system.
   * - accesspoint: access point.
   * 
   * This parameter is required.
   * 
   * @example
   * filesystem
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys of the resource. You can enter up to 20 tag keys.
   * 
   * @example
   * nastest
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
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

