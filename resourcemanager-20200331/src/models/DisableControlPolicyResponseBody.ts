// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableControlPolicyResponseBody extends $dara.Model {
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
   * PendingDisable
   */
  enablementStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7C709979-451D-4C92-835D-7DDCCAA562E9
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

