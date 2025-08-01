// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeServiceLinkRoleResponseBodyData extends $dara.Model {
  /**
   * @example
   * ram:CreateServiceLinkedRole
   */
  requiredPermission?: string;
  /**
   * @example
   * AliyunServiceRoleForMSE
   */
  roleName?: string;
  /**
   * @example
   * mse.aliyuncs.com
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      requiredPermission: 'RequiredPermission',
      roleName: 'RoleName',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requiredPermission: 'string',
      roleName: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeServiceLinkRoleResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: InitializeServiceLinkRoleResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * A5E7D4E3-D30C-56C1-817F-F2B8CE6BXXXX
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
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InitializeServiceLinkRoleResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

