// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserVipsByDomainRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the virtual IP addresses of only healthy CDN POPs. Valid values:
   * 
   * *   **on**: healthy CDN edge nodes.
   * *   **off**: all CDN edge nodes.
   * 
   * @example
   * on
   */
  available?: string;
  /**
   * @remarks
   * The accelerated domain name. You can specify only one domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'string',
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

