// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchQueryDepartmentResponseBodyModuleItems extends $dara.Model {
  deptName?: string;
  managerEmployeeIdList?: string[];
  outDeptId?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'dept_name',
      managerEmployeeIdList: 'manager_employee_id_list',
      outDeptId: 'out_dept_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      managerEmployeeIdList: { 'type': 'array', 'itemType': 'string' },
      outDeptId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.managerEmployeeIdList)) {
      $dara.Model.validateArray(this.managerEmployeeIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQueryDepartmentResponseBodyModule extends $dara.Model {
  hasMore?: boolean;
  items?: BatchQueryDepartmentResponseBodyModuleItems[];
  nextCursorToken?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      hasMore: 'has_more',
      items: 'items',
      nextCursorToken: 'next_cursor_token',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasMore: 'boolean',
      items: { 'type': 'array', 'itemType': BatchQueryDepartmentResponseBodyModuleItems },
      nextCursorToken: 'string',
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

export class BatchQueryDepartmentResponseBody extends $dara.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  module?: BatchQueryDepartmentResponseBodyModule;
  requestId?: string;
  success?: boolean;
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
      module: BatchQueryDepartmentResponseBodyModule,
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

