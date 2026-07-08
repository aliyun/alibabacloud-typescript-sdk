// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGeneratedContentsResponseBodyDataFileAttr extends $dara.Model {
  /**
   * @remarks
   * File name
   * 
   * @example
   * homedepothp.txt
   */
  fileName?: string;
  /**
   * @remarks
   * Video height
   * 
   * @example
   * 500
   */
  height?: number;
  /**
   * @remarks
   * Temporary URL for video file access. Expires in one hour.
   * 
   * @example
   * http://www.example.com/xxx.mp4
   */
  tmpUrl?: string;
  /**
   * @remarks
   * Video width
   * 
   * @example
   * 800
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      height: 'Height',
      tmpUrl: 'TmpUrl',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      height: 'number',
      tmpUrl: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGeneratedContentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Content: rich text
   * 
   * @example
   * 杭州亚运会
   */
  content?: string;
  /**
   * @remarks
   * Content domain (content category)
   * 
   * - media: Media writing
   * 
   * - government: Government document writing
   * 
   * - office: Office writing
   * 
   * - market: Marketing writing
   * 
   * - custom: Custom writing
   * 
   * - commentGenerate: Opinion generation
   * 
   * @example
   * media
   */
  contentDomain?: string;
  /**
   * @remarks
   * Content: plain text
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
   * "123"
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
   * File attributes
   */
  fileAttr?: ListGeneratedContentsResponseBodyDataFileAttr;
  /**
   * @remarks
   * File ID
   * 
   * @example
   * oss://default/oss-bucket-name/aimiaobi/2021/07/01/1625126400000/1.docx
   */
  fileKey?: string;
  /**
   * @remarks
   * Document ID
   * 
   * @example
   * 10
   */
  id?: number;
  /**
   * @remarks
   * Keywords
   */
  keywordList?: string[];
  /**
   * @remarks
   * Keywords (string)
   * 
   * @example
   * 观点
   */
  keywords?: string;
  /**
   * @remarks
   * Last prompt used to generate this document
   * 
   * @example
   * 创作xxx文章
   */
  prompt?: string;
  /**
   * @remarks
   * Conversation task ID
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
   * "1111"
   */
  updateUser?: string;
  /**
   * @remarks
   * UUID traceability ID
   * 
   * @example
   * xxx
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
      fileAttr: 'FileAttr',
      fileKey: 'FileKey',
      id: 'Id',
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
      fileAttr: ListGeneratedContentsResponseBodyDataFileAttr,
      fileKey: 'string',
      id: 'number',
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
    if(this.fileAttr && typeof (this.fileAttr as any).validate === 'function') {
      (this.fileAttr as any).validate();
    }
    if(Array.isArray(this.keywordList)) {
      $dara.Model.validateArray(this.keywordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGeneratedContentsResponseBody extends $dara.Model {
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
   * Page number
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Document list
   */
  data?: ListGeneratedContentsResponseBodyData[];
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
   * Number of items per page
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * Operation status: true means success. false means failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      current: 'Current',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      size: 'Size',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      current: 'number',
      data: { 'type': 'array', 'itemType': ListGeneratedContentsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      size: 'number',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

