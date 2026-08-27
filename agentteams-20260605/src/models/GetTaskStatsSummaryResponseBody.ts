// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskStatsSummaryResponseBodyDataStatusDistribution extends $dara.Model {
  /**
   * @remarks
   * The number of tasks in this status.
   * 
   * @example
   * 800
   */
  count?: number;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatsSummaryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The average task duration. Unit: milliseconds.
   * 
   * @example
   * 5000.5
   */
  averageTaskDuration?: number;
  /**
   * @remarks
   * The task status distribution.
   * 
   * @example
   * [...]
   */
  statusDistribution?: GetTaskStatsSummaryResponseBodyDataStatusDistribution[];
  /**
   * @remarks
   * The total token consumption of tasks.
   * 
   * @example
   * 500000
   */
  taskTokenConsumption?: number;
  /**
   * @remarks
   * The total number of tasks.
   * 
   * @example
   * 1000
   */
  totalTasks?: number;
  static names(): { [key: string]: string } {
    return {
      averageTaskDuration: 'AverageTaskDuration',
      statusDistribution: 'StatusDistribution',
      taskTokenConsumption: 'TaskTokenConsumption',
      totalTasks: 'TotalTasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageTaskDuration: 'number',
      statusDistribution: { 'type': 'array', 'itemType': GetTaskStatsSummaryResponseBodyDataStatusDistribution },
      taskTokenConsumption: 'number',
      totalTasks: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.statusDistribution)) {
      $dara.Model.validateArray(this.statusDistribution);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskStatsSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {}
   */
  data?: GetTaskStatsSummaryResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTaskStatsSummaryResponseBodyData,
      httpStatusCode: 'number',
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

