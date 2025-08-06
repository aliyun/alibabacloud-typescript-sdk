// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyVodDomainOwnerRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name of which you want to verify the ownership. You can specify only one domain name in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The verification method. Valid values:
   * 
   * *   **dnsCheck**: uses a Domain Name System (DNS) record
   * *   **fileCheck**: uses a verification file
   * 
   * This parameter is required.
   * 
   * @example
   * dnsCheck
   */
  verifyType?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      verifyType: 'VerifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      verifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

