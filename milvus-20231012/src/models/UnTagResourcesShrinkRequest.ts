// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnTagResourcesShrinkRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance
   */
  resourceType?: string;
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

