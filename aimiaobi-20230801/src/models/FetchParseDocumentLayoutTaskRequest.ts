// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchParseDocumentLayoutTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Content to be formatted
   * 
   * This parameter is required.
   * 
   * @example
   * 29ae0ba84c1c4cc694d0f4f1aead8005
   */
  taskId?: string;
  /**
   * @remarks
   * Unique identifier of the Alibaba Cloud Model Studio workspace: [Get workspaceId](https://help.aliyun.com/document_detail/2782167.html)
   * 
   * This parameter is required.
   * 
   * @example
   * llm-xxxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

