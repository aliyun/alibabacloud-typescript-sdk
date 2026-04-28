// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvisorResourcesRequest extends $dara.Model {
  /**
   * @example
   * abcd
   */
  keyword?: string;
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
      keyword: 'Keyword',
      language: 'Language',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
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

