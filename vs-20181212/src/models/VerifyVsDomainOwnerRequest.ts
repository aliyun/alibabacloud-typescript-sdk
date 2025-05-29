// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyVsDomainOwnerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
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

