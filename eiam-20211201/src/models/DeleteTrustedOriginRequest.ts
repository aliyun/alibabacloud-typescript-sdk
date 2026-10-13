// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTrustedOriginRequest extends $dara.Model {
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
   * The trusted origin ID.
   * 
   * This parameter is required.
   * 
   * @example
   * to_example
   */
  trustedOriginId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      trustedOriginId: 'TrustedOriginId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      trustedOriginId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

