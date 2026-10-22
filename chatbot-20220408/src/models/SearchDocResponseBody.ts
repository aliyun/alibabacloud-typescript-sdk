// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDocResponseBodyDocHitsDocTags extends $dara.Model {
  /**
   * @remarks
   * Indicates whether this is the default label that represents all labels.
   * 
   * @example
   * false
   */
  defaultTag?: boolean;
  /**
   * @remarks
   * The label group ID.
   * 
   * @example
   * 3610
   */
  groupId?: number;
  /**
   * @remarks
   * The label group name.
   * 
   * @example
   * Article
   */
  groupName?: string;
  /**
   * @remarks
   * The label ID.
   * 
   * @example
   * 1201
   */
  tagId?: number;
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * Novel
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      defaultTag: 'DefaultTag',
      groupId: 'GroupId',
      groupName: 'GroupName',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultTag: 'boolean',
      groupId: 'number',
      groupName: 'string',
      tagId: 'number',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDocResponseBodyDocHits extends $dara.Model {
  /**
   * @remarks
   * The business code.
   * 
   * @example
   * cn_dytns
   */
  bizCode?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 30000135654
   */
  categoryId?: number;
  /**
   * @remarks
   * The document parsing and chunking configuration.
   * 
   * Configuration item: Splitter
   * KEY: Splitter
   * Valid values:
   * - paragraphSplitter: hierarchy recognition (default)
   * - treeSplitter: rule-based hierarchy
   * 
   * Configuration item: Document chunk size
   * KEY: ChunkSize
   * VALUE: Default value: 500. Value range: [200, 800].
   * 
   * Configuration item: Rule-based hierarchy
   * KEY: TreePatterns
   * VALUE: Default value: [].
   * 
   * Configuration item: Document title source
   * KEY: TitleSource
   * Valid values:
   * - ocrTitle: OCR-recognized title (default)
   * - docName: document name as title
   * 
   * @example
   * {"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":"docName"}
   */
  config?: string;
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2023-06-22T03:53:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 111111111
   */
  createUserId?: number;
  /**
   * @remarks
   * The name of the creator.
   * 
   * @example
   * John
   */
  createUserName?: string;
  /**
   * @remarks
   * The document name.
   * 
   * @example
   * DocumentName
   */
  docName?: string;
  /**
   * @remarks
   * The list of label details.
   */
  docTags?: SearchDocResponseBodyDocHitsDocTags[];
  /**
   * @remarks
   * The knowledge effective status, calculated based on StartDate and EndDate. Valid values:
   * - 20: effective
   * - 21: expired
   * - 22: pending effective
   * 
   * @example
   * 20
   */
  effectStatus?: number;
  /**
   * @remarks
   * The expiration time in UTC.
   * 
   * @example
   * 2099-12-31T16:00:00Z
   */
  endDate?: string;
  /**
   * @remarks
   * The knowledge ID.
   * 
   * @example
   * 30002692007
   */
  knowledgeId?: number;
  /**
   * @remarks
   * The metadata associated with the document.
   * 
   * @example
   * {"code":"xxx"}
   */
  meta?: string;
  /**
   * @remarks
   * The modification time in UTC.
   * 
   * @example
   * 2023-06-25T02:27:42Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The ID of the modifier.
   * 
   * @example
   * 222222222
   */
  modifyUserId?: number;
  /**
   * @remarks
   * The name of the modifier.
   * 
   * @example
   * Jane
   */
  modifyUserName?: string;
  /**
   * @remarks
   * Indicates whether the task can be retried. Valid values:
   * - true: The task can be retried.
   * - false: The task cannot be retried.
   * 
   * @example
   * true
   */
  processCanRetry?: boolean;
  /**
   * @remarks
   * The task processing message.
   * 
   * @example
   * Task processing succeeded
   */
  processMessage?: string;
  /**
   * @remarks
   * The task processing status. Valid values:
   * - -1: queued
   * - 0: succeeded
   * - 1: parsing
   * - 2: processing
   * - 3: processing failed
   * 
   * @example
   * 0
   */
  processStatus?: number;
  /**
   * @remarks
   * The effective period in UTC.
   * 
   * @example
   * 2023-02-28T11:40:18Z
   */
  startDate?: string;
  /**
   * @remarks
   * The editing status. Valid values:
   * - 1: unpublished
   * - 2: published
   * - 3: updated but not published
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The OSS URL where the document is stored.
   * 
   * @example
   * https://doc2bot-bucket-cloud.oss-cn-shanghai.aliyuncs.com/doc2bot/input/文档问答说明书_V1.pdf
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      categoryId: 'CategoryId',
      config: 'Config',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      docName: 'DocName',
      docTags: 'DocTags',
      effectStatus: 'EffectStatus',
      endDate: 'EndDate',
      knowledgeId: 'KnowledgeId',
      meta: 'Meta',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      processCanRetry: 'ProcessCanRetry',
      processMessage: 'ProcessMessage',
      processStatus: 'ProcessStatus',
      startDate: 'StartDate',
      status: 'Status',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      categoryId: 'number',
      config: 'string',
      createTime: 'string',
      createUserId: 'number',
      createUserName: 'string',
      docName: 'string',
      docTags: { 'type': 'array', 'itemType': SearchDocResponseBodyDocHitsDocTags },
      effectStatus: 'number',
      endDate: 'string',
      knowledgeId: 'number',
      meta: 'string',
      modifyTime: 'string',
      modifyUserId: 'number',
      modifyUserName: 'string',
      processCanRetry: 'boolean',
      processMessage: 'string',
      processStatus: 'number',
      startDate: 'string',
      status: 'number',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docTags)) {
      $dara.Model.validateArray(this.docTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchDocResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of documents.
   */
  docHits?: SearchDocResponseBodyDocHits[];
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E3E5C779-A630-45AC-B0F2-A4506A4212F1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 141
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      docHits: 'DocHits',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docHits: { 'type': 'array', 'itemType': SearchDocResponseBodyDocHits },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.docHits)) {
      $dara.Model.validateArray(this.docHits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

