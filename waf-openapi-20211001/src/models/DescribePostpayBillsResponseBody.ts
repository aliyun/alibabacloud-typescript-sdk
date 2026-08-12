// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayBillsResponseBodyBillDetail extends $dara.Model {
  /**
   * @remarks
   * The bill usage details. The value is a JSON string constructed from a series of parameters. For more information, refer to **Supplementary description of response parameters**.
   * 
   * @example
   * {\\"aiWhiteListTemplateCount\\":4,\\"apisecResourceCount\\":2,\\"botAppTemplateCount\\":1,\\"botWebTemplateCount\\":4,\\"ccRuleCount\\":1,\\"customAclAdvanceRuleCount\\":4,\\"customResponseRuleCount\\":5,\\"dlpRuleCount\\":1,\\"gslb\\":1,\\"instanceFee\\":1,\\"ipv6\\":1,\\"nonPort\\":1,\\"qps\\":0,\\"regionBlockRuleCount\\":1,\\"threatIntelligenceTemplateCount\\":1,\\"wafBaseTemplateCount\\":4}
   */
  chargeData?: string;
  /**
   * @remarks
   * The total Credit.
   * 
   * @example
   * 382
   */
  credit?: number;
  /**
   * @remarks
   * The Credit bill usage details. The value is a JSON string constructed from a series of parameters. For more information, refer to **Supplementary description of response parameters**.
   * 
   * @example
   * {\\"apisecTraffic\\":\\"8000\\",\\"apisecResourceCount\\":\\"3\\"}
   */
  creditChargeData?: string;
  /**
   * @remarks
   * The total SeCU.
   * 
   * @example
   * 51
   */
  cu?: string;
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp (UTC). Unit: seconds.
   * 
   * @example
   * 1779123599
   */
  endTime?: number;
  /**
   * @remarks
   * The Credit consumed by features.
   * 
   * @example
   * 375
   */
  functionCredit?: number;
  /**
   * @remarks
   * The SeCU consumed by features.
   * 
   * @example
   * 30
   */
  functionCu?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp (UTC). Unit: seconds.
   * 
   * @example
   * 1779120000
   */
  startTime?: number;
  /**
   * @remarks
   * The Credit consumed by traffic processing.
   * 
   * @example
   * 7
   */
  trafficCredit?: number;
  /**
   * @remarks
   * The SeCU consumed by traffic processing.
   * 
   * @example
   * 21
   */
  trafficCu?: string;
  static names(): { [key: string]: string } {
    return {
      chargeData: 'ChargeData',
      credit: 'Credit',
      creditChargeData: 'CreditChargeData',
      cu: 'Cu',
      endTime: 'EndTime',
      functionCredit: 'FunctionCredit',
      functionCu: 'FunctionCu',
      startTime: 'StartTime',
      trafficCredit: 'TrafficCredit',
      trafficCu: 'TrafficCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeData: 'string',
      credit: 'number',
      creditChargeData: 'string',
      cu: 'string',
      endTime: 'number',
      functionCredit: 'number',
      functionCu: 'string',
      startTime: 'number',
      trafficCredit: 'number',
      trafficCu: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePostpayBillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of bill details.
   */
  billDetail?: DescribePostpayBillsResponseBodyBillDetail[];
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 24
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. If a next page exists, this field has a return value.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0FBBDE11-C35F-531B-96BA-64CA****C875
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      billDetail: 'BillDetail',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billDetail: { 'type': 'array', 'itemType': DescribePostpayBillsResponseBodyBillDetail },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.billDetail)) {
      $dara.Model.validateArray(this.billDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

