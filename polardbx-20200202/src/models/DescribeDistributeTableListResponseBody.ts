// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDistributeTableListResponseBodyDataTables extends $dara.Model {
  /**
   * @remarks
   * The data key.
   * 
   * @example
   * id
   */
  dbKey?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * sbtest1
   */
  tableName?: string;
  /**
   * @remarks
   * The table type.
   * 
   * @example
   * multi
   */
  tableType?: string;
  /**
   * @remarks
   * The table key.
   * 
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
  /**
   * @remarks
   * The list of tables.
   */
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
  /**
   * @remarks
   * The data struct.
   */
  data?: DescribeDistributeTableListResponseBodyData;
  /**
   * @remarks
   * The response message. "success" is returned if the request is successful. Otherwise, an error code is returned.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
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

