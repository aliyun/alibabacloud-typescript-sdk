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
   * The paragraph number.
   * 
   * @example
   * 1
   */
  paraNo?: number;
  /**
   * @remarks
   * The paragraph content. The content can be plain text, text extracted from an image using optical character recognition (OCR), or a table in Markdown format.
   * 
   * @example
   * 内容
   */
  paraText?: string;
  /**
   * @remarks
   * The paragraph type.<br>text: Text<br>figure: Image<br>table: Table<br><br><br>
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
   * The paragraphs of the document.
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
  /**
   * @remarks
   * The code of the field.
   */
  fieldCode?: string;
  /**
   * @remarks
   * The field name.
   */
  fieldName?: string;
  /**
   * @remarks
   * The value of the field.
   */
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
  /**
   * @remarks
   * The ID of the business view.
   */
  businessViewId?: string;
  /**
   * @remarks
   * The business view name.
   */
  businessViewName?: string;
  /**
   * @remarks
   * A list of metadata cells.
   */
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
   * Indicates whether the tag represents all items by default.
   * 
   * @example
   * false
   */
  defaultTag?: boolean;
  /**
   * @remarks
   * The tag\\"s group ID.
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
   * The configuration for document parsing and splitting. Key: `Splitter`. Valid values: `paragraphSplitter` (splits by recognition level, default) and `treeSplitter` (splits by rule level).
   * 
   * Key: `ChunkSize`. The size of each document chunk, which must be between 200 and 800. The default value is 500.
   * 
   * Key: `TreePatterns`. The patterns for the rule-based hierarchy. The default value is [].
   * 
   * Key: `TitleSource`. The source of the document title. Valid values: `ocrTitle` (OCR-recognized title, default) and `docName` (document name).
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
   * The creator ID.
   * 
   * @example
   * 1111111111
   */
  createUserId?: number;
  /**
   * @remarks
   * The creator name.
   * 
   * @example
   * 张三
   */
  createUserName?: string;
  /**
   * @remarks
   * The document details.
   */
  docInfo?: DescribeDocResponseBodyDocInfo;
  /**
   * @remarks
   * A list of metadata sets, where each set corresponds to a business view.
   */
  docMetadata?: DescribeDocResponseBodyDocMetadata[];
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
   * A list of document tags.
   */
  docTags?: DescribeDocResponseBodyDocTags[];
  /**
   * @remarks
   * The effective status, calculated from `StartDate` and `EndDate`.<br>20: Active<br>21: Expired<br>22: Pending<br><br><br>
   * 
   * @example
   * 20
   */
  effectStatus?: number;
  /**
   * @remarks
   * The end time in UTC format.
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
   * The document\\"s metadata.
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
   * The modifier ID.
   * 
   * @example
   * 2222222222
   */
  modifyUserId?: number;
  /**
   * @remarks
   * The modifier name.
   * 
   * @example
   * 李四
   */
  modifyUserName?: string;
  /**
   * @remarks
   * Indicates whether a failed task can be retried.<br>`true`: The task can be retried.<br>`false`: The task cannot be retried.<br><br>
   * 
   * @example
   * true
   */
  processCanRetry?: boolean;
  /**
   * @remarks
   * The processing message.
   * 
   * @example
   * 任务处理成功
   */
  processMessage?: string;
  /**
   * @remarks
   * The processing status of the task.<br>-1: Queued<br>0: Succeeded<br>1: Parsing<br>2: Processing<br>3: Failed<br><br><br><br><br>
   * 
   * @example
   * 0
   */
  processStatus?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F132693-212A-40A9-8A81-11E7694E478B
   */
  requestId?: string;
  /**
   * @remarks
   * The start time in UTC format.
   * 
   * @example
   * 1979-12-31T16:00:00Z
   */
  startDate?: string;
  /**
   * @remarks
   * The edit status.<br>1: Unpublished<br>2: Published<br>3: Updated but not published<br><br><br>
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
   * 测试标题
   */
  title?: string;
  /**
   * @remarks
   * The OSS address of the document.
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

