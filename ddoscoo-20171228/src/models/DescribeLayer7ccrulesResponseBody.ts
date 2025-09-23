// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLayer7CCRulesResponseBodyLayer7CCRules extends $dara.Model {
  /**
   * @example
   * close
   */
  act?: string;
  /**
   * @example
   * 100
   */
  count?: number;
  /**
   * @example
   * 60
   */
  interval?: number;
  /**
   * @example
   * match
   */
  mode?: string;
  /**
   * @example
   * testCcRule1
   */
  name?: string;
  /**
   * @example
   * 1000
   */
  ttl?: number;
  /**
   * @example
   * /a/b/c
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      act: 'Act',
      count: 'Count',
      interval: 'Interval',
      mode: 'Mode',
      name: 'Name',
      ttl: 'Ttl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      act: 'string',
      count: 'number',
      interval: 'number',
      mode: 'string',
      name: 'string',
      ttl: 'number',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLayer7CCRulesResponseBody extends $dara.Model {
  layer7CCRules?: DescribeLayer7CCRulesResponseBodyLayer7CCRules[];
  /**
   * @example
   * CF33B4C3-196E-4015-AADD-5CAD00057B80
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      layer7CCRules: 'Layer7CCRules',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layer7CCRules: { 'type': 'array', 'itemType': DescribeLayer7CCRulesResponseBodyLayer7CCRules },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.layer7CCRules)) {
      $dara.Model.validateArray(this.layer7CCRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

