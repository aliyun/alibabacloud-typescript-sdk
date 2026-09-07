// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOnCallSchedulesDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The end date of the query range in `yyyy-MM-dd` format.
   * 
   * @example
   * 2022-10-30
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the on-call schedule.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The start date of the query range in `yyyy-MM-dd` format.
   * 
   * @example
   * 2022-10-01
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      id: 'Id',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      id: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

