// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceListPageRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values: zh and en. Default value: zh. The value zh indicates Chinese, and the value en indicates English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * dez4xxxxx@f3f75ed8ffxxxxx
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * example-app
   */
  appName?: string;
  /**
   * @remarks
   * The IP address from which the query is initiated.
   * 
   * @example
   * 223.5.5.5
   */
  ip?: string;
  /**
   * @remarks
   * The name of the MSE namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The page number.
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
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * sc-A
   */
  serviceName?: string;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * springCloud
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      ip: 'Ip',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      region: 'Region',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      ip: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      region: 'string',
      serviceName: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

