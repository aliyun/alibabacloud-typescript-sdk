// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags. This parameter is valid only when tags are empty. Valid values:
   * 
   * - true
   * - false
   * - True
   * - False
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The resource IDs. You can specify up to 50 subkeys.
   * 
   * @example
   * ["gw-xxx","gw-yyy"]
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * gateway
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys. You can specify up to 20 subkeys.
   * 
   * @example
   * ["env","team"]
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

