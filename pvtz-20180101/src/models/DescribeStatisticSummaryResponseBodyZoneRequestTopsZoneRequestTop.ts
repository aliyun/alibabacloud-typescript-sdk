// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop extends $dara.Model {
  /**
   * @remarks
   * The business type. Valid values:
   * 
   * *   AUTH_ZONE: authoritative zone
   * *   RESOLVER_RULE: forwarding rule
   * *   INBOUND: inbound endpoint
   * 
   * @example
   * AUTH_ZONE
   */
  bizType?: string;
  /**
   * @remarks
   * The number of DNS requests on the previous day.
   * 
   * @example
   * 2251
   */
  requestCount?: number;
  /**
   * @remarks
   * The zone name.
   * 
   * @example
   * test.com
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      requestCount: 'RequestCount',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      requestCount: 'number',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

