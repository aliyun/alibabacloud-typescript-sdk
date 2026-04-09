// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BoundToolApi extends $dara.Model {
  method?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      method: 'method',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

