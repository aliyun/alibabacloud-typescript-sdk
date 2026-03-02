// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 62
   */
  companyId?: number;
  /**
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * snowberg-staging
   */
  name?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 56
   */
  productId?: number;
  /**
   * @example
   * Redis
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      companyId: 'companyId',
      env: 'env',
      name: 'name',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      productId: 'productId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyId: 'number',
      env: 'string',
      name: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

