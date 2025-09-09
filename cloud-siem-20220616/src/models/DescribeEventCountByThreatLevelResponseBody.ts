// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventCountByThreatLevelResponseBodyData extends $dara.Model {
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEventCountByThreatLevelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeEventCountByThreatLevelResponseBodyData;
  /**
   * @remarks
   * The returned message.
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
   * 
   * *   true
   * *   false
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

