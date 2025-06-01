// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateUninstallApplicationsStatusResponseBodyApplications } from "./UpdateUninstallApplicationsStatusResponseBodyApplications";


export class UpdateUninstallApplicationsStatusResponseBody extends $dara.Model {
  applications?: UpdateUninstallApplicationsStatusResponseBodyApplications[];
  /**
   * @example
   * 9B769522-D50C-5978-8981-52BE800D6099
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
      applications: { 'type': 'array', 'itemType': UpdateUninstallApplicationsStatusResponseBodyApplications },
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

