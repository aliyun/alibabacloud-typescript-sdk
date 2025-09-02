// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaTableOutputResponseBodyDataDataEntityList extends $dara.Model {
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2022-02-12 0:32:12
   */
  endTime?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 128
   */
  projectId?: number;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2022-02-12 0:34:13
   */
  startTime?: string;
  /**
   * @remarks
   * The GUID of the MaxCompute table.
   * 
   * @example
   * odps.sample_project.sample_table
   */
  tableGuid?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 1048576
   */
  taskId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 987654321
   */
  taskInstanceId?: number;
  /**
   * @remarks
   * The waiting time.
   * 
   * @example
   * 3
   */
  waitTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      projectId: 'ProjectId',
      startTime: 'StartTime',
      tableGuid: 'TableGuid',
      taskId: 'TaskId',
      taskInstanceId: 'TaskInstanceId',
      waitTime: 'WaitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      projectId: 'number',
      startTime: 'string',
      tableGuid: 'string',
      taskId: 'string',
      taskInstanceId: 'number',
      waitTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableOutputResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The partitions.
   */
  dataEntityList?: GetMetaTableOutputResponseBodyDataDataEntityList[];
  /**
   * @remarks
   * The page number. Valid values: 1 to 30. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
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
   * 128
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataEntityList: 'DataEntityList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataEntityList: { 'type': 'array', 'itemType': GetMetaTableOutputResponseBodyDataDataEntityList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataEntityList)) {
      $dara.Model.validateArray(this.dataEntityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMetaTableOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business data.
   */
  data?: GetMetaTableOutputResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 0
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * SUCCESS
   */
  errorMessage?: string;
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
   * The request ID.
   * 
   * @example
   * 0000-0000-0000-000
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
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMetaTableOutputResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
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

