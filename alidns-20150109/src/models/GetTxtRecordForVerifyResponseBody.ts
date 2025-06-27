// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTxtRecordForVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * >  If you do not specify this parameter, it is not returned.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The top-level domain name.
   * 
   * @example
   * com
   */
  parentDomainName?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * aliyunRetrieval
   */
  RR?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9CC0D642-49D4-48DE-A1A5-9F218652E4A7
   */
  requestId?: string;
  /**
   * @remarks
   * The record value.
   * 
   * >  The validity period is three days.
   * 
   * @example
   * c99419e6997f41daaa3e*****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      parentDomainName: 'ParentDomainName',
      RR: 'RR',
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      parentDomainName: 'string',
      RR: 'string',
      requestId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

