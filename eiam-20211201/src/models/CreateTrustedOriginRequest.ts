// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrustedOriginRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotence of the request. Generate a value on your client and make sure that the value is unique across different requests. The ClientToken parameter supports only ASCII characters and can be up to 64 characters in length.
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
   * The browser origin in the format of scheme://host[:port]. It cannot be modified after creation.
   * 
   * This parameter is required.
   * 
   * @example
   * https://console.qoder.com
   */
  origin?: string;
  /**
   * @remarks
   * The name of the trusted origin used for management, display, and auditing. If you do not specify this parameter, it is left empty.
   * 
   * @example
   * Qoder Production Console
   */
  trustOriginName?: string;
  /**
   * @remarks
   * The trusted origin scenarios. Only iframe_embed and cors are supported. Specify at least one value.
   * 
   * This parameter is required.
   * 
   * @example
   * ["iframe_embed"]
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

