// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Whether to detach all tags from the resource. Valid values:
   * 
   * - **true**: Detach all tags from the resource.
   * 
   * - **false**: Do not detach all tags from the resource.
   * 
   * > * Default value: false.
   * 
   * - If you specify both TagKey and this parameter, this parameter is ignored.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * Region
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource IDs. Maximum: 50 items.
   * 
   * This parameter is required.
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * Resource type
   * 
   * This parameter is required.
   * 
   * @example
   * ResourceGroup
   */
  resourceType?: string;
  /**
   * @remarks
   * List of tag keys. Maximum: 20 items.
   */
  tagKeyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceIdShrink: 'ResourceId',
      resourceType: 'ResourceType',
      tagKeyShrink: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceIdShrink: 'string',
      resourceType: 'string',
      tagKeyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

