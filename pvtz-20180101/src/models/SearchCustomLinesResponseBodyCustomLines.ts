// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchCustomLinesResponseBodyCustomLinesCustomLine } from "./SearchCustomLinesResponseBodyCustomLinesCustomLine";


export class SearchCustomLinesResponseBodyCustomLines extends $dara.Model {
  customLine?: SearchCustomLinesResponseBodyCustomLinesCustomLine[];
  static names(): { [key: string]: string } {
    return {
      customLine: 'CustomLine',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLine: { 'type': 'array', 'itemType': SearchCustomLinesResponseBodyCustomLinesCustomLine },
    };
  }

  validate() {
    if(Array.isArray(this.customLine)) {
      $dara.Model.validateArray(this.customLine);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

