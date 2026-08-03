// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserLogCountRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. Format: yyyy-MM-dd.
   * 
   * @example
   * 2025-06-10
   */
  endDate?: string;
  /**
   * @remarks
   * The start time. Format: yyyy-MM-dd.
   * 
   * @example
   * 2025-05-12
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      startDate: 'StartDate',
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

