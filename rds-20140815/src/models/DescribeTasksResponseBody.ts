// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksResponseBodyItemsTaskProgressInfo extends $dara.Model {
  beginTime?: string;
  currentStepName?: string;
  DBName?: string;
  expectedFinishTime?: string;
  finishTime?: string;
  progress?: string;
  progressInfo?: string;
  remain?: number;
  status?: string;
  stepProgressInfo?: string;
  stepsInfo?: string;
  taskAction?: string;
  taskErrorCode?: string;
  taskErrorMessage?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      currentStepName: 'CurrentStepName',
      DBName: 'DBName',
      expectedFinishTime: 'ExpectedFinishTime',
      finishTime: 'FinishTime',
      progress: 'Progress',
      progressInfo: 'ProgressInfo',
      remain: 'Remain',
      status: 'Status',
      stepProgressInfo: 'StepProgressInfo',
      stepsInfo: 'StepsInfo',
      taskAction: 'TaskAction',
      taskErrorCode: 'TaskErrorCode',
      taskErrorMessage: 'TaskErrorMessage',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      currentStepName: 'string',
      DBName: 'string',
      expectedFinishTime: 'string',
      finishTime: 'string',
      progress: 'string',
      progressInfo: 'string',
      remain: 'number',
      status: 'string',
      stepProgressInfo: 'string',
      stepsInfo: 'string',
      taskAction: 'string',
      taskErrorCode: 'string',
      taskErrorMessage: 'string',
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

export class DescribeTasksResponseBodyItems extends $dara.Model {
  taskProgressInfo?: DescribeTasksResponseBodyItemsTaskProgressInfo[];
  static names(): { [key: string]: string } {
    return {
      taskProgressInfo: 'TaskProgressInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskProgressInfo: { 'type': 'array', 'itemType': DescribeTasksResponseBodyItemsTaskProgressInfo },
    };
  }

  validate() {
    if(Array.isArray(this.taskProgressInfo)) {
      $dara.Model.validateArray(this.taskProgressInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTasksResponseBody extends $dara.Model {
  items?: DescribeTasksResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A103039D-B1B2-4C57-B989-7D7C0DA95426
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 40
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeTasksResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

