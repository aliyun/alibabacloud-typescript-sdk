// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags. This parameter applies only when TagKeys is not specified. Valid values:
   * 
   * - **true**: All tags are removed.
   * 
   * - **false**: Only the tags specified in the TagKeys parameter are removed.
   * 
   * @example
   * false
   */
  deleteAll?: boolean;
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
   * The resource IDs. To specify multiple resource IDs, separate them with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["d42921c4-5433-4abd-8075-0e536f8b****"]
   */
  resourceIds?: string;
  /**
   * @remarks
   * The resource type. Only `application` is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * application
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys. To specify multiple tag keys, separate them with commas (,).
   * 
   * @example
   * ["k1","k2"]
   */
  tagKeys?: string;
  static names(): { [key: string]: string } {
    return {
      deleteAll: 'DeleteAll',
      regionId: 'RegionId',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteAll: 'boolean',
      regionId: 'string',
      resourceIds: 'string',
      resourceType: 'string',
      tagKeys: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

