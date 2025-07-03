// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTasksResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 2021-10-20T19:40:00Z
   */
  beginTime?: string;
  /**
   * @example
   * DBName
   */
  DBName?: string;
  /**
   * @example
   * 2021-10-20T20:00:00Z
   */
  finishTime?: string;
  /**
   * @example
   * 80
   */
  progress?: string;
  /**
   * @example
   * ProgressInfo
   */
  progressInfo?: string;
  /**
   * @example
   * FEA5DC20-6D8A-5979-97AA-FC57546ADC20
   */
  scaleOutToken?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * multi_scale_out
   */
  taskAction?: string;
  /**
   * @example
   * TaskErrorCode
   */
  taskErrorCode?: string;
  /**
   * @example
   * TaskErrorMessage
   */
  taskErrorMessage?: string;
  /**
   * @example
   * 20089398
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      DBName: 'DBName',
      finishTime: 'FinishTime',
      progress: 'Progress',
      progressInfo: 'ProgressInfo',
      scaleOutToken: 'ScaleOutToken',
      status: 'Status',
      taskAction: 'TaskAction',
      taskErrorCode: 'TaskErrorCode',
      taskErrorMessage: 'TaskErrorMessage',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      DBName: 'string',
      finishTime: 'string',
      progress: 'string',
      progressInfo: 'string',
      scaleOutToken: 'string',
      status: 'string',
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

