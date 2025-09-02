// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceCountTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query, accurate to the day. Specify the time in the ISO 8601 standard in the yyyy-MM-dd\\"T\\"HH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-04-02T00:00:00+0800
   */
  beginDate?: string;
  /**
   * @remarks
   * The end of the time range to query, accurate to the day. Specify the time in the ISO 8601 standard in the yyyy-MM-dd\\"T\\"HH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-09-10T00:00:00+0800
   */
  endDate?: string;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      beginDate: 'BeginDate',
      endDate: 'EndDate',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

