// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterGrafanaRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster on the data plane.
   * 
   * This parameter is required.
   * 
   * @example
   * ce3c25e247da24f3aab9b7edfae83****
   */
  k8sClusterId?: string;
  /**
   * @remarks
   * Specifies whether to integrate Managed Service for Prometheus for the cluster on the data plane.
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * false
   */
  reAddPrometheusIntegration?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cb8963379255149cb98c8686f274x****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      k8sClusterId: 'K8sClusterId',
      reAddPrometheusIntegration: 'ReAddPrometheusIntegration',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sClusterId: 'string',
      reAddPrometheusIntegration: 'string',
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

