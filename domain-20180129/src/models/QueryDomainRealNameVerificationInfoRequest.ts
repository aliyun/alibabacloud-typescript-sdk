// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainRealNameVerificationInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * false
   */
  fetchImage?: boolean;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      fetchImage: 'FetchImage',
      lang: 'Lang',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      fetchImage: 'boolean',
      lang: 'string',
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

