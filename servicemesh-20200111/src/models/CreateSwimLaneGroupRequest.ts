// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSwimLaneGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the lane group.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the ingress gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ingressgateway
   */
  ingressGatewayName?: string;
  /**
   * @example
   * istio-system
   */
  ingressGatewayNamespace?: string;
  /**
   * @remarks
   * The type of the gateway for ingress traffic. Only ASM ingress gateways are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * ASM
   */
  ingressType?: string;
  /**
   * @remarks
   * Specifies whether the permissive mode is enabled for the lane group to be created.
   * 
   * @example
   * false
   */
  isPermissive?: boolean;
  /**
   * @remarks
   * The request routing header of the lane group if you plan to create a lane group in permissive mode. This parameter must be specified when IsPermissive is set to true.
   * 
   * @example
   * x-asm-prefer-tag
   */
  routeHeader?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud Service Mesh (ASM) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  serviceMeshId?: string;
  /**
   * @remarks
   * A list of services associated with the lane group. The value is a JSON array. The format of a service is `$Cluster name/$Cluster ID/$Namespace/$Service name`.
   * 
   * This parameter is required.
   * 
   * @example
   * [\\"sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mocka\\",\\"sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockb\\",\\"sh01/c089443ea9e50403fa4f0a6237d11e0a9/default/mockc\\"]
   */
  servicesList?: string;
  /**
   * @remarks
   * The end-to-end (E2E) pass-through request header of the lane group if you plan to create a lane group in permissive mode. This parameter must be specified when IsPermissive is set to true.
   * 
   * @example
   * my-request-id
   */
  traceHeader?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      ingressGatewayName: 'IngressGatewayName',
      ingressGatewayNamespace: 'IngressGatewayNamespace',
      ingressType: 'IngressType',
      isPermissive: 'IsPermissive',
      routeHeader: 'RouteHeader',
      serviceMeshId: 'ServiceMeshId',
      servicesList: 'ServicesList',
      traceHeader: 'TraceHeader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ingressGatewayName: 'string',
      ingressGatewayNamespace: 'string',
      ingressType: 'string',
      isPermissive: 'boolean',
      routeHeader: 'string',
      serviceMeshId: 'string',
      servicesList: 'string',
      traceHeader: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

