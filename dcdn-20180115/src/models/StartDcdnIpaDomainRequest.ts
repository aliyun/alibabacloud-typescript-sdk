// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDcdnIpaDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the accelerated domain to be enabled. You can specify only one accelerated domain name at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
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

