// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDistributeTableListResponseBodyDataTables extends $dara.Model {
  /**
   * @example
   * id
   */
  dbKey?: string;
  /**
   * @example
   * sbtest1
   */
  tableName?: string;
  /**
   * @example
   * multi
   */
  tableType?: string;
  /**
   * @example
   * “”
   */
  tbKey?: string;
  static names(): { [key: string]: string } {
    return {
      dbKey: 'DbKey',
      tableName: 'TableName',
      tableType: 'TableType',
      tbKey: 'TbKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbKey: 'string',
      tableName: 'string',
      tableType: 'string',
      tbKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributeTableListResponseBodyData extends $dara.Model {
  tables?: DescribeDistributeTableListResponseBodyDataTables[];
  static names(): { [key: string]: string } {
    return {
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tables: { 'type': 'array', 'itemType': DescribeDistributeTableListResponseBodyDataTables },
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributeTableListResponseBody extends $dara.Model {
  data?: DescribeDistributeTableListResponseBodyData;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDistributeTableListResponseBodyData,
      message: 'string',
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

