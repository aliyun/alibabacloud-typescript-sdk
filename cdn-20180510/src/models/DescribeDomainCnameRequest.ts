// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainCnameRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name that you want to query. Separate multiple domain names with commas (,). This parameter cannot be left empty.
   * 
   * This parameter is required.
   * 
   * @example
   * pay.slci6c.mbolsos.com,mch.b7r2v7.mbolsos.com,p.h99e.mbolsos.com,p.xmko.mbolsos.com,p.f2kd.mbolsos.com
   */
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

