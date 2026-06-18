// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTaskResponseBodyDataRecord extends $dara.Model {
  /**
   * @remarks
   * Number of completed calls.
   * 
   * @example
   * 1
   */
  completeCount?: number;
  /**
   * @remarks
   * Job start time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1618477232000
   */
  fireTime?: string;
  /**
   * @remarks
   * Creation Time of the job. Format: UNIX timestamp in milliseconds.
   * 
   * @example
   * 1618477232000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The unique job ID for the robot calling task.
   * 
   * @example
   * 12****
   */
  id?: number;
  /**
   * @remarks
   * The ID of the specified robot, which is the script ID.
   * 
   * @example
   * 12****
   */
  robotId?: number;
  /**
   * @remarks
   * Robot Name.
   * 
   * @example
   * 机器人
   */
  robotName?: string;
  /**
   * @remarks
   * Task Status.
   * 
   * @example
   * RELEASE
   */
  status?: string;
  /**
   * @remarks
   * Task Name.
   * 
   * @example
   * 测试任务
   */
  taskName?: string;
  /**
   * @remarks
   * Total number of processed calls.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      completeCount: 'CompleteCount',
      fireTime: 'FireTime',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      robotId: 'RobotId',
      robotName: 'RobotName',
      status: 'Status',
      taskName: 'TaskName',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completeCount: 'number',
      fireTime: 'string',
      gmtCreate: 'string',
      id: 'number',
      robotId: 'number',
      robotName: 'string',
      status: 'string',
      taskName: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Current page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * Number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * List of job information.
   */
  record?: ListTaskResponseBodyDataRecord[];
  /**
   * @remarks
   * Total number of jobs.
   * 
   * @example
   * 50
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      record: 'Record',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      record: { 'type': 'array', 'itemType': ListTaskResponseBodyDataRecord },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.record)) {
      $dara.Model.validateArray(this.record);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request status code. A return value of OK indicates that the request succeeded.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * List of job data.
   */
  data?: ListTaskResponseBodyData;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
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
   * Indicates whether the API was invoked successfully. Valid values:
   * - **true**: Succeeded.
   * - **false**: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

