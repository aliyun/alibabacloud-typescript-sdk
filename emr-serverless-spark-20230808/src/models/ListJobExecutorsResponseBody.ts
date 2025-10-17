// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobExecutorsResponseBodyExexutors extends $dara.Model {
  /**
   * @example
   * 10
   */
  activeTasks?: number;
  /**
   * @example
   * 1760601***
   */
  addTime?: number;
  /**
   * @example
   * 8
   */
  completedTasks?: number;
  /**
   * @example
   * 20
   */
  diskUsed?: number;
  /**
   * @example
   * 1
   */
  executorId?: string;
  /**
   * @example
   * driver
   */
  executorType?: string;
  /**
   * @example
   * 2
   */
  failedTasks?: number;
  /**
   * @example
   * 21.10.x.x:1201x
   */
  hostPort?: string;
  /**
   * @example
   * jr-1fe145df8ade366a
   */
  jobRunId?: string;
  /**
   * @example
   * 4294967296
   */
  maxMemory?: number;
  /**
   * @example
   * 30
   */
  memoryUsed?: number;
  /**
   * @example
   * 10
   */
  rddBlocks?: number;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 4
   */
  totalCores?: number;
  /**
   * @example
   * 123
   */
  totalDuration?: number;
  /**
   * @example
   * 3
   */
  totalGCTime?: number;
  /**
   * @example
   * 1024
   */
  totalInputBytes?: number;
  /**
   * @example
   * 2048
   */
  totalShuffleRead?: number;
  /**
   * @example
   * 2048
   */
  totalShuffleWrite?: number;
  /**
   * @example
   * 50
   */
  totalTasks?: number;
  /**
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
  exexutors?: ListJobExecutorsResponseBodyExexutors[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 2
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
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

