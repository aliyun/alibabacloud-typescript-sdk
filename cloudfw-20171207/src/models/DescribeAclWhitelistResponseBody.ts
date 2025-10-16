// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclWhitelistResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  domainGroupUseDns?: boolean;
  /**
   * @example
   * false
   */
  natDomainGroupUseDns?: boolean;
  /**
   * @example
   * 7D45133B-DBC0-506B-9DF9-AB0735D3****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  supportMessageType?: boolean;
  /**
   * @example
   * false
   */
  vpcDomainGroupUseDns?: boolean;
  static names(): { [key: string]: string } {
    return {
      domainGroupUseDns: 'DomainGroupUseDns',
      natDomainGroupUseDns: 'NatDomainGroupUseDns',
      requestId: 'RequestId',
      supportMessageType: 'SupportMessageType',
      vpcDomainGroupUseDns: 'VpcDomainGroupUseDns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroupUseDns: 'boolean',
      natDomainGroupUseDns: 'boolean',
      requestId: 'string',
      supportMessageType: 'boolean',
      vpcDomainGroupUseDns: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

