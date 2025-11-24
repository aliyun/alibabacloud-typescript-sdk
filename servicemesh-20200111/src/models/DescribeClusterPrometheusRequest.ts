// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterPrometheusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster on the data plane.
   * 
   * @example
   * ce3c25e247da24f3aab9b7edfae83****
   */
  k8sClusterId?: string;
  /**
   * @remarks
   * The ID of the region where the cluster on the data plane resides.
   * 
   * @example
   * cn-hangzhou
   */
  k8sClusterRegionId?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * @example
   * cb8963379255149cb98c8686f274x****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      k8sClusterId: 'K8sClusterId',
      k8sClusterRegionId: 'K8sClusterRegionId',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sClusterId: 'string',
      k8sClusterRegionId: 'string',
      serviceMeshId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

