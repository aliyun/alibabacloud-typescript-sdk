// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConversationsRequest extends $dara.Model {
  abTestId?: string;
  /**
   * @remarks
   * The left boundary of the start time range.
   * 
   * @example
   * 1638288000000
   */
  beginTimeLeftRange?: number;
  /**
   * @remarks
   * The right boundary of the start time range.
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
   * The instance list.
   * 
   * This parameter is required.
   * 
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the session is in a sandbox environment.
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
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The query condition.
   * 
   * @example
   * 13788914724
   */
  query?: string;
  /**
   * @remarks
   * The result.
   * 
   * @example
   * 0
   */
  result?: number;
  /**
   * @remarks
   * The left boundary of the rounds query range.
   * 
   * @example
   * 1
   */
  roundsLeftRange?: number;
  /**
   * @remarks
   * The right boundary of the rounds query range.
   * 
   * @example
   * 3
   */
  roundsRightRange?: number;
  static names(): { [key: string]: string } {
    return {
      abTestId: 'AbTestId',
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
      abTestId: 'string',
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

