// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDocShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The key for the business space. If this parameter is not specified, the default business space is used. You can obtain the key on the Business Management page of your master account.
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
   * **Splitter**: The method used to split the document. Valid values: `paragraphSplitter` (splits by paragraph, default) and `treeSplitter` (splits by hierarchical rules).
   * 
   * **ChunkSize**: The chunk size. The value must be an integer from 200 to 800. The default value is 500.
   * 
   * **TreePatterns**: An array of regular expressions that define the structure for rule-based splitting. The default value is `[]`.
   * 
   * **TitleSource**: The source of the document title. Valid values: `ocrTitle` (uses the OCR-recognized title, default) and `docName` (uses the document name as the title).
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
   * 文档内容
   */
  content?: string;
  docMetadataShrink?: string;
  /**
   * @remarks
   * The document name.
   * 
   * @example
   * 文档问答模块功能说明文档
   */
  docName?: string;
  /**
   * @remarks
   * The time when the document expires. Specify the time in UTC, using the `YYYY-MM-DDThh:mm:ssZ` format.
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
   * The metadata of the document, specified as a JSON string.
   * 
   * @example
   * {"code":"xxx"}
   */
  meta?: string;
  /**
   * @remarks
   * The time when the document becomes effective. Specify the time in UTC, using the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2022-05-25T16:28:36Z
   */
  startDate?: string;
  /**
   * @remarks
   * The tag IDs to associate with the document. Passing an empty array removes all existing tag associations.
   */
  tagIdsShrink?: string;
  /**
   * @remarks
   * The document title.
   * 
   * @example
   * 文档问答功能说明
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

