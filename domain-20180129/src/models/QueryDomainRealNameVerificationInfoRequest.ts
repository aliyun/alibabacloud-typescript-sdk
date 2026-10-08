// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainRealNameVerificationInfoRequest extends $dara.Model {
  /**
   * @remarks
   * Domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * Specifies whether to retrieve the real-name verification image. Valid values:  
   * - **true**: Retrieve the image.  
   * - **false**: Do not retrieve the image.
   * 
   * @example
   * false
   */
  fetchImage?: boolean;
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values:  
   * - **zh**: Chinese.  
   * - **en**: English.  
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * User IP address.
   * 
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

