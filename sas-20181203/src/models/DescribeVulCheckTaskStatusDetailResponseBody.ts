// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulCheckTaskStatusDetailResponseBodyTaskStatusesTaskStatusList extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * push_command_failed
   */
  code?: string;
  /**
   * @remarks
   * The status of the subtask. Valid values:
   * 
   * *   **0**: unhandled
   * *   **1**: collecting
   * *   **2**: collected
   * *   **3**: matching
   * *   **4**: complete
   * 
   * @example
   * 4
   */
  status?: string;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: Linux software vulnerability
   * *   **sys**: Windows system vulnerability
   * *   **cms**: Web-CMS vulnerability
   * *   **sca**: vulnerability that is detected based on software component analysis
   * 
   * @example
   * cve
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulCheckTaskStatusDetailResponseBodyTaskStatuses extends $dara.Model {
  /**
   * @remarks
   * The ID of the main task.
   * 
   * @example
   * 16190385
   */
  taskId?: string;
  /**
   * @remarks
   * An array that consists of status information about the vulnerability scan subtask.
   */
  taskStatusList?: DescribeVulCheckTaskStatusDetailResponseBodyTaskStatusesTaskStatusList[];
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      taskStatusList: 'TaskStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      taskStatusList: { 'type': 'array', 'itemType': DescribeVulCheckTaskStatusDetailResponseBodyTaskStatusesTaskStatusList },
    };
  }

  validate() {
    if(Array.isArray(this.taskStatusList)) {
      $dara.Model.validateArray(this.taskStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVulCheckTaskStatusDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BE120DAB-F4E7-4C53-ADC3-A97578ABF384
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the status information about the vulnerability scan tasks on the server.
   */
  taskStatuses?: DescribeVulCheckTaskStatusDetailResponseBodyTaskStatuses[];
  /**
   * @remarks
   * The total number of vulnerability scan tasks on the server.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskStatuses: 'TaskStatuses',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskStatuses: { 'type': 'array', 'itemType': DescribeVulCheckTaskStatusDetailResponseBodyTaskStatuses },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.taskStatuses)) {
      $dara.Model.validateArray(this.taskStatuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

