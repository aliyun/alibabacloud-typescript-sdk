// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterSSLResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The cluster endpoint ID.
   * 
   * @example
   * pe-************
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * Indicates whether automatic SSL certificate rotation is enabled. Valid values:
   * 
   * - **Enable**: Enabled.
   * 
   * - **Disable**: Disabled.
   * 
   * > This parameter is supported only when the database engine is PostgreSQL-compatible or Oracle-syntax-compatible.
   * 
   * @example
   * Enable
   */
  SSLAutoRotate?: string;
  /**
   * @remarks
   * The SSL connection address.
   * 
   * @example
   * pc-************.mysql.polardb.rds.aliyuncs.com
   */
  SSLConnectionString?: string;
  /**
   * @remarks
   * Indicates whether Secure Sockets Layer (SSL) encryption is enabled. Valid values:
   * 
   * - **Enabled**: Enabled.
   * - **Disabled**: Shutdown.
   * 
   * @example
   * Enabled
   */
  SSLEnabled?: string;
  /**
   * @remarks
   * The expiration time of the SSL certificate. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format (UTC).
   * 
   * @example
   * 2021-11-13T07:14:22Z
   */
  SSLExpireTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBEndpointId: 'DBEndpointId',
      SSLAutoRotate: 'SSLAutoRotate',
      SSLConnectionString: 'SSLConnectionString',
      SSLEnabled: 'SSLEnabled',
      SSLExpireTime: 'SSLExpireTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBEndpointId: 'string',
      SSLAutoRotate: 'string',
      SSLConnectionString: 'string',
      SSLEnabled: 'string',
      SSLExpireTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterSSLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of SSL connection information.
   */
  items?: DescribeDBClusterSSLResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C890995A-CF06-4F4D-8DB8-DD26C2******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether automatic SSL certificate rotation is enabled. Valid values:
   * 
   * - **Enable**: Enabled.
   * 
   * - **Disable**: Disabled.
   * 
   * > This parameter is supported only for PolarDB for MySQL.
   * 
   * @example
   * Enable
   */
  SSLAutoRotate?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
      SSLAutoRotate: 'SSLAutoRotate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBClusterSSLResponseBodyItems },
      requestId: 'string',
      SSLAutoRotate: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

