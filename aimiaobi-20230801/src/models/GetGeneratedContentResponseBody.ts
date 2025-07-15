// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGeneratedContentResponseBodyData extends $dara.Model {
  content?: string;
  /**
   * @example
   * media
   */
  contentDomain?: string;
  contentText?: string;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  createTime?: string;
  /**
   * @example
   * 1
   */
  createUser?: string;
  /**
   * @example
   * xxx
   */
  deviceId?: string;
  /**
   * @example
   * 86
   */
  id?: number;
  ignoreContentAuditWords?: string;
  keywordList?: string[];
  keywords?: string;
  prompt?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  title?: string;
  /**
   * @example
   * 2024-01-04 11:46:07
   */
  updateTime?: string;
  /**
   * @example
   * 1
   */
  updateUser?: string;
  /**
   * @example
   * 0961a514-2e26-4aa6-b22b-f592d145fe47
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentDomain: 'ContentDomain',
      contentText: 'ContentText',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      deviceId: 'DeviceId',
      id: 'Id',
      ignoreContentAuditWords: 'IgnoreContentAuditWords',
      keywordList: 'KeywordList',
      keywords: 'Keywords',
      prompt: 'Prompt',
      taskId: 'TaskId',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentDomain: 'string',
      contentText: 'string',
      createTime: 'string',
      createUser: 'string',
      deviceId: 'string',
      id: 'number',
      ignoreContentAuditWords: 'string',
      keywordList: { 'type': 'array', 'itemType': 'string' },
      keywords: 'string',
      prompt: 'string',
      taskId: 'string',
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keywordList)) {
      $dara.Model.validateArray(this.keywordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGeneratedContentResponseBody extends $dara.Model {
  /**
   * @example
   * NoData
   */
  code?: string;
  data?: GetGeneratedContentResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetGeneratedContentResponseBodyData,
      httpStatusCode: 'number',
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

