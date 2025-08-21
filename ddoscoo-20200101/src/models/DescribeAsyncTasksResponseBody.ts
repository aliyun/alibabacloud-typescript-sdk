// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAsyncTasksResponseBodyAsyncTasks extends $dara.Model {
  /**
   * @remarks
   * The end time of the task. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 157927362000
   */
  endTime?: number;
  /**
   * @remarks
   * The start time of the task. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 156927362000
   */
  startTime?: number;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 1
   */
  taskId?: number;
  /**
   * @remarks
   * The task parameter. The value is a JSON string. The returned field in the value varies based on the value of **TaskType**.
   * 
   * If **TaskType** is set to **1**, **3**, **4**, **5**, or **6**, the following filed is returned:
   * 
   * *   **instanceId**: the ID of the instance. Data type: string.
   * 
   * If **TaskType** is set to **2**, the following field is returned:
   * 
   * *   **domain**: the domain name of the website. Data type: string.
   * 
   * @example
   * {"instanceId": "ddoscoo-cn-mp91j1ao****"}
   */
  taskParams?: string;
  /**
   * @remarks
   * The execution result of the task. The value is a JSON string. The returned fields in the value vary based on the value of **TaskType**.
   * 
   * If **TaskType** is set to **1**, **3**, **4**, **5**, or **6**, the following fields are returned:
   * 
   * *   **instanceId**: the ID of the instance. Data type: string.
   * *   **url**: the URL to download the exported file from Object Storage Service (OSS). Data type: string.
   * 
   * If **TaskType** is set to **2**, the following fields are returned:
   * 
   * *   **domain**: the domain name of the website. Data type: string.
   * *   **url**: the URL to download the exported file from OSS. Data type: string.
   * 
   * @example
   * {"instanceId": "ddoscoo-cn-mp91j1ao****","url": "https://****.oss-cn-beijing.aliyuncs.com/heap.bin?Expires=1584785140&OSSAccessKeyId=TMP.3KfzD82FyRJevJdEkRX6JEFHhbvRBBb75PZJnyJmksA2QkMm47xFAFDgMhEV8Nm6Vxr8xExMfiy9LsUFAcLcTBrN3r****&Signature=Sj8BNcsxJLE8l5qm4cjNlDt8gv****"}
   */
  taskResult?: string;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   **0**: indicates that the task is being initialized.
   * *   **1**: indicates that the task is in progress.
   * *   **2**: indicates that the task is successful.
   * *   **3**: indicates that the task failed.
   * 
   * @example
   * 2
   */
  taskStatus?: number;
  /**
   * @remarks
   * The type of the task. Valid values:
   * 
   * *   **1**: the task to export the port forwarding rules of an instance
   * *   **2**: the task to export the forwarding rules of a website protected by an instance
   * *   **3**: the task to export the sessions and health check settings of an instance
   * *   **4**: the task to export the mitigation policies of an instance
   * *   **5**: the task to download the blacklist for destination IP addresses of an instance
   * *   **6**: the task to download the whitelist for destination IP addresses of an instance
   * 
   * @example
   * 5
   */
  taskType?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
      taskId: 'TaskId',
      taskParams: 'TaskParams',
      taskResult: 'TaskResult',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
      taskId: 'number',
      taskParams: 'string',
      taskResult: 'string',
      taskStatus: 'number',
      taskType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAsyncTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the details of the asynchronous export tasks.
   */
  asyncTasks?: DescribeAsyncTasksResponseBodyAsyncTasks[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6623EA1F-30FB-5BC8-BEC9-74D55F6F08F1
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of asynchronous export tasks that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      asyncTasks: 'AsyncTasks',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTasks: { 'type': 'array', 'itemType': DescribeAsyncTasksResponseBodyAsyncTasks },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.asyncTasks)) {
      $dara.Model.validateArray(this.asyncTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

