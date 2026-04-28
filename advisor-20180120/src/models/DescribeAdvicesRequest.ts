// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvicesRequest extends $dara.Model {
  /**
   * @example
   * 12345678
   */
  adviceId?: number;
  /**
   * @example
   * EcsHighCpuUtilization
   */
  checkId?: string;
  checkPlanId?: number;
  /**
   * @example
   * 12345678
   */
  excludeAdviceId?: number;
  /**
   * @example
   * zh
   */
  language?: string;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * i-bp67acfmxazb4p****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      adviceId: 'AdviceId',
      checkId: 'CheckId',
      checkPlanId: 'CheckPlanId',
      excludeAdviceId: 'ExcludeAdviceId',
      language: 'Language',
      product: 'Product',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceId: 'number',
      checkId: 'string',
      checkPlanId: 'number',
      excludeAdviceId: 'number',
      language: 'string',
      product: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

