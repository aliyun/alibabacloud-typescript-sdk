// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEventsResponseBodyEventsRecurrencePattern } from "./ListEventsResponseBodyEventsRecurrencePattern";
import { ListEventsResponseBodyEventsRecurrenceRange } from "./ListEventsResponseBodyEventsRecurrenceRange";


export class ListEventsResponseBodyEventsRecurrence extends $dara.Model {
  pattern?: ListEventsResponseBodyEventsRecurrencePattern;
  range?: ListEventsResponseBodyEventsRecurrenceRange;
  static names(): { [key: string]: string } {
    return {
      pattern: 'Pattern',
      range: 'Range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pattern: ListEventsResponseBodyEventsRecurrencePattern,
      range: ListEventsResponseBodyEventsRecurrenceRange,
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

