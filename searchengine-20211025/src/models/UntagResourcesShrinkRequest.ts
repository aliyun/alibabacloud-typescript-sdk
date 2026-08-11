// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags. This parameter is valid only when the \\`tagKey\\` parameter is empty. Valid values: \\`true\\` and \\`false\\`. The default value is \\`false\\`.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The IDs of the resources. You can specify up to 50 resource IDs.
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
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys. You can include up to 20 tag keys.
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

