// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserQueryResponseBodyModuleItems extends $dara.Model {
  employeeNick?: string;
  /**
   * @example
   * 0
   */
  leaveStatus?: number;
  /**
   * @example
   * 123
   */
  thirdPartEmployeeId?: string;
  /**
   * @example
   * 001
   */
  thirdPartJobNo?: string;
  static names(): { [key: string]: string } {
    return {
      employeeNick: 'employee_nick',
      leaveStatus: 'leave_status',
      thirdPartEmployeeId: 'third_part_employee_id',
      thirdPartJobNo: 'third_part_job_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      employeeNick: 'string',
      leaveStatus: 'number',
      thirdPartEmployeeId: 'string',
      thirdPartJobNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserQueryResponseBodyModule extends $dara.Model {
  /**
   * @example
   * true
   */
  hasMore?: boolean;
  items?: UserQueryResponseBodyModuleItems[];
  /**
   * @example
   * 9YN+jxa7PcxbNUTISeKjEw==
   */
  pageToken?: string;
  /**
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'has_more',
      items: 'items',
      pageToken: 'page_token',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': UserQueryResponseBodyModuleItems },
      pageToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: UserQueryResponseBodyModule;
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
   * 2f624a6316366024344424669e3279
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
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
      message: 'string',
      module: UserQueryResponseBodyModule,
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

