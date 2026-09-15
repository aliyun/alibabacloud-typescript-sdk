// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SourceFeiShuDocsParameters extends $dara.Model {
  /**
   * @remarks
   * The App ID of the custom Lark application. Obtain this value after creating an application on the Lark Open Platform.
   * 
   * @example
   * cli_a946c046xxxx
   */
  appId?: string;
  /**
   * @remarks
   * The App Secret of the custom Lark application. Obtain this value after creating an application on the Lark Open Platform.
   * 
   * @example
   * yO3hEYiSjkBVxxxx
   */
  appSecret?: string;
  /**
   * @remarks
   * The name of the Lark knowledge space. An exact match is required.
   * 
   * @example
   * Product Documentation Center
   */
  knowledgeSpaceName?: string;
  /**
   * @remarks
   * The document loading mode. Valid values: block: splits the document by blocks, with each block as a separate event. single (default): treats the entire document as a single event, with metadata extension keys such as file name, modification time, and original link. Use this mode when importing into an EventHouse knowledge base.
   * 
   * @example
   * single
   */
  loadMode?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appSecret: 'AppSecret',
      knowledgeSpaceName: 'KnowledgeSpaceName',
      loadMode: 'LoadMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appSecret: 'string',
      knowledgeSpaceName: 'string',
      loadMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

