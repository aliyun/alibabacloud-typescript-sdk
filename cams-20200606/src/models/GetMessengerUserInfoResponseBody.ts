// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessengerUserInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The personnel ID.
   * 
   * @example
   * Sample value
   */
  id?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Sample value
   */
  name?: string;
  /**
   * @remarks
   * The image URL.
   * 
   * @example
   * {"data":{"is_silhouette":false,"width":50,"url":"https://platform-lookaside.fbsbx.com/platform/profilepic/?eai=Aa4GrcPn_GreVmnksES-ikHy_fWLYbwACaaEnVMxMwYV0XtSBJqPtoqBUH4Z6RNXYEWVqqyuQ6_T&psid=25422133907435439&height=50&width=50&ext=1797389880&hash=Afugk9UPjVZkA-OkTjSoDlf-","height":50}}
   */
  picture?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      picture: 'Picture',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      picture: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.picture) {
      $dara.Model.validateMap(this.picture);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessengerUserInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The request status code. Valid values:
   * 
   * - OK: The request is successful.
   * 
   * - Other error codes. For more information, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * Sample value
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {"Name": "Test"}
   */
  data?: GetMessengerUserInfoResponseBodyData;
  /**
   * @remarks
   * The returned message.
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
   * A8831569-3D0E-5168-8E19-462ACF9DD568
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * - true: Successful.
   * 
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: GetMessengerUserInfoResponseBodyData,
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

