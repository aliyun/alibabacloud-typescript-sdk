// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return in this request.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The message level.
   * 
   * @example
   * WARNING
   */
  messageLevel?: string;
  /**
   * @remarks
   * Filters messages with a time earlier than the specified value.
   * 
   * @example
   * 1740019610
   */
  messageTimeEarlierThan?: number;
  /**
   * @remarks
   * Filters messages with a time later than the specified value.
   * 
   * @example
   * 1740019609
   */
  messageTimeLaterThan?: number;
  /**
   * @remarks
   * The message type.
   * 
   * @example
   * SUB_PROTECTION_POLICY_MODIFIED
   */
  messageType?: string;
  /**
   * @remarks
   * The pagination token. If there is a next page, this field has a return value. This parameter indicates that there is a next page as long as data is returned. You can use the returned NextToken as a request parameter to obtain the next page of data until Null is returned, which indicates that all data has been retrieved.
   * 
   * @example
   * cae***********99
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      messageLevel: 'MessageLevel',
      messageTimeEarlierThan: 'MessageTimeEarlierThan',
      messageTimeLaterThan: 'MessageTimeLaterThan',
      messageType: 'MessageType',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      messageLevel: 'string',
      messageTimeEarlierThan: 'number',
      messageTimeLaterThan: 'number',
      messageType: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

