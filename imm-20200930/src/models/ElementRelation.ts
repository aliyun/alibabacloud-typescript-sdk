// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ElementRelation extends $dara.Model {
  objectId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      objectId: 'ObjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

