// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallDropStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of packets blocked by access control list (ACL) policies.
   * 
   * @example
   * 20
   */
  aclDropCnt?: number;
  /**
   * @remarks
   * The number of packets blocked by the intrusion prevention system (IPS).
   * 
   * @example
   * 20
   */
  ipsDropCnt?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA1D173-D5DB-582E-9637-438D5CE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of blocked packets.
   * 
   * @example
   * 50
   */
  totalDropCnt?: number;
  /**
   * @remarks
   * The number of packets blocked by the vulnerability prevention feature.
   * 
   * @example
   * 10
   */
  vulnDropCnt?: number;
  static names(): { [key: string]: string } {
    return {
      aclDropCnt: 'AclDropCnt',
      ipsDropCnt: 'IpsDropCnt',
      requestId: 'RequestId',
      totalDropCnt: 'TotalDropCnt',
      vulnDropCnt: 'VulnDropCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclDropCnt: 'number',
      ipsDropCnt: 'number',
      requestId: 'string',
      totalDropCnt: 'number',
      vulnDropCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

