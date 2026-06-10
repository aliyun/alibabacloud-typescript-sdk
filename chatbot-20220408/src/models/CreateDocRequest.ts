// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDocRequestDocMetadataMetaCellInfoDTOList extends $dara.Model {
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

export class CreateDocRequestDocMetadata extends $dara.Model {
  businessViewId?: string;
  businessViewName?: string;
  metaCellInfoDTOList?: CreateDocRequestDocMetadataMetaCellInfoDTOList[];
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
      metaCellInfoDTOList: { 'type': 'array', 'itemType': CreateDocRequestDocMetadataMetaCellInfoDTOList },
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

export class CreateDocRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. If this parameter is not specified, the default business space is used. You can obtain the key from the Business Management page of your primary account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The document category ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30000049006
   */
  categoryId?: number;
  /**
   * @remarks
   * The configuration for document splitting. Set the key to `Splitter`. Valid values are `paragraphSplitter` (identifies content hierarchy) and `treeSplitter` (uses a rule-based hierarchy).
   * 
   * The document chunk size. Set the key to `ChunkSize`. The default value is 500. The value must be in the range of 200 to 800.
   * 
   * The patterns for the rule-based hierarchy. Set the key to `TreePatterns`. The default value is an empty array (`[]`).
   * 
   * The document title source. Set the key to `TitleSource`. Valid values are `ocrTitle` (default), which uses the title recognized by Optical Character Recognition (OCR), and `docName`, which uses the document name as the title.
   * 
   * @example
   * {"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":""}
   */
  config?: string;
  /**
   * @remarks
   * The document content. You must specify either this parameter or `Url`.
   * 
   * @example
   * 测试内容
   */
  content?: string;
  docMetadata?: CreateDocRequestDocMetadata[];
  /**
   * @remarks
   * The time when the document expires. The time is in UTC.
   * 
   * @example
   * 2032-05-25T16:28:36Z
   */
  endDate?: string;
  /**
   * @remarks
   * The passthrough data of the document.
   * 
   * @example
   * {"code":"xxx"}
   */
  meta?: string;
  /**
   * @remarks
   * The time when the document takes effect. The time is in UTC.
   * 
   * @example
   * 2022-05-25T16:28:36Z
   */
  startDate?: string;
  /**
   * @remarks
   * A list of tag IDs.
   */
  tagIds?: number[];
  /**
   * @remarks
   * The document title.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试标题
   */
  title?: string;
  /**
   * @remarks
   * The URL of the document. You must specify either this parameter or `Content`. Supported formats include .txt, .pdf, .markdown, .doc, and .docx. The following limits apply to a single file: a maximum of 100 pages, less than 200 KB for .txt and .markdown files, and less than 100 MB for .pdf, .doc, and .docx files.
   * 
   * @example
   * https://example.com/example.pdf
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryId: 'CategoryId',
      config: 'Config',
      content: 'Content',
      docMetadata: 'DocMetadata',
      endDate: 'EndDate',
      meta: 'Meta',
      startDate: 'StartDate',
      tagIds: 'TagIds',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryId: 'number',
      config: 'string',
      content: 'string',
      docMetadata: { 'type': 'array', 'itemType': CreateDocRequestDocMetadata },
      endDate: 'string',
      meta: 'string',
      startDate: 'string',
      tagIds: { 'type': 'array', 'itemType': 'number' },
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docMetadata)) {
      $dara.Model.validateArray(this.docMetadata);
    }
    if(Array.isArray(this.tagIds)) {
      $dara.Model.validateArray(this.tagIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

