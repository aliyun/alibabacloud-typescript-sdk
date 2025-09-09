// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsSlowSqlsResponseBodyItemsItem extends $dara.Model {
  /**
   * @remarks
   * Indicates the IP address of the execution machine.
   * 
   * @example
   * 10.0.***.***
   */
  host?: string;
  /**
   * @remarks
   * Indicates the response time. Unit: ms.
   * 
   * @example
   * 1568267711
   */
  responseTime?: number;
  /**
   * @remarks
   * Indicates the name of the database.
   * 
   * @example
   * user
   */
  schema?: string;
  /**
   * @remarks
   * Indicates the time when the slow SQL query was sent. Unit: ms.
   * 
   * @example
   * 1568267711
   */
  sendTime?: number;
  /**
   * @remarks
   * Indicates the content of the slow SQL query.
   * 
   * @example
   * SELECT   count(1) from   payment_order where   order_status = \\"08\\";
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      responseTime: 'ResponseTime',
      schema: 'Schema',
      sendTime: 'SendTime',
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      responseTime: 'number',
      schema: 'string',
      sendTime: 'number',
      sql: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSlowSqlsResponseBodyItems extends $dara.Model {
  item?: DescribeDrdsSlowSqlsResponseBodyItemsItem[];
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: { 'type': 'array', 'itemType': DescribeDrdsSlowSqlsResponseBodyItemsItem },
    };
  }

  validate() {
    if(Array.isArray(this.item)) {
      $dara.Model.validateArray(this.item);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDrdsSlowSqlsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the details of the slow SQL query.
   */
  items?: DescribeDrdsSlowSqlsResponseBodyItems;
  /**
   * @remarks
   * Indicates the page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Indicates the number of entries returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates the ID of the request.
   * 
   * @example
   * 509BDE17-505A-4B3B-854D-30D3F0******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Indicates the total number of entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeDrdsSlowSqlsResponseBodyItems,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

