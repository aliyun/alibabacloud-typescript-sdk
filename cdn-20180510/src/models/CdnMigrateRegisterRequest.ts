// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CdnMigrateRegisterRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name for which you want to register the dynamic routing feature. You can specify only one domain name in each request.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

