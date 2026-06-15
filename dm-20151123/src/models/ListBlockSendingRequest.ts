// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBlockSendingRequest extends $dara.Model {
  /**
   * @remarks
   * The start of the time range to query blocked emails.
   * 
   * @example
   * 1763973206
   */
  beginTime?: number;
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
   * The type of block.
   * 
   * - UNSUB: Unsubscribe
   * 
   * - REPORT: Spam report
   * 
   * This parameter is required.
   * 
   * @example
   * UNSUB
   */
  blockType?: string;
  /**
   * @remarks
   * The end of the time range to query blocked emails.
   * 
   * @example
   * 1764146006
   */
  endTime?: number;
  /**
   * @remarks
   * The maximum number of entries to return.<br>
   * Valid values: 1 to 500.<br>
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the query. If you do not specify this parameter, the query starts from the beginning of the results.
   * 
   * @example
   * xxxxxyyyyyy
   */
  nextToken?: string;
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
      beginTime: 'BeginTime',
      blockEmail: 'BlockEmail',
      blockType: 'BlockType',
      endTime: 'EndTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      senderEmail: 'SenderEmail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      blockEmail: 'string',
      blockType: 'string',
      endTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
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

