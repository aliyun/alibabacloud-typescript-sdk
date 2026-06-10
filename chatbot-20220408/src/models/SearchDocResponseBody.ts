// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDocResponseBodyDocHitsDocTags extends $dara.Model {
  /**
   * @remarks
   * Indicates whether this is a default tag.
   * 
   * @example
   * false
   */
  defaultTag?: boolean;
  /**
   * @remarks
   * The tag group ID.
   * 
   * @example
   * 3610
   */
  groupId?: number;
  /**
   * @remarks
   * The tag group name.
   * 
   * @example
   * 文章
   */
  groupName?: string;
  /**
   * @remarks
   * The tag ID.
   * 
   * @example
   * 1201
   */
  tagId?: number;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * 小说
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
   * The splitter for the document. Key: `Splitter`. Valid values:<br>• `paragraphSplitter` (default): Splits the document by paragraph.<br>• `treeSplitter`: Splits the document based on a rule-based hierarchy.<br><br>
   * 
   * The size of each document chunk. Key: `ChunkSize`. Default value: 500. Value range: [200, 800].
   * 
   * The patterns for the rule-based hierarchy. Key: `TreePatterns`. Default value: `[]`.
   * 
   * The source of the document title. Key: `TitleSource`. Valid values:<br>• `ocrTitle` (default): Uses the OCR-identified title.<br>• `docName`: Uses the document name as the title.<br><br>
   * 
   * @example
   * {"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":"docName"}
   */
  config?: string;
  /**
   * @remarks
   * The time the document was created (UTC).
   * 
   * @example
   * 2023-06-22T03:53:41Z
   */
  createTime?: string;
  /**
   * @remarks
   * The creator ID.
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
   * 张三
   */
  createUserName?: string;
  /**
   * @remarks
   * The document name.
   * 
   * @example
   * 文档名称
   */
  docName?: string;
  /**
   * @remarks
   * A list of the document\\"s tags.
   */
  docTags?: SearchDocResponseBodyDocHitsDocTags[];
  /**
   * @remarks
   * The knowledge\\"s effective status, calculated based on `StartDate` and `EndDate`. Valid values:<br>• 20: Active<br>• 21: Expired<br>• 22: Pending<br><br><br>
   * 
   * @example
   * 20
   */
  effectStatus?: number;
  /**
   * @remarks
   * The time the knowledge expires (UTC).
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
   * The document metadata.
   * 
   * @example
   * {"code":"xxx"}
   */
  meta?: string;
  /**
   * @remarks
   * The time the document was last modified (UTC).
   * 
   * @example
   * 2023-06-25T02:27:42Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The modifier ID.
   * 
   * @example
   * 222222222
   */
  modifyUserId?: number;
  /**
   * @remarks
   * The name of the last modifier.
   * 
   * @example
   * 李四
   */
  modifyUserName?: string;
  /**
   * @remarks
   * Indicates whether the task can be retried.<br>• `true`: The task can be retried.<br>• `false`: The task cannot be retried.<br><br>
   * 
   * @example
   * true
   */
  processCanRetry?: boolean;
  /**
   * @remarks
   * The processing message for the task.
   * 
   * @example
   * 任务处理成功
   */
  processMessage?: string;
  /**
   * @remarks
   * The task\\"s processing status. Valid values:<br>• -1: Queued<br>• 0: Succeeded<br>• 1: Parsing<br>• 2: Processing<br>• 3: Failed<br><br><br><br><br>
   * 
   * @example
   * 0
   */
  processStatus?: number;
  /**
   * @remarks
   * The time the knowledge takes effect (UTC).
   * 
   * @example
   * 2023-02-28T11:40:18Z
   */
  startDate?: string;
  /**
   * @remarks
   * The editing status of the document. Valid values:<br>• 1: Unpublished<br>• 2: Published<br>• 3: Updated but not published<br><br><br>
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The OSS URL of the object.
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
   * A list of matching documents.
   */
  docHits?: SearchDocResponseBodyDocHits[];
  /**
   * @remarks
   * The page number.
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
   * The request ID.
   * 
   * @example
   * E3E5C779-A630-45AC-B0F2-A4506A4212F1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of matching entries.
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

