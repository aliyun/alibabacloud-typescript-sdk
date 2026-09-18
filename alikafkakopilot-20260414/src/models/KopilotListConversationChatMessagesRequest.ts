// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KopilotListConversationChatMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * The cursor.
   * 
   * > If this parameter is not specified, the last pageSize turn IDs are returned. If this parameter is specified, the turn IDs before the specified turn ID are returned.
   * 
   * @example
   * 2345
   */
  beforeTurnId?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * e356c91c-8220-425c-9d86-********
   */
  sessionId?: string;
  /**
   * @remarks
   * The pagination cursor. Do not specify this parameter for the first query. For subsequent queries, pass in the value of Data.ScheduledTaskInfo.NextTaskCursor from the previous response.
   * 
   * @example
   * 123
   */
  taskCursor?: string;
  /**
   * @remarks
   * The number of scheduled tasks per page. Default value: 20. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  taskPageSize?: number;
  static names(): { [key: string]: string } {
    return {
      beforeTurnId: 'BeforeTurnId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      sessionId: 'SessionId',
      taskCursor: 'TaskCursor',
      taskPageSize: 'TaskPageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beforeTurnId: 'number',
      pageSize: 'number',
      regionId: 'string',
      sessionId: 'string',
      taskCursor: 'string',
      taskPageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

