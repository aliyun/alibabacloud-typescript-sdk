// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskStatsSummaryResponseBodyDataStatusDistribution extends $dara.Model {
  count?: number;
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
  averageTaskDuration?: number;
  statusDistribution?: GetTaskStatsSummaryResponseBodyDataStatusDistribution[];
  taskTokenConsumption?: number;
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
  code?: string;
  data?: GetTaskStatsSummaryResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
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

