// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SlsNamedQueryEntry extends $dara.Model {
  end?: number;
  expr?: string;
  start?: number;
  timeUnit?: string;
  window?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'end',
      expr: 'expr',
      start: 'start',
      timeUnit: 'timeUnit',
      window: 'window',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      expr: 'string',
      start: 'number',
      timeUnit: 'string',
      window: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

