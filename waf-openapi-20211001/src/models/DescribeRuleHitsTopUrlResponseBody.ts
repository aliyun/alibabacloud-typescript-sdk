// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleHitsTopUrlResponseBodyRuleHitsTopUrl extends $dara.Model {
  /**
   * @remarks
   * The number of requests that match protection rules.
   * 
   * @example
   * 21862
   */
  count?: number;
  /**
   * @remarks
   * The request URL.
   * 
   * >  The value is Base64-encoded.
   * 
   * @example
   * d3d3LmFsaXl1bmRvYy5jb20vcGF0aDM=
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRuleHitsTopUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D8AF43B-08EB-51CE-B33A-93AA****9B0C
   */
  requestId?: string;
  /**
   * @remarks
   * The top 10 URLs that match protection rules.
   */
  ruleHitsTopUrl?: DescribeRuleHitsTopUrlResponseBodyRuleHitsTopUrl[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopUrl: 'RuleHitsTopUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopUrl: { 'type': 'array', 'itemType': DescribeRuleHitsTopUrlResponseBodyRuleHitsTopUrl },
    };
  }

  validate() {
    if(Array.isArray(this.ruleHitsTopUrl)) {
      $dara.Model.validateArray(this.ruleHitsTopUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

