// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindIdentityProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The identity provider type. Currently, only DingTalk is supported. Specify this parameter to locate the binding to be unbound.
   * 
   * @example
   * DingTalk
   */
  identityProviderType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * agentteams-xxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderType: 'IdentityProviderType',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderType: 'string',
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

