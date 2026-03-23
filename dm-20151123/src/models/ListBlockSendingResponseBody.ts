// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBlockSendingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The recipient email address.
   * 
   * @example
   * xxxx@rcpt.com
   */
  blockEmail?: string;
  /**
   * @remarks
   * The time the block was initiated.
   * 
   * @example
   * 1723259364
   */
  blockTime?: number;
  /**
   * @remarks
   * The reason for the block. The value is a bitset. The meaning of each bit is as follows:
   * 
   * - 0: The reason is not specified.
   * 
   * - 1: The recipient is not interested in the content.
   * 
   * - 2: The content is repetitive.
   * 
   * - 3: The content is sent too frequently.
   * 
   * @example
   * 1
   */
  reason?: number;
  /**
   * @remarks
   * The time the email was sent.
   * 
   * @example
   * 1723249364
   */
  sendTime?: number;
  /**
   * @remarks
   * The sender email address.
   * 
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
  /**
   * @remarks
   * A list of data about unsubscribes or spam reports.
   */
  data?: ListBlockSendingResponseBodyData[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. An empty string indicates that no more data is available.
   * 
   * @example
   * xxxxyyyy
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

