// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSdlEventDetailResponseBodySdlEventDetailList extends $dara.Model {
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * event-test
   */
  eventName?: string;
  /**
   * @remarks
   * The amount of sensitive data.
   * 
   * @example
   * 10
   */
  sensitiveDataCnt?: number;
  /**
   * @remarks
   * The sensitivity level.
   * 
   * @example
   * S3
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The type of sensitive data.
   * 
   * @example
   * Identity Card
   */
  sensitiveType?: string;
  /**
   * @remarks
   * The time when the event occurred.
   * 
   * @example
   * 1753928907
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      sensitiveDataCnt: 'SensitiveDataCnt',
      sensitiveLevel: 'SensitiveLevel',
      sensitiveType: 'SensitiveType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      sensitiveDataCnt: 'number',
      sensitiveLevel: 'string',
      sensitiveType: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSdlEventDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D19D8F70-D64B-5A95-905A-6073BF4A****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of events.
   */
  sdlEventDetailList?: DescribeSdlEventDetailResponseBodySdlEventDetailList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sdlEventDetailList: 'SdlEventDetailList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sdlEventDetailList: { 'type': 'array', 'itemType': DescribeSdlEventDetailResponseBodySdlEventDetailList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sdlEventDetailList)) {
      $dara.Model.validateArray(this.sdlEventDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

