// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableFederatedCredentialProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the federated credential provider.
   * 
   * This parameter is required.
   * 
   * @example
   * fcp_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  federatedCredentialProviderId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      federatedCredentialProviderId: 'FederatedCredentialProviderId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      federatedCredentialProviderId: 'string',
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

