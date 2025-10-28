// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportK8sClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACK cluster or serverless Kubernetes cluster. You can obtain the cluster ID by calling the GetK8sCluster operation. For more information, see [GetK8sCluster](https://help.aliyun.com/document_detail/181437.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 9c28bbb9-****-44b3-b953-54ef8a2d0be2
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the integration with Alibaba Cloud Service Mesh (ASM). Valid values:
   * 
   * *   true: Enables the integration with ASM.
   * *   false: Disables the integration with ASM.
   * 
   * @example
   * true
   */
  enableAsm?: boolean;
  /**
   * @remarks
   * You can ignore this parameter.
   * 
   * @example
   * 1
   */
  mode?: number;
  /**
   * @remarks
   * The ID of the namespace. It is in the format of `Region ID:Identifier of the microservices namespace`. Example: `cn-hangzhou:doc`.
   * 
   * @example
   * cn-beijing:doc
   */
  namespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      enableAsm: 'EnableAsm',
      mode: 'Mode',
      namespaceId: 'NamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      enableAsm: 'boolean',
      mode: 'number',
      namespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

