// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainSpecialBizInfoByDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The business type.
   * 
   * This parameter is required.
   * 
   * @example
   * govRegister
   */
  bizType?: string;
  /**
   * @remarks
   * The domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * test003.cn
   */
  domainName?: string;
  /**
   * @remarks
   * The IP address of the client.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      domainName: 'DomainName',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      domainName: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

