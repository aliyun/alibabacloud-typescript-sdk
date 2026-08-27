// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The new SSL certificate identifier. If this parameter is not specified, the existing certificate is retained.
   * 
   * @example
   * 22584627-cn-hangzhou
   */
  certIdentifier?: string;
  /**
   * @remarks
   * The idempotency token that is used to ensure the idempotence of the request.
   * 
   * @example
   * client-token-xxx
   */
  clientToken?: string;
  /**
   * @remarks
   * The new domain name. If this parameter is not specified, the existing domain name is retained.
   * 
   * @example
   * api.example.com
   */
  domain?: string;
  /**
   * @remarks
   * The globally unique endpoint ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mep-abc123
   */
  endpointId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agentteams-demo
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      certIdentifier: 'CertIdentifier',
      clientToken: 'ClientToken',
      domain: 'Domain',
      endpointId: 'EndpointId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIdentifier: 'string',
      clientToken: 'string',
      domain: 'string',
      endpointId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

