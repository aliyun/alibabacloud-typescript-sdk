// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Specify exactly one of the following parameters: `VpcId`, `NamespaceId`, or `AppId`.
   * 
   * @example
   * 017f39b8-dfa4-4e16-a84b-1dcee4b1****
   */
  appId?: string;
  /**
   * @remarks
   * The instance ID of MSE Nacos. This parameter is required if the service registry is MSE Nacos.
   * 
   * @example
   * mse-cn-sco3r0u****
   */
  nacosInstanceId?: string;
  /**
   * @remarks
   * The namespace ID of MSE Nacos. This parameter is required if the service registry is MSE Nacos.
   * 
   * @example
   * mse-test
   */
  nacosNamespaceId?: string;
  /**
   * @remarks
   * The namespace ID. Specify exactly one of the following parameters: `VpcId`, `NamespaceId`, or `AppId`.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
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
   * The service registry type. Valid values:
   * 
   * - **0**: SAE Nacos
   * 
   * - **1**: self-managed service registry
   * 
   * - **2**: MSE Nacos
   * 
   * - **9**: SAE K8s Service
   * 
   * @example
   * 0
   */
  registryType?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * - **dubbo**
   * 
   * - **springCloud**
   * 
   * - **hsf**
   * 
   * - **k8sService**
   * 
   * @example
   * springCloud
   */
  serviceType?: string;
  /**
   * @remarks
   * The ID of the VPC. Specify exactly one of the following parameters: `VpcId`, `NamespaceId`, or `AppId`.
   * 
   * @example
   * vpc-2ze0i263cnn311nvj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      nacosInstanceId: 'NacosInstanceId',
      nacosNamespaceId: 'NacosNamespaceId',
      namespaceId: 'NamespaceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      registryType: 'RegistryType',
      serviceType: 'ServiceType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      nacosInstanceId: 'string',
      nacosNamespaceId: 'string',
      namespaceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      registryType: 'string',
      serviceType: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

