// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHoneypotEventTrendResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of attacks that occurred.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The name of the attack.
   * 
   * @example
   * ATTACK_EVENT
   */
  keyName?: string;
  /**
   * @remarks
   * The timestamp when the attack event occurred.
   * 
   * @example
   * 1686968163644
   */
  timeStamp?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      keyName: 'KeyName',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      keyName: 'string',
      timeStamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHoneypotEventTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The list of data returned. ￼
   */
  data?: GetHoneypotEventTrendResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 21637690-9B21-5EEC-94DB-2A732480****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': GetHoneypotEventTrendResponseBodyData },
      httpStatusCode: 'number',
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

