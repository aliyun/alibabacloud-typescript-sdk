// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSslVpnServersResponseBodySslVpnServers } from "./DescribeSslVpnServersResponseBodySslVpnServers";


export class DescribeSslVpnServersResponseBody extends $dara.Model {
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
   * D350187B-EA41-4577-950B-95434C8302E1
   */
  requestId?: string;
  /**
   * @remarks
   * The detailed information about the SSL-VPN servers.
   */
  sslVpnServers?: DescribeSslVpnServersResponseBodySslVpnServers;
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
      sslVpnServers: 'SslVpnServers',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      sslVpnServers: DescribeSslVpnServersResponseBodySslVpnServers,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.sslVpnServers && typeof (this.sslVpnServers as any).validate === 'function') {
      (this.sslVpnServers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

