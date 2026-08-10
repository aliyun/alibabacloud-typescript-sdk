// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendNapalStreamMessageResponseBodyMessageParts extends $dara.Model {
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * {}
   */
  data?: any;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * reserved.bin
   */
  filename?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * application/octet-stream
   */
  mediaType?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * cmVzZXJ2ZWQ=
   */
  raw?: string;
  /**
   * @remarks
   * The text content.
   * 
   * @example
   * The current instance is running normally
   */
  text?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * https://example.com/reserved.bin
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      filename: 'Filename',
      mediaType: 'MediaType',
      raw: 'Raw',
      text: 'Text',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      filename: 'string',
      mediaType: 'string',
      raw: 'string',
      text: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyMessage extends $dara.Model {
  /**
   * @remarks
   * The session context ID.
   * 
   * @example
   * context-07b0**bcc2
   */
  contextId?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   */
  extensions?: string[];
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * message-fd6e**9949
   */
  messageId?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The list of message content parts.
   */
  parts?: SendNapalStreamMessageResponseBodyMessageParts[];
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   */
  referenceTaskIds?: string[];
  /**
   * @remarks
   * The message role.
   * 
   * @example
   * agent
   */
  role?: string;
  /**
   * @remarks
   * Reserved field. A directly returned Message does not create a task, so this field is empty. This API does not currently return a top-level Message.
   * 
   * @example
   * task-reserved
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      contextId: 'ContextId',
      extensions: 'Extensions',
      messageId: 'MessageId',
      metadata: 'Metadata',
      parts: 'Parts',
      referenceTaskIds: 'ReferenceTaskIds',
      role: 'Role',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextId: 'string',
      extensions: { 'type': 'array', 'itemType': 'string' },
      messageId: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parts: { 'type': 'array', 'itemType': SendNapalStreamMessageResponseBodyMessageParts },
      referenceTaskIds: { 'type': 'array', 'itemType': 'string' },
      role: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extensions)) {
      $dara.Model.validateArray(this.extensions);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(Array.isArray(this.parts)) {
      $dara.Model.validateArray(this.parts);
    }
    if(Array.isArray(this.referenceTaskIds)) {
      $dara.Model.validateArray(this.referenceTaskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTaskArtifactsParts extends $dara.Model {
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * {}
   */
  data?: any;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * reserved.bin
   */
  filename?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * application/octet-stream
   */
  mediaType?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * cmVzZXJ2ZWQ=
   */
  raw?: string;
  /**
   * @remarks
   * The report text fragment.
   * 
   * @example
   * Diagnostic results
   */
  text?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * https://example.com/reserved.bin
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      filename: 'Filename',
      mediaType: 'MediaType',
      raw: 'Raw',
      text: 'Text',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      filename: 'string',
      mediaType: 'string',
      raw: 'string',
      text: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTaskArtifacts extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the artifact.
   * 
   * @example
   * output
   */
  artifactId?: string;
  /**
   * @remarks
   * The description of the artifact.
   * 
   * @example
   * Instance health inspection results
   */
  description?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   */
  extensions?: string[];
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The name of the artifact.
   * 
   * @example
   * Inspection report
   */
  name?: string;
  /**
   * @remarks
   * The list of content parts.
   */
  parts?: SendNapalStreamMessageResponseBodyTaskArtifactsParts[];
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      description: 'Description',
      extensions: 'Extensions',
      metadata: 'Metadata',
      name: 'Name',
      parts: 'Parts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      description: 'string',
      extensions: { 'type': 'array', 'itemType': 'string' },
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      parts: { 'type': 'array', 'itemType': SendNapalStreamMessageResponseBodyTaskArtifactsParts },
    };
  }

  validate() {
    if(Array.isArray(this.extensions)) {
      $dara.Model.validateArray(this.extensions);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(Array.isArray(this.parts)) {
      $dara.Model.validateArray(this.parts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTaskHistoryParts extends $dara.Model {
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * {}
   */
  data?: any;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * reserved.bin
   */
  filename?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * application/octet-stream
   */
  mediaType?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * cmVzZXJ2ZWQ=
   */
  raw?: string;
  /**
   * @remarks
   * The text content.
   * 
   * @example
   * Diagnose this instance ngw-xxx
   */
  text?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * https://example.com/reserved.bin
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      filename: 'Filename',
      mediaType: 'MediaType',
      raw: 'Raw',
      text: 'Text',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      filename: 'string',
      mediaType: 'string',
      raw: 'string',
      text: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTaskHistory extends $dara.Model {
  /**
   * @remarks
   * The session context ID.
   * 
   * @example
   * context-07b0**bcc2
   */
  contextId?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   */
  extensions?: string[];
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * message-fd6e**9949
   */
  messageId?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The list of message content parts.
   */
  parts?: SendNapalStreamMessageResponseBodyTaskHistoryParts[];
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   */
  referenceTaskIds?: string[];
  /**
   * @remarks
   * The message role.
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task-38cZ**MAVKu
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      contextId: 'ContextId',
      extensions: 'Extensions',
      messageId: 'MessageId',
      metadata: 'Metadata',
      parts: 'Parts',
      referenceTaskIds: 'ReferenceTaskIds',
      role: 'Role',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextId: 'string',
      extensions: { 'type': 'array', 'itemType': 'string' },
      messageId: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      parts: { 'type': 'array', 'itemType': SendNapalStreamMessageResponseBodyTaskHistoryParts },
      referenceTaskIds: { 'type': 'array', 'itemType': 'string' },
      role: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extensions)) {
      $dara.Model.validateArray(this.extensions);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(Array.isArray(this.parts)) {
      $dara.Model.validateArray(this.parts);
    }
    if(Array.isArray(this.referenceTaskIds)) {
      $dara.Model.validateArray(this.referenceTaskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTaskStatusMessageParts extends $dara.Model {
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * {}
   */
  data?: any;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * reserved.bin
   */
  filename?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * application/octet-stream
   */
  mediaType?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * cmVzZXJ2ZWQ=
   */
  raw?: string;
  /**
   * @remarks
   * The text content. The natural language instruction entered by the user, such as a diagnostic request or question consultation.
   * 
   * @example
   * The current instance is running normally
   */
  text?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * https://example.com/reserved.bin
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      filename: 'Filename',
      mediaType: 'MediaType',
      raw: 'Raw',
      text: 'Text',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      filename: 'string',
      mediaType: 'string',
      raw: 'string',
      text: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTaskStatusMessage extends $dara.Model {
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * message-fd6e**9949
   */
  messageId?: string;
  /**
   * @remarks
   * The list of message content parts.
   */
  parts?: SendNapalStreamMessageResponseBodyTaskStatusMessageParts[];
  /**
   * @remarks
   * The message role.
   * 
   * @example
   * agent
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      parts: 'Parts',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      parts: { 'type': 'array', 'itemType': SendNapalStreamMessageResponseBodyTaskStatusMessageParts },
      role: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parts)) {
      $dara.Model.validateArray(this.parts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTaskStatus extends $dara.Model {
  /**
   * @remarks
   * The message object defined by the A2A protocol. It contains the sender role, one or more content parts, and optional session and task context. When returned as a top-level field, it indicates a direct reply from the agent and is mutually exclusive with Task, TaskStatusUpdate, and TaskArtifactUpdate. The stream closes immediately after this message is returned. When returned as Status.Message, it represents a descriptive message associated with the task status. This API does not currently return a top-level Message. This field is reserved for protocol compatibility only.
   */
  message?: SendNapalStreamMessageResponseBodyTaskStatusMessage;
  /**
   * @remarks
   * The task state. Valid values:
   * - TASK_STATE_SUBMITTED: The task has been submitted.
   * - TASK_STATE_WORKING: The task is being executed.
   * - TASK_STATE_COMPLETED: The task has been completed.
   * - TASK_STATE_FAILED: The task has failed.
   * 
   * @example
   * TASK_STATE_SUBMITTED
   */
  state?: string;
  /**
   * @remarks
   * The status timestamp in ISO 8601 format.
   * 
   * @example
   * 2026-08-07T06:08:10Z
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      state: 'State',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: SendNapalStreamMessageResponseBodyTaskStatusMessage,
      state: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTask extends $dara.Model {
  /**
   * @remarks
   * The list of task artifacts.
   */
  artifacts?: SendNapalStreamMessageResponseBodyTaskArtifacts[];
  /**
   * @remarks
   * The session context ID. Used to maintain context continuity in multi-turn conversations.
   * 
   * @example
   * context-07b0**bcc2
   */
  contextId?: string;
  /**
   * @remarks
   * The list of historical messages.
   */
  history?: SendNapalStreamMessageResponseBodyTaskHistory[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task-38cZ**MAVKu
   */
  id?: string;
  /**
   * @remarks
   * The extended metadata, used to pass additional context information.
   * 
   * @example
   * {"usage":"{totalTokens=327672}"}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The task status object.
   */
  status?: SendNapalStreamMessageResponseBodyTaskStatus;
  static names(): { [key: string]: string } {
    return {
      artifacts: 'Artifacts',
      contextId: 'ContextId',
      history: 'History',
      id: 'Id',
      metadata: 'Metadata',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifacts: { 'type': 'array', 'itemType': SendNapalStreamMessageResponseBodyTaskArtifacts },
      contextId: 'string',
      history: { 'type': 'array', 'itemType': SendNapalStreamMessageResponseBodyTaskHistory },
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: SendNapalStreamMessageResponseBodyTaskStatus,
    };
  }

  validate() {
    if(Array.isArray(this.artifacts)) {
      $dara.Model.validateArray(this.artifacts);
    }
    if(Array.isArray(this.history)) {
      $dara.Model.validateArray(this.history);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTaskArtifactUpdateArtifactParts extends $dara.Model {
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * {}
   */
  data?: any;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * reserved.bin
   */
  filename?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * application/octet-stream
   */
  mediaType?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * cmVzZXJ2ZWQ=
   */
  raw?: string;
  /**
   * @remarks
   * The report text fragment.
   * 
   * @example
   * Instance status is normal
   */
  text?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * https://example.com/reserved.bin
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      filename: 'Filename',
      mediaType: 'MediaType',
      raw: 'Raw',
      text: 'Text',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      filename: 'string',
      mediaType: 'string',
      raw: 'string',
      text: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTaskArtifactUpdateArtifact extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the artifact.
   * 
   * @example
   * output
   */
  artifactId?: string;
  /**
   * @remarks
   * The description of the artifact.
   * 
   * @example
   * Detailed inspection report
   */
  description?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   */
  extensions?: string[];
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @remarks
   * The name of the artifact.
   * 
   * @example
   * Inspection report
   */
  name?: string;
  /**
   * @remarks
   * The list of content parts.
   */
  parts?: SendNapalStreamMessageResponseBodyTaskArtifactUpdateArtifactParts[];
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      description: 'Description',
      extensions: 'Extensions',
      metadata: 'Metadata',
      name: 'Name',
      parts: 'Parts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      description: 'string',
      extensions: { 'type': 'array', 'itemType': 'string' },
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      parts: { 'type': 'array', 'itemType': SendNapalStreamMessageResponseBodyTaskArtifactUpdateArtifactParts },
    };
  }

  validate() {
    if(Array.isArray(this.extensions)) {
      $dara.Model.validateArray(this.extensions);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    if(Array.isArray(this.parts)) {
      $dara.Model.validateArray(this.parts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTaskArtifactUpdate extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the content is appended. A value of `true` indicates that the current Text is appended to the end of the existing report content. A value of `false` indicates that the existing content is overwritten.
   * 
   * @example
   * true
   */
  append?: boolean;
  /**
   * @remarks
   * The artifact object.
   */
  artifact?: SendNapalStreamMessageResponseBodyTaskArtifactUpdateArtifact;
  /**
   * @remarks
   * The session context ID.
   * 
   * @example
   * context-07b0**bcc2
   */
  contextId?: string;
  /**
   * @remarks
   * Indicates whether this is the last chunk. A value of `true` indicates that the report content has been fully pushed and no more events will follow.
   * 
   * @example
   * false
   */
  lastChunk?: boolean;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task-38cZ**MAVKu
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      append: 'Append',
      artifact: 'Artifact',
      contextId: 'ContextId',
      lastChunk: 'LastChunk',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      append: 'boolean',
      artifact: SendNapalStreamMessageResponseBodyTaskArtifactUpdateArtifact,
      contextId: 'string',
      lastChunk: 'boolean',
      taskId: 'string',
    };
  }

  validate() {
    if(this.artifact && typeof (this.artifact as any).validate === 'function') {
      (this.artifact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTaskStatusUpdateMetadataStep extends $dara.Model {
  /**
   * @remarks
   * The execution duration of the step. Unit: milliseconds.
   * 
   * @example
   * 203
   */
  costTime?: number;
  /**
   * @remarks
   * The unique identifier of the step.
   * 
   * @example
   * 30688
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the step encountered an error during execution.
   * 
   * @example
   * false
   */
  isError?: boolean;
  /**
   * @remarks
   * The step name.
   * 
   * @example
   * load_skill
   */
  name?: string;
  /**
   * @remarks
   * The input parameters of the step.
   * 
   * @example
   * {"skill_id":"239"}
   */
  params?: any;
  /**
   * @remarks
   * The execution result of the step.
   * 
   * @example
   * success
   */
  result?: any;
  /**
   * @remarks
   * The number of retries.
   * 
   * @example
   * 1
   */
  retryCount?: number;
  /**
   * @remarks
   * The content displayed on the frontend.
   * 
   * @example
   * load_skill
   */
  uiContent?: string;
  static names(): { [key: string]: string } {
    return {
      costTime: 'CostTime',
      id: 'Id',
      isError: 'IsError',
      name: 'Name',
      params: 'Params',
      result: 'Result',
      retryCount: 'RetryCount',
      uiContent: 'UiContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costTime: 'number',
      id: 'string',
      isError: 'boolean',
      name: 'string',
      params: 'any',
      result: 'any',
      retryCount: 'number',
      uiContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTaskStatusUpdateMetadata extends $dara.Model {
  /**
   * @remarks
   * The step execution information.
   */
  step?: SendNapalStreamMessageResponseBodyTaskStatusUpdateMetadataStep;
  static names(): { [key: string]: string } {
    return {
      step: 'Step',
    };
  }

  static types(): { [key: string]: any } {
    return {
      step: SendNapalStreamMessageResponseBodyTaskStatusUpdateMetadataStep,
    };
  }

  validate() {
    if(this.step && typeof (this.step as any).validate === 'function') {
      (this.step as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTaskStatusUpdateStatusMessageParts extends $dara.Model {
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * {}
   */
  data?: any;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * reserved.bin
   */
  filename?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * application/octet-stream
   */
  mediaType?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * cmVzZXJ2ZWQ=
   */
  raw?: string;
  /**
   * @remarks
   * The text content.
   * 
   * @example
   * Query traffic
   */
  text?: string;
  /**
   * @remarks
   * Reserved field. This parameter is not returned by the current operation.
   * 
   * @example
   * https://example.com/reserved.bin
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      filename: 'Filename',
      mediaType: 'MediaType',
      raw: 'Raw',
      text: 'Text',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      filename: 'string',
      mediaType: 'string',
      raw: 'string',
      text: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTaskStatusUpdateStatusMessage extends $dara.Model {
  /**
   * @remarks
   * The message ID.
   * 
   * @example
   * message-fd6e**9949
   */
  messageId?: string;
  /**
   * @remarks
   * The list of message content parts.
   */
  parts?: SendNapalStreamMessageResponseBodyTaskStatusUpdateStatusMessageParts[];
  /**
   * @remarks
   * The message role.
   * 
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      parts: 'Parts',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      parts: { 'type': 'array', 'itemType': SendNapalStreamMessageResponseBodyTaskStatusUpdateStatusMessageParts },
      role: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parts)) {
      $dara.Model.validateArray(this.parts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTaskStatusUpdateStatus extends $dara.Model {
  /**
   * @remarks
   * The message body object.
   */
  message?: SendNapalStreamMessageResponseBodyTaskStatusUpdateStatusMessage;
  /**
   * @remarks
   * The task status. Valid values:
   * - TASK_STATE_WORKING: The task is running.
   * - TASK_STATE_COMPLETED: The task is completed.
   * - TASK_STATE_FAILED: The task has failed.
   * - TASK_STATE_CANCELED: The task is canceled.
   * 
   * @example
   * TASK_STATE_WORKING
   */
  state?: string;
  /**
   * @remarks
   * The status timestamp in ISO 8601 format.
   * 
   * @example
   * 2026-08-07T06:08:30Z
   */
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      state: 'State',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: SendNapalStreamMessageResponseBodyTaskStatusUpdateStatusMessage,
      state: 'string',
      timestamp: 'string',
    };
  }

  validate() {
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBodyTaskStatusUpdate extends $dara.Model {
  /**
   * @remarks
   * The session context ID.
   * 
   * @example
   * context-07b0**bcc2
   */
  contextId?: string;
  /**
   * @remarks
   * Indicates whether this is a final event. A value of true indicates that the task has ended (completed or failed) and no more events will be pushed after this.
   * 
   * @example
   * false
   */
  final?: boolean;
  /**
   * @remarks
   * The metadata object that contains step execution information.
   */
  metadata?: SendNapalStreamMessageResponseBodyTaskStatusUpdateMetadata;
  /**
   * @remarks
   * The task status object.
   */
  status?: SendNapalStreamMessageResponseBodyTaskStatusUpdateStatus;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * task-38cZ**MAVKu
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      contextId: 'ContextId',
      final: 'Final',
      metadata: 'Metadata',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextId: 'string',
      final: 'boolean',
      metadata: SendNapalStreamMessageResponseBodyTaskStatusUpdateMetadata,
      status: SendNapalStreamMessageResponseBodyTaskStatusUpdateStatus,
      taskId: 'string',
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendNapalStreamMessageResponseBody extends $dara.Model {
  /**
   * @remarks
   * This field is mutually exclusive with Task, TaskStatusUpdate, and TaskArtifactUpdate. When this field is returned, no task is created, and the stream closes after sending one Message. This API does not currently return this type. This field is reserved for protocol compatibility only.
   */
  message?: SendNapalStreamMessageResponseBodyMessage;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  /**
   * @remarks
   * The task information.
   */
  task?: SendNapalStreamMessageResponseBodyTask;
  /**
   * @remarks
   * The task artifact update object.
   */
  taskArtifactUpdate?: SendNapalStreamMessageResponseBodyTaskArtifactUpdate;
  /**
   * @remarks
   * The task status update object.
   */
  taskStatusUpdate?: SendNapalStreamMessageResponseBodyTaskStatusUpdate;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      task: 'Task',
      taskArtifactUpdate: 'TaskArtifactUpdate',
      taskStatusUpdate: 'TaskStatusUpdate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: SendNapalStreamMessageResponseBodyMessage,
      requestId: 'string',
      task: SendNapalStreamMessageResponseBodyTask,
      taskArtifactUpdate: SendNapalStreamMessageResponseBodyTaskArtifactUpdate,
      taskStatusUpdate: SendNapalStreamMessageResponseBodyTaskStatusUpdate,
    };
  }

  validate() {
    if(this.message && typeof (this.message as any).validate === 'function') {
      (this.message as any).validate();
    }
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    if(this.taskArtifactUpdate && typeof (this.taskArtifactUpdate as any).validate === 'function') {
      (this.taskArtifactUpdate as any).validate();
    }
    if(this.taskStatusUpdate && typeof (this.taskStatusUpdate as any).validate === 'function') {
      (this.taskStatusUpdate as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

