// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTaskForModifyingDomainDnsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aliyunDns?: boolean;
  dnsList?: string[];
  domainName?: string;
  lang?: string;
  saleId?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunDns: 'AliyunDns',
      dnsList: 'DnsList',
      domainName: 'DomainName',
      lang: 'Lang',
      saleId: 'SaleId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunDns: 'boolean',
      dnsList: { 'type': 'array', 'itemType': 'string' },
      domainName: 'string',
      lang: 'string',
      saleId: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dnsList)) {
      $dara.Model.validateArray(this.dnsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

