// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobExecutorsResponseBodyExexutors extends $dara.Model {
  /**
   * @remarks
   * The total number of active tasks that the executor is running.
   * 
   * @example
   * 10
   */
  activeTasks?: number;
  /**
   * @remarks
   * The time when the executor was created.
   * 
   * @example
   * 1760601***
   */
  addTime?: number;
  /**
   * @remarks
   * The total number of completed tasks that the executor has run.
   * 
   * @example
   * 8
   */
  completedTasks?: number;
  /**
   * @remarks
   * The disk usage of the executor.
   * 
   * @example
   * 20
   */
  diskUsed?: number;
  /**
   * @remarks
   * The job executor ID.
   * 
   * @example
   * 1
   */
  executorId?: string;
  /**
   * @remarks
   * The executor type.
   * 
   * @example
   * driver
   */
  executorType?: string;
  /**
   * @remarks
   * The total number of failed tasks that the executor has run.
   * 
   * @example
   * 2
   */
  failedTasks?: number;
  /**
   * @remarks
   * The address of the executor.
   * 
   * @example
   * 21.10.x.x:1201x
   */
  hostPort?: string;
  /**
   * @remarks
   * The job run ID.
   * 
   * @example
   * jr-1fe145df8ade366a
   */
  jobRunId?: string;
  /**
   * @remarks
   * The maximum memory of the executor.
   * 
   * @example
   * 4294967296
   */
  maxMemory?: number;
  /**
   * @remarks
   * The memory usage of the executor.
   * 
   * @example
   * 30
   */
  memoryUsed?: number;
  /**
   * @remarks
   * The number of Resilient Distributed Dataset (RDD) blocks managed by the executor.
   * 
   * @example
   * 10
   */
  rddBlocks?: number;
  /**
   * @remarks
   * The running status of the executor.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The total number of cores for the executor.
   * 
   * @example
   * 4
   */
  totalCores?: number;
  /**
   * @remarks
   * The total runtime of the executor.
   * 
   * @example
   * 123
   */
  totalDuration?: number;
  /**
   * @remarks
   * The total garbage collection (GC) time of the executor.
   * 
   * @example
   * 3
   */
  totalGCTime?: number;
  /**
   * @remarks
   * The number of bytes of input data for the executor.
   * 
   * @example
   * 1024
   */
  totalInputBytes?: number;
  /**
   * @remarks
   * The number of bytes read during the shuffle phase by the executor.
   * 
   * @example
   * 2048
   */
  totalShuffleRead?: number;
  /**
   * @remarks
   * The number of bytes written during the shuffle phase by the executor.
   * 
   * @example
   * 2048
   */
  totalShuffleWrite?: number;
  /**
   * @remarks
   * The total number of tasks that the executor has run.
   * 
   * @example
   * 50
   */
  totalTasks?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * w-78faee4da118f02e
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      activeTasks: 'activeTasks',
      addTime: 'addTime',
      completedTasks: 'completedTasks',
      diskUsed: 'diskUsed',
      executorId: 'executorId',
      executorType: 'executorType',
      failedTasks: 'failedTasks',
      hostPort: 'hostPort',
      jobRunId: 'jobRunId',
      maxMemory: 'maxMemory',
      memoryUsed: 'memoryUsed',
      rddBlocks: 'rddBlocks',
      status: 'status',
      totalCores: 'totalCores',
      totalDuration: 'totalDuration',
      totalGCTime: 'totalGCTime',
      totalInputBytes: 'totalInputBytes',
      totalShuffleRead: 'totalShuffleRead',
      totalShuffleWrite: 'totalShuffleWrite',
      totalTasks: 'totalTasks',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTasks: 'number',
      addTime: 'number',
      completedTasks: 'number',
      diskUsed: 'number',
      executorId: 'string',
      executorType: 'string',
      failedTasks: 'number',
      hostPort: 'string',
      jobRunId: 'string',
      maxMemory: 'number',
      memoryUsed: 'number',
      rddBlocks: 'number',
      status: 'string',
      totalCores: 'number',
      totalDuration: 'number',
      totalGCTime: 'number',
      totalInputBytes: 'number',
      totalShuffleRead: 'number',
      totalShuffleWrite: 'number',
      totalTasks: 'number',
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

export class ListJobExecutorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of executors.
   */
  exexutors?: ListJobExecutorsResponseBodyExexutors[];
  /**
   * @remarks
   * The maximum number of records returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      exexutors: 'exexutors',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exexutors: { 'type': 'array', 'itemType': ListJobExecutorsResponseBodyExexutors },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.exexutors)) {
      $dara.Model.validateArray(this.exexutors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

