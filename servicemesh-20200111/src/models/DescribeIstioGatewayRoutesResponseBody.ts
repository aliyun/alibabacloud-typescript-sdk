// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIstioGatewayRoutesResponseBodyManagementRoutes extends $dara.Model {
  /**
   * @remarks
   * The name of the ASM gateway.
   * 
   * @example
   * ingressgateway
   */
  ASMGatewayName?: string;
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
   * Destination hosts list.
   */
  destinationHost?: string[];
  /**
   * @remarks
   * Destination subset list.
   */
  destinationSubSet?: string[];
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * istio-demo
   */
  namespace?: string;
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
   * The name of the routing rule.
   * 
   * @example
   * http-route
   */
  routeName?: string;
  /**
   * @remarks
   * The path that is used to match request URLs.
   * 
   * @example
   * /reviews/v1
   */
  routePath?: string;
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
      ASMGatewayName: 'ASMGatewayName',
      description: 'Description',
      destinationHost: 'DestinationHost',
      destinationSubSet: 'DestinationSubSet',
      namespace: 'Namespace',
      priority: 'Priority',
      routeName: 'RouteName',
      routePath: 'RoutePath',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ASMGatewayName: 'string',
      description: 'string',
      destinationHost: { 'type': 'array', 'itemType': 'string' },
      destinationSubSet: { 'type': 'array', 'itemType': 'string' },
      namespace: 'string',
      priority: 'number',
      routeName: 'string',
      routePath: 'string',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.destinationHost)) {
      $dara.Model.validateArray(this.destinationHost);
    }
    if(Array.isArray(this.destinationSubSet)) {
      $dara.Model.validateArray(this.destinationSubSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayRoutesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The routing rules.
   */
  managementRoutes?: DescribeIstioGatewayRoutesResponseBodyManagementRoutes[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31d3a0f0-07ed-4f6e-9004-1804498c****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      managementRoutes: 'ManagementRoutes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managementRoutes: { 'type': 'array', 'itemType': DescribeIstioGatewayRoutesResponseBodyManagementRoutes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.managementRoutes)) {
      $dara.Model.validateArray(this.managementRoutes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

