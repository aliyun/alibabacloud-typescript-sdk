// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPatrolReportDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The report date in ISO format such as 2026-08-13, or a special value such as today or yesterday. Specify either this parameter or reportId. This parameter is used to retrieve the latest report for the specified date.
   * 
   * @example
   * 20260416
   */
  date?: string;
  /**
   * @remarks
   * The report ID. Specify either this parameter or date. The reportId parameter takes priority over the date parameter.
   * 
   * @example
   * d72edfd9f3ef475ca310456ecdb09fe8
   */
  reportId?: string;
  /**
   * @remarks
   * The time zone. Used together with the date parameter. Default value: UTC.
   * 
   * @example
   * UTC
   */
  timezone?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      reportId: 'reportId',
      timezone: 'timezone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      reportId: 'string',
      timezone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

