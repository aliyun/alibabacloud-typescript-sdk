// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTaskResponseBodyCreateResultListContact } from "./CreateTaskResponseBodyCreateResultListContact";


export class CreateTaskResponseBodyCreateResultList extends $dara.Model {
  contact?: CreateTaskResponseBodyCreateResultListContact[];
  static names(): { [key: string]: string } {
    return {
      contact: 'Contact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: { 'type': 'array', 'itemType': CreateTaskResponseBodyCreateResultListContact },
    };
  }

  validate() {
    if(Array.isArray(this.contact)) {
      $dara.Model.validateArray(this.contact);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

