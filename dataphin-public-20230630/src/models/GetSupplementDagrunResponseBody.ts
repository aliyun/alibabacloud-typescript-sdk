// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupplementDagrunResponseBodyDagrunList extends $dara.Model {
  /**
   * @example
   * 2024-04-01
   */
  bizDate?: string;
  /**
   * @example
   * 60s
   */
  duration?: string;
  /**
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
   * @example
   * 1717081729000
   */
  startExecuteTime?: number;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  dagrunList?: GetSupplementDagrunResponseBodyDagrunList[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
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

