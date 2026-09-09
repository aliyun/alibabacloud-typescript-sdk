// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulCheckTaskStatusDetailResponseBodyTaskStatusesTaskStatusList extends $dara.Model {
  /**
   * @remarks
   * The failure code.
   * 
   * @example
   * push_command_failed
   */
  code?: string;
  /**
   * @remarks
   * The completion status of the check. Valid values:
   * 
   * - **0**: Unprocessed.
   * - **1**: Collecting.
   * - **2**: Collection completed.
   * - **3**: Matching.
   * - **4**: Completed.
   * 
   * @example
   * 4
   */
  status?: string;
  /**
   * @remarks
   * The vulnerability type. Valid values:
   * - **cve**: Linux software vulnerability
   * - **sys**: Windows system vulnerability
   * - **cms**: Web-CMS vulnerability
   * - **sca**: sca vulnerability
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
   * The main task ID.
   * 
   * @example
   * 16190385
   */
  taskId?: string;
  /**
   * @remarks
   * The list of vulnerability detection task statuses.
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
   * The request ID.
   * 
   * @example
   * BE120DAB-F4E7-4C53-ADC3-A97578ABF384
   */
  requestId?: string;
  /**
   * @remarks
   * The list of vulnerability task statuses for the server.
   */
  taskStatuses?: DescribeVulCheckTaskStatusDetailResponseBodyTaskStatuses[];
  /**
   * @remarks
   * The total number of vulnerability subtasks for the server.
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

