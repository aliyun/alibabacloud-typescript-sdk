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
   * The number of high-level risks.
   * 
   * @example
   * 12
   */
  high?: number;
  /**
   * @remarks
   * The number of low-level risks.
   * 
   * @example
   * 4
   */
  low?: number;
  /**
   * @remarks
   * The number of medium-level risks.
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

