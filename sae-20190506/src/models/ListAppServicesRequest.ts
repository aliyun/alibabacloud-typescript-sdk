// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application. You must specify only one of the following parameters: vpcId, namespace ID, and application ID.
   * 
   * @example
   * 017f39b8-dfa4-4e16-a84b-1dcee4b1****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the MSE Nacos instance. This parameter is required when the registry type is set to MSE Nacos.
   * 
   * @example
   * mse-cn-sco3r0u****
   */
  nacosInstanceId?: string;
  /**
   * @remarks
   * The ID of the MSE Nacos namespace. This parameter is required when the registry type is set to MSE Nacos.
   * 
   * @example
   * mse-test
   */
  nacosNamespaceId?: string;
  /**
   * @remarks
   * The ID of the namespace. You must specify only one of the following parameters: VPC ID, namespace ID, and application ID.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
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
   * The registry type. Valid values:
   * 
   * *   **0**: SAE Nacos
   * *   **1**: SAE built-in Nacos
   * *   **2** :MSE Nacos
   * *   **9**: SAE Kubernetes service
   * 
   * @example
   * 0
   */
  registryType?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   **dubbo**
   * *   **springCloud**
   * *   **hsf**
   * *   **k8sService**
   * 
   * @example
   * springCloud
   */
  serviceType?: string;
  /**
   * @remarks
   * The unique identifier of the VPC. You must specify only one of the following parameters: VPC ID, namespace ID, and application ID.
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

