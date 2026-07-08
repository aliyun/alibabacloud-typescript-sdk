// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetDocumentsResponseBodyDataMultimodalMedias extends $dara.Model {
  /**
   * @remarks
   * The URL of the image or video file.
   * 
   * @example
   * 图片或视频文件地址
   */
  fileUrl?: string;
  /**
   * @remarks
   * The unique ID of the multimodal media.
   * 
   * @example
   * 多模态数据唯一标识
   */
  mediaId?: string;
  /**
   * @remarks
   * The type of the multimodal media.
   * 
   * @example
   * 多模态数据类型
   */
  mediaType?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
      mediaId: 'string',
      mediaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetDocumentsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the category.
   * 
   * @example
   * xx
   */
  categoryUuid?: string;
  /**
   * @remarks
   * The content of the document.
   * 
   * @example
   * xx
   */
  content?: string;
  /**
   * @remarks
   * The creation time of the document.
   * 
   * @example
   * 2025-04-14 19:59:53
   */
  createTime?: string;
  /**
   * @remarks
   * The creator of the document.
   * 
   * @example
   * 1
   */
  createUser?: string;
  /**
   * @remarks
   * Indicates whether multimodal indexing is disabled for this document.
   * 
   * @example
   * false
   */
  disableHandleMultimodalMedia?: boolean;
  /**
   * @remarks
   * The user-specified unique document ID.
   * 
   * @example
   * xx
   */
  docId?: string;
  /**
   * @remarks
   * The type of the document.
   * 
   * @example
   * text
   */
  docType?: string;
  /**
   * @remarks
   * The unique internal document ID.
   * 
   * @example
   * 内部文档唯一ID
   */
  docUuid?: string;
  /**
   * @remarks
   * Extension field 1.
   * 
   * @example
   * xx
   */
  extend1?: string;
  /**
   * @remarks
   * Extension field 2.
   * 
   * @example
   * xx
   */
  extend2?: string;
  /**
   * @remarks
   * Extension field 3.
   * 
   * @example
   * xx
   */
  extend3?: string;
  /**
   * @remarks
   * A list of multimodal media items associated with the document.
   */
  multimodalMedias?: ListDatasetDocumentsResponseBodyDataMultimodalMedias[];
  /**
   * @remarks
   * The publication time of the document.
   * 
   * @example
   * 2022-01-01 00:00:00
   */
  pubTime?: string;
  /**
   * @remarks
   * The source of the document.
   * 
   * @example
   * 来源
   */
  sourceFrom?: string;
  /**
   * @remarks
   * The build status of the document index.
   * 
   * @example
   * 100
   */
  status?: number;
  /**
   * @remarks
   * The summary of the document.
   * 
   * @example
   * xx
   */
  summary?: string;
  /**
   * @remarks
   * A list of tags associated with the document.
   */
  tags?: string[];
  /**
   * @remarks
   * The title of the document.
   * 
   * @example
   * xx
   */
  title?: string;
  /**
   * @remarks
   * The last update time of the document.
   * 
   * @example
   * 2025-04-14 19:59:53
   */
  updateTime?: string;
  /**
   * @remarks
   * The user who last updated the document.
   * 
   * @example
   * 1
   */
  updateUser?: string;
  /**
   * @remarks
   * The URL of the document.
   * 
   * @example
   * https://xxx/xx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      categoryUuid: 'CategoryUuid',
      content: 'Content',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      disableHandleMultimodalMedia: 'DisableHandleMultimodalMedia',
      docId: 'DocId',
      docType: 'DocType',
      docUuid: 'DocUuid',
      extend1: 'Extend1',
      extend2: 'Extend2',
      extend3: 'Extend3',
      multimodalMedias: 'MultimodalMedias',
      pubTime: 'PubTime',
      sourceFrom: 'SourceFrom',
      status: 'Status',
      summary: 'Summary',
      tags: 'Tags',
      title: 'Title',
      updateTime: 'UpdateTime',
      updateUser: 'UpdateUser',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryUuid: 'string',
      content: 'string',
      createTime: 'string',
      createUser: 'string',
      disableHandleMultimodalMedia: 'boolean',
      docId: 'string',
      docType: 'string',
      docUuid: 'string',
      extend1: 'string',
      extend2: 'string',
      extend3: 'string',
      multimodalMedias: { 'type': 'array', 'itemType': ListDatasetDocumentsResponseBodyDataMultimodalMedias },
      pubTime: 'string',
      sourceFrom: 'string',
      status: 'number',
      summary: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      updateTime: 'string',
      updateUser: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multimodalMedias)) {
      $dara.Model.validateArray(this.multimodalMedias);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetDocumentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code for the request.
   * 
   * @example
   * NoData
   */
  code?: string;
  /**
   * @remarks
   * A list of documents.
   */
  data?: ListDatasetDocumentsResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * A detailed message about the request status.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The token used to retrieve the next page of results. This field appears only when more results are available.
   * 
   * @example
   * xxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of `true` indicates success, and `false` indicates failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of matching documents.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDatasetDocumentsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
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

