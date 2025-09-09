// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableListByTypeResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * Indicates the property of a table.
   * 
   * @example
   * single
   */
  property?: string;
  /**
   * @remarks
   * Indicates the name of the table.
   * 
   * @example
   * employee_split
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableListByTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the information about tables.
   */
  list?: DescribeTableListByTypeResponseBodyList[];
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
   * Indicates the number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates the unique ID of the request. If the request fails, provide this ID for technical support to troubleshoot the failure.
   * 
   * @example
   * B360F47B-59E3-4D1C-BA03-6BFB1C993F88
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
   * Indicates the total number of returned tables.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeTableListByTypeResponseBodyList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

