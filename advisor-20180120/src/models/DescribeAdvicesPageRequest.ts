// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvicesPageRequest extends $dara.Model {
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
   * zh
   */
  language?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
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
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceId: 'number',
      checkId: 'string',
      checkPlanId: 'number',
      language: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

