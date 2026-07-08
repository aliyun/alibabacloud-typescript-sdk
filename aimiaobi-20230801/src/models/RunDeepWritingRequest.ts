// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDeepWritingRequest extends $dara.Model {
  /**
   * @remarks
   * The cursor, which is the ordinal number of the streaming event.
   * 
   * @example
   * 10
   */
  cursor?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 95c2fbe6-5a20-4fc2-8a93-376ed05fbe13
   */
  taskId?: string;
  /**
   * @remarks
   * The unique identifier of the Alibaba Cloud Model Studio workspace. For more information, see [Workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * llm-ir8zkqry2fncaxwq
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'Cursor',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'number',
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

