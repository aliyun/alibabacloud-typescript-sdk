// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventFilter } from "./EventFilter";


export class ConditionalRule extends $dara.Model {
  filter?: EventFilter;
  modifyTime?: string;
  name?: string;
  operator?: string;
  sampleRate?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      modifyTime: 'ModifyTime',
      name: 'Name',
      operator: 'Operator',
      sampleRate: 'SampleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: EventFilter,
      modifyTime: 'string',
      name: 'string',
      operator: 'string',
      sampleRate: 'number',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

