// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditBiddingDocRequest extends $dara.Model {
  /**
   * @remarks
   * The text content.
   * 
   * @example
   * 标书内容
   */
  content?: string;
  /**
   * @remarks
   * The format.
   * 
   * @example
   * html
   * markdown
   */
  contentFormat?: string;
  /**
   * @remarks
   * The content type.
   * 
   * @example
   * outline
   * bidding
   */
  contentType?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 0dbf1055f8a2475d99904c3b76a0ffba
   */
  taskId?: string;
  /**
   * @remarks
   * [The workspace ID.](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * @example
   * llm-xx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentFormat: 'ContentFormat',
      contentType: 'ContentType',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentFormat: 'string',
      contentType: 'string',
      taskId: 'string',
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

