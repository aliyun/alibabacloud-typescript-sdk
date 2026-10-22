// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDocRequestDocMetadataMetaCellInfoDTOList extends $dara.Model {
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

export class UpdateDocRequestDocMetadata extends $dara.Model {
  businessViewId?: string;
  businessViewName?: string;
  metaCellInfoDTOList?: UpdateDocRequestDocMetadataMetaCellInfoDTOList[];
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
      metaCellInfoDTOList: { 'type': 'array', 'itemType': UpdateDocRequestDocMetadataMetaCellInfoDTOList },
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

export class UpdateDocRequest extends $dara.Model {
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
   * @example
   * 231001028593
   */
  categoryId?: number;
  /**
   * @remarks
   * The document parsing/chunking configuration.
   * Configuration item: Splitter
   * KEY: Splitter
   * Valid values: paragraphSplitter - hierarchy recognition (default)
   * Valid values: treeSplitter - rule-based hierarchy
   * 
   * Configuration item: Document chunk size
   * KEY: ChunkSize
   * VALUE: Default 500. Range: [200,800]
   * 
   * Configuration item: Rule-based hierarchy
   * KEY: TreePatterns
   * VALUE: Default []
   * 
   * Configuration item: Document title source
   * KEY: TitleSource
   * Valid values: ocrTitle - OCR-recognized title (default)
   * Valid values: docName - document name as title.
   * 
   * @example
   * {"Splitter":"treeSplitter","ChunkSize":500,"TreePatterns":["^# .*","^## .*","^### .*","^#### .*"],"TitleSource":""}
   */
  config?: string;
  /**
   * @remarks
   * The document content.
   * 
   * @example
   * Document content
   */
  content?: string;
  docMetadata?: UpdateDocRequestDocMetadata[];
  /**
   * @remarks
   * The document name.
   * 
   * @example
   * Document QA Module Feature Description
   */
  docName?: string;
  /**
   * @remarks
   * The end of the effective period.
   * 
   * @example
   * 2023-03-11T23:59:59Z
   */
  endDate?: string;
  /**
   * @remarks
   * The document ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001905617
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
   * The start of the effective period.
   * 
   * @example
   * 2022-05-25T16:28:36Z
   */
  startDate?: string;
  /**
   * @remarks
   * The list of tag IDs. If this parameter is left empty, the tag bindings are removed.
   */
  tagIds?: number[];
  /**
   * @remarks
   * The document title.
   * 
   * @example
   * Document QA Feature Description
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      categoryId: 'CategoryId',
      config: 'Config',
      content: 'Content',
      docMetadata: 'DocMetadata',
      docName: 'DocName',
      endDate: 'EndDate',
      knowledgeId: 'KnowledgeId',
      meta: 'Meta',
      startDate: 'StartDate',
      tagIds: 'TagIds',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryId: 'number',
      config: 'string',
      content: 'string',
      docMetadata: { 'type': 'array', 'itemType': UpdateDocRequestDocMetadata },
      docName: 'string',
      endDate: 'string',
      knowledgeId: 'number',
      meta: 'string',
      startDate: 'string',
      tagIds: { 'type': 'array', 'itemType': 'number' },
      title: 'string',
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

