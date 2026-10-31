// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckConnectivityJobByJobIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the data source. This parameter is empty if the check is performed before creation.
   * 
   * @example
   * 192
   */
  dataSourceId?: string;
  /**
   * @remarks
   * The error message returned when the check fails.
   * 
   * @example
   * notFoundIp
   */
  errorMsg?: string;
  /**
   * @remarks
   * The ID of the connectivity check task.
   * 
   * @example
   * 123123
   */
  jobId?: string;
  /**
   * @remarks
   * The job type.
   * 
   * @example
   * application/cluster
   */
  jobType?: string;
  /**
   * @remarks
   * The job status. Valid values: NEW, IN_PROCESS, SUCCESS, and FAILED.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tenant to which the check task belongs.
   * 
   * @example
   * 30001011
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the underlying execution task.
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

export class GetCheckConnectivityJobByJobIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The connectivity check task.
   */
  data?: GetCheckConnectivityJobByJobIdResponseBodyData;
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
   * The error message of the request.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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
      data: GetCheckConnectivityJobByJobIdResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

