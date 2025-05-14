// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAuditTaskRequest extends $dara.Model {
  /**
   * @example
   * xxxx
   */
  articleId?: string;
  /**
   * @example
   * xxx
   */
  contentAuditTaskId?: string;
  /**
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      articleId: 'ArticleId',
      contentAuditTaskId: 'ContentAuditTaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      articleId: 'string',
      contentAuditTaskId: 'string',
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

