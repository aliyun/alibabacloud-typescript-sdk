// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSwimmingLaneEnableAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Lane status:
   * 
   * *   true: enabled
   * *   false: disabled
   * 
   * @example
   * true
   */
  enable?: boolean;
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
      enable: 'Enable',
      groupId: 'GroupId',
      laneId: 'LaneId',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
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

