// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSwimmingLaneRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the lane group.
   * 
   * @example
   * 2074
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the lane.
   * 
   * @example
   * 9637
   */
  laneId?: number;
  /**
   * @remarks
   * The ID of a namespace.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      laneId: 'LaneId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      laneId: 'number',
      namespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

