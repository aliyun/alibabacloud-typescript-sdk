// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocResponseBodyDocInfoDocParas extends $dara.Model {
  /**
   * @remarks
   * The paragraph level.
   * 
   * @example
   * 1
   */
  paraLevel?: number;
  /**
   * @remarks
   * The paragraph sequence number.
   * 
   * @example
   * 1
   */
  paraNo?: number;
  /**
   * @remarks
   * The paragraph content (plain text, OCR content for images, or Markdown representation for tables).
   * 
   * @example
   * Content
   */
  paraText?: string;
  /**
   * @remarks
   * The paragraph content type. Valid values:
   * - text: Text.
   * - figure: Image.
   * - table: Table.
   * 
   * @example
   * text
   */
  paraType?: string;
  static names(): { [key: string]: string } {
    return {
      paraLevel: 'ParaLevel',
      paraNo: 'ParaNo',
      paraText: 'ParaText',
      paraType: 'ParaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paraLevel: 'number',
      paraNo: 'number',
      paraText: 'string',
      paraType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocResponseBodyDocInfo extends $dara.Model {
  /**
   * @remarks
   * The document paragraph information.
   */
  docParas?: DescribeDocResponseBodyDocInfoDocParas[];
  static names(): { [key: string]: string } {
    return {
      docParas: 'DocParas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docParas: { 'type': 'array', 'itemType': DescribeDocResponseBodyDocInfoDocParas },
    };
  }

  validate() {
    if(Array.isArray(this.docParas)) {
      $dara.Model.validateArray(this.docParas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocResponseBodyDocMetadataMetaCellInfoDTOList extends $dara.Model {
  fieldCode?: string;
  fieldName?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldCode: 'FieldCode',
      fieldName: 'FieldName',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldCode: 'string',
      fieldName: 'string',
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

export class DescribeDocResponseBodyDocMetadata extends $dara.Model {
  businessViewId?: string;
  /**
   * @remarks
   * The tag name.
   */
  businessViewName?: string;
  metaCellInfoDTOList?: DescribeDocResponseBodyDocMetadataMetaCellInfoDTOList[];
  static names(): { [key: string]: string } {
    return {
      businessViewId: 'BusinessViewId',
      businessViewName: 'BusinessViewName',
      metaCellInfoDTOList: 'MetaCellInfoDTOList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessViewId: 'string',
      businessViewName: 'string',
      metaCellInfoDTOList: { 'type': 'array', 'itemType': DescribeDocResponseBodyDocMetadataMetaCellInfoDTOList },
    };
  }

  validate() {
    if(Array.isArray(this.metaCellInfoDTOList)) {
      $dara.Model.validateArray(this.metaCellInfoDTOList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDocResponseBodyDocTags extends $dara.Model {
  /**
   * @remarks
   * Indicates whether this is the default "all tags" label.
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
   * Article
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

export class DescribeDocResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business code.
   * 
   * @example
   * bizcode123
   */
  bizCode?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 30000049006
   */
  categoryId?: number;
  /**
   * @remarks
   * The document parsing and chunking configuration items:
   * 
   * Chunker KEY: Splitter. Valid values: paragraphSplitter - hierarchy recognition (default). treeSplitter - rule-based hierarchy.
   * 
   * Document chunk size KEY: ChunkSize. VALUE: default 500. Range: [200, 800].
   * 
   * Rule-based hierarchy KEY: TreePatterns. VALUE: default [].
   * 
   * Document title source KEY: TitleSource. Valid values: ocrTitle - OCR-recognized title (default). docName - document name as title.
   * 
   * @example
   * {"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":"docName"}
   */
  config?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the user who created the document.
   * 
   * @example
   * 1111111111
   */
  createUserId?: number;
  /**
   * @remarks
   * The name of the user who created the document.
   * 
   * @example
   * Jane
   */
  createUserName?: string;
  /**
   * @remarks
   * The document details.
   */
  docInfo?: DescribeDocResponseBodyDocInfo;
  docMetadata?: DescribeDocResponseBodyDocMetadata[];
  /**
   * @remarks
   * The document name.
   * 
   * @example
   * Document name
   */
  docName?: string;
  /**
   * @remarks
   * The list of tag details.
   */
  docTags?: DescribeDocResponseBodyDocTags[];
  /**
   * @remarks
   * The effective status, which is calculated based on StartDate and EndDate. Valid values:
   * - 20: Effective.
   * - 21: Expired.
   * - 22: Pending effective.
   * 
   * @example
   * 20
   */
  effectStatus?: number;
  /**
   * @remarks
   * The expiration time (UTC).
   * 
   * @example
   * 2023-04-27T06:08:54Z
   */
  endDate?: string;
  /**
   * @remarks
   * The knowledge ID.
   * 
   * @example
   * 30001979424
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
   * The modification time.
   * 
   * @example
   * 2020-11-25T08:56:55Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The ID of the user who last modified the document.
   * 
   * @example
   * 2222222222
   */
  modifyUserId?: number;
  /**
   * @remarks
   * The name of the user who last modified the document.
   * 
   * @example
   * John
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
   * Task processed successfully
   */
  processMessage?: string;
  /**
   * @remarks
   * The task processing status. Valid values:
   * - -1: Queued.
   * - 0: Succeeded.
   * - 1: Parsing.
   * - 2: Processing.
   * - 3: Failed.
   * 
   * @example
   * 0
   */
  processStatus?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7F132693-212A-40A9-8A81-11E7694E478B
   */
  requestId?: string;
  /**
   * @remarks
   * The effective period (UTC).
   * 
   * @example
   * 1979-12-31T16:00:00Z
   */
  startDate?: string;
  /**
   * @remarks
   * The editing status. Valid values:
   * - 1: Unpublished.
   * - 2: Published.
   * - 3: Updated but not published.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The document title.
   * 
   * @example
   * Test title
   */
  title?: string;
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
      docInfo: 'DocInfo',
      docMetadata: 'DocMetadata',
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
      requestId: 'RequestId',
      startDate: 'StartDate',
      status: 'Status',
      title: 'Title',
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
      docInfo: DescribeDocResponseBodyDocInfo,
      docMetadata: { 'type': 'array', 'itemType': DescribeDocResponseBodyDocMetadata },
      docName: 'string',
      docTags: { 'type': 'array', 'itemType': DescribeDocResponseBodyDocTags },
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
      requestId: 'string',
      startDate: 'string',
      status: 'number',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.docInfo && typeof (this.docInfo as any).validate === 'function') {
      (this.docInfo as any).validate();
    }
    if(Array.isArray(this.docMetadata)) {
      $dara.Model.validateArray(this.docMetadata);
    }
    if(Array.isArray(this.docTags)) {
      $dara.Model.validateArray(this.docTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

