// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetControlPolicyEnablementStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the Control Policy feature. Valid values:
   * 
   * *   Enabled: The Control Policy feature is enabled.
   * *   PendingEnable: The Control Policy feature is being enabled.
   * *   Disabled: The Control Policy feature is disabled.
   * *   PendingDisable: The Control Policy feature is being disabled.
   * 
   * @example
   * Disabled
   */
  enablementStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1DC39A4E-3B52-4EFE-9F93-4897D7FFA0C4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enablementStatus: 'EnablementStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablementStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

