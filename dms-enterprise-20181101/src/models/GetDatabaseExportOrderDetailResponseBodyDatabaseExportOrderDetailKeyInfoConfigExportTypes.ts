// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigExportTypes extends $dara.Model {
  exportTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      exportTypes: 'ExportTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.exportTypes)) {
      $dara.Model.validateArray(this.exportTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

