// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppDomainDnsRecordRequest extends $dara.Model {
  /**
   * @example
   * WD20250821114240000001
   */
  bizId?: string;
  /**
   * @example
   * rayihealth.cn
   */
  domainName?: string;
  /**
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

