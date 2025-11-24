// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceMeshUpgradeStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The fully qualified names of ingress gateways in the ASM instance. Separate multiple names with commas (,).
   * 
   * @example
   * istio-system:ingressgateway1,istio-system:ingressgateway2
   */
  allIstioGatewayFullNames?: string;
  /**
   * @remarks
   * The IDs of the clusters on the data plane of the ASM instance. Separate multiple clusters with commas (,).
   * 
   * @example
   * caeac85a793c94afbbb0a4bb20320****
   */
  guestClusterIds?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 11fd0027-c27e-41bb-a565-75583054****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      allIstioGatewayFullNames: 'AllIstioGatewayFullNames',
      guestClusterIds: 'GuestClusterIds',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allIstioGatewayFullNames: 'string',
      guestClusterIds: 'string',
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

