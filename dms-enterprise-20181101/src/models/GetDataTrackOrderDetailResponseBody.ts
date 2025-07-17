// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataTrackOrderDetailResponseBodyDataTrackOrderDetail extends $dara.Model {
  /**
   * @remarks
   * The name that is used to search for the database.
   * 
   * @example
   * xxx@yyy:3306
   */
  databaseSearchName?: string;
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 3431****
   */
  dbId?: number;
  /**
   * @remarks
   * The end time of the time range in which data operations are tracked. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2023-04-23 10:00:00
   */
  jobEndTime?: string;
  /**
   * @remarks
   * The start time of the time range in which data operations are tracked. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2023-04-23 00:00:00
   */
  jobStartTime?: string;
  /**
   * @remarks
   * The status of the data tracking task. Valid values:
   * 
   * *   **INIT**: The task is being initialized.
   * *   **LISTING**: The binary logs are being obtained.
   * *   **LIST_SUCCESS**: The binary logs are successfully obtained.
   * *   **DOWNLOADING**: The binary logs are being downloaded.
   * *   **DOWNLOAD_FAIL**: The binary logs failed to be downloaded.
   * *   **DOWNLOAD_SUCCESS**: The binary logs are successfully downloaded.
   * *   **FILTERING**: The binary logs are being parsed.
   * *   **FILTER_FAIL**: The binary logs failed to be parsed.
   * *   **FILTER_SUCCESS**: The binary logs are successfully parsed.
   * 
   * @example
   * FILTER_SUCCESS
   */
  jobStatus?: string;
  /**
   * @remarks
   * Indicates whether the database is a logical database. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * as_task
   */
  schemaName?: string;
  /**
   * @remarks
   * The description of the task status.
   * 
   * @example
   * searching success
   */
  statusDesc?: string;
  /**
   * @remarks
   * The names of the tables for which data operations are tracked.
   */
  tableNames?: string[];
  /**
   * @remarks
   * The types of data operations that are tracked.
   */
  trackTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      databaseSearchName: 'DatabaseSearchName',
      dbId: 'DbId',
      jobEndTime: 'JobEndTime',
      jobStartTime: 'JobStartTime',
      jobStatus: 'JobStatus',
      logic: 'Logic',
      schemaName: 'SchemaName',
      statusDesc: 'StatusDesc',
      tableNames: 'TableNames',
      trackTypes: 'TrackTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseSearchName: 'string',
      dbId: 'number',
      jobEndTime: 'string',
      jobStartTime: 'string',
      jobStatus: 'string',
      logic: 'boolean',
      schemaName: 'string',
      statusDesc: 'string',
      tableNames: { 'type': 'array', 'itemType': 'string' },
      trackTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tableNames)) {
      $dara.Model.validateArray(this.tableNames);
    }
    if(Array.isArray(this.trackTypes)) {
      $dara.Model.validateArray(this.trackTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataTrackOrderDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the ticket.
   */
  dataTrackOrderDetail?: GetDataTrackOrderDetailResponseBodyDataTrackOrderDetail;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 283C461F-11D8-48AA-B695-DF092DA32AF3
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dataTrackOrderDetail: 'DataTrackOrderDetail',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataTrackOrderDetail: GetDataTrackOrderDetailResponseBodyDataTrackOrderDetail,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dataTrackOrderDetail && typeof (this.dataTrackOrderDetail as any).validate === 'function') {
      (this.dataTrackOrderDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

