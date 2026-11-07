// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitializeServiceLinkRoleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The permission that is granted to the RAM user to call the API operation.
   * 
   * @example
   * ram:CreateServiceLinkedRole
   */
  requiredPermission?: string;
  /**
   * @remarks
   * The name of the created service-linked role.
   * 
   * @example
   * AliyunServiceRoleForMSE
   */
  roleName?: string;
  /**
   * @remarks
   * The service to which the service-linked role belongs.
   * 
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
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: InitializeServiceLinkRoleResponseBodyData;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5E7D4E3-D30C-56C1-817F-F2B8CE6BXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - `true`: The request was successful.
   * 
   * - `false`: The request failed.
   * 
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

