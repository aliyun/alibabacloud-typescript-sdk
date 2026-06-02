// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskByUuidResponseBodyTaskConversations extends $dara.Model {
  action?: string;
  script?: string;
  sequenceId?: string;
  speaker?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      script: 'Script',
      sequenceId: 'SequenceId',
      speaker: 'Speaker',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      script: 'string',
      sequenceId: 'string',
      speaker: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskByUuidResponseBodyTask extends $dara.Model {
  /**
   * @example
   * 1640090211434
   */
  actualTime?: number;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  callId?: string;
  /**
   * @example
   * 13777777777
   */
  calledNumber?: string;
  /**
   * @example
   * 057190294
   */
  callingNumber?: string;
  conversations?: GetTaskByUuidResponseBodyTaskConversations[];
  /**
   * @example
   * 1640090211434
   */
  endReason?: string;
  /**
   * @example
   * 1640090211434
   */
  endTime?: number;
  /**
   * @example
   * 2
   */
  id?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  instanceId?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  jobGroupId?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  jobId?: string;
  /**
   * @example
   * 1640090211434
   */
  plannedTime?: number;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      conversations: 'Conversations',
      endReason: 'EndReason',
      endTime: 'EndTime',
      id: 'Id',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      plannedTime: 'PlannedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      callId: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      conversations: { 'type': 'array', 'itemType': GetTaskByUuidResponseBodyTaskConversations },
      endReason: 'string',
      endTime: 'number',
      id: 'string',
      instanceId: 'string',
      jobGroupId: 'string',
      jobId: 'string',
      plannedTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conversations)) {
      $dara.Model.validateArray(this.conversations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskByUuidResponseBody extends $dara.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  success?: boolean;
  /**
   * @example
   * {}
   */
  task?: GetTaskByUuidResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      task: GetTaskByUuidResponseBodyTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

