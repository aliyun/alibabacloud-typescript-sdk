// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAsyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the workspace. For more information, see [AgentKey](https://help.aliyun.com/document_detail/2587494.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 2daaa2e0c209xb26acb97009ea77bd4b_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * For details on the task definition, see the task definition table.
   * 
   * This parameter is required.
   * 
   * @example
   * MaterialDocumentUpload
   */
  taskCode?: string;
  /**
   * @remarks
   * The time to run the task. By default, the task runs immediately. Format: YYYY-MM-DD HH:mm:ss
   * 
   * @example
   * 2023-10-14 14:30:00
   */
  taskExecuteTime?: string;
  /**
   * @remarks
   * The name of the task.
   * 
   * @example
   * 任务名称
   */
  taskName?: string;
  /**
   * @remarks
   * The task parameters.
   * 
   * @example
   * {"fileUrl":"https://www.example.com/aaa.doc","fileName":"文件名称","shareAttr":1}
   */
  taskParam?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      taskCode: 'TaskCode',
      taskExecuteTime: 'TaskExecuteTime',
      taskName: 'TaskName',
      taskParam: 'TaskParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      taskCode: 'string',
      taskExecuteTime: 'string',
      taskName: 'string',
      taskParam: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

