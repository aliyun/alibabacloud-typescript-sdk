// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceMethodPageRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @example
   * hkhonxxxxx@f3f75ed8ffxxxxx
   */
  appId?: string;
  /**
   * @example
   * example-app
   */
  appName?: string;
  /**
   * @example
   * 223.5.5.5
   */
  ip?: string;
  /**
   * @example
   * com.alibabacloud.mse.demo.a.AController
   */
  methodController?: string;
  /**
   * @example
   * aMethod
   */
  name?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * /a
   */
  path?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  serviceGroup?: string;
  /**
   * @example
   * sc-A
   */
  serviceName?: string;
  /**
   * @example
   * springCloud
   */
  serviceType?: string;
  /**
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

