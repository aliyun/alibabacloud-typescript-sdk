// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTerminalCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of hardware terminals that are bound to users. This parameter is returned only when ClientType is set to 1.
   * 
   * @example
   * 60
   */
  bindUserCount?: number;
  /**
   * @remarks
   * The number of managed terminals.
   * 
   * @example
   * 80
   */
  inManageCount?: number;
  /**
   * @remarks
   * The number of unmanaged terminals.
   * 
   * @example
   * 20
   */
  notInManageCount?: number;
  /**
   * @remarks
   * The total number of terminals.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bindUserCount: 'BindUserCount',
      inManageCount: 'InManageCount',
      notInManageCount: 'NotInManageCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindUserCount: 'number',
      inManageCount: 'number',
      notInManageCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTerminalCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. 200 is returned if the call is successful. An error code is returned if the call fails.
   * 
   * @example
   * PARAM_ERROR
   */
  code?: string;
  /**
   * @remarks
   * The terminal count statistics information.
   */
  data?: GetTerminalCountResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message. This parameter is empty if the call is successful.
   * 
   * @example
   * parameter error
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C5DCE54A-B266-522E-A6ED-468AF45F5AAA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetTerminalCountResponseBodyData,
      httpStatusCode: 'number',
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

