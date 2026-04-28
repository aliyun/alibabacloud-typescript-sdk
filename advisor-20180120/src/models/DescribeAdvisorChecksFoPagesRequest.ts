// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvisorChecksFoPagesRequest extends $dara.Model {
  /**
   * @example
   * 11*********35
   */
  assumeAliyunId?: number;
  /**
   * @example
   * 2
   */
  bizCategory?: string;
  /**
   * @example
   * *
   */
  category?: string;
  checkTypes?: number[];
  language?: string;
  /**
   * @example
   * ****
   */
  name?: string;
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
   * *
   */
  source?: string;
  /**
   * @example
   * enabled
   */
  status?: string;
  /**
   * @example
   * ***
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      assumeAliyunId: 'AssumeAliyunId',
      bizCategory: 'BizCategory',
      category: 'Category',
      checkTypes: 'CheckTypes',
      language: 'Language',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      product: 'Product',
      source: 'Source',
      status: 'Status',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeAliyunId: 'number',
      bizCategory: 'string',
      category: 'string',
      checkTypes: { 'type': 'array', 'itemType': 'number' },
      language: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      product: 'string',
      source: 'string',
      status: 'string',
      token: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkTypes)) {
      $dara.Model.validateArray(this.checkTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

