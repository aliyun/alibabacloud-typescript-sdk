// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBaseStrategyPeriodResponseBodyWorkingTime extends $dara.Model {
  /**
   * @remarks
   * Start time
   * 
   * @example
   * 00:00:00
   */
  beginTime?: string;
  /**
   * @remarks
   * Daily start time, in milliseconds
   * 
   * @example
   * 0
   */
  beginTimeMillis?: number;
  /**
   * @remarks
   * End time
   * 
   * @example
   * 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * Daily end time, in milliseconds
   * 
   * @example
   * 0
   */
  endTimeMillis?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      beginTimeMillis: 'BeginTimeMillis',
      endTime: 'EndTime',
      endTimeMillis: 'EndTimeMillis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      beginTimeMillis: 'number',
      endTime: 'string',
      endTimeMillis: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaseStrategyPeriodResponseBody extends $dara.Model {
  /**
   * @remarks
   * API status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the period applies only to weekends
   * 
   * @example
   * false
   */
  onlyWeekdays?: boolean;
  /**
   * @remarks
   * Indicates whether the period applies only to weekdays
   * 
   * @example
   * false
   */
  onlyWorkdays?: boolean;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Time periods when the strategy runs
   * 
   * @example
   * []
   */
  workingTime?: GetBaseStrategyPeriodResponseBodyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      onlyWeekdays: 'OnlyWeekdays',
      onlyWorkdays: 'OnlyWorkdays',
      requestId: 'RequestId',
      success: 'Success',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      onlyWeekdays: 'boolean',
      onlyWorkdays: 'boolean',
      requestId: 'string',
      success: 'boolean',
      workingTime: { 'type': 'array', 'itemType': GetBaseStrategyPeriodResponseBodyWorkingTime },
    };
  }

  validate() {
    if(Array.isArray(this.workingTime)) {
      $dara.Model.validateArray(this.workingTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

