// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceMethodPageRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want the results to be displayed. Valid values: zh and en. zh indicates Chinese, which is the default value. en indicates English.
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
   * hkhonxxxxx@f3f75ed8ffxxxxx
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
   * The IP address of the service provider.
   * 
   * @example
   * 223.5.5.5
   */
  ip?: string;
  /**
   * @remarks
   * The full name of the Controller class to which the interface belongs.
   * 
   * @example
   * com.alibabacloud.mse.demo.a.AController
   */
  methodController?: string;
  /**
   * @remarks
   * The method name.
   * 
   * @example
   * aMethod
   */
  name?: string;
  /**
   * @remarks
   * The Microservices Engine (MSE) namespace to which the application belongs.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The page number of the returned page.
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
   * The request path that corresponds to the interface.
   * 
   * @example
   * /a
   */
  path?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The group to which the service belongs.
   * 
   * @example
   * ALIYUN
   */
  serviceGroup?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * sc-A
   */
  serviceName?: string;
  /**
   * @remarks
   * The engine type.
   * 
   * @example
   * springCloud
   */
  serviceType?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * 1.0.0
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      appId: 'AppId',
      appName: 'AppName',
      ip: 'Ip',
      methodController: 'MethodController',
      name: 'Name',
      namespace: 'Namespace',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      path: 'Path',
      region: 'Region',
      serviceGroup: 'ServiceGroup',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      appId: 'string',
      appName: 'string',
      ip: 'string',
      methodController: 'string',
      name: 'string',
      namespace: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      path: 'string',
      region: 'string',
      serviceGroup: 'string',
      serviceName: 'string',
      serviceType: 'string',
      serviceVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

