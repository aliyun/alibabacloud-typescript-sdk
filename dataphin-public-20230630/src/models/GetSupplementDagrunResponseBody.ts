// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupplementDagrunResponseBodyDagrunList extends $dara.Model {
  /**
   * @remarks
   * The business date. The time format must comply with the partition format specified by the business unit.
   * 
   * @example
   * 2024-04-01
   */
  bizDate?: string;
  /**
   * @remarks
   * The runtime duration, in seconds.
   * 
   * @example
   * 60s
   */
  duration?: string;
  /**
   * @remarks
   * The end execution timestamp.
   * 
   * @example
   * 1717081789000
   */
  endExecuteTime?: number;
  /**
   * @remarks
   * Dagrun ID
   * 
   * @example
   * dr_2242792_14542
   */
  id?: string;
  /**
   * @remarks
   * The start execution timestamp.
   * 
   * @example
   * 1717081729000
   */
  startExecuteTime?: number;
  /**
   * @remarks
   * The status of the data backfill workflow. Valid values:
   * - INIT: The dagrun is initialized.
   * - CREATE_FAILED: The dagrun fails to be created.
   * - CREATED: The dagrun is created.
   * - READY: The dagrun is ready for execution.
   * - RUNNING: The dagrun is running.
   * - KILLED: The dagrun is stopped.
   * - FAILED: The dagrun fails.
   * - SUCCESS: The dagrun succeeds.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The ID of the data backfill workflow.
   * 
   * @example
   * f_8241792_20201202_2099680
   */
  supplementId?: string;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      duration: 'Duration',
      endExecuteTime: 'EndExecuteTime',
      id: 'Id',
      startExecuteTime: 'StartExecuteTime',
      status: 'Status',
      supplementId: 'SupplementId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      duration: 'string',
      endExecuteTime: 'number',
      id: 'string',
      startExecuteTime: 'number',
      status: 'string',
      supplementId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSupplementDagrunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request is successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The dagrun list.
   */
  dagrunList?: GetSupplementDagrunResponseBodyDagrunList[];
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
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
      dagrunList: 'DagrunList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dagrunList: { 'type': 'array', 'itemType': GetSupplementDagrunResponseBodyDagrunList },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.dagrunList)) {
      $dara.Model.validateArray(this.dagrunList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

