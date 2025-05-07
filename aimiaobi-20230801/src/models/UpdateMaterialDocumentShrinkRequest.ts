// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMaterialDocumentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 67c520d1fa43455ea44fb69fa402d54d_p_beebot_public
   */
  agentKey?: string;
  author?: string;
  docKeywordsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * image
   */
  docType?: string;
  /**
   * @example
   * http://xxxxx/xxx
   */
  externalUrl?: string;
  htmlContent?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 44
   */
  id?: number;
  /**
   * @example
   * 2023-04-11 06:14:07
   */
  pubTime?: string;
  regionId?: string;
  /**
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @example
   * UserUpload
   */
  srcFrom?: string;
  summary?: string;
  textContent?: string;
  title?: string;
  /**
   * @example
   * http://xxxxx/xxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      author: 'Author',
      docKeywordsShrink: 'DocKeywords',
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
      docKeywordsShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

