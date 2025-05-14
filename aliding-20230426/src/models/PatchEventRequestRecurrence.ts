// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PatchEventRequestRecurrencePattern } from "./PatchEventRequestRecurrencePattern";
import { PatchEventRequestRecurrenceRange } from "./PatchEventRequestRecurrenceRange";


export class PatchEventRequestRecurrence extends $dara.Model {
  pattern?: PatchEventRequestRecurrencePattern;
  range?: PatchEventRequestRecurrenceRange;
  static names(): { [key: string]: string } {
    return {
      pattern: 'pattern',
      range: 'range',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pattern: PatchEventRequestRecurrencePattern,
      range: PatchEventRequestRecurrenceRange,
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

