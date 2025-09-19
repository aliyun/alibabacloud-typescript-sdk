// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * C286491D-4A2F-589A-B63B-D2AD3DA9BD71
   */
  requestId?: string;
  /**
   * @remarks
   * The number of root domains.
   * 
   * @example
   * 5
   */
  rootDomainsCount?: number;
  /**
   * @remarks
   * The number of subdomains.
   * 
   * @example
   * 5
   */
  subDomainsCount?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalDomainsCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      rootDomainsCount: 'RootDomainsCount',
      subDomainsCount: 'SubDomainsCount',
      totalDomainsCount: 'TotalDomainsCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      rootDomainsCount: 'number',
      subDomainsCount: 'number',
      totalDomainsCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

