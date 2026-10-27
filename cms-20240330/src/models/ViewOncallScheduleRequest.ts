// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewOncallScheduleRequest extends $dara.Model {
  /**
   * @example
   * 2024-07-05
   */
  endDate?: string;
  /**
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

