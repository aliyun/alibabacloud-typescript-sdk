// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttackedAssetDealRequest extends $dara.Model {
  /**
   * @remarks
   * Time filter type, supporting filtering by the last 7 days, the last 30 days, the last half year, or custom time periods.
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
   * 1732268720000
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1732268720000
   */
  startDate?: number;
  /**
   * @remarks
   * Source of the alert event.
   * 
   * @example
   * 暂时无需传参，有问题请联系管理员
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

