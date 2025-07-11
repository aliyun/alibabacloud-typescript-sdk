// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageSummaryComparedResponseBodyData extends $dara.Model {
  /**
   * @example
   * 20250601
   */
  beginDate?: string;
  /**
   * @example
   * 20250604
   */
  endDate?: string;
  rate?: { [key: string]: number };
  unit?: { [key: string]: string };
  value?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      beginDate: 'beginDate',
      endDate: 'endDate',
      rate: 'rate',
      unit: 'unit',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginDate: 'string',
      endDate: 'string',
      rate: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      unit: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      value: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.rate) {
      $dara.Model.validateMap(this.rate);
    }
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

