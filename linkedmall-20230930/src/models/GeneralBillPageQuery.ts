// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GeneralBillPageQuery extends $dara.Model {
  /**
   * @remarks
   * asc
   */
  asc?: boolean;
  /**
   * @remarks
   * billId
   */
  billId?: string;
  /**
   * @remarks
   * billPeriod
   */
  billPeriod?: string;
  /**
   * @remarks
   * limit
   */
  limit?: number;
  /**
   * @remarks
   * orderBy
   */
  orderBy?: string;
  /**
   * @remarks
   * orderDirection
   */
  orderDirection?: string;
  /**
   * @remarks
   * pageNumber
   */
  pageNumber?: number;
  /**
   * @remarks
   * pageSize
   */
  pageSize?: number;
  /**
   * @remarks
   * shopId
   */
  shopId?: string;
  /**
   * @remarks
   * start
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      asc: 'asc',
      billId: 'billId',
      billPeriod: 'billPeriod',
      limit: 'limit',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      shopId: 'shopId',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asc: 'boolean',
      billId: 'string',
      billPeriod: 'string',
      limit: 'number',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      shopId: 'string',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

