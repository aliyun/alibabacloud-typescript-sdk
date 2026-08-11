// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlashSmsProvidersResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The provider parameter information.
   * 
   * @example
   * {\\"Pwd\\":{\\"displayName\\":\\"密码\\",\\"dataType\\":\\"TEXT\\",\\"displayOrder\\":2,\\"required\\":true,\\"maxLength\\":64},\\"User\\":{\\"displayName\\":\\"用户\\",\\"dataType\\":\\"TEXT\\",\\"displayOrder\\":1,\\"required\\":true,\\"maxLength\\":64},\\"Account\\":{\\"displayName\\":\\"账号\\",\\"dataType\\":\\"TEXT\\",\\"displayOrder\\":3,\\"required\\":true,\\"maxLength\\":64}}
   */
  profileSchema?: string;
  /**
   * @remarks
   * The provider ID.
   * 
   * @example
   * Uincall
   */
  providerId?: string;
  /**
   * @remarks
   * The provider name.
   * 
   * @example
   * 北京优音通信有限公司
   */
  providerName?: string;
  static names(): { [key: string]: string } {
    return {
      profileSchema: 'ProfileSchema',
      providerId: 'ProviderId',
      providerName: 'ProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profileSchema: 'string',
      providerId: 'string',
      providerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlashSmsProvidersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: ListFlashSmsProvidersResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Instance does not exist. Instance=outb003
   */
  message?: string;
  /**
   * @remarks
   * The list of variable values in the error message.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b04
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListFlashSmsProvidersResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

