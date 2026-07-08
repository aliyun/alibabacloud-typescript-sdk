// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAuditTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the article to be audited.
   * 
   * @example
   * xxxx
   */
  articleId?: string;
  /**
   * @remarks
   * The content to be audited.
   * 
   * @example
   * 待审核的内容
   */
  content?: string;
  /**
   * @remarks
   * The content to be audited, in HTML format.
   * 
   * @example
   * 待审核的内容（HTML格式）
   */
  htmlContent?: string;
  /**
   * @remarks
   * The title of the article to be audited.
   * 
   * @example
   * 审核时的文章标题
   */
  title?: string;
  /**
   * @remarks
   * [Workspace ID](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * @example
   * xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      articleId: 'ArticleId',
      content: 'Content',
      htmlContent: 'HtmlContent',
      title: 'Title',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articleId: 'string',
      content: 'string',
      htmlContent: 'string',
      title: 'string',
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

