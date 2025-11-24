// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegisteredServiceEndpointsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the registered service.
   * 
   * @example
   * c8b054ee8c3914d079b5ce9733328****,c58faedb8a78640d3aeb0372e4c02****
   */
  clusterIds?: string;
  /**
   * @remarks
   * The type of the registered service. Valid values:
   * 
   * *   `ServiceEntry`: indicates that the service is registered by creating a service entry.
   * *   `Kubernetes`: indicates that the service is registered on a Kubernetes cluster on the data plane.
   * 
   * @example
   * reviews
   */
  name?: string;
  /**
   * @remarks
   * The IDs of clusters in the ASM instance. Separate multiple cluster IDs with commas (,).
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * c08ba3fd1e6484b0f8cc1ad8fe10d****
   */
  serviceMeshId?: string;
  /**
   * @remarks
   * The endpoints of the registered service.
   * 
   * @example
   * Kubernetes
   */
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      name: 'Name',
      namespace: 'Namespace',
      serviceMeshId: 'ServiceMeshId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: 'string',
      name: 'string',
      namespace: 'string',
      serviceMeshId: 'string',
      serviceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

