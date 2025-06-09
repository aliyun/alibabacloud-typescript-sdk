// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EventFilter extends $dara.Model {
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  op?: string;
  subFilters?: EventFilter[];
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      op: 'Op',
      subFilters: 'SubFilters',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      op: 'string',
      subFilters: { 'type': 'array', 'itemType': EventFilter },
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.subFilters)) {
      $dara.Model.validateArray(this.subFilters);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

