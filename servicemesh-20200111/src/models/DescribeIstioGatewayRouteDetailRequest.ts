// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIstioGatewayRouteDetailRequest extends $dara.Model {
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
   * The name of the routing rule.
   * 
   * @example
   * demo-route
   */
  routeName?: string;
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
      routeName: 'RouteName',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      istioGatewayName: 'string',
      routeName: 'string',
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

