// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIstioGatewayDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the ASM gateway.
   * 
   * @example
   * ingressgateway
   */
  istioGatewayName?: string;
  /**
   * @remarks
   * The maximum number of Istio gateways to query.
   * 
   * @example
   * 10
   */
  limit?: string;
  /**
   * @remarks
   * The namespace in which the ASM gateway resides.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * c08ba3fd1e6484b0f8cc1ad8fe10d****
   */
  serviceMeshId?: string;
  static names(): { [key: string]: string } {
    return {
      istioGatewayName: 'IstioGatewayName',
      limit: 'Limit',
      namespace: 'Namespace',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      istioGatewayName: 'string',
      limit: 'string',
      namespace: 'string',
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

