// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainSpecialBizDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * 123
   */
  bizId?: number;
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
      bizId: 'BizId',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'number',
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

