// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetJobExecutionProgressResponseBodyDataRootProgress } from "./GetJobExecutionProgressResponseBodyDataRootProgress";
import { GetJobExecutionProgressResponseBodyDataShardingProgress } from "./GetJobExecutionProgressResponseBodyDataShardingProgress";
import { GetJobExecutionProgressResponseBodyDataTaskProgress } from "./GetJobExecutionProgressResponseBodyDataTaskProgress";
import { GetJobExecutionProgressResponseBodyDataTotalProgress } from "./GetJobExecutionProgressResponseBodyDataTotalProgress";
import { GetJobExecutionProgressResponseBodyDataWorkerProgress } from "./GetJobExecutionProgressResponseBodyDataWorkerProgress";


export class GetJobExecutionProgressResponseBodyData extends $dara.Model {
  jobDescription?: string;
  rootProgress?: GetJobExecutionProgressResponseBodyDataRootProgress;
  shardingProgress?: GetJobExecutionProgressResponseBodyDataShardingProgress[];
  taskProgress?: GetJobExecutionProgressResponseBodyDataTaskProgress[];
  totalProgress?: GetJobExecutionProgressResponseBodyDataTotalProgress;
  workerProgress?: GetJobExecutionProgressResponseBodyDataWorkerProgress[];
  static names(): { [key: string]: string } {
    return {
      jobDescription: 'JobDescription',
      rootProgress: 'RootProgress',
      shardingProgress: 'ShardingProgress',
      taskProgress: 'TaskProgress',
      totalProgress: 'TotalProgress',
      workerProgress: 'WorkerProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobDescription: 'string',
      rootProgress: GetJobExecutionProgressResponseBodyDataRootProgress,
      shardingProgress: { 'type': 'array', 'itemType': GetJobExecutionProgressResponseBodyDataShardingProgress },
      taskProgress: { 'type': 'array', 'itemType': GetJobExecutionProgressResponseBodyDataTaskProgress },
      totalProgress: GetJobExecutionProgressResponseBodyDataTotalProgress,
      workerProgress: { 'type': 'array', 'itemType': GetJobExecutionProgressResponseBodyDataWorkerProgress },
    };
  }

  validate() {
    if(this.rootProgress && typeof (this.rootProgress as any).validate === 'function') {
      (this.rootProgress as any).validate();
    }
    if(Array.isArray(this.shardingProgress)) {
      $dara.Model.validateArray(this.shardingProgress);
    }
    if(Array.isArray(this.taskProgress)) {
      $dara.Model.validateArray(this.taskProgress);
    }
    if(this.totalProgress && typeof (this.totalProgress as any).validate === 'function') {
      (this.totalProgress as any).validate();
    }
    if(Array.isArray(this.workerProgress)) {
      $dara.Model.validateArray(this.workerProgress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

