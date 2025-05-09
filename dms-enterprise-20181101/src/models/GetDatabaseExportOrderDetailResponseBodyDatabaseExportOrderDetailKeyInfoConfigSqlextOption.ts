// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatabaseExportOrderDetailResponseBodyDatabaseExportOrderDetailKeyInfoConfigSQLExtOption extends $dara.Model {
  SQLExtOption?: string[];
  static names(): { [key: string]: string } {
    return {
      SQLExtOption: 'SQLExtOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SQLExtOption: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.SQLExtOption)) {
      $dara.Model.validateArray(this.SQLExtOption);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

