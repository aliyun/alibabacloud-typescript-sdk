// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIAlarmRuleRequestNotificationSettingsNotificationChannels extends $dara.Model {
  /**
   * @remarks
   * The alert notification method. Valid values:
   * 
   * *   Mail
   * *   Phone
   * *   Sms
   * *   Ding
   */
  channels?: string[];
  /**
   * @remarks
   * The severity level. Valid values:
   * 
   * *   Warning
   * *   Critical
   * 
   * @example
   * Warning
   */
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      channels: 'Channels',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channels: { 'type': 'array', 'itemType': 'string' },
      severity: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.channels)) {
      $dara.Model.validateArray(this.channels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

