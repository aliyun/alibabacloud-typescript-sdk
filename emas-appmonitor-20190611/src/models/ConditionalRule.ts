// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventFilter } from "./EventFilter";


export class ConditionalRule extends $dara.Model {
  filter?: EventFilter;
  /**
   * @example
   * 1205-02-01 12:00:00
   */
  modifyTime?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * user
   */
  operator?: string;
  /**
   * @example
   * 1
   */
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

