// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB } from "./DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDb";


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

