// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * A list of resource IDs.
   * 
   * This parameter is required.
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * function
   */
  resourceType?: string;
  /**
   * @remarks
   * The keys of the tags to remove. You can specify up to 50 tag keys.
   */
  tagKeyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceIdShrink: 'ResourceId',
      resourceType: 'ResourceType',
      tagKeyShrink: 'TagKey',
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

