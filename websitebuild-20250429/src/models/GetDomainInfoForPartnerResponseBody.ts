// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDomainInfoForPartnerResponseBodyDataOwnership extends $dara.Model {
  /**
   * @remarks
   * The member name.
   * 
   * @example
   * 1189245564569485
   */
  account?: string;
  /**
   * @remarks
   * The provider.
   * 
   * @example
   * pai
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'Account',
      provider: 'Provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: 'string',
      provider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainInfoForPartnerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * playnew-alilive.daotantan.com
   */
  domainName?: string;
  /**
   * @remarks
   * The list of DNS server IP addresses.
   * 
   * @example
   * NS3.ALIYUN.COM,NS4.ALIYUN.COM
   */
  nameServers?: string;
  /**
   * @remarks
   * The IP ownership.
   */
  ownership?: GetDomainInfoForPartnerResponseBodyDataOwnership;
  /**
   * @remarks
   * The domain name registrar.
   * 
   * @example
   * aliyun
   */
  registrar?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      nameServers: 'NameServers',
      ownership: 'Ownership',
      registrar: 'Registrar',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      nameServers: 'string',
      ownership: GetDomainInfoForPartnerResponseBodyDataOwnership,
      registrar: 'string',
    };
  }

  validate() {
    if(this.ownership && typeof (this.ownership as any).validate === 'function') {
      (this.ownership as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDomainInfoForPartnerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request result.
   */
  data?: GetDomainInfoForPartnerResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDomainInfoForPartnerResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

