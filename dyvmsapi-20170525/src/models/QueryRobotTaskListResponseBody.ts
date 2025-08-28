// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRobotTaskListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The robocall tasks, in the JSON format.
   * 
   * *   **id**: the unique ID of the robocall task.
   * *   **taskName**: the task name.
   * *   **robotId**: the robot ID.
   * *   **robotName**: the robot name.
   * *   **status**: the task state.
   * *   **scheduleType**: the scheduling type. Valid values: **SINGLE** and **ORDER**. The value SINGLE indicates that the task was started immediately after it was created. The value ORDER indicates that the task was started at a scheduled time.
   * *   **createTime**: the time when the task was created, in the yyyy.MM.dd HH:mm:ss format.
   * *   **completeTime**: the time when the task was completed, in the yyyy.MM.dd HH:mm:ss format.
   * *   **fireTime**: the time when the task was started, in the yyyy.MM.dd HH:mm:ss format.
   * *   **totalCount**: the total number of calls processed.
   * *   **finishCount**: the number of calls completed.
   * 
   * @example
   * [ {"id": 1045001, "taskName": "Test Template", "robotId": 1000000075003, "robotName": "robot", "status": "INIT","scheduleType": "SINGLE", "createTime": "2019.06.14 14:55:23", "completeTime": "2019.06.14 14:55:23", "fireTime": "2019.06.14 14:55:23", "totalCount": 1000, "finishCount": 998} ]
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      pageNo: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

