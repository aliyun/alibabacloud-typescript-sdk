// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB extends $dara.Model {
  importDataStatus?: string;
  importDataStatusDescription?: string;
  importDataType?: string;
  importId?: number;
  incrementalImportingTime?: string;
  static names(): { [key: string]: string } {
    return {
      importDataStatus: 'ImportDataStatus',
      importDataStatusDescription: 'ImportDataStatusDescription',
      importDataType: 'ImportDataType',
      importId: 'ImportId',
      incrementalImportingTime: 'IncrementalImportingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importDataStatus: 'string',
      importDataStatusDescription: 'string',
      importDataType: 'string',
      importId: 'number',
      incrementalImportingTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescibeImportsFromDatabaseResponseBodyItems extends $dara.Model {
  importResultFromDB?: DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB[];
  static names(): { [key: string]: string } {
    return {
      importResultFromDB: 'ImportResultFromDB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importResultFromDB: { 'type': 'array', 'itemType': DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB },
    };
  }

  validate() {
    if(Array.isArray(this.importResultFromDB)) {
      $dara.Model.validateArray(this.importResultFromDB);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescibeImportsFromDatabaseResponseBody extends $dara.Model {
  items?: DescibeImportsFromDatabaseResponseBodyItems;
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescibeImportsFromDatabaseResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
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

