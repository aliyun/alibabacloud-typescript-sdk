// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDocResponseBodyDocHitsDocTags extends $dara.Model {
  defaultTag?: boolean;
  groupId?: number;
  groupName?: string;
  tagId?: number;
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
   * @example
   * cn_dytns
   */
  bizCode?: string;
  /**
   * @example
   * 30000135654
   */
  categoryId?: number;
  /**
   * @example
   * {"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":"docName"}
   */
  config?: string;
  /**
   * @example
   * 2023-06-22T03:53:41Z
   */
  createTime?: string;
  /**
   * @example
   * 111111111
   */
  createUserId?: number;
  createUserName?: string;
  docName?: string;
  docTags?: SearchDocResponseBodyDocHitsDocTags[];
  /**
   * @example
   * 20
   */
  effectStatus?: number;
  /**
   * @example
   * 2099-12-31T16:00:00Z
   */
  endDate?: string;
  /**
   * @example
   * 30002692007
   */
  knowledgeId?: number;
  /**
   * @example
   * {"code":"xxx"}
   */
  meta?: string;
  /**
   * @example
   * 2023-06-25T02:27:42Z
   */
  modifyTime?: string;
  /**
   * @example
   * 222222222
   */
  modifyUserId?: number;
  modifyUserName?: string;
  /**
   * @example
   * true
   */
  processCanRetry?: boolean;
  processMessage?: string;
  /**
   * @example
   * 0
   */
  processStatus?: number;
  /**
   * @example
   * 2023-02-28T11:40:18Z
   */
  startDate?: string;
  /**
   * @example
   * 1
   */
  status?: number;
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
  docHits?: SearchDocResponseBodyDocHits[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
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

