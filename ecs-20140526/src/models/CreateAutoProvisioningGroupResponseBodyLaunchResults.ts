// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAutoProvisioningGroupResponseBodyLaunchResultsLaunchResult } from "./CreateAutoProvisioningGroupResponseBodyLaunchResultsLaunchResult";


export class CreateAutoProvisioningGroupResponseBodyLaunchResults extends $dara.Model {
  launchResult?: CreateAutoProvisioningGroupResponseBodyLaunchResultsLaunchResult[];
  static names(): { [key: string]: string } {
    return {
      launchResult: 'LaunchResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchResult: { 'type': 'array', 'itemType': CreateAutoProvisioningGroupResponseBodyLaunchResultsLaunchResult },
    };
  }

  validate() {
    if(Array.isArray(this.launchResult)) {
      $dara.Model.validateArray(this.launchResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

