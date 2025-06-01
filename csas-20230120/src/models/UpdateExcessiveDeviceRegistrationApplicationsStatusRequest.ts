// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateExcessiveDeviceRegistrationApplicationsStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applicationIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Approved
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      applicationIds: 'ApplicationIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationIds)) {
      $dara.Model.validateArray(this.applicationIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

