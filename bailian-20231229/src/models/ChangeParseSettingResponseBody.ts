// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeParseSettingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the configuration was changed. Valid values:
   * - true: The configuration was updated.
   * - false: The configuration was not changed. The modification failed.
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
   * The error status code.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The business data returned when the request is successful.
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
   * The status code returned by the operation.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
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

