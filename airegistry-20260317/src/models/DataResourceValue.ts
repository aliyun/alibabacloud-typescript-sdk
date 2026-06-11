// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataResourceValue extends $dara.Model {
  name?: string;
  type?: string;
  content?: string;
  metadata?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      content: 'Content',
      metadata: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      content: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

