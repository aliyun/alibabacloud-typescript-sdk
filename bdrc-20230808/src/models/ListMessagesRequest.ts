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
   * Message level.
   * 
   * @example
   * WARNING
   */
  messageLevel?: string;
  /**
   * @remarks
   * Messages with time earlier than this value.
   * 
   * @example
   * 1740019610
   */
  messageTimeEarlierThan?: number;
  /**
   * @remarks
   * Messages with time later than this value.
   * 
   * @example
   * 1740019609
   */
  messageTimeLaterThan?: number;
  /**
   * @remarks
   * Message type.
   * 
   * @example
   * SUB_PROTECTION_POLICY_MODIFIED
   */
  messageType?: string;
  /**
   * @remarks
   * The pagination token. If more entries are to be returned on the next page, a pagination token is returned.
   * 
   * > If this parameter returns data, it indicates that there are more pages. You can use the returned NextToken as a request parameter to obtain the next page of data until it returns Null, indicating that all data has been obtained.
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

