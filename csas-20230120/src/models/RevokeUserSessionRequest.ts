// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeUserSessionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  externalIds?: string;
  /**
   * @remarks
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

