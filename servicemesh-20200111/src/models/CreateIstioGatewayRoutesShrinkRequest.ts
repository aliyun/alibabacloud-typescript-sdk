// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIstioGatewayRoutesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the routing rule.
   * 
   * @example
   * demo route
   */
  description?: string;
  /**
   * @remarks
   * The information about the routing rule to be created for the ASM gateway.
   */
  gatewayRouteShrink?: string;
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
   * The priority of the routing rule. The value of this parameter is an integer. A smaller value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
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
  /**
   * @remarks
   * The status of the routing rule. Valid values:
   * 
   * *   `0`: The routing rule is valid.
   * *   `1`: The routing rule is invalid.
   * *   `2`: An error occurs during the creation or update of the routing rule.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gatewayRouteShrink: 'GatewayRoute',
      istioGatewayName: 'IstioGatewayName',
      priority: 'Priority',
      serviceMeshId: 'ServiceMeshId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gatewayRouteShrink: 'string',
      istioGatewayName: 'string',
      priority: 'number',
      serviceMeshId: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

