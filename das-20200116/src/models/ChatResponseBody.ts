// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The heartbeat.
   * 
   * @example
   * waiting_for_agent_thinking
   */
  activityType?: string;
  /**
   * @remarks
   * The agent ID.
   * 
   * @example
   * agent-7f9c2a81
   */
  agentId?: string;
  /**
   * @remarks
   * The response content.
   * 
   * @example
   * I see you have several PolarDB instances, and I will query them for you shortly
   */
  content?: string;
  /**
   * @remarks
   * Indicates whether the content is incremental.
   * 
   * @example
   * hello
   */
  delta?: string;
  /**
   * @remarks
   * The step type of STEP_STARTED, such as task.
   * 
   * @example
   * task
   */
  kind?: string;
  /**
   * @remarks
   * The display name of the sub-agent for STEP_STARTED.
   * 
   * @example
   * SQL Performance Diagnostics
   */
  label?: string;
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * 61820b594664275c4429****
   */
  messageId?: string;
  /**
   * @remarks
   * The extension key.
   * 
   * @example
   * summary
   */
  name?: string;
  /**
   * @remarks
   * The original ID of the tool call.
   * 
   * @example
   * ag-xxxx
   */
  originatingToolCallId?: string;
  /**
   * @remarks
   * The parent agent ID.
   * 
   * @example
   * agent-3a6f1c92
   */
  parentAgentId?: string;
  /**
   * @remarks
   * The parent message ID.
   * 
   * @example
   * 76bee207-31ee-4707-8851-6b9d4da033aa
   */
  parentMessageId?: string;
  /**
   * @remarks
   * The conversation role ID.
   * 
   * @example
   * assistant
   */
  role?: string;
  /**
   * @remarks
   * The run ID.
   * 
   * @example
   * ed7cb7b1-ddc8-45d7-9ff3-b315726cb5f7
   */
  runId?: string;
  /**
   * @remarks
   * The execution step name.
   * 
   * @example
   * sub_agent_performance_diagnose_mysql
   */
  stepName?: string;
  /**
   * @remarks
   * The step status of STEP_FINISHED, such as completed.
   * 
   * @example
   * completed
   */
  stepStatus?: string;
  /**
   * @remarks
   * The callback utility class.
   * 
   * @example
   * das_api
   */
  taskTrackerId?: string;
  /**
   * @remarks
   * The thread ID.
   * 
   * @example
   * 8e481be1-21d5-4a92-a2fb-fb54be0ab4f6
   */
  threadId?: string;
  /**
   * @remarks
   * The event timestamp.
   * 
   * @example
   * 1767225600000
   */
  timestamp?: number;
  /**
   * @remarks
   * The error that occurred during tool invocation.
   * 
   * @example
   * error
   */
  toolCallError?: string;
  /**
   * @remarks
   * The tool invocation ID.
   * 
   * @example
   * call_edf9cdb69e0e4c9796a6a5a6
   */
  toolCallId?: string;
  /**
   * @remarks
   * The tool name.
   * 
   * @example
   * das_api
   */
  toolCallName?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * TEXT_MESSAGE_CONTENT
   */
  type?: string;
  /**
   * @remarks
   * The extension value.
   * 
   * @example
   * {"CharCount":393,"End":1777428785996,"RequestId":"BE59AED5-D831-5811-BBAD-590B917B2089","SessionId":"123e4567-e89b-12d3-a456-xxxxxxxxxxxx","Start":1777428707927}
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      activityType: 'ActivityType',
      agentId: 'AgentId',
      content: 'Content',
      delta: 'Delta',
      kind: 'Kind',
      label: 'Label',
      messageId: 'MessageId',
      name: 'Name',
      originatingToolCallId: 'OriginatingToolCallId',
      parentAgentId: 'ParentAgentId',
      parentMessageId: 'ParentMessageId',
      role: 'Role',
      runId: 'RunId',
      stepName: 'StepName',
      stepStatus: 'StepStatus',
      taskTrackerId: 'TaskTrackerId',
      threadId: 'ThreadId',
      timestamp: 'Timestamp',
      toolCallError: 'ToolCallError',
      toolCallId: 'ToolCallId',
      toolCallName: 'ToolCallName',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityType: 'string',
      agentId: 'string',
      content: 'string',
      delta: 'string',
      kind: 'string',
      label: 'string',
      messageId: 'string',
      name: 'string',
      originatingToolCallId: 'string',
      parentAgentId: 'string',
      parentMessageId: 'string',
      role: 'string',
      runId: 'string',
      stepName: 'string',
      stepStatus: 'string',
      taskTrackerId: 'string',
      threadId: 'string',
      timestamp: 'number',
      toolCallError: 'string',
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

