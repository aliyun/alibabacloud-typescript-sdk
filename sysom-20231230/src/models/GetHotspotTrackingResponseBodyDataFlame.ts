// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotspotTrackingResponseBodyDataFlame extends $dara.Model {
  columns?: string[];
  values?: string[][];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
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

