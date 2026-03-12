// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTaskForUpdatingContactByTempateIdRequest extends $dara.Model {
  addTransferLock?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  contactTemplateId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  contactType?: string;
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
      addTransferLock: 'AddTransferLock',
      contactTemplateId: 'ContactTemplateId',
      contactType: 'ContactType',
      domainName: 'DomainName',
      lang: 'Lang',
      saleId: 'SaleId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTransferLock: 'boolean',
      contactTemplateId: 'number',
      contactType: 'string',
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

