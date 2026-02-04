// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTaskTasksTask extends $dara.Model {
  /**
   * @remarks
   * The ID of the child node in the cluster instance.
   * 
   * @example
   * r-bp1zxszhcgatnx****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * The start time of the offline key analytics task.
   * 
   * @example
   * 2019-08-01T19:08:49Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the offline key analytics task. Valid values:
   * 
   * *   **success**
   * *   **running**
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * 156465****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTaskTasks extends $dara.Model {
  task?: DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTaskTasksTask[];
  static names(): { [key: string]: string } {
    return {
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      task: { 'type': 'array', 'itemType': DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTaskTasksTask },
    };
  }

  validate() {
    if(Array.isArray(this.task)) {
      $dara.Model.validateArray(this.task);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTask extends $dara.Model {
  /**
   * @remarks
   * The date when the offline key analytics task was performed.
   * 
   * @example
   * 2019-08-01Z
   */
  date?: string;
  /**
   * @remarks
   * Details about the offline key analysis reports.
   */
  tasks?: DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTaskTasks;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      tasks: DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTaskTasks,
    };
  }

  validate() {
    if(this.tasks && typeof (this.tasks as any).validate === 'function') {
      (this.tasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisReportListResponseBodyDailyTasks extends $dara.Model {
  dailyTask?: DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTask[];
  static names(): { [key: string]: string } {
    return {
      dailyTask: 'DailyTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyTask: { 'type': 'array', 'itemType': DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTask },
    };
  }

  validate() {
    if(Array.isArray(this.dailyTask)) {
      $dara.Model.validateArray(this.dailyTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCacheAnalysisReportListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the offline key analysis reports.
   */
  dailyTasks?: DescribeCacheAnalysisReportListResponseBodyDailyTasks;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * 1041xxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 743D0A03-52DE-4E6F-8D09-EC1414CF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dailyTasks: 'DailyTasks',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyTasks: DescribeCacheAnalysisReportListResponseBodyDailyTasks,
      instanceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.dailyTasks && typeof (this.dailyTasks as any).validate === 'function') {
      (this.dailyTasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

