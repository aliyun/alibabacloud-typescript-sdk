// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCrossBackupMetaListResponseBodyItemsMeta extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * testdb1
   */
  database?: string;
  /**
   * @remarks
   * The size of the table. Unit: KB. If the database contains more than one table, the names of these tables are separated by commas (,).
   * 
   * @example
   * 1000
   */
  size?: string;
  /**
   * @remarks
   * An array that consists of the names of the tables that the database contains. If the database contains more than one table, the names of these tables are separated by commas (,).
   * 
   * @example
   * test1,test2
   */
  tables?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      size: 'Size',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      size: 'string',
      tables: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossBackupMetaListResponseBodyItems extends $dara.Model {
  meta?: DescribeCrossBackupMetaListResponseBodyItemsMeta[];
  static names(): { [key: string]: string } {
    return {
      meta: 'Meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'array', 'itemType': DescribeCrossBackupMetaListResponseBodyItemsMeta },
    };
  }

  validate() {
    if(Array.isArray(this.meta)) {
      $dara.Model.validateArray(this.meta);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCrossBackupMetaListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance to which the cross-region backup file belongs.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * An array that consists of the information about the databases and tables whose data is included in the cross-region backup file.
   */
  items?: DescribeCrossBackupMetaListResponseBodyItems;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 60F9A12A-16B8-4728-B099-4CA38D32C31C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPageCount?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalPageCount: 'TotalPageCount',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      items: DescribeCrossBackupMetaListResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalPageCount: 'number',
      totalRecordCount: 'number',
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

