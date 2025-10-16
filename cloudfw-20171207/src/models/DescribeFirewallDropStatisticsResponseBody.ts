// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallDropStatisticsResponseBody extends $dara.Model {
  /**
   * @example
   * 20
   */
  aclDropCnt?: number;
  /**
   * @example
   * 20
   */
  ipsDropCnt?: number;
  /**
   * @example
   * BEA1D173-D5DB-582E-9637-438D5CE3****
   */
  requestId?: string;
  /**
   * @example
   * 50
   */
  totalDropCnt?: number;
  /**
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

