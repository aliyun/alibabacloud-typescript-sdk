// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAclWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the whitelist is enabled. Valid values:
   * - **true**: Enabled.
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  domainGroupUseDns?: boolean;
  /**
   * @remarks
   * Indicates whether domain name DNS is supported in NAT scenarios. Valid values:
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * false
   */
  natDomainGroupUseDns?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7D45133B-DBC0-506B-9DF9-AB0735D3****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the message type is supported. Valid values:
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
   * @example
   * true
   */
  supportMessageType?: boolean;
  /**
   * @remarks
   * Indicates whether domain name DNS is supported in VPC scenarios. Valid values:
   * - **true**: Supported.
   * - **false**: Not supported.
   * 
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

