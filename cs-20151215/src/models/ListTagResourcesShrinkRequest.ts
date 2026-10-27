// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * ***
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The list of resource IDs to query.
   * 
   * This parameter is required.
   * 
   * @example
   * ["xxxxx","xxxxxx"]
   */
  resourceIdsShrink?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * Valid values:
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
   * The list of tags to query. You can specify a maximum of 20 tags.
   * 
   * @example
   * [{\\"key\\":\\"env\\",\\"value\\",\\"dev\\"},{\\"key\\":\\"dev\\", \\"value\\":\\"IT\\"}]
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'next_token',
      regionId: 'region_id',
      resourceIdsShrink: 'resource_ids',
      resourceType: 'resource_type',
      tagsShrink: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceIdsShrink: 'string',
      resourceType: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

