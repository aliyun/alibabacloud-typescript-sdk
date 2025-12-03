// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAccessRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acr-c38028f0-f313-4385-9456-3501b1f5****
   */
  accessRuleId?: string;
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
   * @example
   * 2
   */
  priority?: number;
  /**
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

