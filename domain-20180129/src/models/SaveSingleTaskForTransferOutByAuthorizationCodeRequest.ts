// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveSingleTaskForTransferOutByAuthorizationCodeRequest extends $dara.Model {
  /**
   * @remarks
   * Schema of Response
   * 
   * This parameter is required.
   * 
   * @example
   * Test2o#Lck
   */
  authorizationCode?: string;
  /**
   * @remarks
   * The transfer key.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationCode: 'AuthorizationCode',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationCode: 'string',
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

