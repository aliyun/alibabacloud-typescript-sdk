// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all custom tags. Valid values: true, false, and an empty string. If this parameter is not specified or is set to an empty string, the value is treated as false. The value true takes effect only when the tagKey parameter is not specified or is an empty array.
   * 
   * @example
   * true
   */
  all?: string;
  /**
   * @remarks
   * The list of resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["space-a","space-b"]
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * The resource type. Set the value to agentspace.
   * 
   * This parameter is required.
   * 
   * @example
   * agentspace
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys to remove. You can specify up to 20 tag keys. The tag keys must be unique. If this parameter is not empty, it takes precedence over the all parameter.
   * 
   * @example
   * ["key1", "key2", "key3"]
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

