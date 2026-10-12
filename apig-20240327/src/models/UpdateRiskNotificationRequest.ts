// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRiskNotificationRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to mute notifications.
   * 
   * @example
   * true
   */
  isMute?: boolean;
  /**
   * @remarks
   * The risk item code. This parameter is required.
   * 
   * The value is a numeric string (for example, 60010010002 or 50010010009). Call GetRiskNotification to query the code of the current risk item.
   * 
   * @example
   * 60010010002
   */
  riskCode?: string;
  static names(): { [key: string]: string } {
    return {
      isMute: 'isMute',
      riskCode: 'riskCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isMute: 'boolean',
      riskCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

