// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2
   */
  companyId?: number;
  /**
   * @example
   * order
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
   * 12
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

