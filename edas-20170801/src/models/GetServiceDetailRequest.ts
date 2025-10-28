// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * efbda488-7b33-432f-a40d-****0047****
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
   * The IP address of the service provider. Fuzzy searches are supported.
   * 
   * @example
   * 10.20.x.xx
   */
  ip?: string;
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
   * The region ID of the service.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The type of the service registry. This parameter is deprecated. You can ignore it.
   * 
   * @example
   * nacos
   */
  registryType?: string;
  /**
   * @remarks
   * The ID of the service. This parameter is deprecated. You can ignore it.
   * 
   * @example
   * com.alibabacloud.hipstershop.CartService
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * com.alibabacloud.hipstershop.CartService
   */
  serviceName?: string;
  /**
   * @remarks
   * The type of the service. Valid values:
   * 
   * *   dubbo
   * *   springCloud
   * *   hsf
   * *   istio
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
      namespace: 'namespace',
      origin: 'origin',
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
      namespace: 'string',
      origin: 'string',
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

