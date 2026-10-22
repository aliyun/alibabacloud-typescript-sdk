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
   * The business space key. If this parameter is not specified, the default business space is accessed. You can obtain the key value on the business management page of the primary account.
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
   * The document parsing and chunking configuration.
   * 
   * Configuration item: Splitter
   * KEY: Splitter
   * Valid values:
   * - ParagraphSplitter: recognition-based hierarchy.
   * - TreeSplitter: rule-based hierarchy.
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
   * - ocrTitle: OCR-recognized title. This is the default value.
   * - docName: the document name is used as the title.
   * 
   * @example
   * {"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":""}
   */
  config?: string;
  /**
   * @remarks
   * The document content. Specify either this parameter or URL.
   * 
   * @example
   * Test content
   */
  content?: string;
  docMetadata?: CreateDocRequestDocMetadata[];
  /**
   * @remarks
   * The effective end time in UTC.
   * 
   * @example
   * 2032-05-25T16:28:36Z
   */
  endDate?: string;
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
   * The effective start time in UTC.
   * 
   * @example
   * 2022-05-25T16:28:36Z
   */
  startDate?: string;
  /**
   * @remarks
   * The list of tag IDs.
   */
  tagIds?: number[];
  /**
   * @remarks
   * The document title.
   * 
   * This parameter is required.
   * 
   * @example
   * Test title
   */
  title?: string;
  /**
   * @remarks
   * The URL of the document. Specify either this parameter or Content. Supported formats: txt, pdf, markdown, doc, and docx. Limits for a single file: up to 100 pages, txt files smaller than 200 KB, pdf files smaller than 100 MB, markdown files smaller than 200 KB, doc files smaller than 100 MB, and docx files smaller than 100 MB.
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

