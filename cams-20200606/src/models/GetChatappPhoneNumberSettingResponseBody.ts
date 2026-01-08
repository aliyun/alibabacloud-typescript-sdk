// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChatappPhoneNumberSettingResponseBodyModel extends $dara.Model {
  /**
   * @example
   * Y
   */
  marketingPaused?: string;
  /**
   * @example
   * 86138****
   */
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      marketingPaused: 'MarketingPaused',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marketingPaused: 'string',
      phoneNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetChatappPhoneNumberSettingResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  model?: GetChatappPhoneNumberSettingResponseBodyModel;
  /**
   * @example
   * 42602478-F7C1-58D2-AFFE-88F7A18***6
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      model: GetChatappPhoneNumberSettingResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

