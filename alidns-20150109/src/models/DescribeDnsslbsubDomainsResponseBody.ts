// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDNSSLBSubDomainsResponseBodySlbSubDomains } from "./DescribeDnsslbsubDomainsResponseBodySlbSubDomains";


export class DescribeDNSSLBSubDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**. Default value: **20**.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * The subdomains for which weighted round-robin is enabled.
   */
  slbSubDomains?: DescribeDNSSLBSubDomainsResponseBodySlbSubDomains;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      slbSubDomains: 'SlbSubDomains',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      slbSubDomains: DescribeDNSSLBSubDomainsResponseBodySlbSubDomains,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.slbSubDomains && typeof (this.slbSubDomains as any).validate === 'function') {
      (this.slbSubDomains as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

