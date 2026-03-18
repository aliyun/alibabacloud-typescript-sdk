// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCredentialProviderRequest extends $dara.Model {
  /**
   * @remarks
   * 认证令牌提供商ID。
   * 
   * This parameter is required.
   * 
   * @example
   * atp_01kr2cmj5gxxx4fvmls2e93dxxxxx
   */
  credentialProviderId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialProviderId: 'CredentialProviderId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialProviderId: 'string',
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

