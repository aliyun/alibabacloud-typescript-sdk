// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The severities of alerts. If this parameter is empty, no custom alerts are generated.
   */
  alertLevels?: string[];
  /**
   * @remarks
   * The number of days during which you want to retain invalid alerts.
   * 
   * @example
   * 30
   */
  invalidWarningKeepDays?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 09969D2C-4FAD-429E-BFBF-9A60DEF8****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alertLevels: 'AlertLevels',
      invalidWarningKeepDays: 'InvalidWarningKeepDays',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertLevels: { 'type': 'array', 'itemType': 'string' },
      invalidWarningKeepDays: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alertLevels)) {
      $dara.Model.validateArray(this.alertLevels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

