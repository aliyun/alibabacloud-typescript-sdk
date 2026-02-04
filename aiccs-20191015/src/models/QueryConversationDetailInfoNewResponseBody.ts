// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConversationDetailInfoNewResponseBodyDataOutputTags extends $dara.Model {
  /**
   * @example
   * 12
   */
  id?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  outputTagDescription?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  outputTagName?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  outputTagValue?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      outputTagDescription: 'OutputTagDescription',
      outputTagName: 'OutputTagName',
      outputTagValue: 'OutputTagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      outputTagDescription: 'string',
      outputTagName: 'string',
      outputTagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConversationDetailInfoNewResponseBodyDataVariables extends $dara.Model {
  /**
   * @example
   * 123
   */
  id?: string;
  /**
   * @example
   * name
   */
  key?: string;
  /**
   * @example
   * user name
   */
  name?: string;
  /**
   * @example
   * false
   */
  required?: boolean;
  /**
   * @example
   * source
   */
  source?: string;
  /**
   * @example
   * mike
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      key: 'Key',
      name: 'Name',
      required: 'Required',
      source: 'Source',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      key: 'string',
      name: 'string',
      required: 'boolean',
      source: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConversationDetailInfoNewResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1234******
   */
  batchId?: string;
  /**
   * @example
   * 123*******^213******
   */
  callId?: string;
  /**
   * @example
   * ANSWERED
   */
  callResult?: string;
  /**
   * @example
   * 130********
   */
  calledPhone?: string;
  /**
   * @example
   * 0571*******
   */
  callerPhone?: string;
  /**
   * @example
   * 示例值
   */
  conversationRecord?: string;
  /**
   * @example
   * 23
   */
  conversationTurnCount?: number;
  /**
   * @example
   * 1234*******
   */
  detailId?: string;
  /**
   * @example
   * 30
   */
  duration?: number;
  /**
   * @example
   * 28
   */
  encryptionType?: number;
  /**
   * @example
   * 示例值示例值
   */
  failedReason?: string;
  /**
   * @example
   * 0
   */
  hangupDirection?: string;
  /**
   * @example
   * 43
   */
  importedTime?: number;
  /**
   * @example
   * A
   */
  majorIntent?: string;
  /**
   * @example
   * 示例值示例值
   */
  options?: string;
  /**
   * @example
   * 123***
   */
  outId?: string;
  outputTags?: QueryConversationDetailInfoNewResponseBodyDataOutputTags[];
  /**
   * @example
   * 12349732441
   */
  pickUpTime?: number;
  /**
   * @example
   * recording.oss.file
   */
  recordingFileDownloadUrl?: string;
  /**
   * @example
   * 7
   */
  releaseTime?: number;
  /**
   * @example
   * 1286987391
   */
  startCallTime?: number;
  /**
   * @example
   * 72
   */
  status?: number;
  /**
   * @example
   * 200005
   */
  statusCode?: string;
  /**
   * @example
   * 示例值示例值
   */
  statusMsg?: string;
  /**
   * @example
   * 138************
   */
  taskId?: string;
  variables?: QueryConversationDetailInfoNewResponseBodyDataVariables[];
  static names(): { [key: string]: string } {
    return {
      batchId: 'BatchId',
      callId: 'CallId',
      callResult: 'CallResult',
      calledPhone: 'CalledPhone',
      callerPhone: 'CallerPhone',
      conversationRecord: 'ConversationRecord',
      conversationTurnCount: 'ConversationTurnCount',
      detailId: 'DetailId',
      duration: 'Duration',
      encryptionType: 'EncryptionType',
      failedReason: 'FailedReason',
      hangupDirection: 'HangupDirection',
      importedTime: 'ImportedTime',
      majorIntent: 'MajorIntent',
      options: 'Options',
      outId: 'OutId',
      outputTags: 'OutputTags',
      pickUpTime: 'PickUpTime',
      recordingFileDownloadUrl: 'RecordingFileDownloadUrl',
      releaseTime: 'ReleaseTime',
      startCallTime: 'StartCallTime',
      status: 'Status',
      statusCode: 'StatusCode',
      statusMsg: 'StatusMsg',
      taskId: 'TaskId',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchId: 'string',
      callId: 'string',
      callResult: 'string',
      calledPhone: 'string',
      callerPhone: 'string',
      conversationRecord: 'string',
      conversationTurnCount: 'number',
      detailId: 'string',
      duration: 'number',
      encryptionType: 'number',
      failedReason: 'string',
      hangupDirection: 'string',
      importedTime: 'number',
      majorIntent: 'string',
      options: 'string',
      outId: 'string',
      outputTags: { 'type': 'array', 'itemType': QueryConversationDetailInfoNewResponseBodyDataOutputTags },
      pickUpTime: 'number',
      recordingFileDownloadUrl: 'string',
      releaseTime: 'number',
      startCallTime: 'number',
      status: 'number',
      statusCode: 'string',
      statusMsg: 'string',
      taskId: 'string',
      variables: { 'type': 'array', 'itemType': QueryConversationDetailInfoNewResponseBodyDataVariables },
    };
  }

  validate() {
    if(Array.isArray(this.outputTags)) {
      $dara.Model.validateArray(this.outputTags);
    }
    if(Array.isArray(this.variables)) {
      $dara.Model.validateArray(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryConversationDetailInfoNewResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: QueryConversationDetailInfoNewResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QueryConversationDetailInfoNewResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

