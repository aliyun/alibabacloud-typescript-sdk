// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventCenterQueryEventsResponseBodyDataTable extends $dara.Model {
  /**
   * @example
   * {
   *   "id":"xxx",
   *   "source":"acs.ecs"
   * }
   */
  rowData?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      rowData: 'RowData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.rowData) {
      $dara.Model.validateMap(this.rowData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

