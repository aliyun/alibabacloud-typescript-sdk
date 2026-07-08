// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMaterialDocumentsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier for the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * 33a2658aaabf4c24b45d50e575125311_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * Full-text search of document content
   * 
   * @example
   * 新闻内容
   */
  content?: string;
  /**
   * @remarks
   * Creation time - end range. Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2023-03-18 02:00:00
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * Creation time - start range. Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2023-02-19 07:28:11
   */
  createTimeStart?: string;
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Document type (html: web page, plainText: plain text, image: image, pdf: pdf, word: word, excel: excel, csv: csv, jsonLine: jsonLine)
   * 
   * @example
   * jsonLine
   */
  docType?: string;
  /**
   * @remarks
   * Document type list (html: web page, plainText: plain text, image: image, pdf: pdf, word: word, excel: excel, csv: csv, jsonLine: jsonLine)
   * 
   * @example
   * excel
   */
  docTypeListShrink?: string;
  /**
   * @remarks
   * Generate a public URL for the file.
   * 
   * @example
   * true
   */
  generatePublicUrl?: boolean;
  /**
   * @remarks
   * Material primary key ID.
   * 
   * @example
   * 69
   */
  id?: number;
  /**
   * @remarks
   * Document keywords.
   */
  keywordsShrink?: string;
  /**
   * @remarks
   * Supports comprehensive queries for title, content, and content.
   * 
   * @example
   * 小猫
   */
  query?: string;
  /**
   * @remarks
   * Share property: 0: personal private, 1: shared within the workspace.
   * 
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @remarks
   * Number of items per page. Default is 10.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * Performs a full-text search on material titles.
   * 
   * @example
   * 新闻标题
   */
  title?: string;
  /**
   * @remarks
   * Update time - end range. Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2023-03-18 03:00:00
   */
  updateTimeEnd?: string;
  /**
   * @remarks
   * Update time - start range. Format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2023-03-18 02:00:00
   */
  updateTimeStart?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      content: 'Content',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      current: 'Current',
      docType: 'DocType',
      docTypeListShrink: 'DocTypeList',
      generatePublicUrl: 'GeneratePublicUrl',
      id: 'Id',
      keywordsShrink: 'Keywords',
      query: 'Query',
      shareAttr: 'ShareAttr',
      size: 'Size',
      title: 'Title',
      updateTimeEnd: 'UpdateTimeEnd',
      updateTimeStart: 'UpdateTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      content: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      current: 'number',
      docType: 'string',
      docTypeListShrink: 'string',
      generatePublicUrl: 'boolean',
      id: 'number',
      keywordsShrink: 'string',
      query: 'string',
      shareAttr: 'number',
      size: 'number',
      title: 'string',
      updateTimeEnd: 'string',
      updateTimeStart: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

