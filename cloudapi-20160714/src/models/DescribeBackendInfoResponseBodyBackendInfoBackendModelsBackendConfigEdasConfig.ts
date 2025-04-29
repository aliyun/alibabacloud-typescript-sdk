// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackendInfoResponseBodyBackendInfoBackendModelsBackendConfigEdasConfig extends $dara.Model {
  /**
   * @remarks
   * The EDAS application ID.
   * 
   * @example
   * 6cd0c599-dxxx-496d-b3d5-6a71c657xxxxx
   */
  edasAppId?: string;
  /**
   * @remarks
   * The ID of the microservices namespace in EDAS.
   * 
   * @example
   * cn-hangzhou:edasNacos
   */
  microserviceNamespace?: string;
  /**
   * @remarks
   * The ID of the microservices namespace in EDAS.
   * 
   * @example
   * cn-hangzhou:edasNacos
   */
  microserviceNamespaceId?: string;
  /**
   * @remarks
   * The name of the microservices namespace in EDAS.
   * 
   * @example
   * Edas-Nacos
   */
  microserviceNamespaceName?: string;
  /**
   * @remarks
   * The MSE instance ID.
   * 
   * @example
   * mse-cn-jia3n1rxxxx
   */
  mseInstanceId?: string;
  /**
   * @remarks
   * The registration type.
   * 
   * @example
   * EDAS
   */
  registryType?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * service
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      edasAppId: 'EdasAppId',
      microserviceNamespace: 'MicroserviceNamespace',
      microserviceNamespaceId: 'MicroserviceNamespaceId',
      microserviceNamespaceName: 'MicroserviceNamespaceName',
      mseInstanceId: 'MseInstanceId',
      registryType: 'RegistryType',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasAppId: 'string',
      microserviceNamespace: 'string',
      microserviceNamespaceId: 'string',
      microserviceNamespaceName: 'string',
      mseInstanceId: 'string',
      registryType: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

