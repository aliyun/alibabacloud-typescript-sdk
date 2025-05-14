// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEventRequestRecurrencePattern } from "./CreateEventRequestRecurrencePattern";
import { CreateEventRequestRecurrenceRange } from "./CreateEventRequestRecurrenceRange";


export class CreateEventRequestRecurrence extends $dara.Model {
  pattern?: CreateEventRequestRecurrencePattern;
  range?: CreateEventRequestRecurrenceRange;
  static names(): { [key: string]: string } {
    return {
      pattern: 'pattern',
      range: 'range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pattern: CreateEventRequestRecurrencePattern,
      range: CreateEventRequestRecurrenceRange,
    };
  }

  validate() {
    if(this.pattern && typeof (this.pattern as any).validate === 'function') {
      (this.pattern as any).validate();
    }
    if(this.range && typeof (this.range as any).validate === 'function') {
      (this.range as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

