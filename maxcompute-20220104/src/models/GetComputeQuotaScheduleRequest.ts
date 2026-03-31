// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeQuotaScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * Display time zone.
   * 
   * @example
   * UTC+8
   */
  displayTimezone?: string;
  static names(): { [key: string]: string } {
    return {
      displayTimezone: 'displayTimezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayTimezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

