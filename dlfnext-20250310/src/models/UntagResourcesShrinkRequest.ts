// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags from the resources. This parameter and the TagKey parameter are mutually exclusive.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The list of resource IDs. You can specify up to 50 resource IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["clg-paimon-0424965be0c240acb4159688c9e2c4b6"]
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * The resource type. Valid value: catalog.
   * 
   * This parameter is required.
   * 
   * @example
   * catalog
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys. This parameter and the All parameter are mutually exclusive.
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

