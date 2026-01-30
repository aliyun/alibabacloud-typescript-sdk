// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceResourceTablesResponseBodyTables extends $dara.Model {
  /**
   * @example
   * table-1
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListInstanceResourceTablesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 01D22D08-BA20-5F35-8302-99115F288220
   */
  requestId?: string;
  tables?: ListInstanceResourceTablesResponseBodyTables[];
  /**
   * @example
   * 30
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tables: 'Tables',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tables: { 'type': 'array', 'itemType': ListInstanceResourceTablesResponseBodyTables },
      totalCount: 'string',
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

