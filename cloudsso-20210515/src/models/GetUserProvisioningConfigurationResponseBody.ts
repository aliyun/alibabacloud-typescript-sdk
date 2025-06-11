// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration } from "./GetUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration";


export class GetUserProvisioningConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66898413-EB80-556D-9429-06FE3548F672
   */
  requestId?: string;
  /**
   * @remarks
   * The global configurations of the RAM user provisioning.
   */
  userProvisioningConfiguration?: GetUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProvisioningConfiguration: 'UserProvisioningConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProvisioningConfiguration: GetUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration,
    };
  }

  validate() {
    if(this.userProvisioningConfiguration && typeof (this.userProvisioningConfiguration as any).validate === 'function') {
      (this.userProvisioningConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

