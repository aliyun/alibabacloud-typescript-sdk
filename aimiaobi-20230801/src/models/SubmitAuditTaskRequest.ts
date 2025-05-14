// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAuditTaskRequest extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  articleId?: string;
  content?: string;
  htmlContent?: string;
  title?: string;
  /**
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

