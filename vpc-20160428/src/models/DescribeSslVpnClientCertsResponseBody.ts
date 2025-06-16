// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeys } from "./DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeys";


export class DescribeSslVpnClientCertsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5BE01CD7-5A50-472D-AC14-CA181C5C03BE
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the SSL client certificates.
   */
  sslVpnClientCertKeys?: DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeys;
  /**
   * @remarks
   * The number of entries returned.
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
      sslVpnClientCertKeys: 'SslVpnClientCertKeys',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      sslVpnClientCertKeys: DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeys,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.sslVpnClientCertKeys && typeof (this.sslVpnClientCertKeys as any).validate === 'function') {
      (this.sslVpnClientCertKeys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

