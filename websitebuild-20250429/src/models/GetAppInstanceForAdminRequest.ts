// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppInstanceForAdminRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery receipt. The delivery receipt ID is the value of the BizId parameter that is returned when you call the SendSms or SendBatchSms operation.
   * 
   * @example
   * WS20250801154628000001
   */
  bizId?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * > 
   * *   Wildcard domain names are supported. You can use the wildcard character asterisk (\\*) to specify a wildcard domain name.
   * 
   * For example, you can enter \\*.baidu.com to specify the domain name baidu.com.
   * 
   * @example
   * yjdw.bpu.edu.cn-waf
   */
  domain?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      domain: 'Domain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      domain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

