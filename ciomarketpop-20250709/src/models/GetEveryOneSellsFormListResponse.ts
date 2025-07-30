// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class GetEveryOneSellsFormListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * virtualMainDepartment
   */
  virtualMainDepartment?: string;
  /**
   * @example
   * virtualDepartmentName
   */
  virtualDepartmentName?: string;
  /**
   * @example
   * virtualDepartmentCode
   */
  virtualDepartmentCode?: string;
  /**
   * @example
   * virtualParentDepartment
   */
  virtualParentDepartment?: string;
  /**
   * @example
   * virtualDepartmentStatus
   */
  virtualDepartmentStatus?: string;
  /**
   * @example
   * 1234
   */
  dingId?: string;
  /**
   * @example
   * work
   */
  empStatus?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      virtualMainDepartment: 'VirtualMainDepartment',
      virtualDepartmentName: 'VirtualDepartmentName',
      virtualDepartmentCode: 'VirtualDepartmentCode',
      virtualParentDepartment: 'VirtualParentDepartment',
      virtualDepartmentStatus: 'VirtualDepartmentStatus',
      dingId: 'DingId',
      empStatus: 'EmpStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      virtualMainDepartment: 'string',
      virtualDepartmentName: 'string',
      virtualDepartmentCode: 'string',
      virtualParentDepartment: 'string',
      virtualDepartmentStatus: 'string',
      dingId: 'string',
      empStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEveryOneSellsFormListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEveryOneSellsFormListResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': GetEveryOneSellsFormListResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

