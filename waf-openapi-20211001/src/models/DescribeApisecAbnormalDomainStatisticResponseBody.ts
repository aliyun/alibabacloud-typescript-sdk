// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecAbnormalDomainStatisticResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of APIs.
   * 
   * @example
   * 10
   */
  apiCount?: number;
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * ba.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The number of high-risk vulnerabilities.
   * 
   * @example
   * 12
   */
  high?: number;
  /**
   * @remarks
   * The number of low-risk vulnerabilities.
   * 
   * @example
   * 4
   */
  low?: number;
  /**
   * @remarks
   * The number of medium-risk vulnerabilities.
   * 
   * @example
   * 9
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

export class DescribeApisecAbnormalDomainStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data list.
   */
  data?: DescribeApisecAbnormalDomainStatisticResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014***B11AE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records returned.
   * 
   * @example
   * 1
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
      data: { 'type': 'array', 'itemType': DescribeApisecAbnormalDomainStatisticResponseBodyData },
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

