// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIstioGatewayDomainsResponseBodyGatewaySecretDetails extends $dara.Model {
  /**
   * @remarks
   * The name of the secret that contains the Transport Layer Security (TLS) certificate and certificate authority (CA) certificate.
   * 
   * @example
   * bookinfo-secret
   */
  credentialName?: string;
  /**
   * @remarks
   * The details of the domain name in the JSON format.
   * 
   * @example
   * {   "servers": [     {       "port": {         "number": 27018,         "name": "mongo",         "protocol": "MONGO"       },       "hosts": [         "*"       ]     }   ] }
   */
  detail?: string;
  /**
   * @remarks
   * The list of domain names.
   */
  domains?: string[];
  /**
   * @remarks
   * The name of the Istio gateway.
   * 
   * @example
   * ingressgateway
   */
  gatewayCRName?: string;
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
   * The port name.
   * 
   * @example
   * https-demo
   */
  portName?: string;
  /**
   * @remarks
   * The type of the protocol. Valid values: `HTTP`, `HTTPS`, `GRPC`, `HTTP2`, `MONGO`, `TCP`, and `TLS`.
   * 
   * @example
   * HTTPS
   */
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      credentialName: 'CredentialName',
      detail: 'Detail',
      domains: 'Domains',
      gatewayCRName: 'GatewayCRName',
      namespace: 'Namespace',
      portName: 'PortName',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialName: 'string',
      detail: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
      gatewayCRName: 'string',
      namespace: 'string',
      portName: 'string',
      protocol: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIstioGatewayDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain names that are exposed by the ASM gateway.
   */
  gatewaySecretDetails?: DescribeIstioGatewayDomainsResponseBodyGatewaySecretDetails[];
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
      gatewaySecretDetails: 'GatewaySecretDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewaySecretDetails: { 'type': 'array', 'itemType': DescribeIstioGatewayDomainsResponseBodyGatewaySecretDetails },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gatewaySecretDetails)) {
      $dara.Model.validateArray(this.gatewaySecretDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

