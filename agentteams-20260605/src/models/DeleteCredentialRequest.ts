// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotence token that ensures the idempotency of the request.
   * 
   * @example
   * a1b2c3d4-e5f6-7890-1234-567890abcdef
   */
  clientToken?: string;
  /**
   * @remarks
   * The AgentTeams instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ami-2ze8x9c6f
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the credential.
   * 
   * This parameter is required.
   * 
   * @example
   * worker-demo
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      instanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

