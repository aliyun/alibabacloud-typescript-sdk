// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunSearchSimilarArticlesRequestChatConfig } from "./RunSearchSimilarArticlesRequestChatConfig";


export class RunSearchSimilarArticlesRequest extends $dara.Model {
  chatConfig?: RunSearchSimilarArticlesRequestChatConfig;
  /**
   * @example
   * html
   */
  docType?: string;
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://xxx/xxx
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      chatConfig: 'ChatConfig',
      docType: 'DocType',
      title: 'Title',
      url: 'Url',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatConfig: RunSearchSimilarArticlesRequestChatConfig,
      docType: 'string',
      title: 'string',
      url: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.chatConfig && typeof (this.chatConfig as any).validate === 'function') {
      (this.chatConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

