// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIstioGatewayDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the secret that contains the Transport Layer Security (TLS) certificate and certificate authority (CA) certificate.
   * 
   * @example
   * bookinfo-secret
   */
  credential?: string;
  /**
   * @remarks
   * Specifies whether to forcibly use TLS to protect connection security.
   * 
   * *   `true`: forcibly uses TLS to protect connection security.
   * *   `false`: does not forcibly use TLS to protect connection security.
   * 
   * @example
   * true
   */
  forceHttps?: boolean;
  /**
   * @remarks
   * The one or more domain names that are exposed by the ASM gateway. Separate multiple domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com,demo.com
   */
  hosts?: string;
  /**
   * @remarks
   * The name of the ASM gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ingressgateway
   */
  istioGatewayName?: string;
  /**
   * @remarks
   * The maximum number of ASM gateways to query.
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
   * The port that is provided by the ASM gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * 443
   */
  number?: number;
  /**
   * @remarks
   * The name of the port.
   * 
   * This parameter is required.
   * 
   * @example
   * http-demo
   */
  portName?: string;
  /**
   * @remarks
   * The type of the protocol. Valid values: `HTTP`, `HTTPS`, `GRPC`, `HTTP2`, `MONGO`, `TCP`, and `TLS`.
   * 
   * This parameter is required.
   * 
   * @example
   * HTTPS
   */
  protocol?: string;
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
      credential: 'Credential',
      forceHttps: 'ForceHttps',
      hosts: 'Hosts',
      istioGatewayName: 'IstioGatewayName',
      limit: 'Limit',
      namespace: 'Namespace',
      number: 'Number',
      portName: 'PortName',
      protocol: 'Protocol',
      serviceMeshId: 'ServiceMeshId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credential: 'string',
      forceHttps: 'boolean',
      hosts: 'string',
      istioGatewayName: 'string',
      limit: 'string',
      namespace: 'string',
      number: 'number',
      portName: 'string',
      protocol: 'string',
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

