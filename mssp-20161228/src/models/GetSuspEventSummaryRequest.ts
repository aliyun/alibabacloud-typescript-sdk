// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSuspEventSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * Filter time type. Supports filtering by the last 7 days, the last 30 days, the last half year, or custom time ranges.
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732156885986
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1729478485000
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
   * 
   * @example
   * SUSP_EVENT
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

