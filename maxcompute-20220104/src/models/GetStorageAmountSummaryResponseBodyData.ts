// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageAmountSummaryResponseBodyData extends $dara.Model {
  /**
   * @example
   * 20241205
   */
  date?: string;
  /**
   * @example
   * -
   */
  timestamp?: number;
  unit?: { [key: string]: string };
  value?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      date: 'date',
      timestamp: 'timestamp',
      unit: 'unit',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      timestamp: 'number',
      unit: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      value: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.unit) {
      $dara.Model.validateMap(this.unit);
    }
    if(this.value) {
      $dara.Model.validateMap(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

