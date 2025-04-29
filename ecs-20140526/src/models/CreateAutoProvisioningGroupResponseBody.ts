// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAutoProvisioningGroupResponseBodyLaunchResults } from "./CreateAutoProvisioningGroupResponseBodyLaunchResults";


export class CreateAutoProvisioningGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the auto provisioning group.
   * 
   * @example
   * apg-sn54avj8htgvtyh8****
   */
  autoProvisioningGroupId?: string;
  /**
   * @remarks
   * The instances created by the auto provisioning group. The values of the parameters in this array are returned only when AutoProvisioningGroupType is set to `instant`.
   */
  launchResults?: CreateAutoProvisioningGroupResponseBodyLaunchResults;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 745CEC9F-0DD7-4451-9FE7-8B752F39****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupId: 'AutoProvisioningGroupId',
      launchResults: 'LaunchResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroupId: 'string',
      launchResults: CreateAutoProvisioningGroupResponseBodyLaunchResults,
      requestId: 'string',
    };
  }

  validate() {
    if(this.launchResults && typeof (this.launchResults as any).validate === 'function') {
      (this.launchResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

