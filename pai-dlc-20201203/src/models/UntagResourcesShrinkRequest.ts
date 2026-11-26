// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the instance. Valid values:
   * 
   * - true: Removes all tags from the instance.
   * 
   * - false: Does not remove all tags from the instance.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  all?: string;
  /**
   * @remarks
   * The IDs of the resources. You can specify up to 50 IDs.
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
   * Job
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys. You can specify up to 20 tag keys.
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
      all: 'string',
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

