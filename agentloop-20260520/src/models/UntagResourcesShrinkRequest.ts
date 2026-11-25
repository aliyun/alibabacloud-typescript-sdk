// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disassociate all user-defined tags. Valid values: true, false, and an empty string. If this parameter is not specified or is set to an empty string, it is treated as false. The value true indicates that all tags are disassociated only when the tagKey parameter is not specified or is an empty array.
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
   * The resource type. The value is fixed to agentspace.
   * 
   * This parameter is required.
   * 
   * @example
   * agentspace
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys to disassociate. You can specify up to 20 tag keys, and they must be unique. If this parameter is not empty, it takes precedence over the all parameter.
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

