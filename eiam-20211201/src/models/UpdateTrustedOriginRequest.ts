// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTrustedOriginRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_example
   */
  instanceId?: string;
  /**
   * @remarks
   * The trusted origin name.
   * 
   * @example
   * Qoder Production Console
   */
  trustOriginName?: string;
  /**
   * @remarks
   * The trusted origin ID.
   * 
   * This parameter is required.
   * 
   * @example
   * to_example
   */
  trustedOriginId?: string;
  /**
   * @remarks
   * The trusted origin scenario.
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

