// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAutoProvisioningGroupShrinkRequestLaunchConfigurationSchedulerOptions extends $dara.Model {
  dedicatedHostClusterId?: string;
  dedicatedHostId?: string;
  static names(): { [key: string]: string } {
    return {
      dedicatedHostClusterId: 'DedicatedHostClusterId',
      dedicatedHostId: 'DedicatedHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostClusterId: 'string',
      dedicatedHostId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

