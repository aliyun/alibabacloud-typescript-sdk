// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access group.
   * 
   * This parameter is required.
   * 
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  /**
   * @remarks
   * The description of the access group rule. The description can be up to 32 characters in length.
   * 
   * @example
   * CIDR block of log upload servers
   */
  description?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @remarks
   * The IP address or CIDR block of the authorized object.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.0.2.0/24
   */
  networkSegment?: string;
  /**
   * @remarks
   * The priority of the access group rule. When an authorized object matches multiple rules, the rule with the highest priority takes effect. Valid values: 1 to 100. A value of 1 indicates the highest priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The read and write permissions of the authorized object on the file system. Valid values:
   * - RDWR: Read and write.
   * - RDONLY: Read-only.
   * 
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

