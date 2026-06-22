// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The list of alert notification levels.
   * 
   * @example
   * high,low
   */
  alertLevels?: string;
  /**
   * @remarks
   * The number of days to retain false positive alerts.
   * 
   * @example
   * 7
   */
  invalidWarningKeepDays?: number;
  /**
   * @remarks
   * The IP address of the access source.
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

