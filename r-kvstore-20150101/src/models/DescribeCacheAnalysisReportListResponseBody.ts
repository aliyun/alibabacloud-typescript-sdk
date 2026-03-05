// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCacheAnalysisReportListResponseBodyDailyTasksDailyTaskTasksTask extends $dara.Model {
  nodeId?: string;
  startTime?: string;
  status?: string;
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
  date?: string;
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

