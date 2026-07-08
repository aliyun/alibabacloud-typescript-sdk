// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelAuditTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Article ID. Specify either this parameter or ContentAuditTaskId.
   * 
   * @example
   * xxxx
   */
  articleId?: string;
  /**
   * @remarks
   * Audit task ID. Specify either this parameter or ArticleId.
   * 
   * @example
   * xxx
   */
  contentAuditTaskId?: string;
  /**
   * @remarks
   * [Workspace ID](https://help.aliyun.com/document_detail/2782167.html)
   * 
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

