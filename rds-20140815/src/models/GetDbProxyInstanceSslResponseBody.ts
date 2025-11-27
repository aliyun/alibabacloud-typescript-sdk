// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDbProxyInstanceSslResponseBodyDbProxyCertListItemsDbProxyCertListItems extends $dara.Model {
  /**
   * @remarks
   * The dedicated proxy endpoint for which SSL encryption is enabled.
   * 
   * @example
   * test1234.rwlb.rds.aliyuncs.com
   */
  certCommonName?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-t4n3axxxxx
   */
  dbInstanceName?: string;
  /**
   * @remarks
   * The ID of the dedicated proxy endpoint.
   * 
   * @example
   * buxxxxxxx
   */
  endpointName?: string;
  /**
   * @remarks
   * The default identifier of the dedicated proxy endpoint. The value is fixed as **RWSplit**.
   * 
   * @example
   * RWSplit
   */
  endpointType?: string;
  /**
   * @remarks
   * The time at which the certificate expires.
   * 
   * @example
   * 2021-12-16T08:43:20Z
   */
  sslExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      certCommonName: 'CertCommonName',
      dbInstanceName: 'DbInstanceName',
      endpointName: 'EndpointName',
      endpointType: 'EndpointType',
      sslExpiredTime: 'SslExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certCommonName: 'string',
      dbInstanceName: 'string',
      endpointName: 'string',
      endpointType: 'string',
      sslExpiredTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbProxyInstanceSslResponseBodyDbProxyCertListItems extends $dara.Model {
  dbProxyCertListItems?: GetDbProxyInstanceSslResponseBodyDbProxyCertListItemsDbProxyCertListItems[];
  static names(): { [key: string]: string } {
    return {
      dbProxyCertListItems: 'DbProxyCertListItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyCertListItems: { 'type': 'array', 'itemType': GetDbProxyInstanceSslResponseBodyDbProxyCertListItemsDbProxyCertListItems },
    };
  }

  validate() {
    if(Array.isArray(this.dbProxyCertListItems)) {
      $dara.Model.validateArray(this.dbProxyCertListItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDbProxyInstanceSslResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of SSL encryption settings.
   */
  dbProxyCertListItems?: GetDbProxyInstanceSslResponseBodyDbProxyCertListItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D330E60C-8AAA-4D63-8F64-5B78F4692F98
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dbProxyCertListItems: 'DbProxyCertListItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbProxyCertListItems: GetDbProxyInstanceSslResponseBodyDbProxyCertListItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.dbProxyCertListItems && typeof (this.dbProxyCertListItems as any).validate === 'function') {
      (this.dbProxyCertListItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

