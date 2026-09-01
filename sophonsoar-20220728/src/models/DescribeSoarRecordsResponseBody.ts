// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSoarRecordsResponseBodyPage extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 22
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
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

export class DescribeSoarRecordsResponseBodySoarExecuteRecordsOutputList extends $dara.Model {
  /**
   * @remarks
   * The UUID of the node.
   * 
   * @example
   * 4e78d665-2366-4485-8fbc-048a8d41a2c3-25****
   */
  actionUuid?: string;
  /**
   * @remarks
   * The output content.
   * 
   * @example
   * {"msg":"process has been killed","code":"KillSuccess","status":"success"}
   */
  content?: string;
  /**
   * @remarks
   * The name of the node that generates the output.
   * 
   * @example
   * TriggerPlaybook_4
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      actionUuid: 'ActionUuid',
      content: 'Content',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionUuid: 'string',
      content: 'string',
      nodeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordsResponseBodySoarExecuteRecords extends $dara.Model {
  /**
   * @remarks
   * The end time of the component run. The value is a 13-digit UNIX timestamp.
   * 
   * @example
   * 1686294686000
   */
  endTime?: number;
  /**
   * @remarks
   * The error message of the playbook task. This parameter is empty if the task is successful.
   * 
   * @example
   * stime not match
   */
  errorMsg?: string;
  /**
   * @remarks
   * The output information of the playbook.
   */
  outputList?: DescribeSoarRecordsResponseBodySoarExecuteRecordsOutputList[];
  /**
   * @remarks
   * The request parameters of the playbook task.
   * 
   * @example
   * {
   *     "input1": "xx.xx.xx.xx",
   *     "input2": "7d"
   * }
   */
  rawEventReq?: string;
  /**
   * @remarks
   * The request ID of the playbook task. The ID is unique for each task run.
   * 
   * @example
   * ba1ec480-aa90-4bb6-a1a7-9e311ae*****
   */
  requestUuid?: string;
  /**
   * @remarks
   * The start time of the task run. The value is a 13-digit UNIX timestamp.
   * 
   * @example
   * 1675823338433
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the playbook task. Valid values:
   * 
   * - **success**: The execution is successful.
   * 
   * - **fail**: The execution failed.
   * 
   * - **running**: The execution is in progress.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The name of the playbook task. The value is the UUID of the playbook.
   * 
   * @example
   * 82848ebc-eaff-4791-acd4-xxxxx
   */
  taskName?: string;
  /**
   * @remarks
   * The MD5 value of the playbook configuration.
   * 
   * @example
   * dea65a3db87fb9bd84bbxxxxx
   */
  taskflowMd5?: string;
  /**
   * @remarks
   * The type of the playbook task. Valid values:
   * 
   * - **debug**: a test task
   * 
   * - **manual**: a one-time task
   * 
   * - **siem**: a task that is triggered by an event or alert
   * 
   * @example
   * debug
   */
  triggerType?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that runs the playbook task.
   * 
   * @example
   * 127xxxx4392
   */
  triggerUser?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      errorMsg: 'ErrorMsg',
      outputList: 'OutputList',
      rawEventReq: 'RawEventReq',
      requestUuid: 'RequestUuid',
      startTime: 'StartTime',
      status: 'Status',
      taskName: 'TaskName',
      taskflowMd5: 'TaskflowMd5',
      triggerType: 'TriggerType',
      triggerUser: 'TriggerUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      errorMsg: 'string',
      outputList: { 'type': 'array', 'itemType': DescribeSoarRecordsResponseBodySoarExecuteRecordsOutputList },
      rawEventReq: 'string',
      requestUuid: 'string',
      startTime: 'number',
      status: 'string',
      taskName: 'string',
      taskflowMd5: 'string',
      triggerType: 'string',
      triggerUser: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outputList)) {
      $dara.Model.validateArray(this.outputList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSoarRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   * 
   * This parameter is required.
   */
  page?: DescribeSoarRecordsResponseBodyPage;
  /**
   * @remarks
   * The unique request ID, generated by Alibaba Cloud. Use this ID to troubleshoot issues.
   * 
   * @example
   * 601C2DAC-6A67-5237-BEE8-5BF1CEE9*****
   */
  requestId?: string;
  /**
   * @remarks
   * The execution records.
   */
  soarExecuteRecords?: DescribeSoarRecordsResponseBodySoarExecuteRecords[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      requestId: 'RequestId',
      soarExecuteRecords: 'SoarExecuteRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: DescribeSoarRecordsResponseBodyPage,
      requestId: 'string',
      soarExecuteRecords: { 'type': 'array', 'itemType': DescribeSoarRecordsResponseBodySoarExecuteRecords },
    };
  }

  validate() {
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(Array.isArray(this.soarExecuteRecords)) {
      $dara.Model.validateArray(this.soarExecuteRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

