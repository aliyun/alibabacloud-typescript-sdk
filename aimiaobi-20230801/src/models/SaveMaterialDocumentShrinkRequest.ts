// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveMaterialDocumentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * c160c841c8e54295bf2f441432785944_p_efm
   */
  agentKey?: string;
  author?: string;
  /**
   * @example
   * false
   */
  bothSavePrivateAndShare?: boolean;
  docKeywordsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * excel
   */
  docType?: string;
  /**
   * @example
   * http://xxxxx/xxx
   */
  externalUrl?: string;
  htmlContent?: string;
  /**
   * @example
   * 2023-04-11 06:14:07
   */
  pubTime?: string;
  /**
   * @example
   * 1
   */
  shareAttr?: number;
  /**
   * @example
   * IntellijSearch
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

