// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConversationsRequest extends $dara.Model {
  /**
   * @remarks
   * The start of the time range to query. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1638288000000
   */
  beginTimeLeftRange?: number;
  /**
   * @remarks
   * The end of the time range to query. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1637547875311
   */
  beginTimeRightRange?: number;
  /**
   * @remarks
   * The calling number.
   * 
   * @example
   * 138106*****
   */
  callingNumber?: string;
  debugConversation?: number;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the conversation is in a sandbox environment. Valid values: `true` and `false`.
   * 
   * @example
   * false
   */
  isSandBox?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The search query for filtering conversations.
   * 
   * @example
   * 13788914724
   */
  query?: string;
  /**
   * @remarks
   * The result of the conversation.
   * 
   * @example
   * 0
   */
  result?: number;
  /**
   * @remarks
   * The minimum number of rounds in the conversation.
   * 
   * @example
   * 1
   */
  roundsLeftRange?: number;
  /**
   * @remarks
   * The maximum number of rounds in the conversation.
   * 
   * @example
   * 3
   */
  roundsRightRange?: number;
  static names(): { [key: string]: string } {
    return {
      beginTimeLeftRange: 'BeginTimeLeftRange',
      beginTimeRightRange: 'BeginTimeRightRange',
      callingNumber: 'CallingNumber',
      debugConversation: 'DebugConversation',
      instanceId: 'InstanceId',
      isSandBox: 'IsSandBox',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      result: 'Result',
      roundsLeftRange: 'RoundsLeftRange',
      roundsRightRange: 'RoundsRightRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimeLeftRange: 'number',
      beginTimeRightRange: 'number',
      callingNumber: 'string',
      debugConversation: 'number',
      instanceId: 'string',
      isSandBox: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      result: 'number',
      roundsLeftRange: 'number',
      roundsRightRange: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

