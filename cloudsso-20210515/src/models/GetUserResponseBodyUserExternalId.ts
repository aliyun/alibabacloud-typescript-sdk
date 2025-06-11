// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBodyUserExternalId extends $dara.Model {
  /**
   * @remarks
   * The identifier of the user that is synchronized from an external IdP.
   * 
   * @example
   * c73******a5fdd5
   */
  id?: string;
  /**
   * @remarks
   * The method for external identity synchronization. Only System for Cross-domain Identity Management (SCIM) synchronization is supported.
   * 
   * @example
   * SCIM
   */
  issuer?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      issuer: 'Issuer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      issuer: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

