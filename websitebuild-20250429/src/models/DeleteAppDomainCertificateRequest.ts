// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppDomainCertificateRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID of the application instance
   * 
   * @example
   * 202506170003
   */
  bizId?: string;
  /**
   * @remarks
   * Domain name
   * 
   * @example
   * aliwmzs.com
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

