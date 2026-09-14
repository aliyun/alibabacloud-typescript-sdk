// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventCountByThreatLevelResponseBodyDataEventDailyNum extends $dara.Model {
  /**
   * @remarks
   * The date in the YYYY-MM-DD format.
   * 
   * @example
   * 2025-10-06
   */
  date?: string;
  /**
   * @remarks
   * The total number of security events.
   * 
   * @example
   * 100
   */
  eventNum?: number;
  /**
   * @remarks
   * The number of unhandled security events.
   * 
   * @example
   * 34
   */
  undealEventNum?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      eventNum: 'EventNum',
      undealEventNum: 'UndealEventNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      eventNum: 'number',
      undealEventNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventCountByThreatLevelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The daily event statistics.
   */
  eventDailyNum?: DescribeEventCountByThreatLevelResponseBodyDataEventDailyNum[];
  /**
   * @remarks
   * The total number of events.
   * 
   * @example
   * 100
   */
  eventNum?: number;
  /**
   * @remarks
   * The number of high-risk events.
   * 
   * @example
   * 20
   */
  highLevelEventNum?: number;
  /**
   * @remarks
   * The number of informational-level events.
   * 
   * @example
   * 0
   */
  infoLevelEventNum?: number;
  /**
   * @remarks
   * The number of low-risk events.
   * 
   * @example
   * 52
   */
  lowLevelEventNum?: number;
  /**
   * @remarks
   * The number of medium-risk events.
   * 
   * @example
   * 3
   */
  mediumLevelEventNum?: number;
  /**
   * @remarks
   * The number of critical-level events.
   * 
   * @example
   * 0
   */
  seriousLevelEventNum?: number;
  /**
   * @remarks
   * The number of unhandled events.
   * 
   * @example
   * 75
   */
  undealEventNum?: number;
  static names(): { [key: string]: string } {
    return {
      eventDailyNum: 'EventDailyNum',
      eventNum: 'EventNum',
      highLevelEventNum: 'HighLevelEventNum',
      infoLevelEventNum: 'InfoLevelEventNum',
      lowLevelEventNum: 'LowLevelEventNum',
      mediumLevelEventNum: 'MediumLevelEventNum',
      seriousLevelEventNum: 'SeriousLevelEventNum',
      undealEventNum: 'UndealEventNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDailyNum: { 'type': 'array', 'itemType': DescribeEventCountByThreatLevelResponseBodyDataEventDailyNum },
      eventNum: 'number',
      highLevelEventNum: 'number',
      infoLevelEventNum: 'number',
      lowLevelEventNum: 'number',
      mediumLevelEventNum: 'number',
      seriousLevelEventNum: 'number',
      undealEventNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventDailyNum)) {
      $dara.Model.validateArray(this.eventDailyNum);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventCountByThreatLevelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   * 
   * @example
   * 123456
   */
  data?: DescribeEventCountByThreatLevelResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: successful.
   * - false: failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeEventCountByThreatLevelResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

