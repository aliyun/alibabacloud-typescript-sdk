// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePostpayBillsResponseBodyBillDetail extends $dara.Model {
  /**
   * @example
   * {\\"aiWhiteListTemplateCount\\":4,\\"apisecResourceCount\\":2,\\"botAppTemplateCount\\":1,\\"botWebTemplateCount\\":4,\\"ccRuleCount\\":1,\\"customAclAdvanceRuleCount\\":4,\\"customResponseRuleCount\\":5,\\"dlpRuleCount\\":1,\\"gslb\\":1,\\"instanceFee\\":1,\\"ipv6\\":1,\\"nonPort\\":1,\\"qps\\":0,\\"regionBlockRuleCount\\":1,\\"threatIntelligenceTemplateCount\\":1,\\"wafBaseTemplateCount\\":4}
   */
  chargeData?: string;
  /**
   * @example
   * 51
   */
  cu?: string;
  /**
   * @example
   * 1779123599
   */
  endTime?: number;
  /**
   * @example
   * 30
   */
  functionCu?: string;
  /**
   * @example
   * 1779120000
   */
  startTime?: number;
  /**
   * @example
   * 21
   */
  trafficCu?: string;
  static names(): { [key: string]: string } {
    return {
      chargeData: 'ChargeData',
      cu: 'Cu',
      endTime: 'EndTime',
      functionCu: 'FunctionCu',
      startTime: 'StartTime',
      trafficCu: 'TrafficCu',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeData: 'string',
      cu: 'string',
      endTime: 'number',
      functionCu: 'string',
      startTime: 'number',
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
  billDetail?: DescribePostpayBillsResponseBodyBillDetail[];
  /**
   * @example
   * 24
   */
  maxResults?: number;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0*****
   */
  nextToken?: string;
  /**
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

