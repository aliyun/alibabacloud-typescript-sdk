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
   * Indicates whether automatic rotation of SSL certificates is enabled. Valid values:
   * 
   * - **Enable**: enabled
   * 
   * - **Disable**: disabled
   * 
   * > This parameter is supported only when the database engine is compatible with PostgreSQL or Oracle syntax.
   * 
   * @example
   * Enable
   */
  SSLAutoRotate?: string;
  /**
   * @remarks
   * The SSL connection endpoint.
   * 
   * @example
   * pc-************.mysql.polardb.rds.aliyuncs.com
   */
  SSLConnectionString?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * - **Enabled**: enabled.
   * 
   * - **Disabled**: disabled.
   * 
   * @example
   * Enabled
   */
  SSLEnabled?: string;
  /**
   * @remarks
   * The certificate validity period. Format: `yyyy-MM-ddTHH:mm:ssZ` (UTC time).
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
   * A list of SSL connection information.
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
   * Indicates whether automatic rotation of SSL certificates is enabled. Valid values:
   * 
   * - **Enable**: enabled
   * 
   * - **Disable**: disabled
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

