// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebCCRulesResponseBodyWebCCRules extends $dara.Model {
  act?: string;
  count?: number;
  interval?: number;
  mode?: string;
  name?: string;
  ttl?: number;
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

export class DescribeWebCCRulesResponseBody extends $dara.Model {
  requestId?: string;
  totalCount?: number;
  webCCRules?: DescribeWebCCRulesResponseBodyWebCCRules[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      webCCRules: 'WebCCRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      webCCRules: { 'type': 'array', 'itemType': DescribeWebCCRulesResponseBodyWebCCRules },
    };
  }

  validate() {
    if(Array.isArray(this.webCCRules)) {
      $dara.Model.validateArray(this.webCCRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

