// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccessRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the permission group.
   * 
   * This parameter is required.
   * 
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  /**
   * @remarks
   * The ID of the permission group rule.
   * 
   * This parameter is required.
   * 
   * @example
   * acr-c38028f0-f313-4385-9456-3501b1f5****
   */
  accessRuleId?: string;
  /**
   * @remarks
   * The description of the permission group rule.
   * 
   * The description can be up to 32 characters in length.
   * 
   * @example
   * CIDR block of the log upload server
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
   * The priority of the permission group rule.
   * 
   * Valid values: 1 to 100. A value of 1 indicates the highest priority.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The read and write permissions that the authorized object has on the file system.
   * 
   * Valid values:
   * 
   * - RDWR: read and write
   * - RDONLY: read-only
   * 
   * @example
   * RDWR
   */
  RWAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      accessRuleId: 'AccessRuleId',
      description: 'Description',
      inputRegionId: 'InputRegionId',
      priority: 'Priority',
      RWAccessType: 'RWAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      accessRuleId: 'string',
      description: 'string',
      inputRegionId: 'string',
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

