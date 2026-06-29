// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckConnectivityJobsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data source ID.
   * 
   * @example
   * 192
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The error message that provides a detailed error description when the task fails.
   * 
   * @example
   * notFoundIp
   */
  errorMsg?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 123123
   */
  jobId?: string;
  /**
   * @remarks
   * The task type, such as application-level or cluster-level.
   * 
   * @example
   * application/cluster
   */
  jobType?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 30001011
   */
  tenantId?: string;
  /**
   * @remarks
   * The Voldemort task ID, which is used to associate with the underlying execution task.
   * 
   * @example
   * t_7572319950395080706_20251225_7572319950395080707
   */
  voldemortTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      errorMsg: 'ErrorMsg',
      jobId: 'JobId',
      jobType: 'JobType',
      status: 'Status',
      tenantId: 'TenantId',
      voldemortTaskId: 'VoldemortTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      errorMsg: 'string',
      jobId: 'string',
      jobType: 'string',
      status: 'string',
      tenantId: 'string',
      voldemortTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCheckConnectivityJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code returned by the backend.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * result
   */
  data?: GetCheckConnectivityJobsResponseBodyData[];
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
   * The error details returned by the backend.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
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
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetCheckConnectivityJobsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

