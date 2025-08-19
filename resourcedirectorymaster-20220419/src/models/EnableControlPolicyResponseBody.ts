// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableControlPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of the Control Policy feature. Valid values:
   * 
   * *   Enabled: The feature is enabled.
   * *   PendingEnable: The feature is being enabled.
   * *   Disabled: The feature is disabled.
   * *   PendingDisable: The feature is being disabled.
   * 
   * @example
   * PendingEnable
   */
  enablementStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8CE7BD95-EFFA-4911-A1E0-BD4412697FEB
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

