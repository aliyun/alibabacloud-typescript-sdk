// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableIdentityProviderAdvancedAbilityRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS的身份提供方主键id
   * 
   * This parameter is required.
   * 
   * @example
   * idp_11111
   */
  identityProviderId?: string;
  /**
   * @remarks
   * IDaaS EIAM的实例id
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_111ccc111xx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderId: 'IdentityProviderId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderId: 'string',
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

