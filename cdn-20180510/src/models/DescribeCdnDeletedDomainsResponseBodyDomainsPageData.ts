// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDeletedDomainsResponseBodyDomainsPageData extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The time when the accelerated domain name was modified. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2015-10-28T11:05:52Z
   */
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      gmtModified: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

