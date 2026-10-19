// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairSkvDdbTableResponseBodyTablesTableGlobalSecondaryIndexListGlobalSecondaryIndex extends $dara.Model {
  /**
   * @example
   * tt-gsi-xxxxxxxxx
   */
  gsiId?: string;
  /**
   * @example
   * indexKey1
   */
  indexName?: string;
  static names(): { [key: string]: string } {
    return {
      gsiId: 'GsiId',
      indexName: 'IndexName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gsiId: 'string',
      indexName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTairSkvDdbTableResponseBodyTablesTableGlobalSecondaryIndexList extends $dara.Model {
  globalSecondaryIndex?: DescribeTairSkvDdbTableResponseBodyTablesTableGlobalSecondaryIndexListGlobalSecondaryIndex[];
  static names(): { [key: string]: string } {
    return {
      globalSecondaryIndex: 'GlobalSecondaryIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalSecondaryIndex: { 'type': 'array', 'itemType': DescribeTairSkvDdbTableResponseBodyTablesTableGlobalSecondaryIndexListGlobalSecondaryIndex },
    };
  }

  validate() {
    if(Array.isArray(this.globalSecondaryIndex)) {
      $dara.Model.validateArray(this.globalSecondaryIndex);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTairSkvDdbTableResponseBodyTablesTable extends $dara.Model {
  bandwidth?: number;
  connections?: number;
  globalSecondaryIndexList?: DescribeTairSkvDdbTableResponseBodyTablesTableGlobalSecondaryIndexList;
  tableId?: string;
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      connections: 'Connections',
      globalSecondaryIndexList: 'GlobalSecondaryIndexList',
      tableId: 'TableId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      connections: 'number',
      globalSecondaryIndexList: DescribeTairSkvDdbTableResponseBodyTablesTableGlobalSecondaryIndexList,
      tableId: 'string',
      tableName: 'string',
    };
  }

  validate() {
    if(this.globalSecondaryIndexList && typeof (this.globalSecondaryIndexList as any).validate === 'function') {
      (this.globalSecondaryIndexList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTairSkvDdbTableResponseBodyTables extends $dara.Model {
  table?: DescribeTairSkvDdbTableResponseBodyTablesTable[];
  static names(): { [key: string]: string } {
    return {
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      table: { 'type': 'array', 'itemType': DescribeTairSkvDdbTableResponseBodyTablesTable },
    };
  }

  validate() {
    if(Array.isArray(this.table)) {
      $dara.Model.validateArray(this.table);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTairSkvDdbTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
   * 
   * @example
   * 2363CEDF-C697-14B6-AB9E-C57A4AA0EAD4
   */
  requestId?: string;
  tables?: DescribeTairSkvDdbTableResponseBodyTables;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tables: DescribeTairSkvDdbTableResponseBodyTables,
    };
  }

  validate() {
    if(this.tables && typeof (this.tables as any).validate === 'function') {
      (this.tables as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

