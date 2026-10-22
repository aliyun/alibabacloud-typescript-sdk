// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDocShrinkRequest extends $dara.Model {
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
  docMetadataShrink?: string;
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
  tagIdsShrink?: string;
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
      docMetadataShrink: 'DocMetadata',
      docName: 'DocName',
      endDate: 'EndDate',
      knowledgeId: 'KnowledgeId',
      meta: 'Meta',
      startDate: 'StartDate',
      tagIdsShrink: 'TagIds',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      categoryId: 'number',
      config: 'string',
      content: 'string',
      docMetadataShrink: 'string',
      docName: 'string',
      endDate: 'string',
      knowledgeId: 'number',
      meta: 'string',
      startDate: 'string',
      tagIdsShrink: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

