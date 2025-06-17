// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnCertificateListRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name. Separate multiple accelerated domain names with commas (,).
   * 
   * If you do not specify an accelerated domain name, SSL certificates of all your accelerated domain names are queried.
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

