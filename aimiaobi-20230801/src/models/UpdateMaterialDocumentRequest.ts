// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMaterialDocumentRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier of the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * 67c520d1fa43455ea44fb69fa402d54d_p_beebot_public
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
   * Document tags for categorization
   */
  docKeywords?: string[];
  /**
   * @remarks
   * Document type. Valid values: html, plainText, image, pdf, word, excel, csv, jsonLine
   * 
   * This parameter is required.
   * 
   * @example
   * image
   */
  docType?: string;
  /**
   * @remarks
   * URL uploaded by an external customer. Used only for record keeping
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
   * Primary key
   * 
   * This parameter is required.
   * 
   * @example
   * 44
   */
  id?: number;
  /**
   * @remarks
   * Publication time in yyyy-MM-dd HH:mm:ss format
   * 
   * @example
   * 2023-04-11 06:14:07
   */
  pubTime?: string;
  regionId?: string;
  /**
   * @remarks
   * Sharing attribute. Valid values: 0 (private), 1 (shared within the workspace)
   * 
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @remarks
   * Source of the document. Valid values: UserUpload, IntellijSearch, HotViewPoint
   * 
   * @example
   * UserUpload
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
   * Parsed text content. Empty for images
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
   * 标题
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
      docKeywords: 'DocKeywords',
      docType: 'DocType',
      externalUrl: 'ExternalUrl',
      htmlContent: 'HtmlContent',
      id: 'Id',
      pubTime: 'PubTime',
      regionId: 'RegionId',
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
      docKeywords: { 'type': 'array', 'itemType': 'string' },
      docType: 'string',
      externalUrl: 'string',
      htmlContent: 'string',
      id: 'number',
      pubTime: 'string',
      regionId: 'string',
      shareAttr: 'number',
      srcFrom: 'string',
      summary: 'string',
      textContent: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.docKeywords)) {
      $dara.Model.validateArray(this.docKeywords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

