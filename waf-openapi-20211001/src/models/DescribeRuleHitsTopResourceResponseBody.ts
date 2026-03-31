// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleHitsTopResourceResponseBodyRuleHitsTopResource extends $dara.Model {
  /**
   * @remarks
   * The number of requests that match protection rules.
   * 
   * @example
   * 14219
   */
  count?: number;
  /**
   * @remarks
   * The protected object.
   * 
   * @example
   * www.aliyundoc.com
   */
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      resource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ADA11BC7-AA95-5C31-9095-5802C02ED1DC
   */
  requestId?: string;
  /**
   * @remarks
   * The array of the top 10 protected objects that trigger protection rules.
   */
  ruleHitsTopResource?: DescribeRuleHitsTopResourceResponseBodyRuleHitsTopResource[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopResource: 'RuleHitsTopResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopResource: { 'type': 'array', 'itemType': DescribeRuleHitsTopResourceResponseBodyRuleHitsTopResource },
    };
  }

  validate() {
    if(Array.isArray(this.ruleHitsTopResource)) {
      $dara.Model.validateArray(this.ruleHitsTopResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

