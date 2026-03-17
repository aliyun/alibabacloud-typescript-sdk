// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Task } from "./Task";


export class TaskInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * w-d8********
   */
  bizId?: string;
  /**
   * @remarks
   * The ID of the user who creates the job.
   * 
   * @example
   * 150978934701****
   */
  creator?: number;
  /**
   * @remarks
   * The job run ID.
   * 
   * @example
   * jr-93d98d2f7061****
   */
  fenixRunId?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2024-09-05T02:03:19Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The ID of the data development job.
   * 
   * @example
   * TSK-d87******************
   */
  taskBizId?: string;
  /**
   * @remarks
   * The details of the job.
   */
  taskInfo?: Task;
  /**
   * @remarks
   * The job run ID.
   * 
   * @example
   * Running
   */
  taskStatus?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-d2d82aa09151****
   */
  workspaceBizId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      creator: 'creator',
      fenixRunId: 'fenixRunId',
      gmtCreated: 'gmtCreated',
      taskBizId: 'taskBizId',
      taskInfo: 'taskInfo',
      taskStatus: 'taskStatus',
      workspaceBizId: 'workspaceBizId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      creator: 'number',
      fenixRunId: 'string',
      gmtCreated: 'string',
      taskBizId: 'string',
      taskInfo: Task,
      taskStatus: 'string',
      workspaceBizId: 'string',
    };
  }

  validate() {
    if(this.taskInfo && typeof (this.taskInfo as any).validate === 'function') {
      (this.taskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

