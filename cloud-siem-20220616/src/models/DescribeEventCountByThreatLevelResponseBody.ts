// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventCountByThreatLevelResponseBodyDataEventDailyNum extends $dara.Model {
  /**
   * @remarks
   * Date.
   * 
   * @example
   * 2025-10-06
   */
  date?: string;
  /**
   * @remarks
   * Total number of security events.
   * 
   * @example
   * 100
   */
  eventNum?: number;
  /**
   * @remarks
   * Number of unhandled security events.
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
   * Daily event statistics.
   */
  eventDailyNum?: DescribeEventCountByThreatLevelResponseBodyDataEventDailyNum[];
  /**
   * @remarks
   * Total number of events.
   * 
   * @example
   * 100
   */
  eventNum?: number;
  /**
   * @remarks
   * Number of high-risk events.
   * 
   * @example
   * 20
   */
  highLevelEventNum?: number;
  /**
   * @remarks
   * Number of informational events.
   * 
   * @example
   * 0
   */
  infoLevelEventNum?: number;
  /**
   * @remarks
   * Number of low-risk events.
   * 
   * @example
   * 52
   */
  lowLevelEventNum?: number;
  /**
   * @remarks
   * Number of medium-risk events.
   * 
   * @example
   * 3
   */
  mediumLevelEventNum?: number;
  /**
   * @remarks
   * Number of critical events.
   * 
   * @example
   * 0
   */
  seriousLevelEventNum?: number;
  /**
   * @remarks
   * Number of unhandled events.
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
   * HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Response data.
   * 
   * @example
   * 123456
   */
  data?: DescribeEventCountByThreatLevelResponseBodyData;
  /**
   * @remarks
   * Response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. Valid values:
   * 
   * - true: The request succeeded.
   * 
   * - false: The request failed.
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

