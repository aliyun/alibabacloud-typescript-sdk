// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVSwitchAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the listener.
   * 
   * *   The description must be 2 to 256 characters in length.
   * *   It must start with a letter but cannot start with http:// or https://.
   * 
   * @example
   * this is my first network
   */
  description?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * n-****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * *   The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-).
   * *   It must start with a letter but cannot start with http:// or https://.
   * 
   * @example
   * Test-switch
   */
  vSwitchName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

