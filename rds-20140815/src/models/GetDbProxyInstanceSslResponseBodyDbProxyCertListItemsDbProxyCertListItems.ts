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

