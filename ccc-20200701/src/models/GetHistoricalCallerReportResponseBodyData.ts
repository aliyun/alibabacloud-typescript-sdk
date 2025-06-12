// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoricalCallerReportResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1646917200000
   */
  lastCallingTime?: number;
  /**
   * @example
   * 10
   */
  totalCalls?: number;
  static names(): { [key: string]: string } {
    return {
      lastCallingTime: 'LastCallingTime',
      totalCalls: 'TotalCalls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastCallingTime: 'number',
      totalCalls: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

