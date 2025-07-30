// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEtlJobLogsResponseBodyEtlRunningLogs extends $dara.Model {
  /**
   * @remarks
   * The state of the ETL task.
   * 
   * @example
   * Starting DTS-ETL...
   */
  content?: string;
  /**
   * @remarks
   * The module for which the logs are generated, such as the conversion module of ETL tasks.
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
   * The time when the log was generated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
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
   * The ID of the user.
   * 
   * @example
   * 121323*******454512
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
   * The dynamic error code.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic part in the error message.
   * 
   * @example
   * present environment is not support,so skip.
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code. This example indicates that the specified ETL task ID is invalid.
   * 
   * @example
   * InvalidJobId
   */
  errCode?: string;
  /**
   * @remarks
   * The error message. This example indicates that the specified ETL task ID does not exist. In this case, the ETL task may be deleted.
   * 
   * @example
   * The specified dts job id %s is not exists.
   */
  errMessage?: string;
  /**
   * @remarks
   * The logs of ETL tasks.
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
   * The ID of the request.
   * 
   * @example
   * 224DB9F7-3100-4899-AB9C-C938BCCB43E7
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. If the call failed, false is returned.
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

