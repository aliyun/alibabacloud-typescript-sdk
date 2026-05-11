// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConversationsRequest extends $dara.Model {
  /**
   * @example
   * 1638288000000
   */
  beginTimeLeftRange?: number;
  /**
   * @example
   * 1637547875311
   */
  beginTimeRightRange?: number;
  /**
   * @example
   * 138106*****
   */
  callingNumber?: string;
  debugConversation?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * da37319b-6c83-4268-9f19-814aed62e401
   */
  instanceId?: string;
  /**
   * @example
   * false
   */
  isSandBox?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 13788914724
   */
  query?: string;
  /**
   * @example
   * 0
   */
  result?: number;
  roundsLeftRange?: number;
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

