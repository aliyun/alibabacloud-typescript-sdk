// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCommitContainerTaskResponseBodyCommitTasksCommitPhaseInfos } from "./DescribeCommitContainerTaskResponseBodyCommitTasksCommitPhaseInfos";


export class DescribeCommitContainerTaskResponseBodyCommitTasks extends $dara.Model {
  /**
   * @remarks
   * The information about the phase that the task arrives.
   */
  commitPhaseInfos?: DescribeCommitContainerTaskResponseBodyCommitTasksCommitPhaseInfos[];
  /**
   * @remarks
   * The container name.
   * 
   * @example
   * worker0
   */
  containerName?: string;
  /**
   * @remarks
   * The message about the state.
   * 
   * @example
   * Commit container -xxxxxx
   */
  statusMessage?: string;
  /**
   * @remarks
   * The time when the task was started.
   * 
   * @example
   * 2023-03-06T08:22:40Z
   */
  taskCreationTime?: string;
  /**
   * @remarks
   * The time when the task was complete.
   * 
   * @example
   * 2023-03-06T08:23:40Z
   */
  taskFinishedTime?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * t-2zej6nstkg744qc3****
   */
  taskId?: string;
  /**
   * @remarks
   * The progress of the task in percentage.
   * 
   * @example
   * 50%
   */
  taskProgress?: string;
  /**
   * @remarks
   * The state of the task. Valid values:
   * 
   * *   Running
   * *   Succeeded
   * *   Failed
   * 
   * @example
   * Running
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      commitPhaseInfos: 'CommitPhaseInfos',
      containerName: 'ContainerName',
      statusMessage: 'StatusMessage',
      taskCreationTime: 'TaskCreationTime',
      taskFinishedTime: 'TaskFinishedTime',
      taskId: 'TaskId',
      taskProgress: 'TaskProgress',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitPhaseInfos: { 'type': 'array', 'itemType': DescribeCommitContainerTaskResponseBodyCommitTasksCommitPhaseInfos },
      containerName: 'string',
      statusMessage: 'string',
      taskCreationTime: 'string',
      taskFinishedTime: 'string',
      taskId: 'string',
      taskProgress: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.commitPhaseInfos)) {
      $dara.Model.validateArray(this.commitPhaseInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

