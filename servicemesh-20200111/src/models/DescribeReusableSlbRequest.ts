// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReusableSlbRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster on the data plane. If you specify this parameter, you cannot specify ServiceMeshId. This parameter and ServiceMeshId cannot be left empty at the same time.
   * 
   * @example
   * ca2cfe41fefeb489d9b9dba18a7c5****
   */
  k8sClusterId?: string;
  /**
   * @remarks
   * Load balancer type, value:
   * 
   * * `clb`: Classic Load Balancer
   * 
   * * `nlb`: Network Load Balancer
   * 
   * default is `clb`.
   * 
   * @example
   * clb
   */
  lbType?: string;
  /**
   * @remarks
   * The network type of the SLB instance. Valid values:
   * 
   * *   `intranet`
   * *   `internet`
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  networkType?: string;
  /**
   * @remarks
   * The ID of the Service Mesh (ASM) instance. If you specify this parameter, you cannot specify K8sClusterId. This parameter and K8sClusterId cannot be left empty at the same time.
   * 
   * @example
   * cb8963379255149cb98c8686f274x****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      k8sClusterId: 'K8sClusterId',
      lbType: 'LbType',
      networkType: 'NetworkType',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      k8sClusterId: 'string',
      lbType: 'string',
      networkType: 'string',
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

