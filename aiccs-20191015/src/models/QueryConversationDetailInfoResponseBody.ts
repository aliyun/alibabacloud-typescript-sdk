// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryConversationDetailInfoResponseBodyDataOutputTags extends $dara.Model {
  /**
   * @example
   * d7f3e92b-7947-4c20-bf37-ef66fc71007b
   */
  id?: string;
  /**
   * @example
   * 示例值示例值
   */
  outputTagDescription?: string;
  /**
   * @example
   * 示例值示例值
   */
  outputTagName?: string;
  /**
   * @example
   * 示例值示例值
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

export class QueryConversationDetailInfoResponseBodyDataVariables extends $dara.Model {
  /**
   * @example
   * 示例值
   */
  id?: string;
  /**
   * @example
   * name
   */
  key?: string;
  /**
   * @example
   * 示例值
   */
  name?: string;
  /**
   * @example
   * false
   */
  required?: boolean;
  /**
   * @example
   * 示例值示例值
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      key: 'Key',
      name: 'Name',
      required: 'Required',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      key: 'string',
      name: 'string',
      required: 'boolean',
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

export class QueryConversationDetailInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * 示例值示例值
   */
  callId?: string;
  /**
   * @example
   * 示例值示例值
   */
  callResult?: string;
  /**
   * @example
   * 示例值示例值
   */
  calledPhone?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  callerPhone?: string;
  /**
   * @example
   * 示例值示例值
   */
  conversationRecord?: string;
  /**
   * @example
   * 16
   */
  duration?: number;
  /**
   * @example
   * 示例值示例值示例值
   */
  failedReason?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  hangupDirection?: string;
  /**
   * @example
   * 示例值示例值
   */
  majorIntent?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  outId?: string;
  outputTags?: QueryConversationDetailInfoResponseBodyDataOutputTags[];
  /**
   * @example
   * 1212131231231
   */
  pickUpTime?: number;
  /**
   * @example
   * https://********
   */
  recordingFileDownloadUrl?: string;
  /**
   * @example
   * 98
   */
  releaseTime?: number;
  /**
   * @example
   * 23
   */
  startCallTime?: number;
  /**
   * @example
   * 示例值示例值
   */
  statusCode?: string;
  /**
   * @example
   * 示例值
   */
  statusMsg?: string;
  variables?: QueryConversationDetailInfoResponseBodyDataVariables[];
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      callResult: 'CallResult',
      calledPhone: 'CalledPhone',
      callerPhone: 'CallerPhone',
      conversationRecord: 'ConversationRecord',
      duration: 'Duration',
      failedReason: 'FailedReason',
      hangupDirection: 'HangupDirection',
      majorIntent: 'MajorIntent',
      outId: 'OutId',
      outputTags: 'OutputTags',
      pickUpTime: 'PickUpTime',
      recordingFileDownloadUrl: 'RecordingFileDownloadUrl',
      releaseTime: 'ReleaseTime',
      startCallTime: 'StartCallTime',
      statusCode: 'StatusCode',
      statusMsg: 'StatusMsg',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callResult: 'string',
      calledPhone: 'string',
      callerPhone: 'string',
      conversationRecord: 'string',
      duration: 'number',
      failedReason: 'string',
      hangupDirection: 'string',
      majorIntent: 'string',
      outId: 'string',
      outputTags: { 'type': 'array', 'itemType': QueryConversationDetailInfoResponseBodyDataOutputTags },
      pickUpTime: 'number',
      recordingFileDownloadUrl: 'string',
      releaseTime: 'number',
      startCallTime: 'number',
      statusCode: 'string',
      statusMsg: 'string',
      variables: { 'type': 'array', 'itemType': QueryConversationDetailInfoResponseBodyDataVariables },
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

export class QueryConversationDetailInfoResponseBody extends $dara.Model {
  /**
   * @example
   * Access Denied
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: QueryConversationDetailInfoResponseBodyData;
  /**
   * @example
   * 示例值示例值
   */
  message?: string;
  /**
   * @example
   * F2051E18-FF3F-5C08-8D24-6F150D2AF757
   */
  requestId?: string;
  /**
   * @example
   * true
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
      data: QueryConversationDetailInfoResponseBodyData,
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

