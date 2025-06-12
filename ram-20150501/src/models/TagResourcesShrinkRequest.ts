// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesShrinkRequest extends $dara.Model {
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
   * The tags. You can specify up to 20 tags.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      resourceNamesShrink: 'ResourceNames',
      resourceType: 'ResourceType',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceNamesShrink: 'string',
      resourceType: 'string',
      tagShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

