// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeUserSessionRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the user in the external identity source.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  externalIds?: string;
  /**
   * @remarks
   * The ID of the identity source configuration to which the user belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * idp-cfg9vcrqylo39c39uxnw
   */
  idpId?: string;
  static names(): { [key: string]: string } {
    return {
      externalIds: 'ExternalIds',
      idpId: 'IdpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIds: 'string',
      idpId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

