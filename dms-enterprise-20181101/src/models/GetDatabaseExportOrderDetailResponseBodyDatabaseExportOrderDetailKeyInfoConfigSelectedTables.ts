// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigSelectedTables extends $dara.Model {
  selectedTables?: string[];
  static names(): { [key: string]: string } {
    return {
      selectedTables: 'SelectedTables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      selectedTables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.selectedTables)) {
      $dara.Model.validateArray(this.selectedTables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

