// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisecEventDomainStatisticResponseBodyData extends $dara.Model {
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
   * a.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The number of high-risk security events.
   * 
   * @example
   * 10
   */
  high?: number;
  /**
   * @remarks
   * The number of low-risk security events.
   * 
   * @example
   * 2
   */
  low?: number;
  /**
   * @remarks
   * The number of medium-risk security events.
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

