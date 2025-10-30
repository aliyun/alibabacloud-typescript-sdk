// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWuyingServerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Workstation login password.
   * 
   * @example
   * yourPassword
   */
  password?: string;
  /**
   * @remarks
   * The ID of the workstation.
   * 
   * @example
   * ws-0bw2f11****dial
   */
  wuyingServerId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * exampleServerName
   */
  wuyingServerName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      wuyingServerId: 'WuyingServerId',
      wuyingServerName: 'WuyingServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      wuyingServerId: 'string',
      wuyingServerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

