// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMeshCRAggregationRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of CPU cores that are available for the components installed in the ACK cluster on the data plane if you enable the Kubernetes API to access Istio resources in the ASM instance. You can specify the parameter value in the standard quantity representation used by Kubernetes.
   * 
   * @example
   * 1
   */
  CPULimit?: string;
  /**
   * @remarks
   * The number of CPU cores that are requested by the components installed in the Container Service for Kubernetes (ACK) cluster on the data plane if you enable the Kubernetes API to access Istio resources in the ASM instance. You can specify the parameter value in the standard quantity representation used by Kubernetes.
   * 
   * @example
   * 1
   */
  CPURequirement?: string;
  /**
   * @remarks
   * Specifies whether to enable the Kubernetes API on the data plane to access Istio resources in the ASM instance. Valid values:
   * 
   * *   `true`: enables the Kubernetes API to access Istio resources in the ASM instance.
   * *   `false`: disables the Kubernetes API to access Istio resources in the ASM instance.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The maximum size of the memory that is available for the components installed in the ACK cluster on the data plane if you enable the Kubernetes API to access Istio resources in the ASM instance. You can specify the parameter value in the standard quantity representation used by Kubernetes. 1 Mi equals 1,024 KB.
   * 
   * @example
   * 500Mi
   */
  memoryLimit?: string;
  /**
   * @remarks
   * The size of the memory that is requested by the components installed in the ACK cluster on the data plane if you enable the Kubernetes API to access Istio resources in the ASM instance. You can specify the parameter value in the standard quantity representation used by Kubernetes. 1 Mi equals 1,024 KB.
   * 
   * @example
   * 500Mi
   */
  memoryRequirement?: string;
  /**
   * @remarks
   * The Service Mesh (ASM) instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c08ba3fd1e6484b0f8cc1ad8fe10d****
   */
  serviceMeshId?: string;
  /**
   * @remarks
   * Specifies whether the Kubernetes API on the data plane uses the public endpoint of the API server to access Istio resources in the ASM instance. Valid values:
   * 
   * *   `true`: The Kubernetes API on the data plane uses the public endpoint of the API server to access Istio resources in the ASM instance.
   * *   `false`: The Kubernetes API on the data plane uses the private endpoint of the API server to access Istio resources in the ASM instance.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  usePublicApiServer?: boolean;
  static names(): { [key: string]: string } {
    return {
      CPULimit: 'CPULimit',
      CPURequirement: 'CPURequirement',
      enabled: 'Enabled',
      memoryLimit: 'MemoryLimit',
      memoryRequirement: 'MemoryRequirement',
      serviceMeshId: 'ServiceMeshId',
      usePublicApiServer: 'UsePublicApiServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPULimit: 'string',
      CPURequirement: 'string',
      enabled: 'boolean',
      memoryLimit: 'string',
      memoryRequirement: 'string',
      serviceMeshId: 'string',
      usePublicApiServer: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

