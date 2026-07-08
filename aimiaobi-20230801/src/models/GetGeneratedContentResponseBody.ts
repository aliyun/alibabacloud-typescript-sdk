// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGeneratedContentResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Rich text content
   * 
   * @example
   * 杭州亚运会
   */
  content?: string;
  /**
   * @remarks
   * Content generation domain. Valid values: media (news) and government (government services)
   * 
   * @example
   * media
   */
  contentDomain?: string;
  /**
   * @remarks
   * Plain text content
   * 
   * @example
   * 杭州亚运会
   */
  contentText?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 2024-01-04 11:46:07
   */
  createTime?: string;
  /**
   * @remarks
   * Creator
   * 
   * @example
   * "1"
   */
  createUser?: string;
  /**
   * @remarks
   * Device ID
   * 
   * @example
   * xxx
   */
  deviceId?: string;
  /**
   * @remarks
   * Document ID
   * 
   * @example
   * 86
   */
  id?: number;
  /**
   * @remarks
   * List of words to ignore during content audit (JSON string)
   * 
   * @example
   * "[{}]"
   */
  ignoreContentAuditWords?: string;
  /**
   * @remarks
   * Keywords
   */
  keywordList?: string[];
  /**
   * @remarks
   * Keywords (string format)
   * 
   * @example
   * [\\"教师\\",\\"乡村\\"]
   */
  keywords?: string;
  /**
   * @remarks
   * Last prompt used to generate this content
   * 
   * @example
   * 创作xxx文章
   */
  prompt?: string;
  /**
   * @remarks
   * Session task ID
   * 
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @remarks
   * Title
   * 
   * @example
   * 杭州亚运会
   */
  title?: string;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 2024-01-04 11:46:07
   */
  updateTime?: string;
  /**
   * @remarks
   * Updater
   * 
   * @example
   * "1"
   */
  updateUser?: string;
  /**
   * @remarks
   * UUID for traceability
   * 
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
   * @remarks
   * Status code
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * Business data
   */
  data?: GetGeneratedContentResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded. true indicates success. false indicates failure.
   * 
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

