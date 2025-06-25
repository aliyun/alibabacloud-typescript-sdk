// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceLDAPAuthServerResponseBodyLDAP } from "./GetInstanceLdapauthServerResponseBodyLdap";


export class GetInstanceLDAPAuthServerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The settings of LDAP authentication.
   */
  LDAP?: GetInstanceLDAPAuthServerResponseBodyLDAP;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 1C60E741-102D-5E8F-9710-B06D3F0183FE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      LDAP: 'LDAP',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      LDAP: GetInstanceLDAPAuthServerResponseBodyLDAP,
      requestId: 'string',
    };
  }

  validate() {
    if(this.LDAP && typeof (this.LDAP as any).validate === 'function') {
      (this.LDAP as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

