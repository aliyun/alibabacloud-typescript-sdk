// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialRole } from "./CredentialRole";


export class CredentialConfigItem extends $dara.Model {
  /**
   * @remarks
   * The configuration key.
   * 
   * @example
   * 0
   */
  key?: string;
  /**
   * @remarks
   * The role configuration.
   */
  roles?: CredentialRole[];
  /**
   * @remarks
   * The credential configuration type.
   * 
   * @example
   * Role
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      roles: 'Roles',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      roles: { 'type': 'array', 'itemType': CredentialRole },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

