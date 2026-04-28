// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvicesFlatPageRequest extends $dara.Model {
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
   * i-2zecnwitr2s7aca6****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      adviceId: 'AdviceId',
      checkId: 'CheckId',
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

