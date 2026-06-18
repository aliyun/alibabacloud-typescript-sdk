// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomerInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Custom fields.
   */
  customizeFields?: { [key: string]: any };
  /**
   * @remarks
   * Nickname.
   * 
   * @example
   * 测试会员
   */
  nick?: string;
  /**
   * @remarks
   * External ID.
   * 
   * @example
   * 6666666
   */
  outerId?: string;
  /**
   * @remarks
   * Profile picture.
   * 
   * @example
   * https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLSW7XPFlJDwVunXP8pr84TvltwtLlNqTlOVSFeM3bCgn57mAB4JuZZmvMW0qicqW0PyzyUdZpxiaFQ
   */
  photo?: string;
  /**
   * @remarks
   * Real name.
   * 
   * @example
   * 刘测试
   */
  realName?: string;
  /**
   * @remarks
   * Membership ID.
   * 
   * @example
   * 823456789023
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      customizeFields: 'CustomizeFields',
      nick: 'Nick',
      outerId: 'OuterId',
      photo: 'Photo',
      realName: 'RealName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customizeFields: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      nick: 'string',
      outerId: 'string',
      photo: 'string',
      realName: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(this.customizeFields) {
      $dara.Model.validateMap(this.customizeFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomerInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Membership information.
   */
  data?: GetCustomerInfoResponseBodyData;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * DF6A3FB7-A5AA-43BE-A65B
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call succeeded.
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
      data: GetCustomerInfoResponseBodyData,
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

