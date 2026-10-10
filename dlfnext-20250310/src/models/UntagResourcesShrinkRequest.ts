// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resources. This parameter and TagKey are mutually exclusive.
   */
  all?: boolean;
  /**
   * @remarks
   * The list of data catalog IDs from which to remove tags. The value is a JSON array. Maximum: 50.
   * 
   * This parameter is required.
   * 
   * @example
   * ["clg-paimon-0424965be0c240acb4159688c9e2c4b6"]
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * The resource type. Valid value: CATALOGRESOURCE.
   * 
   * This parameter is required.
   * 
   * @example
   * CATALOGRESOURCE
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys to remove. The value is a JSON array. This parameter and All are mutually exclusive.
   * 
   * @example
   * ["team"]
   */
  tagKeyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      resourceIdShrink: 'resourceId',
      resourceType: 'resourceType',
      tagKeyShrink: 'tagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
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

