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
  conversationRecord?: string;
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
  variables?: QueryConversationDetailInfoResponseBodyDataVariables[];
  static names(): { [key: string]: string } {
    return {
      conversationRecord: 'ConversationRecord',
      outputTags: 'OutputTags',
      pickUpTime: 'PickUpTime',
      recordingFileDownloadUrl: 'RecordingFileDownloadUrl',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationRecord: 'string',
      outputTags: { 'type': 'array', 'itemType': QueryConversationDetailInfoResponseBodyDataOutputTags },
      pickUpTime: 'number',
      recordingFileDownloadUrl: 'string',
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

