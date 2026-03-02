// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPdpLanesRequest extends $dara.Model {
  /**
   * @example
   * 4
   */
  companyId?: number;
  /**
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * 1
   */
  inletServiceId?: number;
  /**
   * @example
   * yunmall
   */
  keyword?: string;
  /**
   * @example
   * gmt_create
   */
  orderBy?: string;
  /**
   * @example
   * DESC
   */
  orderDirection?: string;
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
   * 1193
   */
  productId?: number;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      env: 'env',
      inletServiceId: 'inletServiceId',
      keyword: 'keyword',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      productId: 'productId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      env: 'string',
      inletServiceId: 'number',
      keyword: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

