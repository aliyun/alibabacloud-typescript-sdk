// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSearchSimilarArticlesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Communication configuration parameters.
   */
  chatConfigShrink?: string;
  /**
   * @remarks
   * Document type.
   * 
   * @example
   * html
   */
  docType?: string;
  /**
   * @remarks
   * Article title.
   * 
   * @example
   * 标题
   */
  title?: string;
  /**
   * @remarks
   * Article URL.
   * 
   * This parameter is required.
   * 
   * @example
   * https://xxx/xxx
   */
  url?: string;
  /**
   * @remarks
   * Unique identifier of the Alibaba Cloud Model Studio workspace. To get this ID, see [Get the workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
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

