// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the resources.
   * 
   * Enumerated values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The names of the resources. You can specify up to 50 resource names.
   */
  resourceNamesShrink?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * Enumerated values:
   * 
   * *   role
   * *   policy
   * 
   * @example
   * role
   */
  resourceType?: string;
  /**
   * @remarks
   * The keys of the tags. You can specify up to 20 tag keys.
   */
  tagKeysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceNamesShrink: 'ResourceNames',
      resourceType: 'ResourceType',
      tagKeysShrink: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceNamesShrink: 'string',
      resourceType: 'string',
      tagKeysShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

