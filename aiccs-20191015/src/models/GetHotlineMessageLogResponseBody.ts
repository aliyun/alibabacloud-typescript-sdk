// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineMessageLogResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100****2077
   */
  acid?: string;
  content?: string;
  /**
   * @example
   * 1623738027480
   */
  endTime?: number;
  /**
   * @example
   * 11deca999****
   */
  mid?: string;
  /**
   * @example
   * 1
   */
  senderType?: number;
  /**
   * @example
   * 1623738026460
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      acid: 'Acid',
      content: 'Content',
      endTime: 'EndTime',
      mid: 'Mid',
      senderType: 'SenderType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acid: 'string',
      content: 'string',
      endTime: 'number',
      mid: 'string',
      senderType: 'number',
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

export class GetHotlineMessageLogResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetHotlineMessageLogResponseBodyData[];
  /**
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
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
      code: 'string',
      data: { 'type': 'array', 'itemType': GetHotlineMessageLogResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

