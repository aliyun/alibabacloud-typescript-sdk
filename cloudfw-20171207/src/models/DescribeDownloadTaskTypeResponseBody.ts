// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDownloadTaskTypeResponseBodyTaskTypeArray extends $dara.Model {
  /**
   * @remarks
   * The name of the task type.
   * 
   * @example
   * Internet Boundary Firewall Assets
   */
  taskName?: string;
  /**
   * @remarks
   * The type of the task.
   * 
   * @example
   * InternetFirewallAsset
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskName: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDownloadTaskTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B835494C-D093-5524-BBDE-BD272077B40E
   */
  requestId?: string;
  /**
   * @remarks
   * The task types.
   */
  taskTypeArray?: DescribeDownloadTaskTypeResponseBodyTaskTypeArray[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskTypeArray: 'TaskTypeArray',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskTypeArray: { 'type': 'array', 'itemType': DescribeDownloadTaskTypeResponseBodyTaskTypeArray },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.taskTypeArray)) {
      $dara.Model.validateArray(this.taskTypeArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

