// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGrafanaDashboardUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Container Service for Kubernetes (ACK) or ACK Serverless cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * c94ca2d27f7aa47ab84ed73e6f084****
   */
  k8sClusterId?: string;
  /**
   * @remarks
   * The ID of the Service Mesh (ASM) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cb8963379255149cb98c8686f274x****
   */
  serviceMeshId?: string;
  /**
   * @remarks
   * The name of the dashboard.
   * 
   * This parameter is required.
   * 
   * @example
   * Cloud ASM Istio Http Gateway
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      k8sClusterId: 'K8sClusterId',
      serviceMeshId: 'ServiceMeshId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sClusterId: 'string',
      serviceMeshId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

