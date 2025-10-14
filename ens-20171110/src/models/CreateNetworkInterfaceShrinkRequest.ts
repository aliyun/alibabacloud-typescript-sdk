// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkInterfaceShrinkRequest extends $dara.Model {
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
  securityGroupIdsShrink?: string;
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
      securityGroupIdsShrink: 'SecurityGroupIds',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      securityGroupIdsShrink: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

