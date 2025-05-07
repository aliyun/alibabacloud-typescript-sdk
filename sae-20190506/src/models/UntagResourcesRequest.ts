// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * false
   * 
   * @example
   * false
   */
  deleteAll?: boolean;
  /**
   * @remarks
   * cn-beijing
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * ["d42921c4-5433-4abd-8075-0e536f8b\\*\\*\\*\\*"]
   * 
   * This parameter is required.
   * 
   * @example
   * ["d42921c4-5433-4abd-8075-0e536f8b****"]
   */
  resourceIds?: string;
  /**
   * @remarks
   * application
   * 
   * This parameter is required.
   * 
   * @example
   * application
   */
  resourceType?: string;
  /**
   * @remarks
   * ["k1","k2"]
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

