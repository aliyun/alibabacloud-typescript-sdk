// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAsyncTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2daaa2e0c209xb26acb97009ea77bd4b_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MaterialDocumentUpload
   */
  taskCode?: string;
  /**
   * @example
   * 2023-10-14 14:30:00
   */
  taskExecuteTime?: string;
  /**
   * @example
   * 任务名称
   */
  taskName?: string;
  /**
   * @example
   * 任务提交参数
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

