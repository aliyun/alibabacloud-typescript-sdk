// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEtlJobLogsResponseBodyEtlRunningLogs extends $dara.Model {
  /**
   * @remarks
   * The description of the ETL task running status.
   * 
   * @example
   * Starting DTS-ETL...
   */
  content?: string;
  /**
   * @remarks
   * The status, which indicates the name of the module that generated the log, such as the transformation module of the ETL task.
   * 
   * @example
   * DTS-ETL
   */
  contentKey?: string;
  /**
   * @remarks
   * The ID of the ETL task.
   * 
   * @example
   * u**********5
   */
  etlId?: string;
  /**
   * @remarks
   * The timestamp when the log was generated.
   * 
   * @example
   * 1637306503000
   */
  logDatetime?: string;
  /**
   * @remarks
   * The log level. Valid values: ERROR, WARN, INFO, and DEBUG.
   * 
   * @example
   * INFO
   */
  status?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 123123******12131
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentKey: 'ContentKey',
      etlId: 'EtlId',
      logDatetime: 'LogDatetime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentKey: 'string',
      etlId: 'string',
      logDatetime: 'string',
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEtlJobLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dynamic error code associated with this request.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message associated with this request.
   * 
   * @example
   * present environment is not support,so skip.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned when the specified ETL task ID is invalid and the corresponding task cannot be found.
   * 
   * @example
   * InvalidJobId
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned when the specified ETL task ID is invalid and the corresponding task cannot be found. The task may have been deleted.
   * 
   * @example
   * The specified dts job id %s is not exists.
   */
  errMessage?: string;
  /**
   * @remarks
   * The array of ETL task running log objects.
   */
  etlRunningLogs?: DescribeEtlJobLogsResponseBodyEtlRunningLogs[];
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
   * 224DB9F7-3100-4899-AB9C-C938BCCB43E7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. A value of false indicates a failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      etlRunningLogs: 'EtlRunningLogs',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      etlRunningLogs: { 'type': 'array', 'itemType': DescribeEtlJobLogsResponseBodyEtlRunningLogs },
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.etlRunningLogs)) {
      $dara.Model.validateArray(this.etlRunningLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

