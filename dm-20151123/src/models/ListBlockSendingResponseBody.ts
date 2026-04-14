// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBlockSendingResponseBodyData extends $dara.Model {
  /**
   * @example
   * xxxx@rcpt.com
   */
  blockEmail?: string;
  /**
   * @example
   * 1723259364
   */
  blockTime?: number;
  /**
   * @example
   * 1
   */
  reason?: number;
  /**
   * @example
   * 1723249364
   */
  sendTime?: number;
  /**
   * @example
   * xxxx@sender.com
   */
  senderEmail?: string;
  static names(): { [key: string]: string } {
    return {
      blockEmail: 'BlockEmail',
      blockTime: 'BlockTime',
      reason: 'Reason',
      sendTime: 'SendTime',
      senderEmail: 'SenderEmail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockEmail: 'string',
      blockTime: 'number',
      reason: 'number',
      sendTime: 'number',
      senderEmail: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBlockSendingResponseBody extends $dara.Model {
  data?: ListBlockSendingResponseBodyData[];
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * xxxxyyyy
   */
  nextToken?: string;
  /**
   * @example
   * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListBlockSendingResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
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

