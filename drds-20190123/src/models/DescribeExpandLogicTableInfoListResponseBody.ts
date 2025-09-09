// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExpandLogicTableInfoListResponseBodyDataData extends $dara.Model {
  /**
   * @remarks
   * Indicates the database sharding key.
   * 
   * @example
   * id
   */
  shardDbKey?: string;
  /**
   * @remarks
   * Indicates the table sharding key.
   * 
   * @example
   * address
   */
  shardTbKey?: string;
  /**
   * @remarks
   * Indicates the name of the table.
   * 
   * @example
   * employee_split2
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      shardDbKey: 'ShardDbKey',
      shardTbKey: 'ShardTbKey',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      shardDbKey: 'string',
      shardTbKey: 'string',
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

export class DescribeExpandLogicTableInfoListResponseBodyData extends $dara.Model {
  data?: DescribeExpandLogicTableInfoListResponseBodyDataData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeExpandLogicTableInfoListResponseBodyDataData },
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

export class DescribeExpandLogicTableInfoListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates the result that is returned.
   */
  data?: DescribeExpandLogicTableInfoListResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0B6B7BDC-575D-4A77-A4F8-24B7EF******
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
      data: DescribeExpandLogicTableInfoListResponseBodyData,
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

