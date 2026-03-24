// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecEventDomainStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of APIs that have security events for the domain name.
   * 
   * @example
   * 10
   */
  apiCount?: number;
  /**
   * @remarks
   * The domain name that is protected by WAF.
   * 
   * @example
   * a.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The number of high-risk security events for the domain name.
   * 
   * @example
   * 10
   */
  high?: number;
  /**
   * @remarks
   * The number of low-risk security events for the domain name.
   * 
   * @example
   * 2
   */
  low?: number;
  /**
   * @remarks
   * The number of medium-risk security events for the domain name.
   * 
   * @example
   * 6
   */
  medium?: number;
  static names(): { [key: string]: string } {
    return {
      apiCount: 'ApiCount',
      domain: 'Domain',
      high: 'High',
      low: 'Low',
      medium: 'Medium',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiCount: 'number',
      domain: 'string',
      high: 'number',
      low: 'number',
      medium: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApisecEventDomainStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API security event statistics grouped by domain name.
   */
  data?: DescribeApisecEventDomainStatisticResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66A98669-*******-80A6-3014697B11AE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of domain names that have API security events.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeApisecEventDomainStatisticResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

