// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAutomaticFrequencyControlConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The action to perform. Valid values:
   * - **observe**: Monitor.
   * - **deny**: Block.
   * - **js**: JavaScript Challenge.
   * 
   * @example
   * js
   */
  actionType?: string;
  /**
   * @remarks
   * Specifies whether to enable the feature. Valid values:
   * 
   *  - **on**: Enabled.
   * 
   *  - **off**: Disabled.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The protection level. Valid values:
   * - **loose**: Loose.
   * - **normal**: Medium.
   * - **strict**: Strict.
   * 
   * @example
   * normal
   */
  level?: string;
  /**
   * @remarks
   * Id of the request
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

