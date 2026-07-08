// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDocInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The category where the document is stored.
   * 
   * @example
   * default
   */
  categoryId?: string;
  /**
   * @remarks
   * The document ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  docId?: string;
  /**
   * @remarks
   * The unique identifier of the workspace in Alibaba Cloud Model Studio. For instructions on how to obtain a workspace ID, see [Obtain a Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      docId: 'DocId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      docId: 'string',
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

