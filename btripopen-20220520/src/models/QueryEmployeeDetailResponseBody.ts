// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEmployeeDetailResponseBodyModule extends $dara.Model {
  email?: string;
  /**
   * @example
   * false
   */
  isLeave?: boolean;
  /**
   * @example
   * "12138"
   */
  jobNumber?: string;
  nickName?: string;
  /**
   * @example
   * "123456"
   */
  outDeptId?: string;
  outDeptIdList?: string[];
  /**
   * @example
   * "abc12138"
   */
  outEmployeeId?: string;
  phoneNo?: string;
  realName?: string;
  /**
   * @example
   * "zhang/san"
   */
  realNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      isLeave: 'is_leave',
      jobNumber: 'job_number',
      nickName: 'nick_name',
      outDeptId: 'out_dept_id',
      outDeptIdList: 'out_dept_id_list',
      outEmployeeId: 'out_employee_id',
      phoneNo: 'phone_no',
      realName: 'real_name',
      realNameEn: 'real_name_en',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      isLeave: 'boolean',
      jobNumber: 'string',
      nickName: 'string',
      outDeptId: 'string',
      outDeptIdList: { 'type': 'array', 'itemType': 'string' },
      outEmployeeId: 'string',
      phoneNo: 'string',
      realName: 'string',
      realNameEn: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outDeptIdList)) {
      $dara.Model.validateArray(this.outDeptIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEmployeeDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * None
   */
  message?: string;
  module?: QueryEmployeeDetailResponseBodyModule;
  /**
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 21041ce316577904808056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      module: QueryEmployeeDetailResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

