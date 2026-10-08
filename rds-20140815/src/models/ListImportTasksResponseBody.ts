// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImportTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The creation time in UTC. The time follows the format of YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2018-05-30T14:30:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The kernel version number.
   * 
   * @example
   * 5.7
   */
  dbVersion?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Importing
   */
  status?: string;
  /**
   * @remarks
   * The instance ID of the target instance.
   * 
   * @example
   * rm-bp*****
   */
  targetInstanceName?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 342900000
   */
  taskId?: number;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * 362c6c7a-4d20-4eac-898c-1495ceab374c
   */
  taskName?: string;
  /**
   * @remarks
   * The task type.
   * 
   * @example
   * import
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      dbVersion: 'DbVersion',
      status: 'Status',
      targetInstanceName: 'TargetInstanceName',
      taskId: 'TaskId',
      taskName: 'TaskName',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      dbVersion: 'string',
      status: 'string',
      targetInstanceName: 'string',
      taskId: 'number',
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

export class ListImportTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * None.
   */
  items?: ListImportTasksResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page. Valid values: **1 to 100**.
   * 
   * Default value: **30**.
   * >If you specify this parameter, the **PageSize** and **PageNumber** parameters are not available.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * None
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListImportTasksResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

