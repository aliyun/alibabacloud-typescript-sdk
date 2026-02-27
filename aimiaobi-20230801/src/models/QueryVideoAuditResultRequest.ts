// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryVideoAuditResultRequest extends $dara.Model {
  /**
   * @remarks
   * 视频审校任务的唯一标识，长度固定32位
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  taskId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxxxx
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

