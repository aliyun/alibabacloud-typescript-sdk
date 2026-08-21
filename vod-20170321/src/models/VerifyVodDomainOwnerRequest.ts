// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyVodDomainOwnerRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name to verify. Only a single domain name can be verified at a time.
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
   * The domain name ownership verification method. Valid values:
   * 
   * - **dnsCheck**: DNS resolution verification.
   * - **fileCheck**: File verification.
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

