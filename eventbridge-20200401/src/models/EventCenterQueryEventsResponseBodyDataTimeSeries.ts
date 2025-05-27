// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventCenterQueryEventsResponseBodyDataTimeSeries extends $dara.Model {
  /**
   * @example
   * {
   *   "id":"xxx",
   *   "source":"acs.ecs"
   * }
   */
  rowData?: { [key: string]: any };
  /**
   * @example
   * 1683561600000
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      rowData: 'RowData',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rowData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      time: 'string',
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

