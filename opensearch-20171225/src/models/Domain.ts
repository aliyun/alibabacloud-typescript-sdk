// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Domain extends $dara.Model {
  category?: string;
  functions?: { [key: string]: string[] };
  name?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      functions: 'functions',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      functions: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      name: 'string',
    };
  }

  validate() {
    if(this.functions) {
      $dara.Model.validateMap(this.functions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

