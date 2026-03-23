// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImportTasksResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Creation time in UTC, formatted as YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2018-05-30T14:30:00Z
   */
  createdTime?: string;
  /**
   * @remarks
   * Milvus version number.
   * 
   * @example
   * 5.7
   */
  dbVersion?: string;
  /**
   * @remarks
   * Job status.
   * 
   * @example
   * Importing
   */
  status?: string;
  /**
   * @remarks
   * Target instance ID.
   * 
   * @example
   * rm-bp*****
   */
  targetInstanceName?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * @example
   * 342900000
   */
  taskId?: number;
  /**
   * @remarks
   * Job name.
   * 
   * @example
   * 362c6c7a-4d20-4eac-898c-1495ceab374c
   */
  taskName?: string;
  /**
   * @remarks
   * Job type.
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
   * None
   */
  items?: ListImportTasksResponseBodyItems[];
  /**
   * @remarks
   * Number of records per page. Valid values: **1–100**.
   * 
   * Default value: **30**.  
   * >If this parameter is specified, the **PageSize** and **PageNumber** parameters are unavailable.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * Paging cursor identity.
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

