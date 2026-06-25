// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSwimmingLaneEnableAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The enabled status of the swimming lane. Valid values:
   * 
   * - true: enabled
   * 
   * - false: disabled
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The swimming lane group ID.
   * 
   * @example
   * 2074
   */
  groupId?: number;
  /**
   * @remarks
   * The swimming lane ID.
   * 
   * @example
   * 9637
   */
  laneId?: number;
  /**
   * @remarks
   * The namespace ID.
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

