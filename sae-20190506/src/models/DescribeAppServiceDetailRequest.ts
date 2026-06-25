// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppServiceDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 6dcc8c9e-d3da-478a-a066-86dcf820****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the MSE Nacos instance.
   * 
   * @example
   * mse-cn-sco3r0u****
   */
  nacosInstanceId?: string;
  /**
   * @remarks
   * The ID of the MSE Nacos namespace.
   * 
   * @example
   * public
   */
  nacosNamespaceId?: string;
  /**
   * @remarks
   * The service group. This is a custom parameter.
   * 
   * @example
   * springCloud
   */
  serviceGroup?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * edas.service.provider
   */
  serviceName?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - **dubbo**
   * 
   * - **springCloud**
   * 
   * @example
   * springCloud
   */
  serviceType?: string;
  /**
   * @remarks
   * The service version. This is a custom parameter.
   * 
   * @example
   * 1.0.0
   */
  serviceVersion?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      nacosInstanceId: 'NacosInstanceId',
      nacosNamespaceId: 'NacosNamespaceId',
      serviceGroup: 'ServiceGroup',
      serviceName: 'ServiceName',
      serviceType: 'ServiceType',
      serviceVersion: 'ServiceVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      nacosInstanceId: 'string',
      nacosNamespaceId: 'string',
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

