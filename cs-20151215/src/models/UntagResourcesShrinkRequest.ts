// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all custom tags. This parameter takes effect only when `tag_keys` is empty. Valid values:
   * 
   * - `true`: deletes all tags.
   * - `false`: does not delete all tags.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The list of resource IDs. Up to 50 resource IDs can be specified.
   * 
   * This parameter is required.
   */
  resourceIdsShrink?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - CLUSTER: cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * CLUSTER
   */
  resourceType?: string;
  /**
   * @remarks
   * The list of tag keys for the resources. Up to 20 tag keys can be specified.
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

