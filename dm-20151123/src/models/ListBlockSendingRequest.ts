// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBlockSendingRequest extends $dara.Model {
  /**
   * @example
   * 1731463398242
   */
  beginTime?: number;
  /**
   * @example
   * xxxx@rcpt.com
   */
  blockEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UNSUB
   */
  blockType?: string;
  /**
   * @example
   * 1732463398242
   */
  endTime?: number;
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * xxxxxyyyyyy
   */
  nextToken?: string;
  /**
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

