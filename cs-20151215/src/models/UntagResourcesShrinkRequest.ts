// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all custom labels. This parameter takes effect only when `tag_keys` is left empty. Valid values:
   * 
   * *   `true`: Remove all custom labels.
   * *   `false`: Do not remove all custom labels.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID of the resources.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of resource IDs.
   * 
   * This parameter is required.
   */
  resourceIdsShrink?: string;
  /**
   * @remarks
   * The type of resource. Set the value to `CLUSTER`.
   * 
   * This parameter is required.
   * 
   * @example
   * CLUSTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of keys of the labels that you want to remove.
   * 
   * This parameter is required.
   */
  tagKeysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      regionId: 'region_id',
      resourceIdsShrink: 'resource_ids',
      resourceType: 'resource_type',
      tagKeysShrink: 'tag_keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceIdsShrink: 'string',
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

