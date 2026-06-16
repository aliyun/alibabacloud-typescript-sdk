// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppDomainDnsRecordRequest extends $dara.Model {
  /**
   * @remarks
   * Business ID.
   * 
   * @example
   * WD20250821114240000001
   */
  bizId?: string;
  /**
   * @remarks
   * Domain name.
   * 
   * @example
   * rayihealth.cn
   */
  domainName?: string;
  /**
   * @remarks
   * The purpose of querying DNS configuration.
   * 
   * @example
   * restore
   */
  purpose?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      domainName: 'DomainName',
      purpose: 'Purpose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      domainName: 'string',
      purpose: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

