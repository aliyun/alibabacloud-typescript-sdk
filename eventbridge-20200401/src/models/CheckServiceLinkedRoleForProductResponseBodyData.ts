// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceLinkedRoleForProductResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service-linked role exists.
   * 
   * @example
   * true
   */
  checkPass?: boolean;
  /**
   * @remarks
   * The name of the service-linked role.
   * 
   * @example
   * AliyunServiceRoleForEventBridgeConnectVPC
   */
  stsRoleName?: string;
  static names(): { [key: string]: string } {
    return {
      checkPass: 'CheckPass',
      stsRoleName: 'StsRoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkPass: 'boolean',
      stsRoleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

