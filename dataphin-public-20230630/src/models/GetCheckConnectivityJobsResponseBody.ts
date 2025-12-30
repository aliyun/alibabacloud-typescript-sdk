// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckConnectivityJobsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 192
   */
  dataSourceId?: string;
  /**
   * @example
   * notFoundIp
   */
  errorMsg?: string;
  /**
   * @example
   * 123123
   */
  jobId?: string;
  /**
   * @example
   * application/cluster
   */
  jobType?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @example
   * 30001011
   */
  tenantId?: string;
  /**
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
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
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

