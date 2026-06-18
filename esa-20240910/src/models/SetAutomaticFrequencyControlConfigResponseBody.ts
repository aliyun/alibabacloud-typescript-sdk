// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAutomaticFrequencyControlConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The action taken on requests that trigger the control. Valid values:
   * 
   * - **observe**: Requests are monitored.
   * 
   * - **deny**: Requests are blocked.
   * 
   * - **js**: JS challenges are issued.
   * 
   * @example
   * js
   */
  actionType?: string;
  /**
   * @remarks
   * Indicates whether automatic frequency control is enabled. Valid values:
   * 
   * - **on**: Enabled.
   * 
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The protection level. Valid values:
   * 
   * - **loose**: Loose protection.
   * 
   * - **normal**: Normal protection.
   * 
   * - **strict**: Strict protection.
   * 
   * @example
   * normal
   */
  level?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F32C57AA-7BF8-49AE-A2CC-9F42390F5A19
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      enable: 'Enable',
      level: 'Level',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      enable: 'string',
      level: 'string',
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

