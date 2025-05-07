// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchSimilarArticlesShrinkRequest extends $dara.Model {
  chatConfigShrink?: string;
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
      chatConfigShrink: 'ChatConfig',
      docType: 'DocType',
      title: 'Title',
      url: 'Url',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatConfigShrink: 'string',
      docType: 'string',
      title: 'string',
      url: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

