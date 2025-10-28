// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceMethodPageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 310b18c3-1dbe-4807-****-18d7d637****
   */
  appId?: string;
  /**
   * @remarks
   * The group to which the service belongs.
   * 
   * @example
   * DUBBO
   */
  group?: string;
  /**
   * @remarks
   * The IP address of the service.
   * 
   * @example
   * 127.0.0.1
   */
  ip?: string;
  /**
   * @remarks
   * The controller method.
   * 
   * @example
   * com.aliware.edas.DemoController
   */
  methodController?: string;
  /**
   * @remarks
   * The name of the method.
   * 
   * @example
   * echo
   */
  name?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-hangzhou:doc-test
   */
  namespace?: string;
  /**
   * @remarks
   * The source of the data. Valid values:
   * 
   * *   agent: Use this value if you use the service query feature of the latest version to pass the query result.
   * *   registry: Use this value if you use the service query feature of the earlier version to pass the query result.
   * 
   * @example
   * agent
   */
  origin?: string;
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
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request path.
   * 
   * @example
   * /echo/{str}
   */
  path?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The type of the service registry.
   * 
   * @example
   * nacos
   */
  registryType?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * edas.service.consumer
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * edas.service.consumer
   */
  serviceName?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   dubbo: Dubbo service
   * *   springCloud: Spring Cloud service
   * *   hsf: High-speed Service Framework (HSF) service
   * 
   * @example
   * springCloud
   */
  serviceType?: string;
  /**
   * @remarks
   * The version of the service.
   * 
   * @example
   * 1.0.0
   */
  serviceVersion?: string;
  /**
   * @remarks
   * The source of the service. Set the value to edas.
   * 
   * @example
   * edas
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      group: 'group',
      ip: 'ip',
      methodController: 'methodController',
      name: 'name',
      namespace: 'namespace',
      origin: 'origin',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      path: 'path',
      region: 'region',
      registryType: 'registryType',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      serviceType: 'serviceType',
      serviceVersion: 'serviceVersion',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      group: 'string',
      ip: 'string',
      methodController: 'string',
      name: 'string',
      namespace: 'string',
      origin: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      path: 'string',
      region: 'string',
      registryType: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceType: 'string',
      serviceVersion: 'string',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

