// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecycleBinTablesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the table was created.
   * 
   * @example
   * 2019-09-16 14:42:06
   */
  createTime?: string;
  /**
   * @remarks
   * The original name of the table.
   * 
   * @example
   * BIN_T4AG3CY5WWXPKHITCHJY
   */
  originalTableName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      originalTableName: 'OriginalTableName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      originalTableName: 'string',
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

export class DescribeRecycleBinTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object returned.
   */
  data?: DescribeRecycleBinTablesResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5D64DE5944A1E541E0CB908A
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
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
      data: { 'type': 'array', 'itemType': DescribeRecycleBinTablesResponseBodyData },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

