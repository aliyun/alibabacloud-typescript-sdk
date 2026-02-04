// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindAppDomainRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WD20250908140837000001
   */
  bizId?: string;
  /**
   * @remarks
   * Domain Name
   * 
   * @example
   * conway.cn
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
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

