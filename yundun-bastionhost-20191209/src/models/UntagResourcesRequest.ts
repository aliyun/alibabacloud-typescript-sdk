// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the Bastionhost instance.
   * 
   * - If you specify \\`TagKey.N\\`, you must set \\`All\\` to **false** to remove specific tags.
   * 
   * - If you do not specify \\`TagKey.N\\`, set \\`All\\` to **true** to remove all tags. If you set \\`All\\` to **false**, no tags are removed.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The ID of the region where the Bastionhost instance resides.
   * 
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * The value of N can be from 1 to 20.
   * 
   * > You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the ID of the Bastionhost instance.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource.
   * 
   * The only valid value is **INSTANCE**. This value indicates a Bastionhost instance.
   * 
   * This parameter is required.
   * 
   * @example
   * INSTANCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * The value of N can be from 1 to 20.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
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

