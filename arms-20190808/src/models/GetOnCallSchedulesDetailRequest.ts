// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOnCallSchedulesDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The date on which the shift ends. Format: `yyyy-MM-dd`.
   * 
   * @example
   * 2022-10-30
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the scheduling policy.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The date from which the shift starts. Format: `yyyy-MM-dd`.
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

