// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferInReenterTransferAuthorizationCodeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  transferAuthorizationCode?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      lang: 'Lang',
      transferAuthorizationCode: 'TransferAuthorizationCode',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      lang: 'string',
      transferAuthorizationCode: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

