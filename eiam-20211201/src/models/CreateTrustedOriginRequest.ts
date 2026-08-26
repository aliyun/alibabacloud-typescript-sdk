// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrustedOriginRequest extends $dara.Model {
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
   * The browser origin in the format of scheme://host[:port]. This value cannot be modified after creation.
   * 
   * This parameter is required.
   * 
   * @example
   * https://console.qoder.com
   */
  origin?: string;
  /**
   * @remarks
   * The name of the trusted origin used for management, display, and auditing. If not specified, the value is empty.
   * 
   * @example
   * Qoder Production Console
   */
  trustOriginName?: string;
  /**
   * @remarks
   * The trusted origin scenes. Only iframe_embed and cors are supported. At least one value is required.
   * 
   * This parameter is required.
   * 
   * @example
   * iframe_embed
   */
  trustedOriginScene?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      origin: 'Origin',
      trustOriginName: 'TrustOriginName',
      trustedOriginScene: 'TrustedOriginScene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      origin: 'string',
      trustOriginName: 'string',
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

