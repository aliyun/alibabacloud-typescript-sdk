// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyWuyingServerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable dedicated eRDMA network interfaces. Only true is supported.
   * 
   * @example
   * true
   */
  erdmaEnabled?: boolean;
  /**
   * @remarks
   * The logon password of the workstation.
   * 
   * @example
   * yourPassword
   */
  password?: string;
  /**
   * @remarks
   * The product type.
   * 
   * @example
   * WuyingServer
   */
  productType?: string;
  /**
   * @remarks
   * The workstation ID.
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
      erdmaEnabled: 'ErdmaEnabled',
      password: 'Password',
      productType: 'ProductType',
      wuyingServerId: 'WuyingServerId',
      wuyingServerName: 'WuyingServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      erdmaEnabled: 'boolean',
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

