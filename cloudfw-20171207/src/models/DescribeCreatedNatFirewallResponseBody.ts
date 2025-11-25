// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCreatedNatFirewallResponseBodyCreatedNatFirewalls extends $dara.Model {
  /**
   * @example
   * cfw-adk2ad45sf4t8****
   */
  natFirewallId?: string;
  /**
   * @example
   * ngw-uf6i0zkjtz4t2sttf****
   */
  natGatewayId?: string;
  /**
   * @example
   * ngw-text
   */
  natGatewayName?: string;
  static names(): { [key: string]: string } {
    return {
      natFirewallId: 'NatFirewallId',
      natGatewayId: 'NatGatewayId',
      natGatewayName: 'NatGatewayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natFirewallId: 'string',
      natGatewayId: 'string',
      natGatewayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCreatedNatFirewallResponseBody extends $dara.Model {
  createdNatFirewalls?: DescribeCreatedNatFirewallResponseBodyCreatedNatFirewalls[];
  /**
   * @example
   * 072B5287-8A85-529E-BD47-F8AC2DB1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createdNatFirewalls: 'CreatedNatFirewalls',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdNatFirewalls: { 'type': 'array', 'itemType': DescribeCreatedNatFirewallResponseBodyCreatedNatFirewalls },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.createdNatFirewalls)) {
      $dara.Model.validateArray(this.createdNatFirewalls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

