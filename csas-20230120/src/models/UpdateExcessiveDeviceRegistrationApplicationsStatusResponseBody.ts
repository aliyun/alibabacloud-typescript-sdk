// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBodyApplications } from "./UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBodyApplications";


export class UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBody extends $dara.Model {
  applications?: UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBodyApplications[];
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applications: 'Applications',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applications: { 'type': 'array', 'itemType': UpdateExcessiveDeviceRegistrationApplicationsStatusResponseBodyApplications },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applications)) {
      $dara.Model.validateArray(this.applications);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

