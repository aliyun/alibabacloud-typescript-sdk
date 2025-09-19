// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The severities of alerts.
   * 
   * @example
   * high,low
   */
  alertLevels?: string;
  /**
   * @remarks
   * The number of days during which you want to retain invalid alerts.
   * 
   * @example
   * 7
   */
  invalidWarningKeepDays?: number;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 112.48.16.***
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevels: 'AlertLevels',
      invalidWarningKeepDays: 'InvalidWarningKeepDays',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevels: 'string',
      invalidWarningKeepDays: 'number',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

