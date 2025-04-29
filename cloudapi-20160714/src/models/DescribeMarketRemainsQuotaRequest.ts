// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMarketRemainsQuotaRequest extends $dara.Model {
  /**
   * @remarks
   * The custom domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * *.demo.com
   */
  domainName?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

