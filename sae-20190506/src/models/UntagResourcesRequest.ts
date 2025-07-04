// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to remove all the specified tags. This parameter takes effect only if the TagKeys parameter is specified. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The IDs of resources. Separate multiple resource IDs with comma (,).
   * 
   * This parameter is required.
   * 
   * @example
   * ["d42921c4-5433-4abd-8075-0e536f8b****"]
   */
  resourceIds?: string;
  /**
   * @remarks
   * The type of the resource. Set the value to `application`.
   * 
   * This parameter is required.
   * 
   * @example
   * application
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag keys. Separate multiple tag keys with commas (,).
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

