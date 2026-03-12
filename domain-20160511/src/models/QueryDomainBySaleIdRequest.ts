// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainBySaleIdRequest extends $dara.Model {
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  saleId?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      saleId: 'SaleId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

