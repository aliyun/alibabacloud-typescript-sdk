// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Library } from "./Library";


export class LibraryListResult extends $dara.Model {
  librarys?: Library[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      librarys: 'librarys',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      librarys: { 'type': 'array', 'itemType': Library },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.librarys)) {
      $dara.Model.validateArray(this.librarys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

