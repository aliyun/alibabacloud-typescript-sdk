// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveMaterialDocumentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier for the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * Author
   * 
   * @example
   * 作者名称
   */
  author?: string;
  /**
   * @remarks
   * Is the material saved to both the private library and the shared library?
   * 
   * @example
   * false
   */
  bothSavePrivateAndShare?: boolean;
  /**
   * @remarks
   * Document tags used for classification, etc.
   */
  docKeywordsShrink?: string;
  /**
   * @remarks
   * Document type (html: web page, plainText: plain text, image: image, pdf: pdf, word: word, excel: excel, csv: csv, jsonLine: jsonLine)
   * 
   * This parameter is required.
   * 
   * @example
   * excel
   */
  docType?: string;
  /**
   * @remarks
   * URL uploaded by external customers, used only for record keeping
   * 
   * @example
   * http://xxxxx/xxx
   */
  externalUrl?: string;
  /**
   * @remarks
   * Formatted content
   * 
   * @example
   * 网页内容
   */
  htmlContent?: string;
  /**
   * @remarks
   * Publication time, format: yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 2023-04-11 06:14:07
   */
  pubTime?: string;
  /**
   * @remarks
   * Sharing attribute: 0: private, 1: shared within the workspace
   * 
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @remarks
   * Document source (UserUpload: User Upload, IntellijSearch: Intelligent Search, HotViewPoint: Hot Viewpoint)
   * 
   * @example
   * IntellijSearch
   */
  srcFrom?: string;
  /**
   * @remarks
   * Summary
   * 
   * @example
   * 摘要
   */
  summary?: string;
  /**
   * @remarks
   * Parsed text content, empty for images
   * 
   * @example
   * 文本内容
   */
  textContent?: string;
  /**
   * @remarks
   * Document title
   * 
   * @example
   * 新闻标题
   */
  title?: string;
  /**
   * @remarks
   * URL of the material
   * 
   * @example
   * http://xxxxx/xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      author: 'Author',
      bothSavePrivateAndShare: 'BothSavePrivateAndShare',
      docKeywordsShrink: 'DocKeywords',
      docType: 'DocType',
      externalUrl: 'ExternalUrl',
      htmlContent: 'HtmlContent',
      pubTime: 'PubTime',
      shareAttr: 'ShareAttr',
      srcFrom: 'SrcFrom',
      summary: 'Summary',
      textContent: 'TextContent',
      title: 'Title',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      author: 'string',
      bothSavePrivateAndShare: 'boolean',
      docKeywordsShrink: 'string',
      docType: 'string',
      externalUrl: 'string',
      htmlContent: 'string',
      pubTime: 'string',
      shareAttr: 'number',
      srcFrom: 'string',
      summary: 'string',
      textContent: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

