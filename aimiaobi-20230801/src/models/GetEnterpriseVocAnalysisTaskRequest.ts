// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEnterpriseVocAnalysisTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the task.
   * 
   * > You do not need to specify this parameter. The system automatically generates a TaskId. If you specify the same TaskId for subsequent tasks, the tasks are considered part of the same conversation group.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @remarks
   * The unique ID of the Alibaba Cloud Model Studio workspace. For more information, see [Get a workspace ID](https://help.aliyun.com/document_detail/2782167.html).
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx
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

