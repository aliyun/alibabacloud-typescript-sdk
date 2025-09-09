// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * Indicates the name of a column.
   * 
   * @example
   * Id
   */
  columnName?: string;
  /**
   * @remarks
   * Indicates the type of the column.
   * 
   * @example
   * bigint(20)
   */
  columnType?: string;
  /**
   * @remarks
   * Extra
   * 
   * @example
   * auto_increment
   */
  extra?: string;
  /**
   * @remarks
   * Indicates the primary key of the table.
   * 
   * @example
   * PRI
   */
  index?: string;
  /**
   * @remarks
   * Indicates whether the column can be empty.
   * 
   * @example
   * NO
   */
  isAllowNull?: string;
  /**
   * @remarks
   * Indicates whether the column is the primary key column of the table.
   * 
   * @example
   * YES
   */
  isPk?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      extra: 'Extra',
      index: 'Index',
      isAllowNull: 'IsAllowNull',
      isPk: 'IsPk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      columnType: 'string',
      extra: 'string',
      index: 'string',
      isAllowNull: 'string',
      isPk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates the details about the table schema.
   */
  list?: DescribeTableResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeTableResponseBodyDataList },
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

export class DescribeTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the returned data.
   */
  data?: DescribeTableResponseBodyData;
  /**
   * @remarks
   * Indicates the unique ID of the request. If the request fails, provide this ID for technical support to troubleshoot the failure.
   * 
   * @example
   * B5644ABB-559A-4A1C-83F2-9E7209******
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
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeTableResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

