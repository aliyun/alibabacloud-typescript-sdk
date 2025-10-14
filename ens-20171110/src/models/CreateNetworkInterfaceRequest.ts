// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * Description of the ENI.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * ENI name.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * Security group ID.
   * 
   * This parameter is required.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * vSwitch ID.
   * 
   * @example
   * vsw-5****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      securityGroupIds: 'SecurityGroupIds',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

