// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentParseNarratorOption extends $dara.Model {
  narrate?: boolean;
  static names(): { [key: string]: string } {
    return {
      narrate: 'Narrate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      narrate: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

