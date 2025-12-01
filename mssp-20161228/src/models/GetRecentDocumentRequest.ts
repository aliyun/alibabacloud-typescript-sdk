// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecentDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * Filter time type, supports filtering by the last 7 days, the last 30 days, the last half year, or custom time ranges.
   * 
   * This parameter is required.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  dateType?: string;
  /**
   * @remarks
   * End time.
   * 
   * This parameter is required.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  endDate?: number;
  /**
   * @remarks
   * Start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 该字段暂未使用，有问题请联系管理员
   */
  startDate?: number;
  /**
   * @remarks
   * Alert event source.
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

