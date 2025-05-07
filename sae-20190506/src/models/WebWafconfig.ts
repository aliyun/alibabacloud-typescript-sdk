// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebWAFConfig extends $dara.Model {
  enableWAF?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableWAF: 'EnableWAF',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableWAF: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

