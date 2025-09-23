// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditBiddingDocRequest extends $dara.Model {
  content?: string;
  /**
   * @example
   * html
   * markdown
   */
  contentFormat?: string;
  /**
   * @example
   * outline
   * bidding
   */
  contentType?: string;
  /**
   * @example
   * 0dbf1055f8a2475d99904c3b76a0ffba
   */
  taskId?: string;
  /**
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

