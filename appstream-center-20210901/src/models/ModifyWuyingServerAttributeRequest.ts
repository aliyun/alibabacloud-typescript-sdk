// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWuyingServerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The logon password of the cloud graphics workstation.
   * 
   * @example
   * yourPassword
   */
  password?: string;
  productType?: string;
  /**
   * @remarks
   * The ID of the cloud graphics workstation.
   * 
   * @example
   * ws-0bw2f11****dial
   */
  wuyingServerId?: string;
  /**
   * @remarks
   * The name of the cloud graphics workstation.
   * 
   * @example
   * exampleServerName
   */
  wuyingServerName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      productType: 'ProductType',
      wuyingServerId: 'WuyingServerId',
      wuyingServerName: 'WuyingServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      productType: 'string',
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

