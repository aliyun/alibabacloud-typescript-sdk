// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialRole } from "./CredentialRole";


export class CredentialConfigItem extends $dara.Model {
  /**
   * @remarks
   * The identity key of the credential configuration item.
   * 
   * @example
   * 0
   */
  key?: string;
  /**
   * @remarks
   * The list of associated roles.
   * 
   * **if can be null:**
   * true
   */
  roles?: CredentialRole[];
  /**
   * @remarks
   * The credential type.
   * 
   * @example
   * RoleChain
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

