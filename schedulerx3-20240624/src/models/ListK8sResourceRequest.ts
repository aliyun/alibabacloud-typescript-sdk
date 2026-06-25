// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListK8sResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The Cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * xxljob-b6ec1xxxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the Kubernetes cluster used for synchronizing namespaces. The cluster is added to the service mesh specified by ServiceMeshId. This parameter is required when you query a k8s namespace or a k8s service.
   * 
   * @example
   * cadb451ed7af04b0297f4be396a2196fc
   */
  k8sClusterId?: string;
  /**
   * @remarks
   * The name of the namespace in the k8s cluster. This parameter is required when you query a k8s service.
   * 
   * @example
   * default
   */
  k8sNamespace?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * cluster
   */
  resourceType?: string;
  /**
   * @remarks
   * The VPC ID. This parameter is required if ResourceType is set to \\"cluster\\".
   * 
   * @example
   * vpc-aa1a18236n90rqhuhhnhh
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      k8sClusterId: 'K8sClusterId',
      k8sNamespace: 'K8sNamespace',
      resourceType: 'ResourceType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      k8sClusterId: 'string',
      k8sNamespace: 'string',
      resourceType: 'string',
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

