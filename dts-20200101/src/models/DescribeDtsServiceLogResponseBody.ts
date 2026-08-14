// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsServiceLogResponseBodyServiceLogContexts extends $dara.Model {
  /**
   * @remarks
   * The specific log information.
   * 
   * @example
   * Statistics: generator = 369173; collector = 470109; replicator = 2470; ping = 2/2/2; execute = 29/29/29; rt = 29/29/29; state = IDLE; queries = -1; exceptions = {connects = 0, replicates = 0}; infos = {}
   */
  context?: string;
  /**
   * @remarks
   * The status of the log entry.
   * 
   * @example
   * NORMAL
   */
  state?: string;
  /**
   * @remarks
   * The time when the log was collected, in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2021-05-13T09:13:39.443+00:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'Context',
      state: 'State',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      state: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDtsServiceLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dynamic error code. This parameter will be deprecated.
   * 
   * @example
   * 403
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message used to replace the **%s** variable in the **ErrMessage** parameter.
   * 
   * @example
   * DtsJobId
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * InternalError
   */
  errCode?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * The Value of Input Parameter %s is not valid.
   */
  errMessage?: string;
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
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of log entries per page.
   * 
   * @example
   * 20
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F87DF250-952C-47FE-8A02-69414FAA****
   */
  requestId?: string;
  /**
   * @remarks
   * The task logs details of the node.
   */
  serviceLogContexts?: DescribeDtsServiceLogResponseBodyServiceLogContexts[];
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of log entries that meet the specified conditions.
   * 
   * @example
   * 35
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      serviceLogContexts: 'ServiceLogContexts',
      success: 'Success',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      serviceLogContexts: { 'type': 'array', 'itemType': DescribeDtsServiceLogResponseBodyServiceLogContexts },
      success: 'boolean',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.serviceLogContexts)) {
      $dara.Model.validateArray(this.serviceLogContexts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

