// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetIdpMetadataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The entity ID obtained after the IdP metadata file is parsed.
   * 
   * @example
   * http://test****.cn/adfs/services/trust
   */
  idpEntityId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      idpEntityId: 'IdpEntityId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpEntityId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

