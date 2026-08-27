// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceEndpointResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The SSL certificate identifier.
   * 
   * @example
   * cert-xxx
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The component type. Valid values:
   *  * ELEMENT: element type.
   *  * MATRIX: matrix type.
   * 
   * @example
   * MATRIX
   */
  component?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * matrix.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The domain name type.
   * 
   * @example
   * CUSTOM
   */
  domainType?: string;
  /**
   * @remarks
   * The globally unique endpoint ID.
   * 
   * @example
   * mep-abc123
   */
  endpointId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * matrix-service
   */
  endpointName?: string;
  /**
   * @remarks
   * The AgentTeams instance ID, which is used to verify endpoint ownership and current user permissions.
   * 
   * @example
   * agentteams-demo
   */
  instanceId?: string;
  /**
   * @remarks
   * The network type.
   * 
   * @example
   * INTERNET
   */
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      component: 'Component',
      domain: 'Domain',
      domainType: 'DomainType',
      endpointId: 'EndpointId',
      endpointName: 'EndpointName',
      instanceId: 'InstanceId',
      networkType: 'NetworkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      component: 'string',
      domain: 'string',
      domainType: 'string',
      endpointId: 'string',
      endpointName: 'string',
      instanceId: 'string',
      networkType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is null if the request is successful.
   * 
   * @example
   * null
   */
  code?: string;
  /**
   * @remarks
   * The updated endpoint information.
   * 
   * @example
   * {}
   */
  data?: UpdateServiceEndpointResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is null if the request is successful.
   * 
   * @example
   * null
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateServiceEndpointResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

