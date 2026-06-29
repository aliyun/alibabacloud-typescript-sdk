// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupplementDagrunResponseBodyDagrunList extends $dara.Model {
  /**
   * @remarks
   * The business date. The time format must conform to the partition format specified by the business unit.
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
   * The execution end timestamp.
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
   * The execution start timestamp.
   * 
   * @example
   * 1717081729000
   */
  startExecuteTime?: number;
  /**
   * @remarks
   * The status of the data backfill instance workflow. Valid values:
   * 
   * - INIT: dagrun init.
   * - CREATE_FAILED: dagrun creation failed.
   * - CREATED: dagrun created.
   * - READY: dagrun ready for exec.
   * - RUNNING: dagrun running.
   * - KILLED: dagrun stopped.
   * - FAILED: dagrun failed.
   * - SUCCESS: dagrun succeeded.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The ID of the data backfill instance workflow.
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
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The list of dagruns.
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
   * Indicates whether the request was successful.
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

