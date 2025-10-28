// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSwimmingLaneGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * @example
   * 0
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * The ID of a custom namespace is in the region ID:namespace identifier format. Example: cn-beijing:test.\\
   * The ID of the default namespace is in the region ID format. Example: cn-beijing.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen:publish
   */
  logicalRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      logicalRegionId: 'LogicalRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      logicalRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

