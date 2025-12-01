// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsoleScoreRequest extends $dara.Model {
  /**
   * @remarks
   * Filter time type, supports filtering by the last 7 days, last 30 days, last half year, or custom. If empty, it represents the last 7 days.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End date.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * Start date.
   * 
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
  /**
   * @remarks
   * Source of alert events.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  suspEventSource?: string;
  static names(): { [key: string]: string } {
    return {
      dateType: 'DateType',
      endDate: 'EndDate',
      startDate: 'StartDate',
      suspEventSource: 'SuspEventSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateType: 'string',
      endDate: 'number',
      startDate: 'number',
      suspEventSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

