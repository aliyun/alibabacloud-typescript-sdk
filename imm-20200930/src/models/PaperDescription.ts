// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Summary } from "./Summary";


export class PaperDescription extends $dara.Model {
  description?: Summary[];
  titleID?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      titleID: 'TitleID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: { 'type': 'array', 'itemType': Summary },
      titleID: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.description)) {
      $dara.Model.validateArray(this.description);
    }
    if(Array.isArray(this.titleID)) {
      $dara.Model.validateArray(this.titleID);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

