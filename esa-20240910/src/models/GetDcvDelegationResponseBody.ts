// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDcvDelegationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The DCV managed domain name.
   * 
   * @example
   * 123456****.dcv.aliyun-esa.com
   */
  delegationDomain?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * example.com
   */
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      delegationDomain: 'DelegationDomain',
      requestId: 'RequestId',
      siteId: 'SiteId',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delegationDomain: 'string',
      requestId: 'string',
      siteId: 'number',
      siteName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

