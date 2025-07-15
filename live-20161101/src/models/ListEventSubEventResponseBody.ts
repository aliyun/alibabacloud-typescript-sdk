// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEventSubEventResponseBodyLogs extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 9qb1****
   */
  appId?: string;
  /**
   * @remarks
   * The HTTP status code. A value of 200 indicates that the callback was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The callback duration. Unit: milliseconds.
   * 
   * @example
   * 22
   */
  cost?: number;
  /**
   * @remarks
   * The details about the callback.
   * 
   * @example
   * {\\"MsgId\\":\\"875d5266cbabb1834cc84a105cf68454\\",\\"MsgTimestamp\\":1697545591,\\"SubscribeId\\":\\"09be0d2254cb5a89f4cbd86403ec5343\\",\\"AppId\\":\\"xxx\\",\\"ChannelId\\":\\"9099\\",\\"Contents\\":[{\\"Event\\":\\"UserEvent\\",\\"UserEvent\\":{\\"UserId\\":\\"linux_test\\",\\"EventTag\\":\\"Leave\\",\\"SessionId\\":\\"je7y2sBZJZQ0VBJZrh4LnBkxvGH2WyVs\\",\\"Timestamp\\":1697545591,\\"ChannelProfile\\":\\"interactive_live\\",\\"US\\":5068748604047364,\\"Reason\\":1,\\"Role\\":1,\\"TerminalType\\":6,\\"UserType\\":2}}]}
   */
  data?: string;
  /**
   * @remarks
   * The ID of the callback record.
   * 
   * @example
   * 875d5266cbabb1834cc84a105cf6****
   */
  messageId?: string;
  /**
   * @remarks
   * The subscription ID.
   * 
   * @example
   * ad53276431c****
   */
  subId?: string;
  /**
   * @remarks
   * The time when the callback was generated.
   * 
   * @example
   * 2023-10-17 20:26:31.988
   */
  time?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * @example
   * http://****.com/callback
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      code: 'Code',
      cost: 'Cost',
      data: 'Data',
      messageId: 'MessageId',
      subId: 'SubId',
      time: 'Time',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      code: 'number',
      cost: 'number',
      data: 'string',
      messageId: 'string',
      subId: 'string',
      time: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventSubEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of callback records returned on the current page.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Indicates whether the current page is followed by a page.
   * 
   * @example
   * false
   */
  hasMore?: boolean;
  /**
   * @remarks
   * The callback records.
   */
  logs?: ListEventSubEventResponseBodyLogs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC8CB656-A7BA-1811-9D6B-4CC187E988BD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      hasMore: 'HasMore',
      logs: 'Logs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      hasMore: 'boolean',
      logs: { 'type': 'array', 'itemType': ListEventSubEventResponseBodyLogs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

