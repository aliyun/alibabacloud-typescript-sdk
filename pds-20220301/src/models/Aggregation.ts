// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AggregationsGroup } from "./AggregationsGroup";


export class Aggregation extends $dara.Model {
  field?: Buffer;
  groups?: AggregationsGroup[];
  operation?: Buffer;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      field: 'field',
      groups: 'groups',
      operation: 'operation',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'Buffer',
      groups: { 'type': 'array', 'itemType': AggregationsGroup },
      operation: 'Buffer',
      value: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

