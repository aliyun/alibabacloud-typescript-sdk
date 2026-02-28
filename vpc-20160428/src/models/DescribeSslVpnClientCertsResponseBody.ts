// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeysSslVpnClientCertKey extends $dara.Model {
  createTime?: number;
  endTime?: number;
  name?: string;
  regionId?: string;
  resourceGroupId?: string;
  sslVpnClientCertId?: string;
  sslVpnServerId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      name: 'Name',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sslVpnClientCertId: 'SslVpnClientCertId',
      sslVpnServerId: 'SslVpnServerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      endTime: 'number',
      name: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sslVpnClientCertId: 'string',
      sslVpnServerId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeys extends $dara.Model {
  sslVpnClientCertKey?: DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeysSslVpnClientCertKey[];
  static names(): { [key: string]: string } {
    return {
      sslVpnClientCertKey: 'SslVpnClientCertKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sslVpnClientCertKey: { 'type': 'array', 'itemType': DescribeSslVpnClientCertsResponseBodySslVpnClientCertKeysSslVpnClientCertKey },
    };
  }

  validate() {
    if(Array.isArray(this.sslVpnClientCertKey)) {
      $dara.Model.validateArray(this.sslVpnClientCertKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

