// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBaseStrategyPeriodResponseBodyWorkingTime extends $dara.Model {
  /**
   * @example
   * 00:00:00
   */
  beginTime?: string;
  /**
   * @example
   * 0
   */
  beginTimeMillis?: number;
  /**
   * @example
   * 00:00:00
   */
  endTime?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * false
   */
  onlyWeekdays?: boolean;
  onlyWorkdays?: boolean;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

