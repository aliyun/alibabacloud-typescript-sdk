// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDocResponseBodyDocInfoDocParas extends $dara.Model {
  /**
   * @example
   * 1
   */
  paraLevel?: number;
  /**
   * @example
   * 1
   */
  paraNo?: number;
  paraText?: string;
  /**
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

export class DescribeDocResponseBody extends $dara.Model {
  /**
   * @example
   * bizcode123
   */
  bizCode?: string;
  /**
   * @example
   * 30000049006
   */
  categoryId?: number;
  /**
   * @example
   * {"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":"docName"}
   */
  config?: string;
  /**
   * @example
   * 2022-04-12T06:30:17Z
   */
  createTime?: string;
  /**
   * @example
   * 1111111111
   */
  createUserId?: number;
  createUserName?: string;
  docInfo?: DescribeDocResponseBodyDocInfo;
  docMetadata?: DescribeDocResponseBodyDocMetadata[];
  docName?: string;
  docTags?: DescribeDocResponseBodyDocTags[];
  /**
   * @example
   * 20
   */
  effectStatus?: number;
  /**
   * @example
   * 2023-04-27T06:08:54Z
   */
  endDate?: string;
  /**
   * @example
   * 30001979424
   */
  knowledgeId?: number;
  /**
   * @example
   * {"code":"xxx"}
   */
  meta?: string;
  /**
   * @example
   * 2020-11-25T08:56:55Z
   */
  modifyTime?: string;
  /**
   * @example
   * 2222222222
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
   * @remarks
   * Id of the request
   * 
   * @example
   * 7F132693-212A-40A9-8A81-11E7694E478B
   */
  requestId?: string;
  /**
   * @example
   * 1979-12-31T16:00:00Z
   */
  startDate?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  title?: string;
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

