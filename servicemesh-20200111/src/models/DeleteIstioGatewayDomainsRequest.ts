// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIstioGatewayDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names of the one or more hosts that are exposed by the ASM gateway. Separate multiple domain names with commas (,).
   * 
   * @example
   * example.com,demo.com
   */
  hosts?: string;
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
   * The name of the namespace.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The port name.
   * 
   * @example
   * https
   */
  portName?: string;
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
      hosts: 'Hosts',
      istioGatewayName: 'IstioGatewayName',
      limit: 'Limit',
      namespace: 'Namespace',
      portName: 'PortName',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hosts: 'string',
      istioGatewayName: 'string',
      limit: 'string',
      namespace: 'string',
      portName: 'string',
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

