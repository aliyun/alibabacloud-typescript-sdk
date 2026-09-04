// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckHealthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authentication source. Valid values: bearer and aliyun_gateway.
   * 
   * @example
   * aliyun_gateway
   */
  authSource?: string;
  /**
   * @remarks
   * The caller type. Valid values: user, aliyun_main, aliyun_ram, and service.
   * 
   * @example
   * aliyun_main
   */
  callerType?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The name of the currently effective digital employee. This value is empty if not configured.
   * 
   * @example
   * pcitc-magent
   */
  digitalEmployeeName?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F4A9EB1C-6952-5CCC-B1DC-355576FC82A7
   */
  requestId?: string;
  /**
   * @remarks
   * The effective tenant ID.
   * 
   * @example
   * 21577
   */
  tenantId?: number;
  /**
   * @remarks
   * The platform user ID.
   * 
   * @example
   * 10001
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      authSource: 'authSource',
      callerType: 'callerType',
      code: 'code',
      digitalEmployeeName: 'digitalEmployeeName',
      message: 'message',
      requestId: 'requestId',
      tenantId: 'tenantId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authSource: 'string',
      callerType: 'string',
      code: 'string',
      digitalEmployeeName: 'string',
      message: 'string',
      requestId: 'string',
      tenantId: 'number',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

