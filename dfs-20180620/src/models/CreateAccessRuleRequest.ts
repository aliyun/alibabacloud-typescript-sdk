// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 192.0.2.0/24
   */
  networkSegment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RDWR
   */
  RWAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      description: 'Description',
      inputRegionId: 'InputRegionId',
      networkSegment: 'NetworkSegment',
      priority: 'Priority',
      RWAccessType: 'RWAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      description: 'string',
      inputRegionId: 'string',
      networkSegment: 'string',
      priority: 'number',
      RWAccessType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

