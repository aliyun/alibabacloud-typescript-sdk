// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrustedOriginRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the IDaaS EIAM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_example
   */
  instanceId?: string;
  /**
   * @remarks
   * If this parameter is not specified, the trusted origin name is not modified.
   * 
   * @example
   * Qoder Production Console
   */
  trustOriginName?: string;
  /**
   * @remarks
   * The ID of the trusted origin.
   * 
   * This parameter is required.
   * 
   * @example
   * to_example
   */
  trustedOriginId?: string;
  /**
   * @remarks
   * When specified, the existing values are entirely replaced. Only iframe_embed and cors are supported.
   * 
   * @example
   * iframe_embed
   */
  trustedOriginScene?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      trustOriginName: 'TrustOriginName',
      trustedOriginId: 'TrustedOriginId',
      trustedOriginScene: 'TrustedOriginScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      trustOriginName: 'string',
      trustedOriginId: 'string',
      trustedOriginScene: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.trustedOriginScene)) {
      $dara.Model.validateArray(this.trustedOriginScene);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

