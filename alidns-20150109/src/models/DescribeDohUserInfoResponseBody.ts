// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDohUserInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of accessed domains.
   * 
   * @example
   * 123
   */
  domainCount?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud public DNS user.
   * 
   * @example
   * 12345678
   */
  pdnsId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0F32959D-417B-4D66-8463-68606605E3E2
   */
  requestId?: string;
  /**
   * @remarks
   * The number of accessed subdomains.
   * 
   * @example
   * 123
   */
  subDomainCount?: number;
  static names(): { [key: string]: string } {
    return {
      domainCount: 'DomainCount',
      pdnsId: 'PdnsId',
      requestId: 'RequestId',
      subDomainCount: 'SubDomainCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainCount: 'number',
      pdnsId: 'number',
      requestId: 'string',
      subDomainCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

