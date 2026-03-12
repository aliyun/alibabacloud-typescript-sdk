// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTaskForSubmittingDomainNameCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  credential?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  credentialNo?: string;
  credentialType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  domainName?: string;
  lang?: string;
  saleId?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      credential: 'Credential',
      credentialNo: 'CredentialNo',
      credentialType: 'CredentialType',
      domainName: 'DomainName',
      lang: 'Lang',
      saleId: 'SaleId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credential: 'string',
      credentialNo: 'string',
      credentialType: 'string',
      domainName: 'string',
      lang: 'string',
      saleId: 'string',
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

