// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperateCallCenterForPartnerRequest extends $dara.Model {
  /**
   * @example
   * esp.beian_assist
   */
  bizType?: string;
  /**
   * @example
   * MakeCall
   */
  callAction?: string;
  /**
   * @example
   * 12323213
   */
  employeeCode?: string;
  /**
   * @example
   * {}
   */
  request?: string;
  /**
   * @example
   * t4uor8evmq9nk
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      callAction: 'CallAction',
      employeeCode: 'EmployeeCode',
      request: 'Request',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      callAction: 'string',
      employeeCode: 'string',
      request: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

