// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTaskForSubmittingDomainNameCredentialByTemplateIdRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contactTemplateId?: number;
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
      contactTemplateId: 'ContactTemplateId',
      domainName: 'DomainName',
      lang: 'Lang',
      saleId: 'SaleId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactTemplateId: 'number',
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

