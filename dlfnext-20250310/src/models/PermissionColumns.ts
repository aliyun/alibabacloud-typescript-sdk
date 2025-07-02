// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class PermissionColumns extends $dara.Model {
  columnNames?: string[];
  excludedColumnNames?: string[];
  static names(): { [key: string]: string } {
    return {
      columnNames: 'columnNames',
      excludedColumnNames: 'excludedColumnNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnNames: { 'type': 'array', 'itemType': 'string' },
      excludedColumnNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.columnNames)) {
      $dara.Model.validateArray(this.columnNames);
    }
    if(Array.isArray(this.excludedColumnNames)) {
      $dara.Model.validateArray(this.excludedColumnNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

