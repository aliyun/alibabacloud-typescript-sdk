// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeParseSettingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the configuration was successfully updated.
   * 
   * - true: The configuration was updated.
   * 
   * - false: The configuration failed to be updated.
   * 
   * @example
   * true
   */
  changeResult?: boolean;
  static names(): { [key: string]: string } {
    return {
      changeResult: 'ChangeResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeResult: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeParseSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The data returned for a successful request.
   */
  data?: ChangeParseSettingResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * User not authorized to operate on the specified resource.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7BA8ADD9-53D6-53F0-918F-A1E776AD230E
   */
  requestId?: string;
  /**
   * @remarks
   * The status code returned for the request.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - true: The request was successful.
   * 
   * - false: The request failed.
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
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ChangeParseSettingResponseBodyData,
      message: 'string',
      requestId: 'string',
      status: 'string',
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

