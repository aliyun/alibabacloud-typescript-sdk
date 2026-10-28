// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewOncallScheduleRequest extends $dara.Model {
  /**
   * @remarks
   * The end date of the query. Format: yyyy-MM-dd. This parameter must be specified together with startDate.
   * 
   * @example
   * 2024-07-05
   */
  endDate?: string;
  /**
   * @remarks
   * The start date of the query. Format: yyyy-MM-dd. This parameter must be specified together with endDate.
   * 
   * @example
   * 2024-04-04
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'endDate',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

