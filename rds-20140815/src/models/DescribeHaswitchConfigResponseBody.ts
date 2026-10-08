// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHASwitchConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The automatic primary/secondary switchover setting. Valid values:
   * * **Auto**: The system automatically switches over between the primary and secondary instances upon a fault.
   * * **Manual**: Automatic switchover has been temporarily disabled.
   * 
   * @example
   * Manual
   */
  HAConfig?: string;
  /**
   * @remarks
   * The deadline for the temporary disabling of automatic switchover. The time follows the ISO 8601 standard in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-08-29T15:00:00Z
   */
  manualHATime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4FDF4B79-2741-4C5F-8C76-4B953FC5C2B1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      HAConfig: 'HAConfig',
      manualHATime: 'ManualHATime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      HAConfig: 'string',
      manualHATime: 'string',
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

