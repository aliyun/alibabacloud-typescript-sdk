// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceLinkedRoleForProductResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the service-linked role exists.
   * 
   * @example
   * true
   */
  checkPass?: boolean;
  /**
   * @remarks
   * The name of the service-linked role.
   * 
   * @example
   * AliyunServiceRoleForEventBridgeConnectVPC
   */
  stsRoleName?: string;
  static names(): { [key: string]: string } {
    return {
      checkPass: 'CheckPass',
      stsRoleName: 'StsRoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkPass: 'boolean',
      stsRoleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckServiceLinkedRoleForProductResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of \\`Success\\` indicates that the request is successful. For more information about other error codes, see Error codes.
   * 
   * Success: The request is successful.
   * 
   * Other codes indicate that the request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: CheckServiceLinkedRoleForProductResponseBodyData;
  /**
   * @remarks
   * The returned message. If the request is successful, \\`Success\\` is returned. If the request fails, an error message is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34AD682D-5B91-5773-8132-AA38C130****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. \\`true\\`: The request was successful. \\`false\\`: The request failed.
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
      data: CheckServiceLinkedRoleForProductResponseBodyData,
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

