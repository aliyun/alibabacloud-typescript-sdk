// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineMessageLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 100****2077
   */
  acid?: string;
  /**
   * @remarks
   * The session content.
   * 
   * @example
   * 您好。
   */
  content?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 1623738027480
   */
  endTime?: number;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 11deca999****
   */
  mid?: string;
  /**
   * @remarks
   * The sender type. Valid values:  
   * - **1**: Membership  
   * - **2**: Agent
   * 
   * @example
   * 1
   */
  senderType?: number;
  /**
   * @remarks
   * The start time.
   * 
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
   * @remarks
   * Status code. A return value of "Success" indicates that the request succeeded.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Voice messages.
   */
  data?: GetHotlineMessageLogResponseBodyData[];
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded.
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

