// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration } from "./UpdateUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration";


export class UpdateUserProvisioningConfigurationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BBC2ED1D-FAC5-3DF8-B63C-992B85B08DD9
   */
  requestId?: string;
  /**
   * @remarks
   * The global configurations of the RAM user provisioning.
   */
  userProvisioningConfiguration?: UpdateUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userProvisioningConfiguration: 'UserProvisioningConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userProvisioningConfiguration: UpdateUserProvisioningConfigurationResponseBodyUserProvisioningConfiguration,
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

