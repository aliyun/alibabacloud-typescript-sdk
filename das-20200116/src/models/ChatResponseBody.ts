// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatResponseBody extends $dara.Model {
  /**
   * @example
   * waiting_for_agent_thinking
   */
  activityType?: string;
  /**
   * @example
   * I see you have several PolarDB instances, and I will query them for you shortly
   */
  content?: string;
  /**
   * @example
   * hello
   */
  delta?: string;
  /**
   * @example
   * 61820b594664275c4429****
   */
  messageId?: string;
  /**
   * @example
   * summary
   */
  name?: string;
  /**
   * @example
   * 76bee207-31ee-4707-8851-6b9d4da033aa
   */
  parentMessageId?: string;
  /**
   * @example
   * assistant
   */
  role?: string;
  /**
   * @example
   * ed7cb7b1-ddc8-45d7-9ff3-b315726cb5f7
   */
  runId?: string;
  /**
   * @example
   * sub_agent_performance_diagnose_mysql
   */
  stepName?: string;
  /**
   * @example
   * das_api
   */
  taskTrackerId?: string;
  /**
   * @example
   * 8e481be1-21d5-4a92-a2fb-fb54be0ab4f6
   */
  threadId?: string;
  /**
   * @example
   * call_edf9cdb69e0e4c9796a6a5a6
   */
  toolCallId?: string;
  /**
   * @example
   * das_api
   */
  toolCallName?: string;
  /**
   * @example
   * TEXT_MESSAGE_CONTENT
   */
  type?: string;
  /**
   * @example
   * {"CharCount":393,"End":1777428785996,"RequestId":"BE59AED5-D831-5811-BBAD-590B917B2089","SessionId":"123e4567-e89b-12d3-a456-xxxxxxxxxxxx","Start":1777428707927}
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      activityType: 'ActivityType',
      content: 'Content',
      delta: 'Delta',
      messageId: 'MessageId',
      name: 'Name',
      parentMessageId: 'ParentMessageId',
      role: 'Role',
      runId: 'RunId',
      stepName: 'StepName',
      taskTrackerId: 'TaskTrackerId',
      threadId: 'ThreadId',
      toolCallId: 'ToolCallId',
      toolCallName: 'ToolCallName',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityType: 'string',
      content: 'string',
      delta: 'string',
      messageId: 'string',
      name: 'string',
      parentMessageId: 'string',
      role: 'string',
      runId: 'string',
      stepName: 'string',
      taskTrackerId: 'string',
      threadId: 'string',
      toolCallId: 'string',
      toolCallName: 'string',
      type: 'string',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

