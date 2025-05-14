// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfigConfigsRoles } from "./CredentialConfigConfigsRoles";


export class CredentialConfigConfigs extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  key?: string;
  roles?: CredentialConfigConfigsRoles[];
  /**
   * @remarks
   * This parameter is required.
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
      roles: { 'type': 'array', 'itemType': CredentialConfigConfigsRoles },
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

