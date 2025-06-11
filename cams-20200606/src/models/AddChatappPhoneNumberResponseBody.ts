// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddChatappPhoneNumberResponseBody extends $dara.Model {
  /**
   * @remarks
   * com.alicom.access.oxs.client.channel.aliyun.flow.AyFlowExecuteService
   * 
   * @example
   * http://pop_access_slb_sgvpc/#vpc
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * com.alicom.access.oxs.client.channel.aliyun.flow.dto.AyCommonApiRequest
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * formData
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  /**
   * @remarks
   * 13800000000
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

